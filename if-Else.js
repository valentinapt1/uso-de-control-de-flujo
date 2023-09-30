let edad = prompt ("¿que edad tiene?");
 edad = parseInt(edad);
 if (!isNaN(edad)) {
   if (edad >= 18) {
     console.log("Eres mayor de edad.");
   } else {
     console.log("Eres menor de edad.");
   }
 } else {
   console.log("La entrada no es un número válido.");
 }

 let tarea = "estudio";
switch (tarea){
  case "estudio":
  console.log("Toma descansos cortos cada 30 minutos.");
}