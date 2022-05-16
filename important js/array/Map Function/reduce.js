//In reduce we have two parameter one in acculumuter second one is current value

let num=[1,2,3,4]

let addition=num.reduce(function(acc,cur){
    return acc+cur
},10)

console.log(addition);