const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const carousel = document.querySelector('[data-carousel-track]');
document.querySelector('[data-carousel="prev"]')?.addEventListener('click', () => {
  carousel?.scrollBy({ left: -(carousel.clientWidth * 0.82), behavior: 'smooth' });
});
document.querySelector('[data-carousel="next"]')?.addEventListener('click', () => {
  carousel?.scrollBy({ left: carousel.clientWidth * 0.82, behavior: 'smooth' });
});

const copyButton = document.querySelector('[data-copy-bibtex]');
copyButton?.addEventListener('click', async () => {
  const text = document.querySelector('#bibtex-content')?.innerText.trim();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1600);
  } catch {
    copyButton.textContent = 'Select BibTeX above';
  }
});
