document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("success-message");

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  Object.values(errors).forEach((el) => {
    el.textContent = "";
    el.classList.remove("active");
  });
  successMessage.textContent = "";
  successMessage.style.opacity = 0;

  let valid = true;

  if (name.value.trim() === "") {
    errors.name.textContent = "Please enter your full name.";
    errors.name.classList.add("active");
    valid = false;
  }
  // Email 
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (email.value.trim() === "") {
    errors.email.textContent = "Please enter your email.";
    errors.email.classList.add("active");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    errors.email.textContent = "Please enter a valid email (name@example.com).";
    errors.email.classList.add("active");
    valid = false;
  }

  if (subject.value.trim() === "") {
    errors.subject.textContent = "Please enter a subject.";
    errors.subject.classList.add("active");
    valid = false;
  }

  if (message.value.trim() === "") {
    errors.message.textContent = "Please enter your message.";
    errors.message.classList.add("active");
    valid = false;
  } else if (message.value.trim().length < 10) {  // minimum of 10 characters
    errors.message.textContent = "Message must be at least 10 characters long.";
    errors.message.classList.add("active");
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "✅ Message sent successfully!";
    successMessage.style.opacity = 1;
    document.getElementById("contactForm").reset();

    setTimeout(() => {
      successMessage.style.opacity = 0;
    }, 3000);
  }
});
