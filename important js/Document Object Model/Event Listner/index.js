const dada = document.querySelector(".dada")
const chacha= document.querySelector(".chacha")
const bhai = document.querySelector(".bhai")

dada.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Hello dada");
})


chacha.addEventListener("click",(e)=>{
    console.log("Hello chacha");
})


bhai.addEventListener("click",(e)=>{
    console.log("Hello bhai");
})