let login_btn=document.getElementById("login_btn")
 login_btn.onclick=()=>{
 let username=document.getElementById("username").value
 let password=document.getElementById("password").value    
let user_detials={
 username,
 password
}
localStorage.setItem("userdata",JSON.stringify(user_detials))
 
window.location.replace("./landing_page.html")
}