// Desafío 1

let bienvenida = confirm("Bienvenido. Para ingresar necesitas registrarte ¿Quieres registrarte?")

debugger

if(bienvenida === false){
    let user =  "1234!108"
    let pass =  "1234!108"
    let usuario = prompt("Ingresa tu usuario para acceder")
    let contrasena = prompt("Ingresa tu contraseña")
    if (user === usuario && pass === contrasena) {
        console.log("¡Bienvenido a Maitri! Si necesitas algún tipo de ayuda escribenos a hola@maitri.com");
    } 
    else {
        console.warn("No se encuentra el usuario o contraseña");
    }
} else {
    let nombre = prompt("¿Cómo te llamas?")
    let apellido = prompt("Cual es tu apellido?")
    let user = prompt("Ingresa un nombre usuario para registrarte")
    let pass = prompt("Ingresa una contraseña para acceder")
    let conf = confirm("Mostramos los datos?")
    if(conf===true){
        console.log("Hola", nombre, " ", apellido, ", tus datos de acceso son: usuario",user, "y tu password ", pass, "No olvides tenerlos a la mano para acceder.");
    } 
    let usuario = prompt("Ingresa tu usuario para acceder")
    let contrasena = prompt("Ingresa tu contraseña")
        if (user === usuario && pass === contrasena) {
            console.log("¡Bienvenido a Maitri! Accediste correctamente. Si necesitas algún tipo de ayuda escribenos a hola@maitri.com");
        } else {
            console.warn("no se reconoce el usuario o contraseña");
        }
}