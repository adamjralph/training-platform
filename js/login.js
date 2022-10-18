const login = document.querySelector(".form-signin");

login.addEventListener("submit", (e) => {
  window.location.href = "home.html";
  e.preventDefault();
});
