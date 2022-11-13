const loggedIn = localStorage.getItem("admin")
if (loggedIn != 1) {
    window.location.href = "index.html"
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
    "use strict"

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add("was-validated")

                createNewStudent()
            },
            false
        )
    })
})()

const createNewStudentForm = document.getElementById("createNewStudent")
const createNewStudentSubmit = document.getElementById(
    "new-student-form-submit"
)
const firstName = document.getElementById("studentFirstName")
const lastName = document.getElementById("studentLastName")
const position = document.getElementById("studentPosition")

createNewStudentSubmit.addEventListener("click", (e) => {
    createNewStudent()
    createNewStudentElement()
    clearFormInputs()
    e.preventDefault()
})

function deleteStudent() {
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    removeStudentElement()
    buttonState(createNewStudentSubmit, false)
}

function updateValue(e) {
    const studentUsername = document.getElementById("studentUsername")
    studentUsername.value = `${e.target.value}_id`
}

function createNewStudent() {
    localStorage.setItem("firstName", firstName.value)
    localStorage.setItem("lastName", lastName.value)
    buttonState(createNewStudentSubmit, true)
}

/* Function to toggle button state between active and disabled
takes two arguments: element - HTML button, state: string, 'true' or 'false' */
function buttonState(element, state) {
    element.disabled = state
}

function clearFormInputs() {
    firstName.value = ""
    lastName.value = ""
}

function editNewStudent() {
    const first = localStorage.getItem("firstName")
    const last = localStorage.getItem("lastName")
    firstName.value = first
    lastName.value = last
    buttonState(createNewStudentSubmit, false)
}

// This needs be moved into onclick function or eventListerner function

function createNewStudentElement() {
    const newStudentFullname = getStudentName()
    const listOfStudents = document.getElementById("student-list")
    const newStudentListItem = document.createElement("li")
    const newStudentLink = document.createElement("a")
    const nameText = document.createTextNode(newStudentFullname)
    newStudentLink.appendChild(nameText)
    newStudentLink.href = "students.html"
    newStudentLink.id = "new-student"
    newStudentListItem.appendChild(newStudentLink)
    listOfStudents.appendChild(newStudentLink)
}

function getStudentName() {
    const newStudentFirstName = localStorage.getItem("firstName")
    const newStudentLastName = localStorage.getItem("lastName")
    return newStudentFirstName + " " + newStudentLastName
}

// This function is called by onload event set on <body>
function getStudent() {
    if (localStorage.getItem("firstName")) {
        createNewStudentElement()
    }
}

/*  
  Once form is submitted, add new learner to right hand card
  with an edit button and assign training.
  Edit button deletes new learner info allowing admin to create a new learner */

// const editStudent = document.getElementById("edit-student")

// editStudent.addEventListener("click", (e) => {
//     const studentList = document.getElementById("student-list")
//     const newStudent = document.getElementById("new-student")
//     studentList.removeChild(studentList.firstElementChild)
//     editNewStudent()
// })

function removeStudentElement() {
    const newStudent = document.getElementById("new-student")
    newStudent.remove()
    // e.preventDefault()
}

function renameAddButton() {
    const addButton = document.getElementById("new-student-form-submit")
    addButton.textContent = "Update"
}

const editStudentButton = document.getElementById("edit-student")
editStudentButton.addEventListener("click", (e) => {
    editNewStudent()
    renameAddButton()
    removeStudentElement()
    e.preventDefault()
})

/*  Add "Assign training button" which redirects to training page

  Training page shows new learner name and training modules and an "Assign" button

  Admin clicks on training module and then assign button. There is a confirmation dialogue
  "Are you sure you want to assign this training to 'new learner'?"

  Confirm redirects to training program
*/
