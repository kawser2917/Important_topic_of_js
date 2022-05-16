const  Status =true;
console.log("I am doing First work");

const promise =new Promise(function(resolve,reject){
    setTimeout(function(){
        if (Status){
            resolve("I will be execute later")
        }
        else{
            reject(" I am failed to execute")
        }   
    },2000)
})

console.log("I am doing third work");

promise
        .then(function(value){
            console.log(value);
        })
        .catch(function(err){
            console.log(err);
        })