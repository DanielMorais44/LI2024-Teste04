//ficheiro de script~
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    });
});
