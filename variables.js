// Variables

// Es un espacio de memoria en nuestro sistema

// var
// let
// const


// Tipos de Datos

// Primitivos


// Tipo String
var Ciudad = "CDMX";

// var Nombre      = prompt("Tu primer nombre");
// var Apellido    = prompt("Tu Primer Apellido");
// var NombreCompleto = Nombre + " " + Apellido;

// document.write("Hola " + NombreCompleto + ", Bienvenido a " + Ciudad);

console.log(typeof(Ciudad)); 


// Tipo Number

var Numero1 = 1;
var Numero2 = 2;
var Numero3 = "5";
var Suma = Numero3 + Numero2;
var Resta = Numero3 - Numero2;
var Mult = Numero3 * Numero2;
var Div = Numero3 / Numero2;

console.log("Suma: "+Suma);
console.log("Resta: "+Resta);
console.log("Mult:"+Mult);
console.log("Div: "+Div);

console.log(typeof(Numero1));

// Tipo Boolean true / false 
var comparacion = Numero1 < Numero2;
console.log(comparacion);
console.log(typeof(comparacion));

// Tipo indefinido
var respuesta;
console.log(respuesta);
console.log(typeof(respuesta));

// Tipo Null
var Nombre2 = null;

console.log(Nombre2);

// Falta copiar la Diferencia entre undefined y null

// Tipo NAN (Not A Number)
var Nombre5 = "joaquin";
var Numero4 = "8";
var Operacion2 = Nombre5 * Numero4;

console.log(Operacion2);

// Terminan los Primitivos

// Tipo Objeto

// object 
var persona = {
    PrimerNombre: "James", 
    Apellido: "Murphy", 
    Edad: 48, 
    Profesion: "Musico" 
}

console.log(persona);
console.log(typeof(persona));

// Array

var stringArray = ["one", "two", "three"];

var numericArray = [1, 2, 3, 4];

var decimalArray = [1.1, 2.3, 4.5];

var booleanArray = [true, false, false];

var mixedArray = ["gatito", 1, 1.5, true];

console.log(stringArray);
console.log(typeof(stringArray));

var fruitArray = ["Frambuesa", "Mora", "Uva", "Melon", "Papaya"]; // Reto Ninja


var hoyHoyHoy = new Date();
var cumpleanios = new Date("July 16, 1981 07:16:30");
var aniversario = new Date(2016,04,28);
var efemerides = new Date(2020,01,01,12,0,1);

console.log(hoyHoyHoy);
console.log(typeof(hoyHoyHoy));

console.log(cumpleanios);
console.log(typeof(cumpleanios));

console.log(aniversario);
console.log(typeof(aniversario));

console.log(efemerides);
console.log(typeof(efemerides));


// Function
function ShowMessage(){
    alert("Hello World");
}
ShowMessage();
