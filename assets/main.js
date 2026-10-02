/* Abhishek Sharma — Portfolio. Progressive enhancement only: every bit of content is in the HTML. */
(function () {
  // Footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Nav background on scroll
  var nav = document.getElementById('nav');
  var onScroll = function () { nav && nav.classList.toggle('scrolled', window.scrollY > 30); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    var setOpen = function (open) {
      links.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    burger.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Hide links to optional files (samples) that haven't been uploaded yet,
  // so visitors never land on a 404. Only runs when served over http(s).
  if (location.protocol.indexOf('http') === 0 && window.fetch) {
    document.querySelectorAll('a[data-optional]').forEach(function (a) {
      fetch(a.href, { method: 'HEAD' }).then(function (r) {
        if (!r.ok) a.style.display = 'none';
      }).catch(function () {});
    });
  }

  // Review mode: add ?review to any page URL.
  // Amber boxes (.fill) = still to fill in. Teal outlines (.est) = estimates to confirm against real data.
  if (/[?&]review\b/.test(location.search)) {
    document.documentElement.classList.add('review');
    var nf = document.querySelectorAll('.fill').length;
    var ne = document.querySelectorAll('.est').length;
    var bar = document.createElement('div');
    bar.setAttribute('role', 'status');
    bar.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:300;padding:10px 16px;border-radius:10px;font:600 14px Inter,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.4);color:#0B1120;background:' +
      (nf ? '#F5A623' : ne ? '#2DD4BF' : '#7CE38B');
    bar.textContent = (nf || ne)
      ? nf + ' to fill in (amber) · ' + ne + ' estimates to confirm (teal)'
      : 'Ready: nothing left to fill or confirm on this page';
    document.body.appendChild(bar);
  }

  // Scroll-spy for nav links and case-study table of contents
  var spyLinks = document.querySelectorAll('.nav-links a[href^="#"], .toc a[href^="#"]');
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    spyLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      (map[id] = map[id] || []).push(a);
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !map[e.target.id]) return;
        spyLinks.forEach(function (a) { a.classList.remove('active'); });
        map[e.target.id].forEach(function (a) { a.classList.add('active'); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }
})();
