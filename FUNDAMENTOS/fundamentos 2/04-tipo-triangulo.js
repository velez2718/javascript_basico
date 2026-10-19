// equilatero = los tres lados deben ser iguales
//isoceles= dos lados iguales
// escaleno = todos los lados son diferentes

const ladoA = 5;
const ladoB = 5;
const ladoC = 5;

// priemro valodamos que ningun lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 ) {
    console.log("los lados deben ser mayores que cero");
    //"||" es el operador "0" basta con que una de las condicones se cumpla
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    // regla geometrica: la suma de los lados siempre debe ser mayor que el tercel lado, si no, no se puede forma un triangulo real.
    console.log("los valores no forman un triangulo valido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    //"&&" es el operador "Y" las condiciones evaluadas deben de ser verdaderas
    console.log("el triangulo es EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    //si no es equilatero,pero al menos dos lados de los coinciden, el triangulo es isosceles.
    console.log("el triangulo es ISOCELES");
} else {
    // si no se cumple ninguna de las condicones anteriores es decir que todos los lados son distintos
    console.log("el triangulo es ESCALENO");
}
