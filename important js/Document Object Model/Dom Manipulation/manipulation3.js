document.title ="Manipulation 3"

const b =document.querySelector("body")

//creating a paragraph
const para=document.createElement("p")

//pusing some text into the paragraph tag
para.innerText="Hello this is my last manipulation part"
//append: this will add the element in the end of the selected element
b.appendChild(para)

const myImg = document.createElement("img")
myImg.src="https://i.ytimg.com/vi/6n3BunmIHqY/maxresdefault.jpg"


const para1=document.querySelector("p")
//this will add the element at the first position of the element
b.prepend(myImg)
myImg.style.width="300px"
myImg.style.height="300px"

//remove: this method will remove an element which we want to remove 
b.removeChild(para)