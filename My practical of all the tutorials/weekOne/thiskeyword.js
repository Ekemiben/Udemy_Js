// const personDetails = {
//     surname:"Ben",
//     firstname: "Ekemini",
//     middlename:"Sunday",
//     age:29,
//     gender:"Male",
    
// } 


// const personName = {
//     fullname(){
//         return this.firstname + " " + this.middlename + " " + this.surname
//     }

// }

// console.log(personName.fullname.call(personDetails))


const personDetails1 = {
    surname:"Ben",
    firstname: "Ekemini",
    middlename:"Sunday",
    age:29,
    gender:"Male",
    fullname : function(){
        return this.firstname + " " + this.middlename + " " + this.surname
    }
    
} 


const member = {
   church:"Apostolic",
   District:"Ado"
}

let fullname = personDetails1.fullname.bind(member)
// console.log(personDetails1.fullname.bind(member))
let screenOut = document.getElementById('demo').innerHTML = fullname()



