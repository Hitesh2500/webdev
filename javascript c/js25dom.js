
// selection

// let heading=document.getElementsByTagName("h1")[0]

// console.log(heading)

// let para=document.getElementsByClassName("para")[0]
// console.log(para)

// let hh=document.getElementById("hh")
// console.log(hh)

// selection by query selector
//1 select the first comes 
// let heading=document.querySelector(".para")
// console.log(heading)
// let heading=document.querySelector("h1")
// console.log(heading)
// let heading=document.querySelector("#hh")
// console.log(heading)

// 2 select all
// let  heading=document.querySelectorAll("h1")
// console.log(heading)


// day26
// ab selected ko change krna

let heading=document.querySelector("h1")
console.log(heading.innerText="COLLEGE HUB")
heading.style.backgroundColor="green"


let para=document.querySelector(".para")
console.log(para)
para.style.backgroundColor="pink"
para.style.width="300px"
para.style.height="300px"
para.style.padding="20px"
para.style.borderWidth="10px"
para.style.borderStyle="solid"
para.style.borderRadius="50px"
para.style.borderColor="red"
 

// day27

let body=document.querySelector("body")
body.style.backgroundColor="yellow"

// /single click
// let btn=document.querySelector("button")
// btn.onclick=()=>{
//     heading.innerText="kumar"
//     heading.style.backgroundColor="purple"
// }
// double click

let btn=document.querySelector("button")
btn.ondblclick=()=>{
    heading.innerText="kumar"
    heading.style.backgroundColor="purple"
    body.style.backgroundColor="black"
    heading.style.textDecoration="white"
}

// day28  toggle button


