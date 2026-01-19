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
console.warn("declaracion del objeo property1")
property1 = {
    id: 1,
    name: "deparamaento en el centro de la CDMX",
    description: "hermosos departamento con 3 recamaras, 1 baño y 1 cajon de estacionamiento ubicado en el tercer piso",
    type: "D",
    price: 7500.00,
    rentable: true,
    isSeleable: false,
    includedServices: ["agua ", "luz ", "gas "],
    lat: 19.428313,
    long: -99.138893,
    status: "Good",
    token: Symbol("D-12558-CDMX-MX-S"),
    ownerID: 32412,
    image: null,
}

//impresion del objeto