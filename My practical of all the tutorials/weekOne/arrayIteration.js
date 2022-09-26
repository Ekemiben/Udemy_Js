let person =[
    'firstname',
    'surname',
    'middlename',
    'age',
    'Gender'
]
// forEach Loop
let text = []
person.forEach(myFunction)

function myFunction(value, index, extra){
    return text +=value + '<br>'
}

// Map function

let num = [23,4,5,6]
let maparray = num.map(newerFunction)
console.log(maparray)

function newerFunction(value, index){
    let newValue ='';
    return newValue = value * 2
}

// Filter Method
let filterArr = num.filter(filterFunction)
console.log(filterArr)
function filterFunction(value){
    return value != 10

}

// Reducer method
let reducerArr = num.reduce(reducer)
console.log(reducerArr)
function reducer(total, value){
    return total + value;
}
// Every Method
let everymethod = num.every(everyFunction)
console.log(everymethod)
function everyFunction(total, value){
    return total > 12
}

// Array Key
let persons = person.keys()
for (let x of persons){
    let text =''
    text += x + '<br>'
    console.log(text)
}



const Answers = document.getElementById('demo').innerHTML = newValue
console.log(text)