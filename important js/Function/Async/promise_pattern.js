//Promise is more efficient than a call back function. because for more function callback create a callback hell
const payment=false;
const mark=33;

function enroll(){
    console.log("Course enrollment is in progress");

    const promise=new Promise(function(resolve,reject){

        setTimeout(function(){
            if(payment){
                resolve()
            }
            else{
                reject("Sorry payment failed")
            }
    
        },2000)

    })
    return promise
}

function progress(){
    console.log("Your course is on progress");

    const promise =new Promise(function(resolve,reject){
        setTimeout(function(){
            if (mark>=80){
                resolve ()
            }
            else{
                reject ("Failed")
            }
        },3000)

    })

    return promise

    
}

function getcertificate(){

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats! Wishing you for better life");
        })
})
return promise
     
}

enroll()
        .then(progress)
        .then(getcertificate)
        .then(function(value){
            console.log(value);
        })
        .catch(function(err){
            console.log(err);
        })