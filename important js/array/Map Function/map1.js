let num=[1,2,3]
//map function always return a new array so square will be a array and it will keep the result of num[0]+1 corresponding
let square = num.map(function(x){
    return x+1
})

console.log(square);