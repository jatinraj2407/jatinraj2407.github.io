// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle (light / dark) =====
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const syncThemeIcon = () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  themeToggle.textContent = isLight ? '☀️' : '🌙';
};
syncThemeIcon();

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  syncThemeIcon();
});

// ===== Navbar shrink + scroll progress + back-to-top =====
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('show', window.scrollY > 400);

  // Scroll progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
});

// ===== Hero typing effect =====
const typedEl = document.getElementById('typed');
if (typedEl) {
  const phrases = [
    'full-stack web apps.',
    'React frontends.',
    'Spring Boot APIs.',
    'cloud-integrated apps.',
    'scalable solutions.'
  ];
  let pi = 0, ci = 0, deleting = false;

  const type = () => {
    const current = phrases[pi];
    typedEl.textContent = current.slice(0, ci);

    if (!deleting && ci < current.length) {
      ci++;
      setTimeout(type, 70);
    } else if (!deleting && ci === current.length) {
      deleting = true;
      setTimeout(type, 1600);
    } else if (deleting && ci > 0) {
      ci--;
      setTimeout(type, 35);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(type, 300);
    }
  };
  type();
}

// ===== Animated stat counters =====
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      n = Math.min(target, n + step);
      el.textContent = n + suffix;
      if (n < target) requestAnimationFrame(tick);
    };
    tick();
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

// Close the mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Back to top =====
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Reveal-on-scroll animations =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Active nav link highlighting via scroll spy =====
const sections = document.querySelectorAll('section[id]');
const linkFor = id => document.querySelector(`.nav-links a[href="#${id}"]`);

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const active = linkFor(entry.target.id);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(section => spyObserver.observe(section));
