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


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_7ijnibq', 'template_i2ytvv8', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Oops! Something went wrong. Please try again.');
        });
});
