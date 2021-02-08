let torres =document.querySelectorAll(".torre")


for(let i=30;i<110;i+=10){
    let disco=document.createElement("div")
    disco.classList.add("disco")
    disco.style.width=i+"%";
    torres[0].appendChild(disco)
}


document.querySelector(".hanoi").onclick=(e)=>{
    console.log(e)
}

