let arr=["kawser","kamrul","kaharul"]
var arr1=["khairul","shipon","Khadem"]
const arr2=["Ripon","Manik","Roton"]

//let first concat all of the above array

let arr3=arr.concat(arr1,arr2)
console.log(arr3);

//now let conver my "arr3" array to string. we need to use "tostring" method to change our array to string

let str1=arr3.toString()
console.log(str1);

//we used pop to remove last element . here we have  shift method to remove first element

arr3.shift()
console.log(arr3);

//we used push method for adding a last element in the array. with unshift method we can add a element as a first element

arr3.unshift("Uchchash")
console.log(arr3);

//we can sort our element alphabetically and numerically using sort method

arr3.sort()
console.log(arr3);

//we can add a element with indexing with the method of splice.. this two represent where you want to add the element. and 0 represnt how many element you want to remove 

arr3.splice(2,0,"Dull")
console.log(arr3);