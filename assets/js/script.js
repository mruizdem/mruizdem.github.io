// to handle form submission, this is just temporary and will be replaced later as I learn more backend services
let formSubmission = document.querySelector(".form");

formSubmission.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Thank you for testing! Currently there is nothing set up to handle the contact information. This was really just for testing as I learn to work with backend services.");
    formSubmission.reset();
});