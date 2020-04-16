


alert('Reto: Sistema de IF - ELSE');

var edad = prompt("Para saber si estas en riesgo por el Coronavirus, ¿En que año escuchaste por primera vez Master Of Puppets de Metallica? Ejemplo: 1986");

var consola = prompt("¿Cuál es tu Consola de Videojuegos favorita?");


document.write("<b>Reto If - Else </b><br />");

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


document.write("<b>Reto Estructura Switch</b><br />");

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
        document.write("Sabias que puedes usar tu " + consola + "como parrilla además de consola?");
        break;
    
    case "Nintendo":
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

document.write("<b>Y de regalo una bonita piramide fraudulenta, de esas para vender perfumes</b><br />");

for(i = 0; i <= 10; i++){
    
    for (j = 0; j <= i; j++){
        document.write("*"); 
    }
    document.write("<br />");
}