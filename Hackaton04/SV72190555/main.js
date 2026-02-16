// ===============================
// Hackatón 04 - SV72190555 - Javier Gonzales
// ===============================

// Función para repetir un ejercicio
function repetir(ejercicio) {

    Swal.fire({
        title: "¿Desea repetir el ejercicio?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No"
    }).then((respuesta) => {
        if (respuesta.isConfirmed) {
            ejercicio();
        }
    });

}

//reto 1
//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio1.1() {

    Swal.fire({
        title: "Ejercicio 01",
        text: "Escribe un número y validaremos si tiene 3 dígitos",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        if (!result.isConfirmed) {
            return;
        }

        let numeroUsuario = Number.parseInt(result.value);

        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
            return;
        }

        numeroUsuario = Math.abs(numeroUsuario);

        if (numeroUsuario > 99 && numeroUsuario < 1000) {
            Swal.fire({
                title: "Resultado",
                text: "Sí tiene 3 dígitos",
                icon: "success"
            }).then(() => {
                repetir(ejercicio01);
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "No tiene 3 dígitos",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
        }

    });

}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio1.2() {

    Swal.fire({
        title: "Ejercicio 02",
        text: "Escribe un número y validaremos si su numero es negativo",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        // Si el usuario canceló
        if (!result.isConfirmed) {
            return;
        }

        // Leer <- Swal.fire(input)
        let numeroUsuario = Number.parseInt(result.value);

        // Validación
        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            });
            return;
        }

        // aplicamos la logica para determinar si el número es negativo
        
        if (numeroUsuario < 0) {
            Swal.fire({
                title: "Resultado",
                text: "el número es negativo",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "el número  no es negativo",
                icon: "error"
            }).then(() => {
                repetir(ejercicio02);
            });
        }
    });
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio1.3() {
 
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio1.4() {

}
// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio1.5() {

}

//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

function ejercicio1.7() {

}


//reto 2


//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio2.1() {

    Swal.fire({
        title: "Ejercicio 01",
        text: "Escribe un número y validaremos si tiene 3 dígitos",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        if (!result.isConfirmed) {
            return;
        }

        let numeroUsuario = Number.parseInt(result.value);

        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
            return;
        }

        numeroUsuario = Math.abs(numeroUsuario);

        if (numeroUsuario > 99 && numeroUsuario < 1000) {
            Swal.fire({
                title: "Resultado",
                text: "Sí tiene 3 dígitos",
                icon: "success"
            }).then(() => {
                repetir(ejercicio01);
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "No tiene 3 dígitos",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
        }

    });

}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2.2() {

    Swal.fire({
        title: "Ejercicio 02",
        text: "Escribe un número y validaremos si su numero es negativo",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        // Si el usuario canceló
        if (!result.isConfirmed) {
            return;
        }

        // Leer <- Swal.fire(input)
        let numeroUsuario = Number.parseInt(result.value);

        // Validación
        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            });
            return;
        }

        // aplicamos la logica para determinar si el número es negativo
        
        if (numeroUsuario < 0) {
            Swal.fire({
                title: "Resultado",
                text: "el número es negativo",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "el número  no es negativo",
                icon: "error"
            }).then(() => {
                repetir(ejercicio02);
            });
        }
    });
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio2.3() {
 
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio2.4() {

}
// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio2.5() {

}

//6.
function ejercicio2.6() {}

//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

function ejercicio2.7() {

}


//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio2.8() {

}

//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio2.9() {

}

//10. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio2.10() {}


//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio2.11() {}


//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio2.12() {}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio2.13() {}

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio2.14() {}

//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio2.15() {}

//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio2.16() {}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio2.17() {}

/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
$10. Si se compran unidades separadas hasta 9.
$8. Si se compran entre 10 unidades hasta 99.
$7. Entre 100 y 499 unidades.
$6. Para mas de 500 unidades.
La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.*/
function ejercicio2.18() {}

/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
Cajero (56$/día).
Servidor (64$/día).
Preparador de mezclas (80$/día).
Mantenimiento (48$/día).
El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó*/
function ejercicio2.19() {

}

/*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
¿Cuántos números son Pares?
¿Cuál es el mayor de todos?
Si el tercero es par, calcular el cuadrado del segundo.
Si el primero es menor que el cuarto, calcular la media de los 4 números.
Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.*/
function ejercicio2.20() {}

//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio2.21() {}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio2.22() {}


// ===============================
// Función de limpieza (index.html)
// ===============================
function limpiarTodo() {
    const zona = document.getElementById("zona-ejercicio");
    if (zona) {
        zona.innerHTML = "";
    }
}
