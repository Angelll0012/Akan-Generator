const femaleNames = [
  "Akosua", // Sunday
  "Adwoa", // Monday
  "Abenaa", // Tuesday
  "Akua", // Wednesday
  "Yaa", // Thursday
  "Afua", // Friday
  "Ama", // Saturday
];

const maleNames = [
  "Kwesi", // Sunday
  "Kwadwo", // Monday
  "Kwabena", // Tuesday
  "Kwaku", // Wednesday
  "Yaw", // Thursday
  "Kofi", // Friday
  "Kwame", // Saturday
];

const daysofWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getAkanName(event) {
  event.preventDefault();

  const birthdateInput = document.getElementById("birthdate");
  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!birthdateInput.value) {
    alert("Please enter your birth date.");
    return;
  }

  const birthdate = new Date(birthdateInput.value);
  if (Number.isNaN(birthdate.getTime())) {
    alert("Please enter a valid birth date.");
    return;
  }

  if (!genderInput) {
    alert("Please select a gender.");
    return;
  }

  const dayIndex = birthdate.getUTCDay();
  const dayName = daysofWeek[dayIndex];
  const akanName =
    genderInput.value === "female"
      ? femaleNames[dayIndex]
      : maleNames[dayIndex];

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Born on a ${dayName}, your Akan name is <strong>${akanName}</strong>.`;
}

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", getAkanName);
}
