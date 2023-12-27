//CONDICIONALES
//EJERCICIO 1


let num1 = 4
let num2 = 5

if(num1 > num2){
    console.log(num1)
} else{
    console.log(num2)
}

//EJERCICIO 2

if(num1 > num2){
    console.log(num1)
} else if(num2 > num1){
    console.log(num2)
} else if(num1 = num2){
    console.log("The numbers are equal")
}

//EJERCICIO 3

if(num1 === num2){
    console.log("The numbers are equal")
} else{
    console.log("The numbers are different")
}

//EJERCICIO 4

let date1 = "2018-9-2"
let date2 = "2023-7-5"

if(date2 > date1){
    console.log(`The date ${date2} is greater than ${date1} `)
} else if(date1 === date2){
    console.log("The dates are the same")
}

//EJERCICIO 5

if(date1 > date2){
    console.log(`The date ${date1} is greater than ${date2} `)
} else if(date1 < date2){
    console.log(`The date ${date2} is greater than ${date1}`)
}

//EJERCICIO 6

let number1 = 5
let number2 = 7
let number3 = 9

if (number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest.`)
} else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest.`)
} else {
    console.log(`The number ${number3} is the largest.`)
}

//MEDIUM

//EJERCICIO 1

let color = prompt("Enter a color (red, blue, or green):")

switch (color) {
    case 'red':
        console.log("The color of passion")
        break;
    case 'blue':
        console.log("The color of the sea.")
        break;
    case 'green':
        console.log("The color of nature")
        break;
}

//EJERCICIO 2

let operation = prompt("Enter the operation (addition, subtraction, multiplication, division")
let numero1 = 12
let numero2 = 4

let resultado

switch (operation) {
    case 'addition':
        resultado = numero1 + numero2;
        console.log(resultado);
        break;
    case 'subtraction':
        resultado = numero1 - numero2;
        console.log(resultado);
        break;
    case 'multiplication':
        resultado = numero1 * numero2;
        console.log(resultado);
        break;
    case 'division':
        if (num2 !== 0) {
            resultado = numero1 / numero2;
            console.log(resultado);
        }
        break;
}

//EJERCICIO 3

let person1 = {
    name: 'Marcos',
    age: 15,
    height: 1.69
}

let person2 = {
    name: 'Teresa',
    age: 25,
    height: 1.75
}

if (person1.height > person2.height){
    console.log(`${person1.name} is taller than ${person2.name}`)
} else if(person1.height < person2.height){
    console.log(`${person2.name} is taller than ${person1.name}`)
}
if (person1.age > person2.age){
    console.log(`${person1.name} is older than ${person2.name}`)
} else if(person1.age < person2.age){
    console.log(`${person2.name} is older than ${person1.name}`)
}

//EJERCICIO 4

let name = prompt("name:");
let age = prompt("age:");
let height =prompt("height:");
let vision = prompt("vision score out of 10:");

if (age >= 18 && height > 110 && vision >= 8) {
    console.log("You are qualified to drive.");
}

//EJERCICIO 5

let age1 = prompt("Enter your age:");

if (age1 >= 0 && age1 <= 12) {
    alert("infant(0 to 12 years ).")
} else if (age1 >= 13 && age1 <= 18) {
    alert("adolescent(13 to 18 years old).")
} else if (age1 >= 19 && age1 <= 45) {
    alert("older young(19 to 45 years old).")
} else if (age1 > 45 && age1 <= 100) {
    alert("elderly(over 45 years old).")
} else if (age1 > 100) {
    alert("Is he really that old? (More than 100 years old)")
}

//EJERCICIO 6

let input = parseInt(prompt("Enter a number between 1 to 3:"));

if (input === 1) {
    alert(`The number entered is ${input}`)
} else if (input === 2) {
    alert(`Twice the number entered is ${input * 2}`)
} else if (input === 3) {
    alert(`Three times the number entered is ${input * 3}`)
} else {
    alert("That value is not allowed")
}

//EJERCICIO 1 HIGH

let customerName = prompt("name:");
let pass = prompt("pass (vip or normal):")
let entrance = prompt("enter(yes or no):")

if (customerName === "yourName" || pass === "vip") {
    let ticket = prompt("ticket(yes or no):").toLowerCase();

    if (ticket === "yes") {
        console.log("Welcome");
    } else {
        console.log("Farewell");
    }
} else {
    let buy = prompt("Buy(yes or no):")
    if (buy === "no") {
        console.log("Farewell");
    } else {
        let money = parseInt(prompt("money:"));

        if (money > 1000) {
            console.log("Successful sale. Welcome!");
        } else {
            console.log("Sales rejected");
        }
    }
}
