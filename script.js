const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pria = document.getElementById('pria');
const wanita = document.getElementById('wanita');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});

function validate() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	const priaValue = pria.value();
	const wanitaValue = wanita.value();

	if(priaValue === ''){
		if(wanitaValue === ''){
			setError(pria, 'Gender cannot be blank')
		}
		else{
			setSuccess(pria);
		}
	}

}

function setError(input, message){
	const formItem = input.parentElement.parentElement;
	const small = formItem.querySelector('small');
	formItem.className = 'form-item2 error'
	small.innerText = message;
}


function setSuccess(input){
	const formItem = input.parentElement.parentElement;
	formItem.className = 'form-item2 success'
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-item error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-item success';
}