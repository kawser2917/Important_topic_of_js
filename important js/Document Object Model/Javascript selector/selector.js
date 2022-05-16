
//getElementsByTagName: Here we will get a html collection. where we can not use any type of loop we have to access with the index number. which is not efficient 
const heading1 = document.getElementsByTagName('h1')
heading1[0].style.color="red"

//getElementById: here we can select a html element with id. it will give us single element 
const mypara1 = document.getElementById("para1");
mypara1.style.backgroundColor ="yellow"

//getElementsByClassName: here we will get html collection like tagname. we can not use loop here also but we can use it with index number

const mypara2 = document.getElementsByClassName("para")

mypara2[0].style.color ="red"
mypara2[1].style.color ="red"

//here we can see some problem we need to access our element with inde. but if a user change the code then the index will be changed. the we will face some problem . for that reason most of the time we will select queryselector/ queryselectorAll 

//querySelector : this will select the one first element 

// const myheading2=document.querySelector("h3") //this line will select the first line 

// myheading2.style.color ="red"

//querySelectorAll : this will select all of the similar element and give us a nodelist. here we can use for loop which we could not use in the html collection. that's why we will use the querySelector. we can easily select html element like css

const heading2 = document.querySelectorAll("h3");

heading2.forEach(function(e){
    e.style.fontWeight ="800";
    e.style.fontSize ="4rem"
})


 