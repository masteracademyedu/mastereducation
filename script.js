/* Master Education — shared website system */

(function () {
  const site = window.MASTER_SITE || { navigation: [], footer: [] };
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function isActive(url) {
    if (!url || url.startsWith('http://') || url.startsWith('https://')) return false;
    return url.split('#')[0].toLowerCase() === currentPage;
  }

  function linkHTML(item, extraClass) {
    const external = item.external || /^https?:\/\//i.test(item.url || '');
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a${extraClass ? ` class="${extraClass}"` : ''} href="${item.url}"${attrs}>${item.title}</a>`;
  }

  // Replace every existing header with the central header.
  document.querySelectorAll('header.header').forEach(header => {
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html">
          <span class="brand-mark">M</span>
          <span><strong>Master</strong> Education</span>
        </a>
        <button class="menu-btn" aria-label="Open menu">☰</button>
        <nav class="nav-links">
          ${site.navigation.map(item => linkHTML(item, isActive(item.url) ? 'active' : '')).join('')}
        </nav>
      </div>`;
  });

  // Replace every existing footer with the central footer.
  document.querySelectorAll('footer.footer').forEach(footer => {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <a class="brand" href="index.html">
            <span class="brand-mark">M</span>
            <span><strong>Master</strong> Education</span>
          </a>
          <p>${site.brand?.tagline || 'Learn Today. Lead Tomorrow.'}</p>
        </div>
        ${site.footer.map(group => `
          <div>
            <h3>${group.title}</h3>
            ${group.links.map(item => linkHTML(item)).join('')}
          </div>`).join('')}
      </div>
      <div class="copyright">© <span class="year"></span> Master Education. All Rights Reserved.</div>`;
  });

  // Mobile menu
  const m = document.querySelector('.menu-btn');
  const n = document.querySelector('.nav-links');
  if (m && n) {
    m.onclick = () => n.classList.toggle('open');
    n.querySelectorAll('a').forEach(a => a.addEventListener('click', () => n.classList.remove('open')));
  }

  // Existing notice system
  document.querySelectorAll('[data-notice]').forEach(e => e.onclick = x => {
    x.preventDefault();
    notice(e.dataset.notice);
  });

  function notice(t) {
    const x = document.getElementById('toast');
    if (!x) return;
    x.textContent = t;
    x.classList.add('show');
    setTimeout(() => x.classList.remove('show'), 2600);
  }

  window.notice = notice;

  window.quiz = function () {
    const a = document.querySelector('input[name=q]:checked');
    const r = document.getElementById('result');
    if (!r) return;
    if (!a) { r.textContent = 'একটি উত্তর নির্বাচন করুন।'; return; }
    r.textContent = a.value === 'b' ? '✓ Correct! সঠিক উত্তর: an' : '✗ Wrong. সঠিক উত্তর: an';
  };

  window.contact = function (e) {
    e.preventDefault();
    notice('ধন্যবাদ! Demo form submit হয়েছে। Google Forms/WhatsApp যুক্ত করলে real submission পাওয়া যাবে।');
    e.target.reset();
  };

  document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());
})();
