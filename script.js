// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scroll({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});



function sendMail(){
    var params = {
        from_name : document.getElementById("name").value ,
        message : document.getElementById("message").value ,
        from_email : document.getElementById("email").value 
    }
    emailjs.send("service_7ijnibq","template_i2ytvv8",params).then(function() {
        alert('Your message has been sent!');
    }, function(error) {
        alert('Oops! Something went wrong. Please try again.');
    });
}