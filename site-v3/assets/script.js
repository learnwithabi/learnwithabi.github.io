const roles = [
  "Data & AI Solution Architect",
  "Databricks Lakehouse Architect",
  "GenAI / RAG Engineer",
  "Cloud Migration Specialist",
  "Community Builder :)"
];
const el = document.getElementById('hero-role');
let i = 0;
if (el) {
  el.textContent = roles[0];
  setInterval(() => {
    i = (i + 1) % roles.length;
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = roles[i];
      el.style.opacity = 1;
    }, 250);
  }, 2400);
}
