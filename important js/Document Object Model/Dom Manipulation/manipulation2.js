//selecting all element

const heading=document.querySelector("h1")
const para=document.querySelector("p")
const img=document.querySelector("img")
const a=document.querySelector("a")

const li=document.querySelector("li")


//getAttribute: i will get the id name 
console.log();

//setAttribute: with this setAttribute we can set a class or any attribute to our html code

para.setAttribute("class","para newClass")

//src,href: with this src and href we can get a href from anchor tag and src from img tag 

console.log(img.src);
console.log(a.href);

//parentElement: This will show the parent elemnet
console.log(li.parentElement.parentElement);//opps i went to body

//sibling, nextElementSiblings are same

//getComputedStyle: i can see which style we use in our css with this property

const camps =window.getComputedStyle("h1")

console.log(camps.color);
