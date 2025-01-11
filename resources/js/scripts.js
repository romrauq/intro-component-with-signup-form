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

// Function to validate email
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Add a click event listener to the submit button:
submit_button.addEventListener("click", (event) => {
	event.preventDefault();

	// Check if first name input field is empty:
	if (first_name_input.value == "") {
		first_name_input.style.border = "2px solid hsl(0, 100%, 74%)";
		first_name_input.style.backgroundImage = `url("./resources/images/icon-error.svg")`;
		first_name_error.style.display = "block";
	} else {
		first_name_input.style.border = "1px solid hsl(246, 25%, 77%)";
		first_name_input.style.backgroundImage = "none";
		first_name_error.style.display = "none";
	}

	// Check if last name input field is empty:
	if (last_name_input.value == "") {
		last_name_input.style.border = "2px solid hsl(0, 100%, 74%)";
		last_name_input.style.backgroundImage = `url("./resources/images/icon-error.svg")`;
		last_name_error.style.display = "block";
	} else {
		last_name_input.style.border = "1px solid hsl(246, 25%, 77%)";
		last_name_input.style.backgroundImage = "none";
		last_name_error.style.display = "none";
	}

	// Validate email input:
	const email_value = email_input.value.trim();

	if (validateEmail(email_value)) {
		email_input.style.border = "1px solid hsl(246, 25%, 77%)";
		email_input.style.color = "hsl(0, 0.00%, 0.00%)";
		email_input.style.backgroundImage = "none";
		email_error.style.display = "none";
	} else {
		email_input.style.border = "2px solid hsl(0, 100%, 74%)";
		email_input.style.color = "hsl(0, 100%, 74%)";
		email_input.style.backgroundImage = `url("./resources/images/icon-error.svg")`;
		email_error.style.display = "block";
	}

	// Check if password input field is empty:
	if (password_input.value == "") {
		password_input.style.border = "2px solid hsl(0, 100%, 74%)";
		password_input.style.backgroundImage = `url("./resources/images/icon-error.svg")`;
		password_error.style.display = "block";
	} else {
		password_input.style.border = "1px solid hsl(246, 25%, 77%)";
		password_input.style.backgroundImage = "none";
		password_error.style.display = "none";
	}
});
