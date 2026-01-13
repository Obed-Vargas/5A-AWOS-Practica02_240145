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

// 4.- STRING (Cadena de Caracteres)

var fullnameOwner = "Obed Vargas Luna";
let nameProperty = " Hermosa Casa en la playa de Puerto Vallarta";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
caracteres especiales como acentos o símbolos de algún idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");
console.log(`El usuario: ${fullnameOwner}, 
    esta vendiendo o rentando: ${nameProperty}
    que consiste en: ${descriptionProperty}
    actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
console.log(`Las variables declaradas son del tipo:
        fullnameOwner :   ${typeof (fullnameOwner)}
        nameProperty :   ${typeof (nameProperty)}
        descriptionProperty:  ${typeof (descriptionProperty)}
        statusProperty :   ${typeof (statusProperty)}
        typeProperty :   ${typeof (typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
// por mencionar algunos:

//Mnipulando strings los tipos de datos cualitativos tienen ciertos metodos 
//para manipular su valor pormeionar algunos:

//transformar a mayusculas 

console.log(`Nombre del propietario ${fullnameOwner.toUpperCase()}`);
//transofrmar a minusculas 
console.log(`Descripcion de la propiedad ${descriptionProperty.toLocaleLowerCase()}`);
//Numero de caracteres 
console.log(`Tipo de propiedad ${typeProperty.length}`);
//subcadena 
console.log(`Nombre del propietario ${fullnameOwner.slice(5, fullnameOwner.length)}`);
//Eliminar espacios en blanco 
console.log(`Nombre de la propiedad ${nameProperty.trim()}`);
//Remplazar caracteres 
console.log(`Descripcion modificada ${descriptionProperty.replace("Mar", "Rio")}`);
//Remplazar todos los caracteres 
console.log(`Descripcion modificada ${descriptionProperty.toLocaleUpperCase().replaceAll("A", "4")}`);



//5. BIGINT (enteros de grandes dimensiones)

/*Este tipo de de dato permite almacenar numeros exageradamente amplios que usualmente aplicaciones cientificas
avanzadas requieren, esto para no perder la presicion en los valores almacenados 
*/

const numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5. BIGINT (enteros de grandes dimensiones)");

console.log(`El valor del numeroGrande es: ${numeroGrande} y es soportado por : ${typeof (numeroGrande)}`);

console.log(`El valor del numeroGrande2 es: ${numeroGrande2} a psear de ser soportado 
por : ${typeof (numeroGrande2)} comienza a tener problemas de presicion`);


//bigint no pierde presicion
console.log(`El valor del numeroGrande3 es: ${numeroGrande3} ya no es soportado por 
NUMBER y adquiere un nuev tipo siendo: ${typeof (numeroGrande3)}`);

console.log(`El valor del numeroGrande4 es: ${numeroGrande4} y es soportado por : ${typeof (numeroGrande4)}`);

numeroGrande2 = BigInt("12345678901234567890");
console.log(`si declaramos la variable con el valor de numeroGrande2 es: ${numeroGrande2} un tipo de dato: ${typeof (numeroGrande2)}`);

numeroGrande3 = BigInt("123456789012345678901234567890");
console.log(`si declaramos la variable con el valor de numeroGrande3 es: ${numeroGrande3} un tipo de dato: ${typeof (numeroGrande3)}`);

numeroGrande4 = BigInt("1234567890123456789012345678901234567890");
console.log(`si declaramos la variable con el valor de numeroGrande4 es: ${numeroGrande4} un tipo de dato: ${typeof (numeroGrande4)}`);

//6. Symbol (simbolo)

/*es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicacion en el espacio en memoria,
por lo que todos los valores asignados asignados a este tipo siempre seran unicos.
*/

console.warn("6. SYMBOL (simbolo)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

//valores y tipo de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof (numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof (numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof (numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof (numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof (numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof (numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof (numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof (numero8)}
    `);

//pruebas comparativas 
if (numero1 == numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if (numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")
if (numero1 === numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")
if (numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")
if (numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

//7. NULL (nulo)
/*el tipo de dato nulo es similar a UNDEFINED, con la variacion de que hay un consentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con ese valor*/

var isPremiumUser;
var isNewUser;
let todayDate = new Date();
var lastLogin = todayDate;


console.warn(`7. NULL (nulo)`);

console.log(`
    El usuario: ${usuariologeado}, tipo de dato: ${typeof (usuariologeado)}
    Fecha del ultmo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
    El usuario es premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}`);

//Validacion del usuario

if (todayDate == lastLogin)
    isNewUser = true;
else
    isNewUser = false;

//como es un usuario nuevo aun no ve, ni publica ninguna propiedad por defecto no interesa por el 
//hasta que se premium hasta que interactua con la plataforma
isPremiumUser == null;
console.log("datos despues de la validacion de los datos del usuario:")
console.log(`
    El usuario: ${usuariologeado}, tipo de dato: ${typeof (usuariologeado)}
    Fecha del ultmo login: ${todayDate}, tipo de dato: ${typeof (todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof (isNewUser)}
    El usuario es premium: ${isPremiumUser}, tipo de dato: ${typeof (isPremiumUser)}`);


