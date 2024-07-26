function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }

emailjs.send("service_2r8eot5","template_9ldu2sg",parms).then(alert("Email sent!!"))
}