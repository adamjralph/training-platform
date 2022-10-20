const signout = document.getElementById("sign-out");

signout.addEventListener("click", (e) => {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
  localStorage.removeItem("admin");
});
