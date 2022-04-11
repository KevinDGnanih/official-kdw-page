function sendMail(contactForm) {
    emailjs.send("Gmail", "kdw", {
            "from_name": contactForm.name.value,
            "from_subject": contactForm.subject.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                document.getElementById("submitSuccessMessage").innerHTML = `
                Merci beaucoup, you submitted with success!`
                alert("Thank you!");
            },
            function (error) {
                console.log("FAILED", error);
                document.getElementById(reply).innertext = `<p>Please fill up all the sections.</p>`;
            });

    return false;}