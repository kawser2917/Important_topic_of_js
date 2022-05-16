function User(name,email){
    this.name=name,
    this.email=email
}

User.prototype.login=function(){
    this.online=true
    console.log(this.name,"Just Logged In");
    return this
}

User.prototype.logout=function(){
    this.online=false
    console.log(this.name,"just Logged out");
    return this
}

let userOne = new User("kawser","kawserahmed@gmail.com")

let userTwo = new User("kamrul","kamrul@gmail.com")

userOne.login().logout().login()

console.log(userOne);