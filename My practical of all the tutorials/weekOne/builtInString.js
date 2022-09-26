let myFirstString = "I am the first one as you can see"
console.log(myFirstString.length)

// find index of a string inside another string
console.log(myFirstString.indexOf("first"))


const car = ["BMW", "Volvo", "JWagon"];

car[1] ="bittle";
car.push('jet')

console.log(car)

let motor = 10 * 5
console.log(motor)

function myFunction(a , b){
    return b + a;
}
let result = myFunction(20, 10);
console.log(myFunction(40, 50))
console.log(result)

function celsius(fahrenheight){
    return(5/9) *(fahrenheight -32)
}
let result1 = celsius( 500)
console.log(result1)
document.getElementById('demo').innerHTML = celsius(77);
// let y = document.getElementById('demo').innerHTML = celsius


const car1 = {
    name:"Benz",
    model:2016,
    weight:"900kg"
}
   
    
   const Bus = {model:2022, type:"Type d", plate_number: 2230

        // smallBus = {
        //     model:2021,
        //     plate_number:4450
        // },
        
    }
    

const person = {
    firstname :"Ekemini",
    lastname:"Ben",
    age:33,
    height:2.45,

    fullname : function(){
        return this.firstname + " " + [this.lastname]
        
    },
    
    
}
console.log(person.fullname())

let text = "hello world";
let output = text.replace("hello","Hello")
let world = text.replace("world", "World")
let resul = output + " " + world
console.log(resul)

let text1, text2, text3

text1 = "Template Literals"
text2 =['JavaScript','CSS', 'React' , 'Java']

text3 =`<h2>${text1}</h2><ul>`;
for(let x of text2){
    text3 +=`<li>${x}</li>`
}
text3 +=`</ul>`
let answer = document.getElementById('demo1').innerHTML = text3

