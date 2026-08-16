/**
 * ATTENDANCE JS
 */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const allAttendance = getAttendance();
  let currentDate = '2026-08-15';
  let currentPeriod = 'today';

  function getFilteredRecords(period, date) {
    const today = new Date('2026-08-15');
    return allAttendance.filter(r => {
      if (period === 'today')     return r.date === '2026-08-15';
      if (period === 'yesterday') return r.date === '2026-08-14';
      if (period === 'week') {
        const d = new Date(r.date);
        const weekAgo = new Date(today); weekAgo.setDate(today.getDate() - 7);
        return d >= weekAgo && d <= today;
      }
      if (period === 'month') {
        const d = new Date(r.date);
        return d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
      }
      if (period === 'custom') return r.date === date;
      return true;
    });
  }

  function renderAttendance(records) {
    const tbody = document.getElementById('attendance-tbody');
    const totalEl = document.getElementById('att-total');
    const presentEl = document.getElementById('att-present');
    const pctEl = document.getElementById('att-pct');
    const peakEl = document.getElementById('att-peak');

    if (!tbody) return;

    const allMembers = getMembers().filter(m => m.status !== 'Expired');
    const totalMembers = allMembers.length;
    const presentCount = records.length;
    const pct = totalMembers > 0 ? Math.round((presentCount / totalMembers) * 100) : 0;

    if (totalEl)   totalEl.textContent = totalMembers;
    if (presentEl) presentEl.textContent = presentCount;
    if (pctEl)     pctEl.textContent = pct + '%';

    // Peak hour calculation
    const hours = records.map(r => parseInt(r.checkIn.split(':')[0]));
    const hourCounts = {};
    hours.forEach(h => hourCounts[h] = (hourCounts[h] || 0) + 1);
    const peakHour = Object.keys(hourCounts).reduce((a, b) => hourCounts[a] > hourCounts[b] ? a : b, Object.keys(hourCounts)[0]);
    if (peakEl) peakEl.textContent = peakHour ? `${peakHour}:00` : '—';

    if (records.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><span class="empty-state-icon">📅</span><h3>No Records Found</h3><p>No attendance records for this period.</p></div></td></tr>`;
      return;
    }

    const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date) || a.checkIn.localeCompare(b.checkIn));
    tbody.innerHTML = sorted.map(r => `
      <tr>
        <td style="font-size:var(--font-xs); color:var(--text-muted); font-family:monospace;">${r.memberId}</td>
        <td>
          <div class="member-cell">
            <div class="member-avatar" aria-hidden="true">${getInitials(r.memberName)}</div>
            <span style="font-weight:600; color:var(--text-primary);">${r.memberName}</span>
          </div>
        </td>
        <td>${formatDate(r.date)}</td>
        <td style="font-weight:600; color:var(--accent);">${r.checkIn}</td>
        <td>${r.checkOut || '—'}</td>
        <td><span class="badge badge-success">Present</span></td>
      </tr>
    `).join('');
  }

  function setPeriod(period, btn) {
    currentPeriod = period;
    document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
    btn?.classList.add('active');
    const customRow = document.getElementById('custom-date-row');
    if (customRow) customRow.style.display = period === 'custom' ? 'block' : 'none';
    renderAttendance(getFilteredRecords(period, currentDate));

    // Render chart
    const svg = document.getElementById('att-chart');
    if (svg) {
      const d = getWeeklyAttendanceData();
      drawBarChart(svg, d.values, d.days, { width: svg.parentElement.offsetWidth || 500 });
    }
  }

  // Bind period buttons
  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', function() { setPeriod(this.dataset.period, this); });
  });

  document.getElementById('custom-date-input')?.addEventListener('change', function() {
    currentDate = this.value;
    renderAttendance(getFilteredRecords('custom', currentDate));
  });

  // Search
  document.getElementById('att-search')?.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    const records = getFilteredRecords(currentPeriod, currentDate);
    const filtered = q ? records.filter(r => r.memberName.toLowerCase().includes(q) || r.memberId.toLowerCase().includes(q)) : records;
    renderAttendance(filtered);
  });

  // Initial render
  setPeriod('today', document.querySelector('.period-btn[data-period="today"]'));
  setTimeout(() => {
    const svg = document.getElementById('att-chart');
    if (svg) {
      const d = getWeeklyAttendanceData();
      drawBarChart(svg, d.values, d.days, { width: svg.parentElement.offsetWidth || 500 });
    }
  }, 150);
});
