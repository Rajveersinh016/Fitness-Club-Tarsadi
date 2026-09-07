/**
 * MAIN UTILITIES — Toasts, Modals, Animations, Counters
 */
'use strict';

/* ============================================================
   TOAST NOTIFICATION SYSTEM
   ============================================================ */

(function() {
  let container = null;

  function getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  const ICONS = {
    success: '✓',
    warning: '!',
    danger:  '✕',
    info:    'i',
  };

  window.showToast = function(message, type = 'info', title = null, duration = 4000) {
    const c = getContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const defaultTitles = { success: 'Success', warning: 'Warning', danger: 'Error', info: 'Info' };
    const toastTitle = title || defaultTitles[type] || 'Notification';

    toast.innerHTML = `
      <div class="toast-icon">${ICONS[type] || 'i'}</div>
      <div class="toast-body">
        <div class="toast-title">${toastTitle}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close">✕</button>
    `;

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    c.appendChild(toast);

    if (duration > 0) {
      setTimeout(() => removeToast(toast), duration);
    }
    return toast;
  };

  function removeToast(toast) {
    if (toast.classList.contains('removing')) return;
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 280);
  }
})();

/* ============================================================
   MODAL SYSTEM
   ============================================================ */

(function() {
  let activeModals = [];

  window.openModal = function(modalId) {
    const backdrop = document.getElementById(modalId);
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeModals.push(modalId);
    // Focus trap
    setTimeout(() => {
      const focusable = backdrop.querySelector('input, button, select, textarea, [tabindex]');
      if (focusable) focusable.focus();
    }, 100);
  };

  window.closeModal = function(modalId) {
    const backdrop = document.getElementById(modalId);
    if (!backdrop) return;
    backdrop.classList.remove('open');
    activeModals = activeModals.filter(id => id !== modalId);
    if (activeModals.length === 0) document.body.style.overflow = '';
  };

  // Close on backdrop click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      const id = e.target.id;
      if (id) closeModal(id);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeModals.length > 0) {
      closeModal(activeModals[activeModals.length - 1]);
    }
  });

  // Auto-bind close buttons
  document.addEventListener('click', function(e) {
    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      const backdrop = closeBtn.closest('.modal-backdrop');
      if (backdrop) closeModal(backdrop.id);
    }
    const openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      openModal(openBtn.dataset.modalOpen);
    }
  });
})();

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */

(function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function initAnimations() {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();

/* ============================================================
   ANIMATED COUNTER
   ============================================================ */

window.animateCounter = function(element, target, duration = 1500, prefix = '', suffix = '') {
  const isString = typeof target === 'string' && isNaN(target.replace(/[₹,+]/g, ''));
  if (isString) { element.textContent = prefix + target + suffix; return; }

  const numTarget = parseFloat(String(target).replace(/[₹,+]/g, ''));
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
    const current = Math.floor(startVal + (numTarget - startVal) * eased);
    element.textContent = prefix + current.toLocaleString('en-IN') + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = prefix + numTarget.toLocaleString('en-IN') + suffix;
  }
  requestAnimationFrame(update);
};

/* ============================================================
   LOADING STATE HELPERS
   ============================================================ */

window.setButtonLoading = function(btn, loading, originalText) {
  if (loading) {
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = `<span class="btn-spinner">⟳</span> ${originalText || 'Loading...'}`;
    btn.disabled = true;
  } else {
    btn.innerHTML = btn.dataset.originalText || originalText;
    btn.disabled = false;
  }
};

/* ============================================================
   FORM VALIDATION HELPERS
   ============================================================ */

window.validateField = function(input, rule) {
  const errorEl = document.getElementById(input.id + '-error');
  let error = '';

  if (rule.required && !input.value.trim()) {
    error = rule.requiredMsg || 'This field is required.';
  } else if (rule.pattern && input.value && !rule.pattern.test(input.value)) {
    error = rule.patternMsg || 'Invalid format.';
  } else if (rule.minLength && input.value.length < rule.minLength) {
    error = `Minimum ${rule.minLength} characters required.`;
  }

  if (errorEl) errorEl.textContent = error;
  input.style.borderColor = error ? 'var(--danger)' : '';
  return !error;
};

window.validateForm = function(fields) {
  let valid = true;
  fields.forEach(({ input, rules }) => {
    if (!window.validateField(input, rules)) valid = false;
  });
  return valid;
};

/* ============================================================
   TABLE PAGINATION
   ============================================================ */

window.createPaginator = function(data, pageSize, renderFn) {
  let page = 1;
  const totalPages = () => Math.ceil(data.length / pageSize);

  return {
    getData() {
      const start = (page - 1) * pageSize;
      return data.slice(start, start + pageSize);
    },
    getInfo() {
      const start = (page - 1) * pageSize + 1;
      const end = Math.min(page * pageSize, data.length);
      return { page, start, end, total: data.length, totalPages: totalPages() };
    },
    setPage(p) {
      page = Math.max(1, Math.min(p, totalPages()));
      renderFn(this.getData(), this.getInfo());
    },
    next()  { this.setPage(page + 1); },
    prev()  { this.setPage(page - 1); },
    reset() { page = 1; },
  };
};

/* ============================================================
   CSV EXPORT
   ============================================================ */

window.exportCSV = function(headers, rows, filename) {
  const escape = v => {
    const s = String(v === null || v === undefined ? '' : v);
    return s.includes(',') || s.includes('"') || s.includes('\n')
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  };
  const lines = [headers.map(escape).join(',')];
  rows.forEach(row => lines.push(row.map(escape).join(',')));
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'report.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV file downloaded.', 'success', 'Export Complete');
};

