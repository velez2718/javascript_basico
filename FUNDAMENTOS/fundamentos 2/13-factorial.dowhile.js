const n = 5;

console.log("----------ciclo do while-----------");

let factorialdowhile = 1;
let i = 1;

do {
    factorialdowhile *= i;
    i++;
} while (i <= n);

console.log(`El factorial de ${n} es:`, factorialdowhile);