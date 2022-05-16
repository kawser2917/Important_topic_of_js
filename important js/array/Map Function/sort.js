let num=[10,100,50,30]
//this will short but 100 will be come first because it has 1 first 
num.sort()

console.log(num);


//solved the problem..try to understand the concept
let newnum=num.sort(function(a,b){
    return a-b
})

console.log(newnum);