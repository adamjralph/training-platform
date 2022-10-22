const loggedIn = localStorage.getItem("admin");
if (loggedIn != 1) {
  window.location.href = "index.html";
}
