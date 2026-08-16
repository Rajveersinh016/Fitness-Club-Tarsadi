/**
 * MEMBERS JS — Table, Search, Filter, Pagination, CRUD
 */
'use strict';

// ── State ──────────────────────────────────────────────────
let allMembers    = [];
let filteredData  = [];
let paginator     = null;
const PAGE_SIZE   = 10;
let sortField     = null;
let sortDir       = 'asc';

document.addEventListener('DOMContentLoaded', function() {
  allMembers   = getMembers();
  filteredData = [...allMembers];

  // Check URL params
  const params = new URLSearchParams(window.location.search);
  const searchQ  = params.get('search')  || '';
  const filterQ  = params.get('filter')  || 'all';
  const actionQ  = params.get('action')  || '';

  if (searchQ) {
    const searchEl = document.getElementById('member-search');
    if (searchEl) { searchEl.value = searchQ; }
    applyFilter(filterQ, searchQ);
  } else {
    applyFilter(filterQ, '');
  }

  if (actionQ === 'add') {
    setTimeout(() => openModal('add-member-modal'), 300);
  }

  // Event listeners
  document.getElementById('member-search')?.addEventListener('input', debounce(function() {
    applyFilter(getActiveFilter(), this.value);
  }, 200));

  document.getElementById('status-filter')?.addEventListener('change', function() {
    applyFilter(this.value, document.getElementById('member-search')?.value || '');
  });

  document.getElementById('membership-filter')?.addEventListener('change', function() {
    applyFilter(getActiveFilter(), document.getElementById('member-search')?.value || '');
  });

  // Add Member form
  document.getElementById('add-member-form')?.addEventListener('submit', handleAddMember);

  // Render
  renderTable();
  updateStats();
});

function debounce(fn, delay) {
  let t;
  return function(...args) { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), delay); };
}

function getActiveFilter() {
  return document.getElementById('status-filter')?.value || 'all';
}

function applyFilter(status, search) {
  const membershipFilter = document.getElementById('membership-filter')?.value || 'all';
  const q = (search || '').toLowerCase().trim();

  filteredData = allMembers.filter(m => {
    const matchStatus     = status === 'all' || m.status.toLowerCase() === status ||
                            (status === 'expiring' && getDaysUntilExpiry(m.expiryDate) <= 30 && getDaysUntilExpiry(m.expiryDate) >= 0) ||
                            (status === 'pending'  && m.feeStatus === 'Pending') ||
                            (status === 'overdue'  && m.feeStatus === 'Overdue') ||
                            (status === 'irregular' && m.status === 'Irregular');
    const matchMembership = membershipFilter === 'all' || m.membership === membershipFilter;
    const matchSearch     = !q || m.name.toLowerCase().includes(q) ||
                            m.id.toLowerCase().includes(q) ||
                            m.phone.includes(q);
    return matchStatus && matchMembership && matchSearch;
  });

  if (sortField) applySorting();
  if (paginator) { paginator.reset(); }
  renderTable();
  updateStats();
}

function applySorting() {
  filteredData.sort((a, b) => {
    let va = a[sortField] || '', vb = b[sortField] || '';
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    return sortDir === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
  });
}

