function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var bloodGroup = document.getElementById('bloodGroup').value;
    var emergencyContact = document.getElementById('emergencyContact').value;
    var medicalHistory = document.getElementById('medicalHistory').value;

    // Simple validation for non-empty fields
    if (
        name.trim() === '' ||
        age.trim() === '' ||
        gender.trim() === '' ||
        contact.trim() === '' ||
        email.trim() === '' ||
        address.trim() === '' ||
        bloodGroup.trim() === '' ||
        emergencyContact.trim() === '' ||
        medicalHistory.trim() === ''
    ) {
        alert('Please fill in all fields.');
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Additional validation based on your requirements
    // For example, you can check if the age is a positive number, etc.

    // If everything is valid, you can submit the form
    alert('Form submitted successfully!');
    return true;
}
