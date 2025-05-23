function validateTeacherLogin() {
  const email = document.getElementById("teacher-username").value.toLowerCase();
  const password = document.getElementById("teacher-password").value;

  const validEmails = ["amanada.hartley@ed.amdsb.ca", "ompate538@ed.amdsb.ca"];
  const teacherPasswordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!validEmails.includes(email)) {
    alert("Teacher email must be amanada.hartley@ed.amdsb.ca or ompate538@ed.amdsb.ca");
    return false;
  }

  if (!teacherPasswordPattern.test(password)) {
    alert("Teacher password must be at least 8 characters long and include one uppercase letter and one number.");
    return false;
  }

  // Redirect to teacher dashboard
  window.location.href = "./teacher-end/index.html";
  return false; // prevent actual form submission since we're redirecting manually
}

function validateStudentLogin() {
  const email = document.getElementById("student-username").value.toLowerCase();
  const password = document.getElementById("student-password").value;

  const emailSuffix = "@ed.amdsb.ca";
  const studentPasswordPattern = /^[a-zA-Z0-9]{6,}$/;

  if (!email.endsWith(emailSuffix)) {
    alert("Student email must end with @ed.amdsb.ca");
    return false;
  }

  if (!studentPasswordPattern.test(password)) {
    alert("Student password must be at least 6 characters long and contain only letters and numbers.");
    return false;
  }

  // Redirect to student dashboard
  window.location.href = "./student-end/index.html";
  return false; // prevent actual form submission
}