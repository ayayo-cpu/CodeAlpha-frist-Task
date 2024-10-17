function calculateAge() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdate = new Date(birthdateInput.value);

  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();

  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").textContent = `Your age is: ${age}`;
  document.getElementById("result").style.display = "block";
}

// Ensure the script is executed after the form element is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("age-calculator-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      calculateAge();
    });
  }
});
