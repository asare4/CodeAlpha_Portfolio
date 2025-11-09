// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) section.classList.add('visible');
    else section.classList.remove('visible');
  });

  // Active nav link
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if(window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav-links a[href="#${section.id}"]`).classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
