// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Schedule Tabs
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all tabs
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    // Add active to clicked tab
    btn.classList.add('active');
    document.getElementById('day' + btn.dataset.day).classList.add('active');
  });
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te responderemos pronto.');
  e.target.reset();
});

// Email Signup
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const input = e.target.querySelector('input');
  const msg = document.getElementById('signup-message');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(input.value)) {
    msg.textContent = '✓ ¡Gracias por suscribirte!';
    msg.style.color = '#FFC846';
    msg.classList.add('show');
    input.value = '';
    
    setTimeout(() => {
      msg.classList.remove('show');
    }, 5000);
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});