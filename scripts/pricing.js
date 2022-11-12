import navbar from "../components/navbar.js";
import {  footer } from "../components/footer.js"

let navDiv = document.getElementById("navbar");
navDiv.innerHTML = navbar();

let subs_key="false";

let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footer();

let monthly=document.getElementById("month");
let yearly=document.getElementById("year");

monthly.onclick=()=>{
    //submitting a post  to server
    month();
};

yearly.onclick=()=>{
    //submitting a post  to server
    year();
};

function year(){
      subs_key="true";
    for(let i=1;i<=4;i++){
        let id=document.getElementById(`id_${i}`);
        id.innerHTML="";
        let poster=document.createElement("h1")
        poster.setAttribute("id",`cost${i}`);
        let val=0;
        if(i==1){
            val=0.5;
        }
        if(i==2){
            val=6
        }
        if(i==3){
            val=20;
        }
        if(i==4){
            val=100;
        }
        poster.innerText="$"+val;
       
        let span=document.createElement("span");
        span.innerText="/per month"
        
        val=val*12;
        let billed=document.createElement("p");
        let span2=document.createElement("span");
        span2.innerText=`$ ${val}/year`
        billed.innerText= "billed"+" at ";
        billed.append(span2);
        
        poster.append(span);
        id.append(poster,billed);

    }
}

function month(){
    subs_key="false";
    for(let i=1;i<=4;i++){
        let id=document.getElementById(`id_${i}`);
        id.innerHTML="";
        let poster=document.createElement("h1")
        poster.setAttribute("id",`cost${i}`);
        let val=0;
        if(i==1){
            val=0.5;
        }
        if(i==2){
            val=10
        }
        if(i==3){
            val=25;
        }
        if(i==4){
            val=120;
        }
       
        poster.innerText="$"+val;
        
        let span=document.createElement("span");
        span.innerText="/per month"

        let billed=document.createElement("p");
        billed.innerText="billed monthly"
        
        poster.append(span);
        id.append(poster,billed);

    }
}

for(let i=1;i<=4;i++){
    let pay_btn=document.getElementById(`pay${i}`)
    pay_btn.onclick=()=>{
        let cost=document.getElementById(`cost${i}`)
        cost=cost.innerHTML;
        let cost_price="";
        for(let i=0;i<cost.length;i++){
            if(cost[i]=='<'){
                break;
            }
            cost_price+=cost[i];
        }
        //let item= JSON.parse(localStorage.getItem("item")) || "";
        let obj={
            key:"",
            price:"",
        };
        
        //obj[price]=cost_price;
        obj.key=subs_key;
        obj.price=cost_price

        localStorage.setItem("item",JSON.stringify(obj));
        window.location.assign("checkout.html");
    }
    
}