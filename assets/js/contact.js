function sendEmail() {
  Email.send({
    // Host: "smtp.elasticemail.com",
    SecureToken: "872cd5ba-98cf-4c6d-b18d-e5ef627dc852",
    Username: "sireyrathsok@gmail.com",
    Password: "FB9B55690E2F03D138527560DE67C3168F8E",
    To: "sireyrathsok@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert("message sent"));
}
