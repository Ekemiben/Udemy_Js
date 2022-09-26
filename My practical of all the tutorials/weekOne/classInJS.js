class Car {
    constructor(name, year, model){
        this.name = name
        this.carYear = year
        this.model = model
    }
    age(){
        let date = new Date()
        return date.getFullYear() - this.year
    }
   
    
}
let mycar = new Car("Toyota", 2003, "formatic")
console.log(mycar.age())