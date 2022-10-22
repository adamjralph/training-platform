const login = document.getElementById("signin-form");
const admin = "";
const output = document.getElementById("signin-feedback");
// localStorage.removeItem("admin");

login.addEventListener("submit", async (e) => {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  if (username === "admin" && password === "admin") {
    await signInDelay();
    localStorage.setItem("admin", 1);
    activateLoadingSpinner();
  } else {
    output.innerText = "Username or password incorrect";
    setTimeout(() => {
      output.innerText = "";
    }, 2000);
  }
  e.preventDefault();
});

function activateLoadingSpinner() {
  let btn = document.getElementById("signin-btn");
  let spinner = document.getElementById("signin-spinner");
  btn.style.display = "none";
  spinner.style.display = "block";
}

function signInDelay() {
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
}
