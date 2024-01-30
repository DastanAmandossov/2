function register(){
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let fullName = document.getElementById('exampleInputFullName1').value;
    let country  = document.getElementById('exampleInputCountry').value;
    let date = document.getElementById('exampleInputBirthdate').value;

    localStorage.setItem('keyEmail', email);
    localStorage.setItem('keyPassword', password);
    localStorage.setItem('keyFullName', fullName);
    localStorage.setItem('keyCountry', country);
    localStorage.setItem('keyDate', date);
    window.location.href = "index2.html";
}

document.getElementById("email").innerHTML = localStorage.getItem('keyEmail');
document.getElementById("password").innerHTML = localStorage.getItem('keyPassword');
document.getElementById("fullName").innerHTML = localStorage.getItem('keyFullName');
document.getElementById("country").innerHTML = localStorage.getItem('keyCountry');
document.getElementById("date").innerHTML = localStorage.getItem('keyDate');

function login(){
    let enteredEmail = document.getElementById('exampleInputEmail1').value;
    let enteredPassword = document.getElementById('exampleInputPassword1').value;

    let storedEmail = localStorage.getItem('keyEmail');
    let storedpassword = localStorage.getItem('keyPassword');

    if(enteredEmail === storedEmail && enteredPassword === storedpassword){
        window.location.href = "index3.html";
    }
}