/* ============================================================
   DEMO MODE ACTION NOTICES (Section 14, 18, 19, 53)
   ============================================================ */

window.showBiometricModal = function() {
  window.showToast({
    type: 'info',
    title: 'Biometric Integration',
    message: "This feature will be connected after the gym's biometric system and database details are provided."
  });
};

window.sendWhatsAppReminder = function(memberName, amount, phone) {
  const cleanPhone = String(phone || '').replace(/\D/g, '') || '919876543210';
  const msg = encodeURIComponent(`Hello ${memberName},\n\nYour gym membership fee of ₹${amount} is currently pending.\n\nPlease complete your payment at your earliest convenience.\n\nThank you.\n\n— J3 Fitness Studio`);
  window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  window.showToast({
    type: 'info',
    title: 'WhatsApp Link Generated',
    message: 'WhatsApp reminder link generated.'
  });
};

window.sendEmailNotice = function(email, subject, body) {
  const mailtoUrl = `mailto:${email || ''}?subject=${encodeURIComponent(subject || 'Receipt — J3 Fitness Studio')}&body=${encodeURIComponent(body || 'Thank you for your payment.')}`;
  window.open(mailtoUrl, '_blank');
  window.showToast({
    type: 'info',
    title: 'Email Client Opened',
    message: 'Email client opened.'
  });
};

/* ============================================================
   SVG CHART HELPERS
   ============================================================ */

window.drawBarChart = function(svgEl, data, labels, options = {}) {
  const {
    width = svgEl.clientWidth || 600,
    height = 220,
    barColor = '#C8F536',
    labelColor = '#6B6B67',
    gridColor = '#E4E5DF',
    padding = { top: 20, right: 20, bottom: 40, left: 50 },
  } = options;

  svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svgEl.innerHTML = '';

  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...data) || 1;
  const barW   = (chartW / data.length) * 0.6;
  const barGap = chartW / data.length;

  // Grid lines
  [0, 0.25, 0.5, 0.75, 1].forEach(frac => {
    const y = padding.top + chartH * (1 - frac);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', padding.left);
    line.setAttribute('x2', padding.left + chartW);
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', gridColor);
    line.setAttribute('stroke-width', '1');
    svgEl.appendChild(line);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', padding.left - 6);
    text.setAttribute('y', y + 4);
    text.setAttribute('text-anchor', 'end');
    text.setAttribute('fill', labelColor);
    text.setAttribute('font-size', '11');
    text.textContent = Math.round(maxVal * frac);
    svgEl.appendChild(text);
  });

  // Bars
  data.forEach((val, i) => {
    const x = padding.left + i * barGap + (barGap - barW) / 2;
    const barH = (val / maxVal) * chartH;
    const y = padding.top + chartH - barH;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', barW);
    rect.setAttribute('height', barH);
    rect.setAttribute('fill', barColor);
    rect.setAttribute('rx', '4');
    svgEl.appendChild(rect);

    // Label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x + barW / 2);
    text.setAttribute('y', padding.top + chartH + 20);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', labelColor);
    text.setAttribute('font-size', '11');
    text.textContent = labels[i] || '';
    svgEl.appendChild(text);
  });
};

