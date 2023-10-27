document.addEventListener('DOMContentLoaded', function() {
    var detailsTable = document.getElementById('detailsTable');
    var storedDetails = JSON.parse(localStorage.getItem('registrationDetails'));

    if (storedDetails) {
        var newRow = detailsTable.insertRow();

        for (var key in storedDetails) {
            var cell = newRow.insertCell();
            cell.appendChild(document.createTextNode(storedDetails[key]));
        }

        // Add edit and delete buttons
        var editCell = newRow.insertCell();
        var deleteCell = newRow.insertCell();

        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', function() {
            // Redirect to details.html for editing
            window.location.href = 'details.html';
        });

        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Delete stored data
            localStorage.removeItem('registrationDetails');

            // Remove the row from the table
            newRow.remove();
        });

        editCell.appendChild(editButton);
        deleteCell.appendChild(deleteButton);
    } else {
        detailsTable.style.display = "none"; //Hide the table if no details are available
    }
          
});






