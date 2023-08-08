var form = document.getElementById('myForm')
form.addEventListener('submit',function(event) {
event.preventDefault()
var name = document.getElementById('name').value
var email = document.getElementById('email').value
var number = document.getElementById('number').value
console.log(name)
console.log(email)
console.log(number)
alert("Information has been entered");
});



