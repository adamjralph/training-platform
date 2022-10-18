const login = document.getElementById("form-signin");

login.addEventListener("submit", (e) => {
  // window.location.href = "home.html";
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  const data = new FormData();
  console.log(username);
  console.log(password);
  if (username === "admin" && password === "admin") {
    localStorage.setItem((admin = "loggedIn"));
  }
  // for (const value of data.values()) {
  //   console.log(value);
  // }
  e.preventDefault();
});
