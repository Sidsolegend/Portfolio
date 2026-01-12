/* ===== HAMBURGER MENU TOGGLE ===== */
function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active');
}

/* ===== SMOOTH SCROLL FOR NAV LINKS ===== */
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close menu on mobile after clicking
    const menu = document.querySelector('.nav-menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
});

/* ===== SCROLL HIGHLIGHT NAV ===== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // Offset for navbar height
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active-link');
    }
  });
});
/* ===== FADE-IN ON SCROLL ===== */
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
