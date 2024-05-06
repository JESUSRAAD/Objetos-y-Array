// 1.- Crea una variable que tenga como valor un array vacío.

let ciudades = [];

// 2.- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.

let everything = ["jesus", 7, true, ciudades];

// 3.-
//          3.1.- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez.
//           A continuación, se muestra por consola la longitud del array.
//          3.2.- Crea un array classNames con todos los nombres de tus compañer@s de clase.
//          Muestra por consola tu nombre seleccionando el que hay en el array classNames.

let arrayExample = [];
arrayExample.push("jesus", "eva");
arrayExample.unshift("demetrio", "maru");

arrayExample.pop();
arrayExample.shift();
console.log(arrayExample);

let classNames = [
  "Gabriela",
  "Adriana",
  "Jesus",
  "Andrea",
  "Javmir",
  "Roger",
  "JesusAleman",
];
console.log(classNames[2]);

// 4.- Crea el siguiente array: const nombres = ["Carlos", "María", "Isidro", "Elizondo", "Molina"].
//  A continuación, muestra por consolación los nombres ["María, Isidro"] usando slice().
//  Luego, sustituye "Elizondo" por "Parma" usando splice() y muestra los resultados por consola.

const names = ["Carlos","María","Isidro","Elizondo","Molina"];

console.log(names.slice(1, 3));

names.splice(3, 1, "Parma");
console.log(names);

// 5.- Convierte el array anterior (names) en una cadena de nombres separados por espacios.

const esambleName=names.join(' ');

console.log(esambleName);

// 6.- Crea la variable const frase = "El perro de San Roque no tiene rabo".
//  A continuación, conviértela en un array de palabras, y, luego, en otro de letras.

const frase = "El perro de San Roque no tiene rabo"

const fraseArray=frase.split(' ')
console.log(fraseArray);
const letersArray=fraseArray[1].split('')


console.log(letersArray);

// 7.- Diseña un programa (función) que vaya leyendo números y guardándolos en un array.
//  Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares.
//   La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico. (permite detectar valores no numéricos).


let numbers=[]
let num= ""


function arrayLector(num) {
numbers.push(num)

  for (let i = 0; i < numbers.length; i++) {
   if (numbers[i]%2==0) {
     
     console.log(`el numero ${numbers[i]} el numero es par`); 
   } else {console.log(`el numero ${numbers[i]} el numero es impar`);
    
   }
  }
}
console.log(arrayLector(4));

console.log(arrayLector(7));
// 8.- Un servicio atención de al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana
//  se encarga del servicio una persona: Lunes - María; Martes - Luis; Miércoles - Antonia; Jueves - Pedro; Viernes
//   - Marisa; Sábado y Domingo - Sin Servicio. Usa un array para almacenar los datos del servicio.
//   En este array cada elemento será un par [día - nombre]. Crea una función que responde
//    con el nombre de la persona encargada del servicio sabiendo el día.
//     Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servicio(Miércoles") me daría Antonia.

let turn=[["lunes","maria"],
  ["martes","luis"],
 ["miercoles","antonia"] ,
  ["jueves","pedro"], 
  ["viernes","marisa"],
  ["sabado","sin servicio"],
  ["domingo","sin servicio"]
]

function worker(dia) {
  
  for (let i = 0; i < turn.length; i++) {
   if (turn[i][0]===dia) { return alert(`Este día ${turn[i][0]} se encarga ${turn[i][1]}`);
    
}
}return  alert(" ese dia no es valido");
}
console.log(worker(prompt("ingrese el dia de la semana").toLocaleLowerCase()));




// 9.- Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una array donde estructura cada elemento es un par
//  [producto - precio]. Diseña una función que recibe como argumento el nombre de un producto (minúscula o mayúscula) y devuelva su precio
//  si la lista de precios es monitor: 200€, teclado: 20. € ratón: 10€, al pedir precio('monitor') me devolverá 200.


let listProducts=[["monitor","200$"],
  ["teclado","20$"],
 ["raton","10$"] ,

]

function price(products) {
  
  for (let i = 0; i < listProducts.length; i++) {
   if (listProducts[i][0]===products) {return alert(`Este producto ${listProducts[i][0]} se vende en ${listProducts[i][1]}`);
    
  }
}return alert("no tenemos ese producto");
}
console.log(price(prompt("producto que le quiera saber el precio").toLocaleLowerCase()));
