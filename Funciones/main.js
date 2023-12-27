
//EJERCICIO 1

function add() {
    let result = 100 * 20;
    console.log(result)
  }
  
  //EJERCICIO 2

  add();

  //EJERCICIO 3

  function add(number1, number2) {
    let result = number1 * number2
    console.log(result)
  }
  
  //EJERCICIO 4

  let number1 = 100
  let number2 = 20

  //EJERCICIO 5 

  function add(number1, number2) {
    let result = number1 * number2
    return result;
  }

  let resultadoMultiplicacion = add(number1, number2)
console.log(resultadoMultiplicacion)


  //EJERCIO 6

  let result = (function(number1, number2) {
    let resultadoMultiplicacion = number1 * number2
    return resultadoMultiplicacion
  })(number1, number2)
  
  console.log(result)
  
//MEDIUM

//EJERCICIO 1

function greet(name) {
    console.log(`Hola mi nombre es ${name}. Encantado de conocerte.`)
  }
  
  greet("Abel")
  
//EJERCICIO 2

let multiplicacion = function(num1, num2) {
    return num1 * num2
  }
  
  
let result1 = multiplicacion(2, 3)
let result2 = multiplicacion(5, 4)
  
console.log(result1)
console.log(result2)
  
//EJERCICIO 3

function area(base, height) {
    let triangleArea = 0.5 * base * height
    return triangleArea
  }

  //EJERCICIO 4

  function perimeter(side1, side2, side3) {
    let trianglePerimeter = side1 + side2 + side3
    return trianglePerimeter
  }
  
  //EJERCICIO 5

  function total(price, quantity) {
  let totalPrice = price * quantity

  if (quantity >= 20) {
    totalPrice *= 0.8
  } else if (quantity >= 10) {
    totalPrice *= 0.9
  }

  return totalPrice;
}

let totalPrice1 = total(200, 5)
let totalPrice2 = total(500, 12)
let totalPrice3 = total(400, 27)

console.log(totalPrice1)
console.log(totalPrice2)
console.log(totalPrice3)

//EJERCICIO 6

function isAnAdult(age) {
    if (age >= 18) {
      return "You are an adult"
    } else {
      return "You are not an adult"
    }
  }

console.log(isAnAdult(28))
console.log(isAnAdult(13))
console.log(isAnAdult(18))

//HIGH

//EJERCICIO 1

function totalTax(income) {
    let tax = 0;
  
    if (income <= 10000) {
      tax = income * 0.1
    } else if (income > 10000 && income <= 20000) {
      tax = income * 0.15
    } else {
      tax = income * 0.2
    }
  
    return tax;
  }

console.log(totalTax(10000))
console.log(totalTax(13000))
console.log(totalTax(22000))
  
  //EJERCICIO 2

  function dayType(day) {
    let message;
  
    switch (day){
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        message = "It is a business day."
        break;
      case 6:
      case 7:
        message = "It's the weekend."
        break;
    }
  
    return message;
  }

console.log(dayType(3))
console.log(dayType(6))

//EJERCICIO 4

function greet(name) {
    return `Hello, my name is ${name}`;
  }
  
  function calculateAge(yearOfBirth, currentYear) {
    return currentYear - yearOfBirth;
  }
  
  function present() {
    let userName = prompt("Enter your name:")
    let userYearOfBirth = prompt("Enter your year of birth:")
    let currentYear = new Date().getFullYear()
  
    let greeting = greet(userName)
    let age = calculateAge(userYearOfBirth, currentYear)
  
    let presentation = `${greeting}. I am ${age} years old.`
  
    alert(presentation)
    console.log(presentation)
  }
  
  present()
  