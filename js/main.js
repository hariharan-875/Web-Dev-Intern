
// Nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Form submit (fake)
document.getElementById('lead-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your request has been submitted.');
  this.reset();
});

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// simple testimonial carousel
(function(){
  const next = document.querySelector('.ctrl.next');
  const prev = document.querySelector('.ctrl.prev');
  const slides = document.querySelectorAll('.test-slide');
  let idx = 0;
  function show(i){
    slides.forEach(s=>s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  show(idx);
  next?.addEventListener('click', ()=>{ idx = (idx+1)%slides.length; show(idx); });
  prev?.addEventListener('click', ()=>{ idx = (idx-1+slides.length)%slides.length; show(idx); });
})();
