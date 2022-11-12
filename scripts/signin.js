let data = JSON.parse(localStorage.getItem("signinData")) || [];

function getFormData(){
    let form = document.getElementById("user_sign_up_form")
    let user_email = document.getElementById("user-email").value;
    let user_password  = document.getElementById("user-password").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(user_email.match(validRegex) && user_password.length>7){
        user_email = user_email;
        addData(user_email,user_password);
        form.reset();
        window.location.replace("signin.html");
    }else{
        alert("Invalid email or Password is less than 8 characters");
    }
    // addData(user_email,user_password);

    function addData(user_email,user_password){
        let p = {
            user_email,
            user_password
        }
        // data = JSON.parse(localStorage.getItem("signinData")) || [];
        data.push(p);
        localStorage.setItem("signinData",JSON.stringify(data));
        alert("Sign Up successfully");
    }
}

console.log("I m working");
function signIn(e){
    e.preventDefault();
    let email = document.getElementById("user-email-in").value;
    let signin_pass = document.getElementById("user-password-in").value;
    let count =0;
    let n = data.length;
    for(let i=0;i<n;i++){
        if(data[i].user_email === email){
            if(data[i].user_password === signin_pass){
                window.location.replace("pricing.html");
                return;
            }else{
                alert("Incorrect Password");
                return;
            }
        }else{
            count=0;
        }
    }
    if(count ===0){
        alert("Not a User! Please Create an Accout");
    }
}
