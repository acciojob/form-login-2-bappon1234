//your JS code here. If required.
const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e){
	e.preventDefault();

	const firstName = document.querySelector('input[name="First Name"]').value;
	const lastName = document.querySelector('input[name="Last Name"]').value;
	const phoneNumber = document.querySelector('input[name="Phone Number"]').value;
	const emailId = document.querySelector('input[name="Email ID"]').value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${[phoneNumber] Email ID: ${emailId}}`);
});