document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPwInput = document.getElementById("confirmPw");
  
    function showError(input, message) {
      input.classList.add("error-border");
      if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error")) {
        const error = document.createElement("span");
        error.className = "error";
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
      } else {
        input.nextElementSibling.textContent = message;
      }
    }
  
    function clearError(input) {
      input.classList.remove("error-border");
      if (input.nextElementSibling && input.nextElementSibling.classList.contains("error")) {
        input.nextElementSibling.remove();
      }
    }
  
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length < 3) {
        showError(nameInput, "Name must be at least 3 characters");
      } else {
        clearError(nameInput);
      }
    });
  
    emailInput.addEventListener("input", () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address");
      } else {
        clearError(emailInput);
      }
    });
  
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length < 8) {
        showError(passwordInput, "Password must be at least 8 characters");
      } else {
        clearError(passwordInput);
      }
  
      if (confirmPwInput.value && confirmPwInput.value !== passwordInput.value) {
        showError(confirmPwInput, "Passwords does not match");
      } else {
        clearError(confirmPwInput);
      }
    });
  
    confirmPwInput.addEventListener("input", () => {
      if (confirmPwInput.value !== passwordInput.value) {
        showError(confirmPwInput, "Passwords does not match");
      } else {
        clearError(confirmPwInput);
      }
    });
  });
  