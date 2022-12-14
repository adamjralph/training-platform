const loggedIn = localStorage.getItem("admin")
if (loggedIn != 1) {
    window.location.href = "index.html"
}

/*  
    ASSIGN TRAINING 
    
    Add "Assign training button" which redirects to training page

    Training page shows new learner name and training modules and an "Assign" button

    Admin clicks on training module and then assign button. There is a confirmation dialogue
    "Are you sure you want to assign this training to 'new learner'?"

    Confirm redirects to training program
*/
const introScreenName = document.getElementById("student-name")
const firstName = document.getElementById("studentFirstName")
const lastName = document.getElementById("studentLastName")
const position = document.getElementById("studentPosition")
let addedText;

// On load function
function displayStudentName(addedText) {
    const newStudentFirstName = localStorage.getItem("firstName")
    const newStudentLastName = localStorage.getItem("lastName")
    introScreenName.innerText = `${newStudentFirstName} ${newStudentLastName} ${addedText}`
}

function readStudentDetails() {
    const newStudentFirstName = localStorage.getItem("firstName")
    const newStudentLastName = localStorage.getItem("lastName")
    firstName.value = newStudentFirstName
    lastName.value = newStudentLastName
}

const assignTrainingBtn = document.getElementById("assign-training-btn")
const assignTrainingForm = document.getElementById("assign-training-form")
const trainingOne = document.getElementById("btn-training-one")
const trainingTwo = document.getElementById("btn-training-two")

assignTrainingBtn.addEventListener("click", (e) => {
    const selectedTraining = document.querySelectorAll(
        "input[name='select-training']"
    )
    for (const t of selectedTraining) {
        if (t.checked) {
            window.location.href = `${t.value}.html`
        }
    }
    e.preventDefault()
})

// Display student name has been assigned to training

const studentAssigned = document.getElementById('student-assigned')


studentAssigned.innerText = `${displayStudentName()} has been assigned`

