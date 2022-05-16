//function for displaying my answer
function display(sum){
    console.log(sum);
}

//function for calculating my answer
function calc(num1,num2,callback){
    var result =num1+num2
    callback(result)  
}

calc(10,20,display)