let validate = () => {
	let firstname = document.getElementById("firstname");
	let email = document.getElementById("email");
	let subject = document.getElementById("subject")
	let subjecttext = document.getElementById("subjecttext");
	console.log("i got this " + firstname.value); 
	if (firstname.value.length  > 0 )
	{
		firstname.classList = 'form-control is-valid';
		document.getElementById("firstnameerror").classList = "text-danger d-none";
	}
	else
	{
		firstname.classList = 'form-control is-invalid';
		document.getElementById("firstnameerror").classList = "text-danger";
	}
	if (email.value.length > 0)
	{
		email.classList = 'form-control is-valid';
		document.getElementById("emailerror").classList = "text-danger d-none";
	} 
	else
	{
		email.classList = 'form-control is-invalid';
		document.getElementById("emailerror").classList = "text-danger";
	}
	if (subject.value.length > 0)
	{
		subject.classList = 'form-control is-valid'
		document.getElementById("subjecterror").classList = "text-danger d-none";
	}
	else
	{
		subject.classList = 'form-control is-invalid'
		document.getElementById("subjecterror").classList = "text-danger ";
	}
	if (subjecttext.value.length > 0)
	{
		subjecttext.classList = 'form-control is-valid';
		document.getElementById("subjecttexterror").classList = 'text-danger d-none';
	}
	else
	{
		subjecttext.classList = 'form-control is-invalid';
		document.getElementById("subjecttexterror").classList = 'text-danger';
	}
}