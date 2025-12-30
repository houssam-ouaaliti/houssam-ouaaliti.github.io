// ===== Scroll reveal animations (IntersectionObserver) =====
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => io.observe(el));

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Contact form (demo behavior) =====
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic validation feedback
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    note.textContent = "Please fill in all fields.";
    return;
  }

  // In a real portfolio, you’d connect this to EmailJS / Formspree / backend API
  note.textContent = "Thanks! Your message is ready to be sent (demo).";
  form.reset();

  setTimeout(() => {
    note.textContent = "";
  }, 3500);
});

// ===== Bottom nav active section =====
// ===== Bottom nav active section (FIX HOME) =====
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".bottom-nav .nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navItems.forEach(item => {
          item.classList.toggle(
            "active",
            item.dataset.section === id
          );
        });
      }
    });
  },
  {
    threshold: 0.55
  }
);

sections.forEach(section => observer.observe(section));
