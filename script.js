// Initialize EmailJS with your user ID
emailjs.init("WY1gS8YWQsBo8Ow64"); // Replace with your EmailJS user ID

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the form data using EmailJS
  emailjs.send("service_9mdq7j8","template_cmannve", {
    name: name,
    email: email,
    message: message
  })
  .then(function(response) {
    alert("Message sent successfully!");
    // Optionally reset the form
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("Error sending message: " + error.text);
  });
});
