// Scroll progress bar
const progressBar = document.getElementById("scrollProgress");

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const maxScroll = docHeight - winHeight;
  const ratio = maxScroll > 0 ? scrollTop / maxScroll : 0;
  if (progressBar) {
    progressBar.style.width = `${Math.min(Math.max(ratio, 0), 1) * 100}%`;
  }
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);
