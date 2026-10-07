// operadosres matematicas 

let a, b;


let suma, resta, multi, div, residuo, potencia;

//obtener los datos a traves del usuario
a = prompt('ingrese un numero: ');
b = prompt('ingrese otro numero: ');

//rsultados de las operaciones 
suma = Number(a) + Number(b); //aqui la operacion de un error debido a que se concatenan los datos
document.write("la suma es : ", suma, "<br>");
console.log("la suma es: " ,suma);

resta = (a) - (b);
document.write("la resta es : ", resta, "<br>");
console.log("la resta es:" ,resta);

div = a / b;
document.write("la division es : ", div, "<br>");
console.log("la division es:" ,div);


multi = a * b;
document.write("la multiplicacion es : ", multi, "<br>");
console.log("la multiplicacion es:" , multi);

residuo = a % b;
document.write("el residuo es : ", residuo, "<br>");
console.log("el residuo es:" ,residuo);

potencia = a ** b;
document.write("la potencia es : ", potencia, "<br>");
console.log("la potencia es:" ,potencia);

let c, d;

//obtener los datos a traves del usuario
c = parseInt(prompt('ingrese un numero: '));
d = parseFloat(prompt('ingrese otro numero: '));

suma = c + d
resta = c - d 
multi = c * d
div = c / d
residuo = c % d 
potencia = c ** d 

document.writeln("los resultados de la operaciones son : ",
    "suma: ", suma, '<br>',
    "resta: ", resta, '<br>',
    "multiplicacion: ", multi, '<br>',
    "division: ", div, '<br>',
    "residuo: ", residuo, '<br>',
    "potencia: ", potencia, '<br>',
);


console.log("las operaciones resueltas son: ",
    "suma: ",suma, 
    "resta: ",resta, 
    "multiplicacion: ",multi, 
    "division: ",div, 
    "residuo: ",residuo, 
    "potencia: ",potencia,
);

