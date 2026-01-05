document.documentElement.classList.add('js');

document.addEventListener("DOMContentLoaded", () => {
  
/* Disable context menu for image */
  document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
});

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(section => observer.observe(section));

  /* Logo scroll-to-top */
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
