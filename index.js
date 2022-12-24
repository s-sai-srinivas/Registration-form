function validate() {
	let fullName = document.getElementById('full-name').value
	let Gender = document.getElementById('Gender').value
    let error = false

	if(fullName.length >= 5 && fullName.includes(" ")) {
		document.getElementById('full-name-valid').style.display = 'block'
		document.getElementById('full-name-invalid').style.display = 'none'
	} else {
		document.getElementById('full-name-invalid').style.display = 'block'
		document.getElementById('full-name-valid').style.display = 'none'
		error = true
	}
	if(Gender != "None") {
		document.getElementById('Gender-valid').style.display = 'block'
		document.getElementById('Gender-invalid').style.display = 'none'
	} else {
		document.getElementById('Gender-invalid').style.display = 'block'
		document.getElementById('Gender-valid').style.display = 'none'
		error = true
	}

     if(document.getElementById("Swimming").checked) {
		document.getElementById('Hobbies-invalid').style.display = 'none'
        document.getElementById('Hobbies-valid').style.display = 'block'
	}else if(document.getElementById("Reading").checked) {
        document.getElementById('Hobbies-valid').style.display = 'block'
		document.getElementById('Hobbies-invalid').style.display = 'none'
	}else if(document.getElementById("Singing").checked) {
        document.getElementById('Hobbies-valid').style.display = 'block'
		document.getElementById('Hobbies-invalid').style.display = 'none'
	}else if(document.getElementById("Dancing").checked) {
        document.getElementById('Hobbies-valid').style.display = 'block'
		document.getElementById('Hobbies-invalid').style.display = 'none'
	} else {
		document.getElementById('Hobbies-invalid').style.display = 'block'
        document.getElementById('Hobbies-valid').style.display = 'None'
		error = true
	}
    if (!error) {
        var checkedValue=""; 
        var inputElements = document.getElementsByClassName('form-check-input');
        for(var i=0; inputElements[i]; ++i){
              if(inputElements[i].checked){
                   checkedValue += inputElements[i].value;
                   checkedValue += " ";
              }
        }
        alert("Hobies of "+fullName+" (" +Gender+") are "+checkedValue)
        document.getElementById('registration-form').reset()

        	let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
    }
}

