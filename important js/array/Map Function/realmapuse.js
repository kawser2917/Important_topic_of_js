let Info =[
    {
        name:"Kawser",
        age:24,
        location:'Dhaka',
    },
    {
        name:"kamrul",
        age:20,
        location:'Dhoroil',
    },
    {
        name:"kaharul",
        age:16,
        location:"Dhoroil"
    }
]

let names=Info.map(function(x){
    return x.name;
})

console.log(names);