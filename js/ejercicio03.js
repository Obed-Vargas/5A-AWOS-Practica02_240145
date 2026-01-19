/* estabilizacion de la barra de pruebas en el devtools en el navegador 
*/
console.log("%cEjercico 03: Funciones", style_console);

/* 
    1. funciones proceduales, vacias, sin valor de retorno y sin parametros de entrada
*/

function saludar() {
    console.log("bienvenidos al sistema de bienes raices");
}

console.warn("1. funciones sin valor de retorno, sin parametros");
saludar();

/* 
    2. funciones procedurales sin valor de retorn, peri si recie parametros
    es decir datos de entrada
*/

function saludar_usuario(username, gender) {
    if (gender == "H")
        console.log(`Bienvenido, ${username} al sistema de bienes raices`)

    else if (gender == "M")
        console.log(`Bienvenida, ${username} al sistema de bienes raices`)

    else
        console.log(`Bienvenid@, ${username} al sistema de bienes raices`)
}

console.warn("2. funciones sin valor de retorno, con parametros de entrada");
saludar_usuario("Obed", "H");
console.log(`---------------------------------------------------------------`)
saludar_usuario("Patricia", "M");
console.log(`---------------------------------------------------------------`)
saludar_usuario("Guadalupe", null);

/*
3. funciones que retornan un dato, pero no reciben parametros
*/

function fecha_actual() {
    const fecha = new Date();
    dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formtoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} 
    de ${fecha.getFullYear()}`;


    return fecha_formtoMX;

};

console.warn("3. funciones que retornan un dato, pero no reciben parametros");
let hoy = fecha_actual();
console.log(`Bienvenid@ al sistema de bienes raices, hoy es: ${hoy}`);

/*Imprimendo el valor y que tipode dato es la funcion fecha_actual*/
console.log(fecha_actual);
console.log(typeof fecha_actual);


/*
4. funciones que retornan un valor, y que reciben parametros de entrada
*/



function login(username, password) {
    let userValidation = false;

    // Caso 1: Usuario y contraseña correctos (admin/12345)
    if (username === "admin" && password === "12345") {
        userValidation = true;
        console.log("Bienvenid@ al usuario admin");
    }
    // Caso 2: Usuario admin pero contraseña incorrecta
    else if (username === "admin" && password !== "12345") {
        userValidation = false;
        console.log("Lo sentimos, la contraseña es incorrecta para el usuario admin");
    }
    // Caso 3: Usuario incorrecto pero contraseña correcta
    else if (username !== "admin" && password === "12345") {
        userValidation = false;
        console.log("Lo sentimos, el usuario no es correcto");
    }
    // Caso 4: Usuario y contraseña incorrectos
    else {
        userValidation = false;
        console.log("Por favor verifica la contraseña y el usuario");
    }

    return userValidation;
}

console.warn("4. funciones que retornan un valor, y que reciben parametros de entrada");

// test1 - usuario y contraseña correctos
console.log(` Test 1 - Usuario: admin, Contraseña: admin123`);
loginStatus = login("admin", "admin123");
console.log(` ${loginStatus ? "El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`);

// test2 - usuario incorrecto y contraseña 
console.log(` Test 2 - Usuario: administrador, Contraseña: admin123`);
loginStatus = login("administrador", "admin123");
console.log(` ${loginStatus ? "El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`);

// test3 - usuario y contraseña incorrecta
console.log(` Test 3 - Usuario: admin, Contraseña: admin12345`);
loginStatus = login("admin", "admin12345");
console.log(` ${loginStatus ? "El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`);

//test4 - usuario y contraseña incorrectos
console.log(` Test 4 - Usuario: administrador, Contraseña: admin12345`);
loginStatus = login("administrador", "admin12345");
console.log(` ${loginStatus ? "El usuario se ha logeado correctamente" : "Hubo un error en el login del usuario admin"}`);


/*
Funciones anonimas, funciones flecha (arrow functions), funciones lambda
a dierencia de las funciones nombradas, estte tipo de funciones no sueles reutilizar el codigo
solo se ejecutan una vez, dando velocidad, individualidad, y privacidad a os datos uilizados en
el proceso
*/


//5. funciones anonima sin parammetros 

isNewUser = function () {
    const hoy = new Date();
    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. funciones anonimas, sin parametros");

console.log("test 1 - fecha del ultimo acceso es igual a la fecha de hoy")
console.log(`la fecha del ultimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es:  ${isNewUser ? "Nuevo usuario" : "Usuario antiguo"}`);

console.log("------------------------------------------------------")
lastLogin = new Date("2025/12/31");
console.log("test 2 - fecha del ultimo acceso es diferente a la fecha de hoy")
console.log(`la fecha del ultimo acceso es: ${lastLogin}`);
console.log(`el usuario logeado es:  ${isNewUser ? "Nuevo usuario" : "Usuario "}`);


/*6. funciones anonimas con parametros (version arrow o lambda) */

const sumar = (a, b) => {
    let resultado = a + b;
    return resultado;
}

console.warn("6. funciones anonimas con parametros ")
console.log(`El resultado de la suma 15 + 83 es: ${sumar(15, 83)}`);

/*Cuando la funcion anonima tiene solo una liena de operacion se puede usar una version 
simplificada que no usa {} llaves, ni la palabra reservada return */

const multiplicar = (a, b) => a * b;
console.log(`el resultado de la multipliacion 15 * 125 es: ${multiplicar(15, 125)}`)


/*7. funciones CallBack (Regreso de llamado) */
console.warn("7. funciones CallBack (Regreso de llamado)")

const recoveryPassword = function (email, callback) {
    //generamos el codigo a enviara l usuario
    const recoveryCode = Math.floor(1000000 + Math.random() * 900000)

    console.log(`
        ----------------------------------------------------
        Solicitud de recuperacion recbida
        correo del usuario solicitante: ${email}
        generando el codigo de recuperacion...
        codigo de segurdad generado: ${recoveryCode}
        enviando el correo al usuario...
        correo enviado a: ${email}, con el codigo de seguridad: ${recoveryCode}
        ----------------------------------------------------`);

//definiendo la respesta del sistema 
const response ={
    status: "ok",
    message: "codigo derecuepracion enviado satisfactoriamente"
};
callback(response); 
};

//invocacion de la funcion callback
recoveryPassword("obed@gmail.com",
    function(systemResponse) {
        console.log("respuesta del sistema: ");
        console.log(systemResponse.message);
    }
);