let num=[1,2,3,4,5,6]
//if one is odd then it will return true otherwise false
let odd=num.some(function(x){
    return x%2==0
})

console.log(odd);

//if all element are even then it will return true else false
let even=num.every(function(x){
    return x%2==0
})

console.log(even);