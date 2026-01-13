/* ===== OBSERVER FOR FADE-IN ANIMATIONS ===== */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  /* ===== MOBILE MENU ===== */
  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    
    // Animate hamburger lines
    // You can add more complex hamburger animation classes here if desired
  }
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-menu').classList.remove('active');
    });
  });
  
  /* ===== NAVBAR SCROLL HIDE/SHOW ===== */
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling Down
      navbar.style.top = '-80px';
    } else {
      // Scrolling Up
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });
