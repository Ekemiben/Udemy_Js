const setval = new Set([1, 2,3,4,4,5,1,6,4])


// let output = ''
// setval.forEach(function(values){
//     output += values + '<br>'
//     console.log(output)
// })
let ansa = []
for(let i of setval.values()){
   
    ansa += i 
}


// Create a Set and add values

const setNewVal = new Set();
setNewVal.add('b') 
setNewVal.add('a') 
setNewVal.add('a') 
setNewVal.add('c') 
setNewVal.add('e') 
setNewVal.add('f') 

console.log(setNewVal)

let mapp = new Map([
    ["name", "Ben"],
    ["age", 'come'],
    ["gender", 'male']

])

console.log(mapp.has('name'))

let mapText ='';
mapp.forEach(function(value, index){
    mapText += index + ' = '  + value + '<br>'; 
})

let maptxt = ''
for (let x of mapp.entries()){
    maptxt += x + '<br>'
}

let dom = document.getElementById('demo').innerHTML = maptxt


