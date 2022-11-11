let obj= JSON.parse(localStorage.getItem("item")) ;
let total=document.getElementById("total");
let val=0;

if(obj.key=="true"){
    val=(obj.price).slice(1);
    val=Number(val)*12;
     
}else{
    val=(obj.price).slice(1);
    
}

total.innerHTML="Total Amount: $"+val;

 onsubmit=()=>{
    alert("Payment Sucessfull ,check your mail fo details");
   // window.location.assign("in")
 } 