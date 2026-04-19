// ── GRAIN TEXTURE via Canvas ────────────
(function () {
  var canvas = document.createElement('canvas');
  canvas.id = 'grain';
  canvas.width = 256;
  canvas.height = 256;
  document.body.prepend(canvas);

  var ctx = canvas.getContext('2d');
  var imageData = ctx.createImageData(256, 256);
  var data = imageData.data;

  function generateGrain() {
    for (var i = 0; i < data.length; i += 4) {
      var v = Math.floor(Math.random() * 255);
      data[i]     = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    canvas.style.backgroundImage = 'url(' + canvas.toDataURL() + ')';
    canvas.style.backgroundSize  = '256px 256px';
    canvas.style.backgroundRepeat = 'repeat';
  }

  generateGrain();
  setInterval(generateGrain, 120); // animate grain
})();

// ── NAV SCROLL ────────────────────────
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── SCROLL REVEAL ─────────────────────
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('on');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.r').forEach(function (el) {
  observer.observe(el);
});

// ── FORM ──────────────────────────────
function sendForm(e) {
  e.preventDefault();
  var btn = e.target.querySelector('.form-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(function () {
    e.target.reset();
    btn.style.display = 'none';
    document.getElementById('formOk').style.display = 'block';
  }, 1200);
}

// ── SMOOTH SCROLL ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
