let nombre , edad ,direccion , movil , email; //se puede declarar varias variables del mismo tipo.

//prompt es una palabra reservada en javascript que despliega una funcion y sale un mensaje de tipo alert para el usuario.

nombre = prompt('escribe su nombre:') //pedir datos al usuario.
document.write('bienvenido:' ,nombre, '<br>');
console.log ("bienvenido: ", nombre);

edad = prompt('escriba su edad: ')//pedir datos el usuario.
document.write('tu edad es:', edad,'<br>');
console.log("tu edad es: ",edad);


direccion = prompt('escriba su direccion: ')//pedir datos el usuario.
document.write('tu direccion es:', direccion,'<br>');
console.log("tu direcccion es: ",direccion);


movil = prompt('escriba su movil: ')//pedir datos el usuario.
document.write('tu movil es:', movil,'<br>');
console.log("tu movil es: ",movil);


email = prompt('escriba su email: ')//pedir datos el usuario.
document.write('tu email es:', email,'<br>');
console.log("tu email es: ",email);