window.drawLineChart = function(svgEl, dataPoints, labels, options = {}) {
  const {
    width = svgEl.clientWidth || 600,
    height = 220,
    lineColor = '#C8F536',
    labelColor = '#6B6B67',
    gridColor = '#E4E5DF',
    padding = { top: 20, right: 20, bottom: 40, left: 50 },
  } = options;

  svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svgEl.innerHTML = '';

  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...dataPoints) || 1;

  // Gradient
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${lineColor}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${lineColor}" stop-opacity="0"/>
  </linearGradient>`;
  svgEl.appendChild(defs);

  // Grid
  [0, 0.25, 0.5, 0.75, 1].forEach(frac => {
    const y = padding.top + chartH * (1 - frac);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', padding.left); line.setAttribute('x2', padding.left + chartW);
    line.setAttribute('y1', y); line.setAttribute('y2', y);
    line.setAttribute('stroke', gridColor); line.setAttribute('stroke-width', '1');
    svgEl.appendChild(line);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', padding.left - 6); text.setAttribute('y', y + 4);
    text.setAttribute('text-anchor', 'end'); text.setAttribute('fill', labelColor);
    text.setAttribute('font-size', '11');
    text.textContent = Math.round(maxVal * frac);
    svgEl.appendChild(text);
  });

  // Points
  const points = dataPoints.map((val, i) => ({
    x: padding.left + (i / (dataPoints.length - 1)) * chartW,
    y: padding.top + chartH - (val / maxVal) * chartH,
  }));

  // Area
  const areaPath = `M ${points[0].x},${padding.top + chartH} ` +
    points.map(p => `L ${p.x},${p.y}`).join(' ') +
    ` L ${points[points.length-1].x},${padding.top + chartH} Z`;
  const area = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  area.setAttribute('d', areaPath);
  area.setAttribute('fill', 'url(#areaGradient)');
  svgEl.appendChild(area);

  // Line
  const linePath = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  lineEl.setAttribute('d', linePath);
  lineEl.setAttribute('fill', 'none');
  lineEl.setAttribute('stroke', lineColor);
  lineEl.setAttribute('stroke-width', '2.5');
  lineEl.setAttribute('stroke-linecap', 'round');
  lineEl.setAttribute('stroke-linejoin', 'round');
  svgEl.appendChild(lineEl);

  // Dots
  points.forEach(p => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.x); circle.setAttribute('cy', p.y);
    circle.setAttribute('r', '4'); circle.setAttribute('fill', lineColor);
    svgEl.appendChild(circle);
  });

  // X labels
  labels.forEach((lbl, i) => {
    const x = padding.left + (i / (labels.length - 1)) * chartW;
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x); text.setAttribute('y', padding.top + chartH + 20);
    text.setAttribute('text-anchor', 'middle'); text.setAttribute('fill', labelColor);
    text.setAttribute('font-size', '11');
    text.textContent = lbl;
    svgEl.appendChild(text);
  });
};

window.drawDonutChart = function(svgEl, segments, options = {}) {
  // segments: [{value, color, label}]
  const { size = 160, strokeWidth = 28 } = options;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2, cy = size / 2;
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;

  svgEl.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svgEl.innerHTML = '';

  let offset = -90; // start from top
  segments.forEach(seg => {
    const angle = (seg.value / total) * 360;
    const start = offset;
    const end   = offset + angle;
    offset += angle;

    const startR = (start * Math.PI) / 180;
    const endR   = (end   * Math.PI) / 180;

    const x1 = cx + radius * Math.cos(startR);
    const y1 = cy + radius * Math.sin(startR);
    const x2 = cx + radius * Math.cos(endR);
    const y2 = cy + radius * Math.sin(endR);
    const large = angle > 180 ? 1 : 0;

    if (angle < 0.5) return;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const d = `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', seg.color);
    path.setAttribute('stroke-width', strokeWidth);
    path.setAttribute('stroke-linecap', 'round');
    svgEl.appendChild(path);
  });
};

/* ============================================================
   UTILITY — Indian number format, days calc
   ============================================================ */
window.formatINR = function(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
};

window.daysDiff = function(dateStr) {
  const today = new Date('2026-08-15');
  const d = new Date(dateStr);
  return Math.ceil((d - today) / (1000 * 60 * 60 * 24));
};

/* ============================================================
   SINGLE-PAGE FULL SCROLL & SCROLL SPY ENGINE
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 76;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Close mobile drawer if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('open');
      }
    });
  });

  // Scroll Spy — Update active navbar link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '-76px 0px -40% 0px'
    });

    sections.forEach(section => spyObserver.observe(section));
  }
});
