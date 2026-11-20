// let a, b;

// a = 20;
// b = 30;

// console.log(a==b); //false
// console.log(a < b); //true
// console.log(a > b); //false

// let pais, edad;
// pais = prompt("de que pais eres?");
// edad = prompt("que edad tienes?");

// if (pais == "colombia" && edad >= 18) {
//     document.writeln("eres ciudadano del pais de :", pais);
// }else {
//     document.writeln("no eres ciudadao del pais de colombia o no eres mayor de edad");
// }


let day, month, year;

day = prompt("Ingrese el día (1-31):");
month = prompt("Ingrese el mes (1-12):");
year = prompt("Ingrese el año (por ejemplo, 2023):");

//Convertir los valores ingresados a números
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

// Validar si el día, mes y año son válidos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.writeln("Ingrese números válidos");
} else if (month == 1 || month == 2 || month == 3) {
    document.writeln("Pertenece al primer trimestre del año");
} else {
    document.writeln("No pertenece al primer trimestre del año");
}

