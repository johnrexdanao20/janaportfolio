// JavaScript source code
/* MOBILE NAVIGATION */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

/* CLOSE MENU WHEN A LINK IS CLICKED */
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* LIGHT AND DARK THEME */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  themeToggle.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});

/* ACTIVE NAVIGATION LINK */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

function updateActiveLink() {
  let currentSection = "home";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navItems.forEach(function (link) {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentSection
    );
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

/* AUTOMATIC COPYRIGHT YEAR */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* CONTACT FORM */
const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formNotice.textContent = "Please complete all fields.";
    return;
  }

  const subject = encodeURIComponent(
    "Portfolio inquiry from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  const mailtoLink =
    "mailto:johnrexdanao16@gmail.com" +
    "?subject=" + subject +
    "&body=" + body;

  formNotice.textContent =
    "Opening your email application. Send the message there to complete delivery.";

  window.location.href = mailtoLink;
});