// Declare an empty array fixed in values with following method

const person = [];
person[0] = "Name";
person[1] = 'Age';
person[2] = 'Gender';
person[3] = 'State';
person[1] = 'Mixed'
console.log(typeof(person))

const fruits = ['Banana', 'Orange', 'Apple', 'Pineapple', 'Star Apple'];
const description = "This fruits template"

let list = `<h1> ${description} </h1> <ul>`
for(let x of fruits){
    let newFruit =`<li>${x[3]}</li>`
    list = list + `${newFruit}</ul>`
}

const fruitss = ['Banana', 'Orange', 'Apple', 'Pineapple', 'Star Apple'];
let fruitlen = fruitss.length
let fruitlist = "<ul>";
for(let i = 0; i < fruitlen; i++){
    fruitlist = fruitlist + "<li>" + fruitss[i] + "</li>" + "</ul>"
    
}


const fruitfunction = ['Banana', 'Orange', 'Apple', 'Pineapple', 'Star Apple']
let textdis = "<ul>"
fruitfunction.forEach(myFunction)
textdis += "</ul>";

function myFunction(value){
    textdis += `<li> ${value} </li>`

}
// console.log(textdis)

const newarray =[]
newarray.push("welcome")
newarray.push("welcome2",'you','season')
// console.log(newarray)

let newtext ="<ul>"
const fruitfunct = ['Banana', 'Orange', 'Apple', 'Pineapple', 'Star Apple']
fruitfunct.forEach(mynewfunction)
newtext = newtext +"</ul>"
function mynewfunction(value){
    return newtext += `<li>${fruitfunct.splice(1, 3, "Another one", "newOne")} </li>`

}

const fruitSplice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrusSplice = fruitSplice.splice(0,1);
console.log(citrusSplice)


const fruitres = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitres.slice(1, 4);
console.log(citrus)


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a - b
});
console.log(points)

const point2 = [10, 30,50,2, 12, 100, 6, 25]
point2.sort(function (a, b){ 
    return 0.5 - Math.random()
})




let answer = document.getElementById('demo2').innerHTML = point2
// console.log(list)

