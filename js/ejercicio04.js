//estabilizacion de la barra zona de pruebas en el DevTools del navegador
console.log("%cEjercicio 04: Objetos ", style_console);

console.warn("1. propiedades del objeto");
//esto no es un objeto son varianles independientes que no se encuentrasn asociadas
let propertyID = 1;
let propertyName = "deparamaento en el centro de la CDMX"
let propertyDescription = "hermosos departamento con 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el tercer piso"
let propertyType = "D";
let propertyIsSeleable = false;
let propertyRentable = true;
let propertyPrice = 7500.00;
let propertyLat = 19.428313;
let propertyLong = -99.138893;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices = ["agua", "luz", "gas"];
let propertyImage = null;
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log(`datos de la propiedad en renta:
    nombre: ${propertyName}
    descripcion: ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicacion:  Latitud: ${propertyLat} Longitud: ${propertyLong}
    Sevicios incluidos: ${propertyIncludedServices}
    En renta: ${propertyRentable}
    En venta: ${propertyIsSeleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}
    `);

//2. declaracion de un objeto
/*para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades 
iran entre {} y separadas por coma en el orden clave - valor*/
console.warn("declaracion del objeo property1");
let property1 = {
    id: 1,
    name: "deparamaento en el centro de la CDMX",
    description: "hermosos departamento con 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el tercer piso",
    type: "D",
    price: 7500.00,
    isrentable: true,
    isSeleable: false,
    includedServices: ["agua ", "luz ", "gas "],
    lat: 19.428313,
    long: -99.138893,
    status: "Good",
    token: Symbol("D-12558-CDMX-MX-S"),
    ownerID: 32412,
    image: null,
}

//impresion del objeto del fromato tabla
console.table(property1);

//3. leyendo las propiedades de un objeto 
/*un objeto es un conjunto de variables que abstraen una 
identidad fisica o conceptual de la que es significativo almacenar informacion 
para el programa o sistema que estemos dearrollando 

para acceder a al as propiedades individuales basat con poner el nombre del objeto un "." y el
nombre de la propiedad*/

console.warn("3. Lectura de las propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name}
    cual se ddescribe como: ${property1.description} con un costo de: ${property1.price}
    con los servicio incluidos de: ${property1.includedServices}${property1.isSeleable ? ", actualmente esta a la venta" :
        "que por el momento no esta a la venta"}`
);

//4. modificacion de los valores de las propiedades de un objeto 
/*para modificar los datos e una variable basta con acceder a la propiedad deseada
a modificar y asignarle su nuevo valor a traves del signo = */

property1.price = 8200.00;
property1.isSeleable = true;
property1.includedServices = ["agua", "luz", "gas", "internet", "seguridad privada"];

console.warn("4. Modificacion de las propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name}
    cual se ddescribe como: ${property1.description} con un costo de: ${property1.price}
    con los servicio incluidos de: ${property1.includedServices}${property1.isSeleable ? ", actualmente esta a la venta" :
        "que por el momento no esta a la venta"}`
);

//destructuracion de objetos (OBJECT DESTRUCTURING)
/*JavaScript es un lenguaje dinamico que perite que un objeto previamente definido pueda
ser descompuesto en pequeñas */

let user1 = {
    userID: 32412,
    name: "John Doe",
    email: "john.doe@gmail.com",
    createdAt: new Date("2015/01/30 23:15:52"),
    lastLogin: new Date("2026/01/20 08:00:05"),
    userRole: "Vendedor",
    totalProperties: 12,
    rating: 9.4,
}

let user2 = {
    userID: 42412,
    name: "Obed Vargas",
    email: "obed.vargas@gmail.com",
    createdAt: new Date("2024/08/20 15:08:58"),
    lastLogin: new Date("2026/01/19 22:15:35"),
    userRole: "Comprador",
    rating: 8.5,
    lastOperation: "Buscando un departamento en renta",
}

let user3 = {
    userID: 52789,
    name: "Maria Rodriguez",
    email: "maria.rodriguez@gmail.com",
    createdAt: new Date("2023/03/15 10:30:22"),
    lastLogin: new Date("2026/01/19 18:45:12"),
    userRole: "Comprador",
    rating: 9.1,
    lastOperation: "Interesada en propiedades cerca del centro",
}

let user4 = {
    userID: 61234,
    name: "Carlos Mendez",
    email: "carlos.mendez@gmail.com",
    createdAt: new Date("2022/11/08 14:22:45"),
    lastLogin: new Date("2026/01/20 07:30:18"),
    userRole: "Comprador",
    rating: 9.7,
    lastOperation: "Buscando departamento con estacionamiento",
}

console.warn("5. Desestructuracion de objetos");

const buyerBid = (seller, buyer, property, price_bidded) => {

    const { userID: sellerID, email: sellerEmail } = seller;
    const { userID: buyerID, email: buyerEmail } = buyer;
    const { price, id } = property;
    let fecha_oferta = new Date();



    console.log(`El usuario: ${buyerID} esta realizando una oferta al usuario: ${sellerID}
        por la cantidad de: ${price} por la propiedad: ${id} con fecha ${fecha_oferta}`);

    return {
        buyerID,
        sellerID,
        propertyID: id,
        propertyPrice: price,
        date_bidded: fecha_oferta,
        bid_ocurrate: Math.round((price_bidded / price) * 100 * 100) / 100 + "%",

    }
}

//test 1: el usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene un exactitud del: ${bid1.bid_ocurrate}`)

//test 2: el usuario 3 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene un exactitud del: ${bid2.bid_ocurrate}`)

//test 3: el usuario 4 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene un exactitud del: ${bid3.bid_ocurrate}`)