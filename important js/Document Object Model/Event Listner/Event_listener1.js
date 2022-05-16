const btn=document.querySelector("button")

const ul = document.querySelector("ul")

const newLi = document.createElement("li")
newLi.innerText="Task 4"

btn.addEventListener("click",(e)=>{
    ul.prepend(newLi)
})