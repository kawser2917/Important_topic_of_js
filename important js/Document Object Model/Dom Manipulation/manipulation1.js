//in this program i will try to learn about innertext,textcontent,innerHTML,style,value

//selection element with js

const para = document.querySelectorAll("p")
const ul=document.querySelector("ul")
const Forms= document.querySelectorAll("input")


//innerText: This will give us the output whcih we can see them in brower 

para[0].innerText ="Hi, i am a innerText. I just work with the browser content"


//textContent: This will show all hidden content also which browser can not execute

para[1].textContent = "I am innerContent. I will show you all of the content which you have in html code"


//innerHTML : In innerHTML we can write our code like html in javascript 

ul.innerHTML ="<li>i will change any HTML element. I am innerHTML</li>"

para[2].innerHTML="<h4>I was a paragraph i am changed with innerHTML</h4>"

//value: value are used for watching the value of form 
console.log(Forms[0].value);
console.log(Forms[2].checked);

//style: style property used for using all css property in js 

para[0].style.backgroundColor ="black"
para[0].style.padding="15px"
para[0].style.color ="white"
 