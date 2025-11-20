if (!window.__equusScriptLoaded) {
  window.__equusScriptLoaded = true;

  document.addEventListener('DOMContentLoaded', () => {

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        e.target.reset();
      });
    }
    
    // Formulario de registro
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = e.target.querySelector('input');
        const msg = document.getElementById('signup-message');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (input && emailRegex.test(input.value)) {
          if (msg) {
            msg.textContent = '¡Gracias por suscribirte!';
            msg.style.color = '#FFC846';
            msg.classList.add('show');
          }
          input.value = '';

          setTimeout(() => {
            if (msg) msg.classList.remove('show');
          }, 5000);
        }
      });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) { 
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    //Carrusel de artistas con flechas
    const carousel = document.getElementById("artistsCarousel");
    const arrowLeft = document.querySelector(".arrow.left");
    const arrowRight = document.querySelector(".arrow.right");

    if (carousel && arrowLeft && arrowRight) {

      arrowLeft.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
      });

      arrowRight.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      });

      // Auto-scroll al pasar el mouse
      const carousel = document.querySelector('.carousel');
      let autoScroll;

      if (carousel) {
        carousel.addEventListener('mouseenter', () => {
          autoScroll = setInterval(() => {
            carousel.scrollLeft += 2;
            // si llega al final, vuelve al inicio
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
              carousel.scrollLeft = 0;
            }
          }, 20);
        });

        carousel.addEventListener('mouseleave', () => {
          clearInterval(autoScroll);
        });
      }

        if (carousel) {
          carousel.addEventListener('scroll', () => {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
              carousel.scrollTo({ left: 0, behavior: "smooth" });
            }
          });
        }

    }

  }); // DOMContentLoaded
} // end guard
