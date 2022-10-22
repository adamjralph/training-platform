const signout = document.getElementById("sign-out");

signout.addEventListener("click", async (e) => {
  await signOutDelay();
  activateSignoutSpinner();
  localStorage.removeItem("admin");
});

function activateSignoutSpinner() {
  let spinner = document.getElementById("signout-spinner");
  spinner.style.display = "flex";
}

function signOutDelay() {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}
