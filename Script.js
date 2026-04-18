// Nav scroll effect
const nav = document.getElementById(‘nav’);
window.addEventListener(‘scroll’, function () {
nav.classList.toggle(‘scrolled’, window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver(function (entries) {
entries.forEach(function (e) {
if (e.isIntersecting) e.target.classList.add(‘on’);
});
}, { threshold: 0.08, rootMargin: ‘0px 0px -30px 0px’ });

document.querySelectorAll(’.r’).forEach(function (el) {
observer.observe(el);
});

// Form submit
function sendForm(e) {
e.preventDefault();
var btn = e.target.querySelector(’.form-btn’);
btn.textContent = ‘Sending…’;
btn.disabled = true;
setTimeout(function () {
e.target.reset();
btn.style.display = ‘none’;
document.getElementById(‘formOk’).style.display = ‘block’;
}, 1200);
}

// Smooth scroll anchors
document.querySelectorAll(‘a[href^=”#”]’).forEach(function (a) {
a.addEventListener(‘click’, function (e) {
var target = document.querySelector(a.getAttribute(‘href’));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: ‘smooth’ });
}
});
});
