/*
const moon=document.getElementById("moon");
let isBlack=false;

const change=moon.addEventListener("click",()=>{
    const body=document.body
    if(isBlack){
        body.style.backgroundColor="white"
    }
    else{
        body.style.backgroundColor="black"
        moon.style.backgroundColor="black"
        moon.style.color="white"
    }

    
}) */

const myFunction=()=>{
    const body=document.body;
    body.classList.toggle("dark-mode")
}
