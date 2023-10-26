const opcionesMenu = [
    "Remeras",
    "Pantalones",
    "Zapatos",
    "Accesorios",
    "Conjuntos",
    "Consultar Carrito",
    "Agregar al Carrito",
    "Quitar del Carrito",
    "Aplicar Cupón",
    "Salir"
];

const carrito = [];
let descuento = 0;

const productos = {
    Remeras: ["Remera 1", "Remera 2", "Remera 3"],
    Pantalones: ["Pantalón 1", "Pantalón 2", "Pantalón 3"],
    Zapatos: ["Zapatos 1", "Zapatos 2", "Zapatos 3"],
    Accesorios: ["Accesorio 1", "Accesorio 2", "Accesorio 3"],
    Conjuntos: ["Conjunto 1", "Conjunto 2", "Conjunto 3"]
};

const precios = {
    "Remera 1": 1500,
    "Remera 2": 2000,
    "Remera 3": 2500,
    "Pantalón 1": 3000,
    "Pantalón 2": 3500,
    "Pantalón 3": 4000,
    "Zapatos 1": 5000,
    "Zapatos 2": 5500,
    "Zapatos 3": 6000,
    "Accesorio 1": 500,
    "Accesorio 2": 1000,
    "Accesorio 3": 1500,
    "Conjunto 1": 4500,
    "Conjunto 2": 5000,
    "Conjunto 3": 5500,
};

function mostrarMenuPrincipalConAlert() {
    const menu = opcionesMenu.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
    alert("Menú Principal:\n" + menu);
}

function mostrarProductosConAlert(categoria) {
    const listaProductos = productos[categoria]
        .map((producto, index) => `${index + 1}. ${producto} - $${precios[producto]}`)
        .join("\n");
    alert(`Productos disponibles en ${categoria}:\n${listaProductos}`);
}

function agregarAlCarritoConAlert(producto) {
    carrito.push(producto);
    alert(`Has agregado "${producto}" al carrito.`);
}

function quitarDelCarritoConAlert(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
        carrito.splice(index, 1);
        alert(`Has quitado "${producto}" del carrito.`);
    } else {
        alert("El producto no se encuentra en el carrito.");
    }
}

function calcularTotalCarritoConAlert() {
    const totalSinDescuento = carrito.reduce((total, producto) => total + precios[producto], 0);
    const totalConDescuento = totalSinDescuento * (1 - descuento);
    alert(`Total a pagar: $${totalConDescuento}`);
}

function aplicarCuponConAlert() {
    const cupon = prompt("Ingresa un cupón de descuento (20% o 30):");
    if (cupon === "20" || cupon === "30") {
        descuento = parseInt(cupon) / 100;
        alert(`Se ha aplicado un descuento del ${cupon}%.`);
    } else {
        alert("Cupón no válido. No se aplicará descuento.");
    }
}

function simularComprasConAlert() {
    while (true) {
        mostrarMenuPrincipalConAlert();
        const opcion = parseInt(prompt("Selecciona una opción del menú:"));

        switch (opcion) {
            case 1:
                mostrarProductosConAlert("Remeras");
                break;
            case 2:
                mostrarProductosConAlert("Pantalones");
                break;
            case 3:
                mostrarProductosConAlert("Zapatos");
                break;
            case 4:
                mostrarProductosConAlert("Accesorios");
                break;
            case 5:
                mostrarProductosConAlert("Conjuntos");
                break;
            case 6:
                alert("Carrito de compras:\n" + carrito.join("\n"));
                calcularTotalCarritoConAlert();
                break;
            case 7:
                mostrarMenuPrincipalConAlert();
                const agregarOpcion = parseInt(prompt("Ingresa el número de la opción que deseas agregar al carrito:"));
                agregarAlCarritoConAlert(productos[opcionesMenu[agregarOpcion - 1]][agregarOpcion - 1]);
                break;
            case 8:
                if (carrito.length === 0) {
                    alert("El carrito está vacío.");
                } else {
                    alert("Carrito de compras:\n" + carrito.join("\n"));
                    const quitarOpcion = parseInt(prompt("Ingresa el número del producto que deseas quitar del carrito:"));
                    quitarDelCarritoConAlert(carrito[quitarOpcion - 1]);
                }
                break;
            case 9:
                aplicarCuponConAlert();
                break;
            case 10:
                alert("Gracias por tu compra.");
                return;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida del menú.");
        }
    }
}

simularComprasConAlert();
