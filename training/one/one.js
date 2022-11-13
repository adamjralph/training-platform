function setTrainingToken() {
    localStorage.setItem("isTraining", 1)
    // When training commences the admin is logged out to prevent student from accessing admin area
    localStorage.removeItem("admin")
}

