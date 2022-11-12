let obj= JSON.parse(localStorage.getItem("item")) ;
let total=document.getElementById("total");
let val=(obj.price).slice(1);

if(obj.key=="true"){
    val=(obj.price).slice(1);
    val=Number(val)*12;
     
}else{
    val=(obj.price).slice(1);
    
}

total.innerHTML="Total Amount: $"+val;

 onsubmit=(e)=>{
    e.preventDefault();
    create_item();
   //alert("Payment Sucessfull !! redirects you to main page in 2 seconds");
   
   // window.location.assign("in")
 } 



 async function  create_item(){
    
    
    let name=document.getElementById("name").value;
    let price=Number(val);
    let mail=document.getElementById("mail").value;
    let id=Math.random().toString(36).slice(2);

    
   // console.log(name,price,description,image,delivery);

   let send_data={
    id,
    name,
    mail,
    price,
    
  
   };

   console.log(send_data );

    let res=await fetch('https://636f63d0bb9cf402c81691a6.mockapi.io/mid',{
        method:'POST',
        body:JSON.stringify(send_data),

        headers:{
            'Content-Type':'application/json',
        },
    });
    
    let data= await res.json();
    //console.log(data);
     pay_msg()
    
}

function pay_msg(){
     alert("Payment Sucessfull !! redirects you to main page in 2 seconds"); 
     
        window.location.assign("index.html");

}
