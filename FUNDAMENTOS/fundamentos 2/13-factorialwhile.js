const n = 5;

console.log("----------ciclo mientras-----------");

let factorialwhile = 1;
let i = 1;

while (i <= n) {
    factorialwhile *= i;
    i++;
}

console.log(`El factorial de ${n} es:`, factorialwhile);
