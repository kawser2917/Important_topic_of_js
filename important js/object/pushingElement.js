//This keyword refer the current object element . here this means the name of the Name object
const Name ={
    name:"kawser Ahmed",
    age:24,
    occupation: "Data Scientist",

    SayHello:function(){
        console.log("Hello",this.name);
    }
}

Name.goal='billionaire'

console.log(Name);