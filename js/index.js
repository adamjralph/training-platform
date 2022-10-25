const loggedIn = localStorage.getItem("admin");
if (loggedIn != 1) {
  window.location.href = "index.html";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

(function () {
  "use strict";

  const firstName = document.getElementById("studentFirstName");
  const lastName = document.getElementById("studentLastName");
  const studentUsername = document.getElementById("studentUsername");
  const createNewStudentForm = document.getElementById("createNewStudent");

  firstName.addEventListener("change", (e) => {
    console.log(firstName.value);
    preventDefault(e);
  });
});
