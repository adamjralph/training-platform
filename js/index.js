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

const createNewStudentForm = document.getElementById("createNewStudent");
const firstName = document.getElementById("studentFirstName");
const lastName = document.getElementById("studentLastName");
const position = document.getElementById("studentPosition");
const studentUsername = document.getElementById("studentUsername");

firstName.addEventListener("input", updateValue);
// lastName.addEventListener("input", updateValue);

function updateValue(e) {
  studentUsername.value = `${e.target.value}_id`;
}

createNewStudentForm.addEventListener("submit", (e) => {
  const newStudent = {
    studentFirstName: firstName.value,
    studentLastName: lastName.value,
    username: studentUsername.value,
  };
  localStorage.setItem((firstName = firstName.value));
  localStorage.setItem((lastName = lastName.value));

  const listOfStudents = document.getElementById("studentList");
  const newStudentListItem = document.createElement("li");
  listOfStudents.appendChild(newStudentListItem);
  preventDefault(e);
});
