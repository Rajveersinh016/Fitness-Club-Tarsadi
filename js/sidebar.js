/* ============================================================
   SHARED SIDEBAR LOADER (J3 FITNESS STUDIO Admin System)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  const currentPath = window.location.pathname;

  const navGroups = [
    {
      title: 'MAIN',
      items: [
        { label: 'Dashboard', href: 'dashboard.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>' }
      ]
    },
    {
      title: 'MEMBERS',
      items: [
        { label: 'Members', href: 'members.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
        { label: 'Attendance', href: 'attendance.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>' }
      ]
    },
    {
      title: 'FINANCE',
      items: [
        { label: 'Fees', href: 'fees.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>' },
        { label: 'Payments', href: 'payments.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>' },
        { label: 'Receipts', href: 'receipts.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>' }
      ]
    },
    {
      title: 'REPORTING',
      items: [
        { label: 'Reports', href: 'reports.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' }
      ]
    },
    {
      title: 'COMMUNICATION',
      items: [
        { label: 'Inquiries', href: 'inquiries.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { label: 'Settings', href: 'settings.html', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>' }
      ]
    }
  ];

  let html = `
    <div class="sidebar-header">
      <a href="../index.html" class="sidebar-logo">
        <div class="sidebar-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
        </div>
        <div>
          <div class="sidebar-logo-text">J3 FITNESS</div>
          <div class="sidebar-logo-sub">STUDIO</div>
        </div>
      </a>
      <button class="sidebar-close" id="sidebar-close-btn" aria-label="Close sidebar">✕</button>
    </div>

    <div class="sidebar-nav">
  `;

  navGroups.forEach(group => {
    html += `<div class="sidebar-section-label">${group.title}</div>`;
    group.items.forEach(item => {
      const isActive = currentPath.endsWith(item.href);
      html += `
        <a href="${item.href}" class="sidebar-item ${isActive ? 'active' : ''}">
          <span class="sidebar-item-icon">${item.icon}</span>
          <span>${item.label}</span>
        </a>
      `;
    });
  });

  html += `
    </div>
    <div class="sidebar-footer">
      <a href="../index.html" class="sidebar-item">
        <span class="sidebar-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
        <span>View Public Website</span>
      </a>
      <button onclick="adminLogout()" class="sidebar-item" style="width:100%; justify-content:flex-start; color:#DC2626;">
        <span class="sidebar-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></span>
        <span>Logout</span>
      </button>
    </div>
  `;

  container.innerHTML = html;
});

window.adminLogout = function() {
  if (confirm('Are you sure you want to logout?')) {
    if (typeof logout === 'function') {
      logout();
    } else {
      sessionStorage.removeItem('gym_admin_auth');
      window.location.href = 'login.html';
    }
  }
};

