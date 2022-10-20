const login = document.getElementById("form-signin");
const admin = "";

// localStorage.removeItem("admin");

login.addEventListener("submit", (e) => {
  // window.location.href = "home.html";
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  console.log(username);
  console.log(password);
  if (username === "admin" && password === "admin") {
    localStorage.setItem("admin", 1);

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  }
  // for (const value of data.values()) {
  //   console.log(value);
  // }
  e.preventDefault();
});
