const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Reveal content as it enters the viewport.
const revealTargets = document.querySelectorAll(
  '.section-kicker, .about-grid, .about-stats, .section-heading, .project-card, .skill-group, .skills-note, .contact-main, .contact-links'
);
revealTargets.forEach(element => element.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(element => observer.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('visible'));
}

// Subtle pointer glow on devices with a mouse.
const glow = document.querySelector('.cursor-glow');
if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => glow.style.opacity = '0');
}


// Theme switch: remember the visitor's choice in this browser.
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const savedTheme = localStorage.getItem('wuilber-portfolio-theme');

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const isLight = theme === 'light';
  themeButton.setAttribute('aria-pressed', String(isLight));
  themeButton.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  themeIcon.textContent = isLight ? '☾' : '☼';
  themeLabel.textContent = isLight ? 'DARK' : 'LIGHT';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isLight ? '#f3f5eb' : '#0b0e07');
}

applyTheme(savedTheme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('wuilber-portfolio-theme', nextTheme);
  applyTheme(nextTheme);
});


/* =====================================
   CERTIFICATE IMAGE VIEWER
===================================== */

const certificateModal =
  document.getElementById("certificateModal");

const modalCertificateImage =
  document.getElementById("modalCertificateImage");

const closeCertificate =
  document.getElementById("closeCertificate");

const certificateButtons =
  document.querySelectorAll(".view-certificate");

// Open certificate
certificateButtons.forEach(button => {
  button.addEventListener("click", () => {
    const imagePath = button.dataset.image;

    modalCertificateImage.src = imagePath;

    certificateModal.classList.add("active");
    certificateModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  });
});

// Close certificate
function closeModal() {
  certificateModal.classList.remove("active");
  certificateModal.setAttribute("aria-hidden", "true");

  modalCertificateImage.src = "";
  document.body.style.overflow = "";
}

closeCertificate.addEventListener("click", closeModal);

// Close by clicking outside the image
certificateModal.addEventListener("click", event => {
  if (event.target === certificateModal) {
    closeModal();
  }
});

// Close with Escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape" &&
      certificateModal.classList.contains("active")) {
    closeModal();
  }
});
