//EJERCICIO 1

let myName = "Abel"
console.log(myName)

//EJERCICIO 2

let myLastName = "Segura"
console.log(myLastName)

//EJERCICIO 3

let myAge = 27
console.log(myAge)

//EJERCICIO 4

let myPet = "Oddy"
console.log(myPet)

//EJERCICIO 5 

let petAge = 13
console.log(petAge)

//EJERCICIO 6

let fullName = myName + " " + myLastName
console.log(fullName)

//EJERCICIO 7

let presentationText = "Hola! " + "mi nombre es " + myName + " y me apellido " + myLastName + "." + "Tengo" + " " + myAge + " años." + " Tengo un perrito que se llama " + myPet + " y tiene " + petAge + " años de edad. " + "Encantado de conocerte! " + fullName

console.log(presentationText)

//EJERCICIOS DIFICULTAD MEDIA

//EJERCICIO 1

let sumAges = myAge + petAge
console.log(sumAges)

let subtractAges = myAge - petAge
console.log(subtractAges)

let productAges = myAge * petAge
console.log(productAges)

let divisionAges = myAge / petAge
console.log(divisionAges)

//EJERCICIO 2

let student = {
    nombreCompleto: "Abel Segura",
    edad: 27,
    carrera: "Licenciatura en Ciencias Biológicas",
    materiasAprobadas: 17,
    licenciado: false
}   

console.table(student)

console.log("Nombre:", student.nombreCompleto)
console.log("Edad: ", student.edad)
console.log("carrera: ", student.carrera)
console.log("Materias Aprobadas: ", student.materiasAprobadas)
console.log("Es Licenciado? ", student.licenciado)

//EJERCICIO 3

let pet = {
    name: "Oddy",
    age: 13,
    breed: "Tekkel",
    hairColour: "Brown",
    diseases: false
}

console.table(pet)
console.log("Name: ", pet.name)
console.log("Age: ", pet.age)
console.log("Breed: ", pet.breed)
console.log("Hair Colour: ", pet.hairColour)
console.log("Diseases: ", pet.diseases)

//EJERCICIO 4

let fruits = ["Banana", "Manzana", "Pera", "Naranja", "Sandía"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

//EJERCICIOS DIFICULTAD ALTA

//EJERCICIO 1

let age = prompt("Enter your age:")
let IamAdult = age >= 18;

console.log("I am an adult:", IamAdult)

//EJERCICIO 2

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

//EJERCICIO 3

let family = [
    { name: 'Agostina', age: 24, relation: 'sister' },
    { name: 'Sofia', age: 24, relation: 'sister' },
    { name: 'Adrián', age: 55, relation: 'father' },
    { name: 'Mariel', age: 53, relation: 'mother' },
    { name: 'Carlos', age: 63, relation: 'uncle' }
];

console.log("The entire array:");
console.log(family);

family.forEach((person, index) => {
    console.log(`${index}:`, person);
});






