document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sign-up-form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const passwordMatch = document.getElementById("password_match");

  // Function to validate the form
  function validateForm() {
    let isValid = true;

    // Password validation
    if (password.value !== confirmPassword.value) {
      passwordMatch.checked = false;
      isValid = false;
      alert("Passwords do not match!");
    } else {
      passwordMatch.checked = true;
    }

    return isValid;
  }

  // Function to save form data to local storage
  function saveFormData() {
    const formData = new FormData(form);
    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    localStorage.setItem("signUpFormData", JSON.stringify(formValues));
  }

  // Function to display submission dialog
  function showSubmissionDialog() {
    alert("Form submitted successfully!");
  }

  // Form submission event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      saveFormData();
      showSubmissionDialog();
      form.reset(); // Clear the form
    }
  });

  // Load saved form data on page load
  function loadFormData() {
    const savedData = localStorage.getItem("signUpFormData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      for (const key in formData) {
        if (form.elements[key]) {
          form.elements[key].value = formData[key];
        }
      }
    }
  }

  loadFormData();
});
