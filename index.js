function RegistrationForm(){
    var fname = document.getElementById('l-1').value;
    var lname = document.getElementById('l-2').value;
    var email = document.getElementById('l-3').value;
    var pass = document.getElementById('l-4').value;
     //document.getElementById('msg').innerText= "Welcome" +" " + fname +" " + lname + " " + "your email id is " + " " + email;

     if (pass == 'abc@123') {
        var name = document.getElementById('l-1', 'l-2', 'l-3','l-4').value;
        alert( "Welcome" +" " + fname +" " + lname + "\n " + "your ticket is booked enjoy your movie");
        } else {
            document.getElementById('msg').innerText = "Password is wrong";
        }
    }