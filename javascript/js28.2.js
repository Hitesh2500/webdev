let body=document.querySelector("body")
body.style.backgroundColor="white"

let heading=document.querySelector("h1")
heading.style.textAlign="center"

let btn=document.querySelector("button")

 
c="white"
btn.onclick=()=>{
    if(c=="white"){
        btn.innerText="LIGHT"
            body.style.backgroundColor="black"
            heading.style.color="white"
            
            c="black"}
     else{
        body.style.backgroundColor="white"
        btn.innerText="DARK"
        heading.style.color="black"
             c="white"
            }
}