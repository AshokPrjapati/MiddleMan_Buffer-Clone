function year(){
      
    for(let i=1;i<=4;i++){
        let id=document.getElementById(`id_${i}`);
        id.innerHTML="";
        let poster=document.createElement("h1")
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
    for(let i=1;i<=4;i++){
        let id=document.getElementById(`id_${i}`);
        id.innerHTML="";
        let poster=document.createElement("h1")
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