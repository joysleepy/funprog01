// RETO NINJA 02-01
document.write("<p><strong>Retos Ninja, Clase 002 de Fundamentos de Programacion</strong></p>");

document.write("Reto 001: Escribe las diferencias entre var, let y const<br />");

var strVar = "su alcance es global, pero al intentar cambiar su valor de manera local, marcara error, por lo que se recomiuenda solo usarla en scope global";
document.write("<p>Var: " + strVar + " </p>");

let strLet = "su scope es local, pero tambien puede ocuparse en scope global";
document.write("<p>Let: " + strLet + " </p>");

let strConst = "su scope es global, y su valor una vez asignado no puede modificarse, como su nombre lo indica, es una constante";
document.write("<p>Let: " + strLet + " </p>");



document.write("<p>Reto 002: Escribe una funcion que tome un objeto como entrada y escriba una salida presentandote a ti mismo haciendo uso tambien de template strings</p>");

console.log("Reto 002");
const miMismo = {
    nombre: "Diego", 
    edad: 38, 
    gustos: ["musica", "videojuegos", " y los tacos"]
}

function mePresento(miMismo){
    let strResult = "";

    strResult = `Hola! mi Nombre es ${miMismo.nombre},  
            tengo ${miMismo.edad} y mis hobies son: `

    miMismo.gustos.forEach(element => strResult+= `${element}, ` );

    strResult += `esto último sobre todo`;

    return `<p>${strResult}</p>`;
}

console.log(mePresento(miMismo))
document.write(mePresento(miMismo))


// RETO NINJA 02-03
// Hacer funciones de las dos formas, declararlas con ECMAScript5 y Arrow Function
// 3 ejemplos (6 funciones)
document.write("<p>Reto 004: Crear 3 funciones 3 usando metodo clasico EMCAScript 5 y Arrow functions");
document.write("<p>checar en codigo fuente :)</p>");
console.log("Reto 003");
let isRainingIn = day => console.log("1. LLueve en " + day);

function isRainingToo(day){
    console.log("1. y si, tambien llueve en " + day);
}

isRainingIn("martes");
isRainingToo("miercoles");

let areaCuadrado = num => console.log(`2. Area cuadrada de ${num} es: ${(num * num)}`);

function areaCuadrada(num){
    console.log("2. y por metodo clasico, area cuadrada de " + num + " es: " + (num * num));
}

areaCuadrado(8)
areaCuadrada(6)

let areaTriangulo = (base, alt) => console.log(`3. Area triangulo base ${base} y altura ${alt} es: ${((base * alt) / 2)}`);

function areaTriangula(base, alt){
    console.log("3. y por metodo clasico, area triangulo de base " + base + " y altura " + alt + " es: " + ((base * alt) / 2));
}

areaTriangulo(8,4)
areaTriangula(6,5)

// RETO NINJA 02-04
// Crear una funcion con parametros default
document.write("<p>Reto 004: Crear una funcion con parametros default ");
document.write("<p>checar en consola :)</p>");

console.log("Reto 004");
let menu = (primer = "sopa de hongos", segundo = "tacos de guisado", agua = "agua de sandia") => {

   console.log(`Prueba ${primer}, ${segundo} y de tomar ${agua}`);
}
   
menu("sopa azteca", "filete", "coquita de vidrio");
menu();


// RETO NINJA 02-05
// CREAR UN USER NAME CON MUCHAS OTRAS CARACTERISTICAS, COMO TWISTER, INSTA, ETC
// USando SpreadOperator
document.write("<p>Reto 005: Crear un user name uniendo objetos con SpreadOperator");
document.write("<p>checar en consola :)</p>");

console.log("Reto 005");
const user = {
    name: "Diego",
    apellido: "Avarez"
}

const userContact = {
    mail:"correo@gmail.com",
    cell: "5521XXXX64", 
    chamba:"5559XXXX00"  
}

const redes = {
    faceBook:"fb.com/joysleepy", 
    twister: "twitter.com/bibiribabiribu", 
    instagram: "instagram.com/bibiribabiribu/"
}

const megusta = {
    musica: "Alternative, Rock, Soul", 
    comida: "Tacos, tacos y mas tacos", 
    misc: "videojuegos old school"
}

const fullUser =  {...user, ...userContact, mail:"alvarez@gmail.com", ...redes, ...megusta}

console.log(fullUser);

// RETO NINJA 02-06
// Crear 2 arreglos y dos objetos para usar el Descontrucchur Assigment
document.write("<p>Reto 006: Crear 2 arreglos y dos objetos para usar el Descontrucchur Assigment");
document.write("<p>checar en consola :)</p>");
console.log("Reto 006");
console.log("Con Objetos:")
const equipo = {
    nombre: 'Cruz Azul',
    ciudad: 'CDMX',
    nivel: 'Medio Malo' };
 
const equipo2 = {
    nombre2: 'Xolos',
    ciudad2: 'Tijuana',
    nivel2: 'Medio Corrupto' };

 // Genera variables de una manera muy rapida de un objeto / arreglo 
 const { nombre, ciudad, nivel } = equipo;
 console.log(nombre, ciudad, nivel); 

 const { nombre2, ciudad2, nivel2 } = equipo2;
 console.log(nombre2, ciudad2, nivel2); 


 console.log("Con Arreglos")
 const casa = ['140', 'Guadalupe victoria', 'Neza'];
 const chamba = ['21-4', 'Versalles', 'BJ'];

let [ numeroCasa, colonia, entidad ] = casa;
console.log(numeroCasa, colonia, ciudad)

let [ numeroCasa2, colonia2, entidad2 ] = chamba;
console.log(numeroCasa2, colonia2, entidad2)  


