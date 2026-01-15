const bg =
    "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
console.log("%cEjercicio 01: Declaracion de variables", style_console);

//EJERCICIO 01: declaracion de variables en js
//1. Utilizando la palabra reservada VAR
//Declaracion de variables en js

//utilizaremos el metodo warn de la consola para mostrar mensajes de advertencia en la consola del navegador
console.warn("Ejercicio 01: Declaracion de variables con el prefijo warn");

var miNombre = "Obed Vargas Luna";
console.log("El valor almacenado en la variable miNombre es: ", miNombre);

//Modificar el valor de la variable
miNombre = "Obed Vargas Luna";
console.log("el nuevo valor almacenado en la variable miNombre es: ", miNombre);

var misApellidos;
console.log(
    "el nuevo valor almacenado en la variable miApellido es: ",
    misApellidos
); //undifined

//una variable pude cambiar su valor durante la ejecucion del programa.
console.warn("-- declaracion de variables con el prefijo const --");

//2. Utilizando la palabra reservada CONST
//una constante a diferencia de una variable es que su valor no cambiara durante toda la ejecucion del programa
//y al momento declarada esta debera ser inicializada con un valor inmediatamente.

const miMATRICULA = "240145";
console.log(
    "el valor almacenado en la constante miMATRICULA es: ",
    miMATRICULA
);

//intentando modificar el valor de la constante
/*miMATRICULA = "240145"; //esto generara un error en la consola del navegador
console.log("el nuevo valor almacenado en la constante miMATRICULA es: ", miMATRICULA);*/

//3. Utilizando la palabra reservada LET
//LET es un prefijo utilizado muy similar a VAR, pero con algunas diferencias en cuanto a su alcance y comportamient
// o en bloques de codigo y su alcance (SCOPE)
//aquellas declaradas con var tienen un alcance global, mientras que las declaradas con let tienen un alcance
//  local al bloque de codigo , mientras que las variables declaradas con let solo existiran dentro del bloque o funcion

var fecha_nacimiento = new Date("2006-11-16");
var miEdad = calcularEdad(fecha_nacimiento);
console.log("Tu edad es de: ", miEdad, "años");

//verificamos si es mayor de edad
if (miEdad >= 18) {
    var esMayorDeEdad = true;
    var esMenorDeEdad = false;
}

if (esMayorDeEdad) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("El valor de la variable esMenorDeEdad es: ", esMenorDeEdad);

//la variable booleana no puede persistir por el tipo de declaracion con LET, solo fue de
//alcanze local mientras fue condicional (if) se ejecuto

function calcularEdad(fecha_nacimiento) {
    //para clacular la edad se resta la fecha actual con la fecha de nacimiento
    var fechaHoy = new Date();

    //dado que los datos de fecha son almacenados en milisegundos por default en js,
    //necesitamos una variable que nos permita saber el numero de milisegundos por dia.

    let milisegundospordia = 24 * 60 * 60 * 1000; //24 horas, 60 minutos, 60 segundos, 1000 milisegundos

    //ya que tenemos os milisegundos por dia, tenemos que restar la fecha de hoy , la fecha en que nacimos para calcular los milisegundos que hemos vivido
    let diasVividos = (fechaHoy - fecha_nacimiento) / milisegundospordia;

    //invocamos el metodo de la funcion piso (math.floor)
    diasVividos = Math.floor(diasVividos);
    var edad = diasVividos / 365.25;
    edad = Math.floor(edad);
    return edad;
}

//interpoblacion de datos

//${}`
misApellidos = "Vargas Luna";
console.log(
    `Hola mi nombre es ${miNombre} mis apellidos son ${misApellidos} y tengo ${miEdad} años de edad.`
);

//Autor: Obed Vargas Luna..
