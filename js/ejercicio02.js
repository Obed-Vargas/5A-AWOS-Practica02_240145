//Tipos de datos en JavaScript

//personaliza salidas de consola 
//const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
console.log("%cEjercicio 02: Tipos de Datos", style_console);

//1. undifined - valor por defeto asignado a variables declaradas
//pero no inicializadas, no es iguala NULL 

console.warn("1.- UNDFINED (No definido)")
let usuariologeado;
var rolusuario;
const ultimoacceso = undefined;


//En JavaScript existe el metodo typeof() que nos devuelve el tipo de dato variable perficamente
//declarada 
console.log("valores actuales de las variables");
console.log(`usuariologeado: ${typeof usuariologeado}`);
console.log(`rolusuario: ${typeof rolusuario}`);
console.log(`ultimoacceso: ${typeof ultimoacceso}`);

//supongamos que un usuario denominado Obed Vargas Luna se ha logeado exitosamente,
//el valor de la variable debera actulizarse a su username

usuariologeado = "Obed Vargas Luna";

//pero no solo cambiara su valor, tambien cambiara su tipo de dato
console.log(`usuariologeado: ${typeof usuariologeado}`);


//2. Boolean - (true/false) - verdadero o falso

var hayUsuarioLogeado;

/*supomgamos que nuestra app tendra un menu especifico para los usuarios registrados,
en el podran visualizar sus mensajes o estado de sus publicaciones  de renta o venta de propiedades,
a diferencia de un usuario que entra de manera incognita a visualizar las propiedades */


function validacionUsuarioLogeado() {
    console.log(`el valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo 
    ${typeof (hayUsuarioLogeado)}`);

    if (hayUsuarioLogeado === true) {
        console.log("Dado que se ha logeado un usuario la app mostrara el menu del usuario");

    } else if (hayUsuarioLogeado) {
        console.log("Dado que no hay usuario logeado la app no mostrara el menu del usuario");
    }
    else {
        console.log("no puedo procesar este tipo de dato, requiero un dato booleano")
    }
}


//test 1 : usuario logeado =  true 
hayUsuarioLogeado = true;
console.log("test 1")
validacionUsuarioLogeado();

//test 2 : usuario logeado =  false
console.log("test 2")
hayUsuarioLogeado = false;
validacionUsuarioLogeado();

//test 3 : usuario logeado =  a cualquier otra cosa 
console.log("test 3")
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

//3. Number (Numéricos)
/*es importante sabe que en JavaScript a diferencia de otros lenguajes no diferencia los datos de tio numerico,
 * lo que para otros lenguajes de programacion lo que un enteri (INT), flotante (FLOAT), double (DOUBLE), para 
 * para el solo son numeros (NUMBER)
 */

console.warn("3.- NUMBER (Numéricos)")
var userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let altGPS = -97.952881
let longGPS = 1180
console.log(`los valores de las variables declaradas para los datos de la propiedad son: 
    ID del usuario propietario: ${userID_Owner}`)
console.log(`Precio de la propiedad: ${priceProperty}`)
console.log(`Latitud: ${latGPS}`)
console.log(`Altitud: ${altGPS}`)
console.log(`Longitud: ${longGPS}`);

console.log(`los tipos de datos de las variables declaradas para los datos de la propiedad son: 
    ID del usuario propietario: ${typeof (userID_Owner)}`)
console.log(`Precio de la propiedad: ${typeof (priceProperty)}`)
console.log(`Latitud: ${typeof (latGPS)}`)
console.log(`Altitud: ${typeof (altGPS)}`)
console.log(`Longitud: ${typeof (longGPS)}`);