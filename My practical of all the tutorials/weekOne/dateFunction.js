const newDate = new Date();
newDate.getFullYear()


let text ='';
const today = new Date()
const newDay = today.getUTCDate()
const yesterday = document.getElementById('txt').value;

function btnclick(){
    if(newDay > yesterday){
        text = ' You are up to date'
    } else {
        text =' it is not possible for yesterday to be greater than today'
    }
    
    console.log(text)

}






const dateStorage = document.getElementById('demo').innerHTML = newDay
console.log(newDate)