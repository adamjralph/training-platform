const login = document.getElementById("form-signin");
const admin = "";

// localStorage.removeItem("admin");

login.addEventListener("submit", async (e) => {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  if (username === "admin" && password === "admin") {
    await signInDelay();
    localStorage.setItem("admin", 1);
    activateLoadingSpinner();
  }
  e.preventDefault();
});

function activateLoadingSpinner() {
  let btn = document.getElementById("sign-in-btn");
  let spinner = document.getElementById("sign-in-spinner");
  btn.style.display = "none";
  spinner.style.display = "block";
}

function signInDelay() {
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
}