function renderTable() {
  const tbody  = document.getElementById('members-tbody');
  const pagEl  = document.getElementById('pagination');
  const infoEl = document.getElementById('pagination-info');
  if (!tbody) return;

  if (filteredData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10">
      <div class="empty-state">
        <span class="empty-state-icon" aria-hidden="true">👥</span>
        <h3>No Members Found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    </td></tr>`;
    if (infoEl) infoEl.textContent = 'Showing 0 of 0';
    if (pagEl)  pagEl.innerHTML = '';
    return;
  }

  paginator = window.createPaginator(filteredData, PAGE_SIZE, (pageData, info) => {
    tbody.innerHTML = pageData.map(renderMemberRow).join('');
    if (infoEl) infoEl.textContent = `Showing ${info.start}–${info.end} of ${info.total} members`;
    renderPagination(info, pagEl);
    bindRowActions();
  });

  paginator.setPage(1);
}

function renderMemberRow(m) {
  const att     = getAttendanceStats(m.id);
  const days    = getDaysUntilExpiry(m.expiryDate);
  const expCls  = days !== null && days <= 7 ? 'danger' : days <= 30 ? 'warning' : 'success';
  const feeCls  = m.feeStatus === 'Paid' ? 'success' : m.feeStatus === 'Overdue' ? 'danger' : 'warning';
  const statCls = m.status === 'Active' ? 'success' : m.status === 'Expired' ? 'danger' : 'warning';

  return `
    <tr>
      <td><span style="font-family:monospace; font-size:var(--font-xs); color:var(--text-muted);">${m.id}</span></td>
      <td>
        <div class="member-cell">
          <div class="member-avatar" aria-hidden="true">${getInitials(m.name)}</div>
          <div>
            <div class="member-name">${m.name}</div>
            <div style="font-size:var(--font-xs); color:var(--text-muted);">${m.gender} · ${m.age}yr</div>
          </div>
        </div>
      </td>
      <td style="font-size:var(--font-sm);">${m.phone}</td>
      <td><span class="badge badge-neutral">${m.membership}</span></td>
      <td style="font-size:var(--font-sm); color:var(--text-secondary);">${formatDate(m.joinDate)}</td>
      <td>
        <span class="badge badge-${expCls}">${formatDate(m.expiryDate)}</span>
        ${days !== null && days >= 0 && days <= 30 ? `<div style="font-size:10px; color:var(--warning); margin-top:2px;">${days}d left</div>` : ''}
      </td>
      <td><span class="badge badge-${feeCls}">${m.feeStatus}</span></td>
      <td>
        <div style="display:flex; align-items:center; gap:var(--space-2);">
          <div class="att-bar" style="width:60px; margin:0;">
            <div class="att-bar-fill" style="background:${att.percentage < 50 ? 'var(--danger)' : 'var(--accent)'}; width:${att.percentage}%;"></div>
          </div>
          <span style="font-size:var(--font-xs); font-weight:600;">${att.percentage}%</span>
        </div>
      </td>
      <td><span class="badge badge-${statCls}">${m.status}</span></td>
      <td>
        <div class="table-actions">
          <a href="member-profile.html?id=${m.id}" class="action-btn view"    title="View Profile"      aria-label="View ${m.name}">👁</a>
          <button                                   class="action-btn edit"    title="Edit Member"       data-edit="${m.id}" aria-label="Edit ${m.name}">✏️</button>
          <button                                   class="action-btn payment" title="Record Payment"    data-payment="${m.id}" aria-label="Record payment for ${m.name}">💳</button>
          <a href="receipts.html?member=${m.id}"    class="action-btn"        title="View Receipts"     aria-label="Receipts for ${m.name}">🧾</a>
          <button                                   class="action-btn whatsapp" title="WhatsApp"          data-wa="${m.id}" aria-label="WhatsApp ${m.name}">💬</button>
        </div>
      </td>
    </tr>
  `;
}

function renderPagination(info, el) {
  if (!el) return;
  const pages = [];
  for (let i = 1; i <= info.totalPages; i++) pages.push(i);
  el.innerHTML = `
    <button class="page-btn" onclick="paginator.prev()" ${info.page === 1 ? 'disabled' : ''} aria-label="Previous page">‹</button>
    ${pages.map(p => `<button class="page-btn ${p === info.page ? 'active' : ''}" onclick="paginator.setPage(${p})" aria-label="Page ${p}" aria-current="${p === info.page ? 'page' : 'false'}">${p}</button>`).join('')}
    <button class="page-btn" onclick="paginator.next()" ${info.page === info.totalPages ? 'disabled' : ''} aria-label="Next page">›</button>
  `;
}

function updateStats() {
  const members = getMembers();
  const active   = members.filter(m => m.status === 'Active').length;
  const expired  = members.filter(m => m.status === 'Expired').length;
  const irregular = members.filter(m => m.status === 'Irregular').length;
  const expiring = getExpiringMembers(30).length;

  setText('stat-total',    members.length);
  setText('stat-active',   active);
  setText('stat-expired',  expired);
  setText('stat-irregular',irregular);
  setText('stat-expiring', expiring);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function bindRowActions() {
  document.querySelectorAll('[data-wa]').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof window.openWAModal === 'function') openWAModal(this.dataset.wa);
    });
  });

  document.querySelectorAll('[data-payment]').forEach(btn => {
    btn.addEventListener('click', function() {
      openPaymentModal(this.dataset.payment);
    });
  });
}

function openPaymentModal(memberId) {
  const member = getMemberById(memberId);
  if (!member) return;
  const el = document.getElementById('payment-member-select');
  if (el) {
    Array.from(el.options).forEach(o => { o.selected = o.value === memberId; });
  }
  const nameEl = document.getElementById('payment-member-name');
  if (nameEl) nameEl.textContent = member.name;
  openModal('payment-modal');
}

function handleAddMember(e) {
  e.preventDefault();
  const name  = document.getElementById('add-name')?.value.trim();
  const phone = document.getElementById('add-phone')?.value.trim();
  const plan  = document.getElementById('add-plan')?.value;
  const email = document.getElementById('add-email')?.value.trim();

  if (!name || !phone || !plan) {
    showToast('Please fill in all required fields.', 'danger', 'Validation Error');
    return;
  }

  const members = getMembers();
  const newId   = 'GYM' + String(members.length + 1).padStart(3, '0');
  const today   = new Date('2026-08-15');
  const durations = { Monthly: 1, Quarterly: 3, 'Half-Yearly': 6, Annual: 12 };
  const expiry  = new Date(today);
  expiry.setMonth(expiry.getMonth() + (durations[plan] || 1));

  const newMember = {
    id: newId, name, phone, email: email || '',
    membership: plan, joinDate: today.toISOString().split('T')[0],
    expiryDate: expiry.toISOString().split('T')[0],
    feeStatus: 'Pending', status: 'Active', gender: 'Other', age: 0,
    emergencyContact: '', bloodGroup: '', address: '',
  };

  members.push(newMember);
  saveMembers(members);
  allMembers = members;

  closeModal('add-member-modal');
  document.getElementById('add-member-form')?.reset();
  applyFilter(getActiveFilter(), '');
  showToast(`${name} added successfully as ${newId}.`, 'success', 'Member Added');
}

window.openWAModal = function(memberId) {
  const members  = getMembers();
  const payments = getPayments();
  const member   = members.find(m => m.id === memberId);
  if (!member) return;
  const payment  = payments.find(p => p.memberId === memberId && (p.status === 'Pending' || p.status === 'Overdue'));
  const amount   = payment ? formatCurrency(payment.amount) : '₹XXXX';
  const due      = payment ? formatDate(payment.dueDate) : 'As per plan';
  const message  = `Hello ${member.name},\n\nYour gym membership fee of ${amount} is currently *${payment?.status || 'Pending'}*.\n\n📅 Due Date: ${due}\n🏋️ Plan: ${member.membership}\n\nPlease complete your payment at your earliest convenience.\n\nThank you.\n— Fitness Club Tarsadi`;

  const nameEl   = document.getElementById('wa-member-name');
  const phoneEl  = document.getElementById('wa-member-phone');
  const msgEl    = document.getElementById('wa-message');
  const sendEl   = document.getElementById('wa-send-btn');

  if (nameEl)  nameEl.textContent  = member.name;
  if (phoneEl) phoneEl.textContent = member.phone;
  if (msgEl)   msgEl.textContent   = message;
  if (sendEl) {
    const waUrl = `https://wa.me/${member.phone}?text=${encodeURIComponent(message)}`;
    sendEl.href = waUrl;
  }
  openModal('whatsapp-modal');
};
