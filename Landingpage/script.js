document.addEventListener("DOMContentLoaded", () => {
  // FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll(".FAQ__title");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle visibility
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.querySelector("i").classList.replace("fa-minus", "fa-plus");
      } else {
        // Close others
        document.querySelectorAll(".FAQ__visible").forEach(panel => {
          panel.style.maxHeight = null;
        });
        document.querySelectorAll(".FAQ__title i").forEach(icon => {
          icon.classList.replace("fa-minus", "fa-plus");
        });

        content.style.maxHeight = content.scrollHeight + "px";
        button.querySelector("i").classList.replace("fa-plus", "fa-minus");
      }
    });
  });
  
  // Sign in button functionality
    const signInButton = document.querySelector(".signin__button");
    const signInForm = document.getElementById("signinForm");
    const closeButton = document.querySelector(".close__button");
    signInButton.addEventListener("click", () => {
        signInForm.style.display = "flex"; // Show the sign-in form
    });
    closeButton.addEventListener("click", () => {
        signInForm.style.display = "none"; // Hide the sign-in form
    });
    // Handle form submission
    const signinFormElement = document.querySelector(".signin__form");
    signinFormElement.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        const domainInput = signinFormElement.querySelector("input[type='text']").value.trim();
        const emailInput = signinFormElement.querySelector("input[type='email']").value.trim();
        const passwordInput = signinFormElement.querySelector("input[type='password']").value.trim();
        // Here you can handle the sign-in logic, e.g., sending the data to your server
        console.log("Email:", emailInput);
        console.log("Password:", passwordInput);
        // Optionally, hide the form after submission
        signInForm.style.display = "none";
    });

  // Email form submission
  const emailButtons = document.querySelectorAll(".primary__button");
  emailButtons.forEach(button => {
    button.addEventListener("click", () => {
      const emailInput = button.parentElement.querySelector(".email__input");
      const emailValue = emailInput.value.trim();

      if (!emailValue || !validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
      } else {
        console.log("Email Submitted:", emailValue);
        alert("Thank you! We'll get in touch.");
        emailInput.value = "";
      }
    });
  });

  // Optional: Language selector change
  const languageDropdowns = document.querySelectorAll(".language__drop__down");
  languageDropdowns.forEach(select => {
    select.addEventListener("change", (e) => {
      console.log("Language changed to:", e.target.value);
    });
  });
});

// Helper: Basic email format validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
