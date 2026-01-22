const progressBar = document.getElementById("scrollProgress");
const screens = Array.from(document.querySelectorAll(".screen"));

function setActiveScreen(targetId) {
  let next = targetId;
  if (!next || !document.getElementById(next)) {
    next = "screen-1";
  }
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === next);
  });
  if (progressBar) {
    progressBar.style.width = "0%";
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace("#", "");
  setActiveScreen(hash);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") {
      return;
    }
    event.preventDefault();
    history.replaceState(null, "", hash);
    handleHashChange();
  });
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-next");
    if (target) {
      history.replaceState(null, "", target);
      handleHashChange();
    }
  });
});

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", handleHashChange);
