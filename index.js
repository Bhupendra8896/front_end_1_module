function submitForm() {
    let name = document.getElementById('name').value;
    let namee = document.getElementById('namee').value;
    let email = document.getElementById('email').value;
    console.log(name);
    console.log(name, namee, email);
    if ( name.length&& namee.length  && email.length ) {
         alert("your Form submitted successfully thank you!")
    }
     else {
        alert("please fill all required fields!")
    }
}