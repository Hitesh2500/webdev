let btn=document.querySelector("button")

let box=document.querySelector(".box")
c="blue"
btn.onclick=()=>{
    if(c=="blue"){
        box.innerText="hello"
        box.style.backgroundColor="green"
        c="green"
    }
    else{
        box.style.backgroundColor="blue"
        c="blue"
    }
  
}