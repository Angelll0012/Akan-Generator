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

//function getakaname(event) =starts the function and names it
function getAkanName(event) {
  event.preventDefault(); // stops the page from reloading after clicking submit button

  const birthdateInput = document.getElementById("birthdate");
  //finds the date
  const genderInput = document.querySelector('input[name="gender"]:checked');
  //finds which gender u click in the form

  if (!birthdateInput.value) {
    //checks if you left the date box empty
    alert("Please enter your birth date."); //alert will show if u dont put the date in
    return;
  }

  //birthdateinput.value = this inputs the string of 1998 tp 2026
  const birthdate = new Date(birthdateInput.value); //turns the date into a real date
  if (Number.isNaN(birthdate.getTime())) {
    //checks if the date you typed is fake or broken, if not it will show an alert
    alert("Please enter a valid birth date."); //the alert that will show
    return;
  }

  if (!genderInput) {
    // checks if you forgot to pick gender
    alert("Please select a gender."); //shows when u dont pick a gender
    return;
  }

  //getUTCDay=finds the day of the week for a specific date
  const dayIndex = birthdate.getUTCDay(); //it gets the number 0 to 6 depending to the akan name based on birthdate and dayoftheweek
  const dayName = daysofWeek[dayIndex]; //selects the number from the list of day names
  const akanName =
    genderInput.value === "female"
      ? femaleNames[dayIndex]
      : maleNames[dayIndex]; // picks btwn a female and male names from the list using the day number and gender

  const resultDiv = document.getElementById("result");
  //finds the spot on the page to disblay the results
  if (resultDiv) {
    resultDiv.innerHTML = `Born on a ${dayName}, your Akan name is <b>${akanName}</b>.`;
  }
  //puts the final text and your akan name insite the spot
  //You use strong because it make sthe text bold and adds sematic imprtance
  //You can also use b just to make the text bold
  //You can also use em to make it italic
}

if (typeof document !== "undefined") { //checks if the document exixts
  document.addEventListener("DOMContentLoaded", () => { //it waits for the page to show the html and css
    const form = document.getElementById("form"); // gets the main form on the page
    if (form)
      // checks if the form was actually found on the page
       {
      form.addEventListener("submit", getAkanName);
      // tells the form to run the function when the submit button is clicked
    }
  });
  // () => {}  acts as a wrapper that holds the code you want to execute once the page finishes loading
}
