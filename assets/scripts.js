/* ===============================
   FADE-IN SCROLL ANIMATION
================================ */

const animatedSections = document.querySelectorAll('.fade-in');

const observerOptions = {
  threshold: 0.15
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedSections.forEach(section => {
  fadeObserver.observe(section);
});

/* ===============================
   MOBILE NAVIGATION
================================ */

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
    navToggle.classList.toggle('open');
  });
}

/* ===============================
   CLOSE MOBILE NAV ON LINK CLICK
================================ */

const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('nav-open');
    navToggle.classList.remove('open');
  });
});



const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    contactForm.querySelectorAll('[required]').forEach(field => {
      if(!field.value.trim()){
        valid = false;
        field.style.borderColor = 'red';
      } else {
        field.style.borderColor = '#ccc';
      }
    });

    if(!valid){
      formStatus.textContent = 'Please complete all required fields.';
      return;
    }

    formStatus.textContent = 'Thank you. Your inquiry has been received.';
    contactForm.reset();
  });
}


const newsletterForm = document.getElementById('newsletterForm');
const newsletterStatus = document.getElementById('newsletterStatus');

if(newsletterForm){
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('#newsletterEmail').value.trim();
    if(!email){
      newsletterStatus.textContent = 'Please enter a valid email.';
      return;
    }
    newsletterStatus.textContent = 'Thank you for subscribing!';
    newsletterForm.reset();
  });
}

let lastScrollY = window.scrollY;
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // scrolling DOWN → hide header
    header.classList.add("header-hidden");
  } else {
    // scrolling UP → show header
    header.classList.remove("header-hidden");
  }

  lastScrollY = currentScrollY;
});
