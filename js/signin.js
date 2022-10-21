const login = document.getElementById("sign-in-form");
const admin = "";
const output = document.getElementById("sign-in-feedback");
// localStorage.removeItem("admin");

login.addEventListener("submit", async (e) => {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  console.log(username);
  console.log(password);
  if (username === "admin" && password === "admin") {
    await signInDelay();
    localStorage.setItem("admin", 1);
    activateLoadingSpinner();
  } else {
    output.innerText = "Username or password incorrect";
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
  }, 2000);
}
