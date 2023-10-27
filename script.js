document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var details = {
        name: document.getElementById('name').value,
        department: document.getElementById('department').value,
        year: document.getElementById('year').value,
        email: document.getElementById('email').value,
        fatherName: document.getElementById('fatherName').value,
        collegeName: document.getElementById('collegeName').value,
        sport: document.getElementById('sport').value
    };

    // Convert the details object to a JSON string
    var detailsString = JSON.stringify(details);

    // Send the details to details.html using localStorage
    localStorage.setItem('registrationDetails', detailsString);

    // Redirect to details.html
    window.location.href = 'details.html';
});





