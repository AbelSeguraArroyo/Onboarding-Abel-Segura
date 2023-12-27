//EJERCICIO 1 

let numberLoop = prompt("Enter a number between 1 and 100:");


if (numberLoop >= 1 && numberLoop <= 100) {
  for (let i = numberLoop; i >= 0; i--) {
    console.log(i)
  }
}

//EJERCICIO 2

let numberLoop2 = prompt("Enter a number between 1 and 10:");

if (numberLoop2 >= 1 && numberLoop2 <= 10) {
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numberLoop2
    console.log(`${i}x${numberLoop2}=${multiplicacion}`)
  }
}

//EJERCICIO 3

const sumaTotal = 0
while (true) {

    let input = prompt("Ingrese un número (0 para detener la suma):")
    let num = parseInt(input)
    if (num === 0) {
        break;
    }
    sumaTotal += num;
}
console.log(`${sumaTotal}`)

//EJERCICIO 4

let total = 0
let input

do {
    input = prompt("Ingrese un número (0 para detener la suma):")

    let num = parseInt(input)

    if (num !== 0) {
        total += num
    }
} while (input !== "0")

console.log(`${total}`)

//EJERCICIO 5


let estudiante = {
  nombre: "Abel",
  apellido: "Segura",
  origen: "Salta, argentina",
  estudios: "Secundario completo",
  edad: 27
}

for (let props in estudiante) {
  console.log(props)
}

//EJERCICIO 6

for (let props in estudiante) {
  console.log(estudiante[props])
}

//MEDIUM

//EJERCICIO 1


while (true) {
    let input = prompt("Ingrese un número (0 para detener la suma):");
    let num = parseInt(input);
    if (num === 0) {
        break;
    }
    sumaTotal += num
}
console.log(`${sumaTotal}`)

let intentos = 0
let numeroSecreto = sumaTotal
let adivinanza

do {
    adivinanza = parseInt(prompt("Adivina el número secreto:"))

    if (adivinanza > numeroSecreto) {
        console.log("El número ingresado es mayor que el secreto")
    } else if (adivinanza < numeroSecreto) {
        console.log("El número ingresado es menor que el secreto")
    }

    intentos++;
} while (adivinanza !== numeroSecreto);

console.log(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos.`)

//EJERCICIO 2

let numero = parseInt(prompt("Ingrese un número(divisores)"))

console.log(`Los divisores de ${numero} son:`)

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i)
    }
}

//EJERCICIO 3

function Campana() {
  console.log("Ding Dong")
  return "Ding Dong"
}

let numeroVeces = parseInt(prompt("Numero de veces que sonará el timbre:"))

let timbre = ""

for (let i = 0; i < numeroVeces; i++) {
  timbre += Campana()
}

console.log(timbre)

//EJERCICIO 4

//EJERCICIO 5

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]

for (let color of colores) {
    console.log(color)
}

//EJERCICIO 6

function imprimirColores(colores) {
  for (let color of colores) {
      console.log(color)
  }
}
imprimirColores(colores)

//EJERCICIO 7

const numeros = [5, 7, 1, 3, 50]

for (const numero of numeros) {
    const doble = numero * 2
    console.log(`El número es ${numero} y su doble es ${doble}`)
}

//EJERCICIO 8

const familia = [
  { nombre: 'Abel', apellido: 'Segura', edad: 27, miembro: 'hijo' },
  { nombre: 'Adrian', apellido: 'Segura', edad: 59, miembro: 'padre' },
  { nombre: 'Sofia', apellido: 'Segura', edad: 24, miembro: 'hija' },
  { nombre: 'Mariel', apellido: 'Arroyo', edad: 56, miembro: 'madre' }
]

function presentacionDeFamilia(miembros) {
  for (const miembro of miembros) {
      const { nombre, apellido, edad, miembro: rol } = miembro
      console.log(`Hola, soy ${nombre} ${apellido} (${rol}) y tengo ${edad} años.`)
  }
}

presentacionDeFamilia(familia)


