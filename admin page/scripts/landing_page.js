let user_detials=JSON.parse(localStorage.getItem("userdata"))
 
let admin_name=document.getElementById("adminname")
  admin_name.textContent=`Welcome Admin ${user_detials.username}`

 
get_user_data()
 async function get_user_data(){

  let res= await fetch("https://636f63d0bb9cf402c81691a6.mockapi.io/mid")
  let data=await res.json()
 show_user_data(data)
 

}

function show_user_data(data)
{let user_data_table=document.getElementById("user_data_table")
    user_data_table.innerHTML=""
let tr1=document.createElement("tr")  

let id=document.createElement("th")
id.textContent="User Id"
let name=document.createElement("th")
name.textContent="User Name"
let mail=document.createElement("th")
mail.textContent="User Email "
let price=document.createElement("th")
price.textContent="Amount recived "

let status=document.createElement("th")
status.textContent="Status Of Plan"
tr1.append(id,name,mail,price,status)
user_data_table.append(tr1)

data.forEach((element,i) => {
user_data_table=document.getElementById("user_data_table")

let tr2=document.createElement("tr")  

let id=document.createElement("td")
id.textContent=element.id
let name=document.createElement("td")
name.textContent=element.name
let mail=document.createElement("td")
mail.textContent=element.mail
let price=document.createElement("td")
price.textContent=` ${element.price}$`
price.setAttribute("class","price")
let status=document.createElement("td")
status.textContent="Active"
status.setAttribute("class","status")
status.onclick=()=>{
    if(status.textContent=="Deactivated")
    {
        status.textContent="Active"
        status.style.backgroundColor="chartreuse"   
    }
    else
    {
        status.textContent="Deactivated"
    status.style.backgroundColor="red"
    }
   
}
tr2.append(id,name,mail,price,status)
user_data_table.append(tr2)
});
}


