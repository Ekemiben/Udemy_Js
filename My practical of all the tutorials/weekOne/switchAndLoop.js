// if else if syntax
let display = '';
let text = 'Today is a great day';
if (display == text ){
    console.log(text)
} else if (display !== text){
    console.log("is not the same")
} else {
    console.log("neutral")
}


// Switch Case Statement

let dat;
switch (new Date().getDay()) {
    case 0:
      day = "Smon";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
      default:
      day = 'not a day'
      console.log(date)
  }




  let newDat = (new Date().getDate())
  console.log(newDat)



//   Loop statement

let persons = ["name", 'age', 'gender', 'marital status'];
let i =0
let len =persons.length
let txt = ''
for(; i < len; i++ ) {
    txt += persons[i] + '<br>';
}

// For loop of statement
let texte =''
for(let i of persons){
    texte += i +'<br>'
}

// For loop in statement is used with object
let personObject = {
    First_Name : 'Ekemini',
    Last_Name : 'Ben',
    Middle_Name : 'Sunday',
    Age : 30
}
let objText = '';
for(let x in personObject){
    objText += personObject[x] + '<br>'
}
console.log(objText)

// While Loop
let num = 0;
let newNum =''
while(num < 19){
    newNum += 'the number is ' + num + '<br>'
    num ++
}

// Do while
let doNum = 0;
let newDoNum = ''
do{
    newDoNum += 'the do number is ' + doNum + '<br>'
    doNum ++
}
while(doNum < 20);

  let result = document.getElementById('demo').innerHTML = newDoNum
  