var firstname = document.forms['signup-form']['firstname'];
var lastname = document.forms['signup-form']['lastname'];
var email = document.forms['signup-form']['email'];
var address = document.forms['signup-form']['address'];
var student = document.forms['signup-form']['student'];
var password = document.forms['signup-form']['password'];
var password_confirm = document.forms['signup-form']['password_confirm'];

var firstname_error = document.getElementById('firstname_error');
var lastname_error = document.getElementById('lastname_error');
var email_error = document.getElementById('email_error');
var address_error = document.getElementById('address_error');
var student_error = document.getElementById('student_error');
var password_error = document.getElementById('password_error');


firstname.addEventListener('blur', firstnameVerify, true);
lastname.addEventListener('blur', lastnameVerify, true);
email.addEventListener('blur', emailVerify, true);
address.addEventListener('blur', addressVerify, true);
student.addEventListener('blur', studentVerify, true);
password.addEventListener('blur', passwordVerify, true);



function Validate() {

  if (firstname.value == "") {
    firstname.style.border = "1px solid red";
    document.getElementById('firstname_div').style.color = "red";
    firstname_error.textContent = "Firstname is required";
    firstname.focus();
    return false;
  }

  if (firstname.value.length < 1) {
    username.style.border = "1px solid red";
    document.getElementById('firstname_div').style.color = "red";
    firstname_error.textContent = "Firstname must be at least 1 characters";
    firstname.focus();
    return false;
  }

  if (lastname.value == "") {
    lastname.style.border = "1px solid red";
    document.getElementById('lastname_div').style.color = "red";
    lastname_error.textContent = "lastname is required";
    lastname.focus();
    return false;
  }

  if (lastname.value.length < 3) {
    lastname.style.border = "1px solid red";
    document.getElementById('lastname_div').style.color = "red";
    lastname_error.textContent = "lastname must be at least 1 characters";
    lastname.focus();
    return false;
  }

  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }

  if (address.value == "") {
    address.style.border = "1px solid red";
    document.getElementById('address_div').style.color = "red";
    address_error.textContent = "address is required";
    address.focus();
    return false;
  }

  if (address.value.length < 5) {
    address.style.border = "1px solid red";
    document.getElementById('address_div').style.color = "red";
    address_error.textContent = "lastname must be at least 5 characters";
    address.focus();
    return false;
  }

  if (student.value == "") {
    student.style.border = "1px solid red";
    document.getElementById('student_div').style.color = "red";
    student_error.textContent = "StudentID is required";
    student.focus();
    return false;
  }

  if (student.value.length != 8) {
    student.style.border = "1px solid red";
    document.getElementById('student_div').style.color = "red";
    student_error.textContent = "StudentID must be 8 characters";
    student.focus();
    return false;
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }

  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}

function firstnameVerify() {
  if (firstname.value != "") {
   firstname.style.border = "1px solid #5e6e66";
   document.getElementById('firstname_div').style.color = "#5e6e66";
   firstname_error.innerHTML = "";
   return true;
  }
}
function lastnameVerify() {
  if (lastname.value != "") {
   lastname.style.border = "1px solid #5e6e66";
   document.getElementById('lastname_div').style.color = "#5e6e66";
   lastname_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function addressVerify() {
  if (address.value != "") {
   address.style.border = "1px solid #5e6e66";
   document.getElementById('address_div').style.color = "#5e6e66";
   address_error.innerHTML = "";
   return true;
  }
}
function studentVerify() {
  if (student.value != "") {
   student.style.border = "1px solid #5e6e66";
   document.getElementById('student_div').style.color = "#5e6e66";
   student_error.innerHTML = "";
   return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
}

