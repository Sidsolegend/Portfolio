/* ===== HAMBURGER MENU TOGGLE ===== */
function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active');
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.getElementById(this.getAttribute('href').substring(1));
    target.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav-menu').classList.remove('active');
  });
});

/* ===== SCROLL HIGHLIGHT NAV ===== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active-link');
  });
});

/* ===== FADE-IN ===== */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

/* ===== SKILLS & INTERESTS CLICK TOGGLE ===== */
function toggleInfo(row){
  const info = row.nextElementSibling;
  info.style.display = (info.style.display==='block') ? 'none':'block';
}
