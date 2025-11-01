document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll('.project-card');
  const scrollToTopButton = document.getElementById('scrollToTop');
  const headerHeight = document.querySelector('header').offsetHeight;
  const headerEl = document.querySelector('header');
  const safeHeaderHeight = headerEl ? headerEl.offsetHeight : 0;
  const hasProjectCards = projectCards && projectCards.length > 0;

  if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
      scrollToTopButton.style.display = window.scrollY > safeHeaderHeight ? 'flex' : 'none';
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});