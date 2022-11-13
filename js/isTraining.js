const training = localStorage.getItem("isTraining")
function studentIsTraining() {
    if (training === "1") {
        window.location.href = "training-one.html"
    }
}


