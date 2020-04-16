// Estructuras Condicionales

// if(condicion){
//     // Enunciados a ejecutar si se cumple la condicion 
// }
// else{
//     // Alternativa en caso de no cumplirse la premisa anterior
// }

// var edad = prompt("¿Cuál es tu edad?");

// if (edad > 18){
//     document.write("Ok Boomer!");
// }
// else if (edad == 18){
//     document.write("Apenitas, pasale!");
// }
// else{
//     document.write("Estás muy chavo chavo");
// }

// Reto Ninja, crear un sistema de condiciones con if / else 


// switch
// switch (key) {
//     case value:
//         // ejecutas lo que alique en este caso
//         break;
//     case value2:
//         // ejecutas lo que alique en este caso
//         break;
//     case value3:
//         // ejecutas lo que alique en este caso
//         break;
    
//     default:
//         // default pos es default
//         break;
//         // break en todos los casos rompe el ciclo actual
// }

var GeneroMusical = prompt("¿Cuál es tu género musical favorito?");

switch(GeneroMusical){
    case "Banda":
        document.write("Fierro Pariente, saca el BuKañas!");
        break;
    
    case "Rock":
        document.write("Dices que eres la Bandota!");
        break;
    
    case "Indie":
        document.write("Saquese a la Condesa!");
        break;
    
    case "Merengue":
        document.write("Ahí esta el tiburon!");
        break;

    default:
        document.write("No pos sin comentarios");
        break;
}

// Reto Ninja, crear un sistema de condiciones con switch 