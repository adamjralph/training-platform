function setTrainingToken() {
    localStorage.setItem("isTraining", 1)
    // When training commences the admin is logged out to prevent student from accessing admin area
    localStorage.removeItem("admin")
}

const question = document.getElementById("question")
const log = document.getElementById("log")
const next = document.getElementById("next-btn")

question.addEventListener(
    "submit",
    (e) => {
        const data = new FormData(question)
        let questionNum = question.dataset.number
        let output = ""
        for (const entry of data) {
            if (entry[1] === "correct") {
                localStorage.setItem(questionNum, 1)
                output = `That is the correct answer!`
                log.style.color = "green"
                next.toggleAttribute("disabled")
            } else {
                localStorage.setItem(questionNum, 0)
                output = "Sorry, that is not the right answer"
                log.style.color = "crimson"
            }
        }
        log.innerText = output
        e.preventDefault()
    },
    false
)
