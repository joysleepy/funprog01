


alert('Reto Ninja de Javascript No 001: Sistema de IF - ELSE');

var edad = prompt("Para saber si estas en riesgo por el Coronavirus, ¿En que año escuchaste por primera vez Master Of Puppets de Metallica? Ejemplo: 1986");

alert('Reto Ninja de Javascript No 002: SWITCH');

var consola = prompt("¿Cuál es tu Consola de Videojuegos favorita? usa solo MAYÚSCULAS porfa");

alert('Reto Ninja de Javascript No 003: PYRAMID HEAD');

var k = prompt("Dame un numero entero del 1 al 10");


document.write("<b>Reto 001: If - Else </b><br />");

if (edad <= 1986){
    document.write("Ok Boomer!, por lo que mas quieras, QUEDATE EN TU CASA!");
}
else if (edad <= 1996){
    document.write("A menos que seas diabetico, hipertenso o fumador macizo, no estas tan en riesgo");
}
else if (edad <= 2020){
    document.write("Demasiado centenial, aun asi, no te expongas, sigue viendo tiktoks ");
}
else{
   document.write("¿Vienes del Futuro? ¿sobrevivimos?");
}
document.write("<br /><br />");


document.write("<b>Reto 002: Estructura Switch</b><br />");

switch(consola){
    case "XBOX":
    case "XBOX 360":
        document.write("Eres lo que comunmente se le conoce como niño rata");
        break;
    
    case "PC":
        document.write("Hay si, hay si, PC Master Race, NAH!");
        break;
    
    case "PS2":
    case "PS3":
    case "PS4":
        document.write("Sabias que puedes usar tu " + consola + " como parrilla además de consola?");
        break;
    
    case "PSP":
    case "GAME BOY":
        document.write("Oh si, los portables son la onda para esas aburridas reuniones familiares, que no?");
        break;    

    case "NINTENDO":
    case "NES":
    case "SNES":
    case "N64":
    case "GAME CUBE":
    case "WII":
    case "SWITCH":
        document.write("La vieja confiable jeje, deja de jugar 'Nintendos'");
        break;

    default:
        document.write(consola + "? eso con que se come?");
        break;
}
document.write("<br /><br />");

document.write("");

// for(i = 0; i <= 10; i++){
    
//     for (j = 0; j <= i; j++){
//         document.write("*"); 
//     }
//     document.write("<br />");
// }

var friendlyMessage = "";
if (Number.isInteger(parseInt(k))){
    switch(true){
        case (k <= 10):
            friendlyMessage = "<b>Reto 003: y de regalo una bonita piramide fraudulenta, de esas en las que terminas vendiendo perfumes</b><br />";
            break;
        
        case (k > 10 && k <= 100):
            friendlyMessage = "<b>Reto 003: Ok, se puede extender un poco la liga, pero no mucho jeje</b><br />";
            break;
        
        case (k > 100):
            friendlyMessage = "<b>Reto 003: mas de 100 ya too much jeje, en 50 esta mas bonito no?</b><br />";
            k = 50;
            break;
    }

    document.write(friendlyMessage);
    
    for(i = 0; i <= k; i++){
        for(j = 0; j <= k; j++){
            if(j >= (k-i) && j <= (k+i)){
                document.write("*");
            }
            else{
                document.write("&nbsp;"); 
            }
        }
        document.write("<br />");
    }
}
else{
    document.write(" Sorry, solo numeros para el Reto Ninja 003 <br />");
}
