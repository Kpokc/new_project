function sendMail(contactForm){
    console.log("in send");
    emailjs.send('service_y8siy1c', 'template_l2tj8f3', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value,

    })

    .then(
        function(response){
            console.log("succes");
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });

        return false;
}