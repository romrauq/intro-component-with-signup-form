const input_fields = document.getElementsByClassName("input-field");
const first_name_input = document.getElementById("first-name-input");
const first_name_error = document.getElementById("first-name-error");
const last_name_input = document.getElementById("last-name-input");
const last_name_error = document.getElementById("last-name-error");
const email_input = document.getElementById("email-input");
const email_error = document.getElementById("email-error");
const password_input = document.getElementById("password-input");
const password_error = document.getElementById("password-error");
const submit_button = document.getElementById("submit-button");

// Hide error texts by default:
first_name_error.style.display = "none";
last_name_error.style.display = "none";
email_error.style.display = "none";
password_error.style.display = "none";

// Hide error icons within input fields by default:
for (let i = 0; i < input_fields.length; i++) {
	input_fields[i].style.backgroundImage = "none";
}
