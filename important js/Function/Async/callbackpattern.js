const payment=true;
const mark=80;

function enroll(callback){
    console.log("Course enrollment is in progress");

    setTimeout(function(){
        if(payment){
            callback()
        }
        else{
            console.log("Opps payment is not succesfull");
        }

    },2000)
}

function progress(callback){
    console.log("Your course is on progress");

    setTimeout(function(){
        if (mark>=80){
            callback()
        }
        else{
            console.log("You failed. Try hard");
        }
    },3000)
}

function getcertificate(){
    console.log("Congrats! Wishing you for better life");
}

enroll(function(){
    progress(getcertificate)
})