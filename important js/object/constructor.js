function User(name,email){
    this.name=name,
    this.email=email,
    this.online=false,
    this.login=function(){
        console.log(this.name,"Just logged in")
    }
}

let userOne = new User("kawser","kawser@gmail.com")
let userTwo = new User("kamrul","kamrul@gmail.com")

console.log(userOne);
userOne.login()