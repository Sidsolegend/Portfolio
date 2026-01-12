function toggleMenu() {
  document.querySelector('.nav-menu').classList.toggle('active');
}

function toggleDetail(row) {
  const detail = row.nextElementSibling;
  detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
}

/* FADE-IN */
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      observer.unobserve(e.target);
    }
  });
},{ threshold:0.2 });

faders.forEach(f => observer.observe(f));
