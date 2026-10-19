// calcular la ganancia del vendedor 
// sumar la ganancia del valor del vehiculo = precio venta 
// calcular lel respuesto(6%) sobre el precio de venta
//sumar el precio de venta + el impuesto = costo total.


// valores definidos directamente por el anuenciado del taller:
const valorvehiculo = 35000000; //valor base del automovil
const porcentajeganancia = 12;
const porcentajeimpuesto = 6;

//paso 1:  calcular cuanto dinero gana el vendedor 
const gananciavendedor = (valorvehiculo * porcentajeganancia) / 100;

//paso 2: el precio de venta es el valor del vehiculo mas la ganancia
const precioventa = valorvehiculo + gananciavendedor;

//paso 3: calcular el impuesto sobre el precio de venta (no sobre el vehiculo original)
const impuestoventa = (precioventa * porcentajeimpuesto) / 100;

//paso 4: el costo total a pagar el comprador es el precio de venyta + impuesto.
const costototal = precioventa + impuestoventa;

console.log("valor del vehiculo: $", valorvehiculo);
console.log("porcentaje de ganancia:", porcentajeganancia, "%");
console.log("ganancia del vendedor $: ", gananciavendedor);
console.log("precio de venta antes de impuesto $: ", precioventa);
console.log("porcentaje por impuesto : ", porcentajeimpuesto, "%");
console.log("impuesto sobre la venta $: ", impuestoventa);
console.log("costo total $: ", costototal);

