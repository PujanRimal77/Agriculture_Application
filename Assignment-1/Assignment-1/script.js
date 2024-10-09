// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").innerHTML = "Thank you for contacting us!";
    setTimeout(function() {
        document.getElementById("success-message").innerHTML = "";
    }, 3000);
});
