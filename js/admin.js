/**
 * ADMIN LAYOUT — Sidebar toggle, auth guard, active link, ESC key support
 */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // Auth guard
  if (typeof isAuthenticated !== 'undefined' && !isAuthenticated()) {
    window.location.href = 'login.html';
    return;
  }

  // Active sidebar link — highlight current page
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-item').forEach(item => {
    const href = item.getAttribute('href') || '';
    if (href && href.includes(currentPage)) {
      item.classList.add('active');
    }
  });

  // Mobile sidebar elements
  const menuBtn  = document.getElementById('topbar-menu-btn');
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const closeBtn = document.getElementById('sidebar-close');

  function isMobile() {
    return window.innerWidth <= 1024;
  }

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('mobile-open');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
    menuBtn?.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    overlay?.classList.remove('show');
    // Only restore body scroll if no modal is open
    if (!document.querySelector('.modal-backdrop.open')) {
      document.body.style.overflow = '';
    }
    menuBtn?.setAttribute('aria-expanded', 'false');
  }

  // Hamburger toggle
  menuBtn?.addEventListener('click', function() {
    if (sidebar?.classList.contains('mobile-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Overlay click to close
  overlay?.addEventListener('click', closeSidebar);

  // Close button in sidebar header
  closeBtn?.addEventListener('click', closeSidebar);

  // ESC key closes sidebar
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (sidebar?.classList.contains('mobile-open')) {
        closeSidebar();
      }
    }
  });

  // Close sidebar on nav-item click on mobile (for same-page or anchor navigation)
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
      if (isMobile()) {
        setTimeout(closeSidebar, 80);
      }
    });
  });

  // Close sidebar on viewport resize to desktop
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      closeSidebar();
    }
  });

  // Logout
  document.querySelectorAll('[data-logout]').forEach(btn => {
    btn.addEventListener('click', function() {
      if (confirm('Are you sure you want to logout?')) {
        if (typeof logout === 'function') logout();
        else {
          sessionStorage.removeItem('gym_admin_auth');
          window.location.href = 'login.html';
        }
      }
    });
  });

  // Global search focus shortcut (/)
  document.addEventListener('keydown', function(e) {
    if (e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      document.getElementById('global-search')?.focus();
    }
  });

  // Update page title and subtitle in topbar (if dynamically set)
  const titleEl    = document.getElementById('topbar-title');
  const subtitleEl = document.getElementById('topbar-subtitle');
  if (titleEl && window.PAGE_TITLE)       titleEl.textContent = window.PAGE_TITLE;
  if (subtitleEl && window.PAGE_SUBTITLE) subtitleEl.textContent = window.PAGE_SUBTITLE;
});
