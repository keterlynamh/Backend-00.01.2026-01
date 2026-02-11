// ===============================
// Hackatón 03 - SV72190555 - Javier Gonzales
// ===============================

// ===============================
// Hackatón 03 - Ejercicios 01 y 02
// ===============================
//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.


function ejercicio01() {

    Swal.fire({
        title: "Ejercicio 01",
        text: "Escribe un número y validaremos si tiene 3 dígitos",
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

        // Valor absoluto
        numeroUsuario = Math.abs(numeroUsuario);

        if (numeroUsuario > 99 && numeroUsuario < 1000) {
            Swal.fire({
                title: "Resultado",
                text: "Sí tiene 3 dígitos",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "No tiene 3 dígitos",
                icon: "error"
            });
        }
    });
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {

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
            });
        }
    });
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {

    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 03",
        text: "Escribe un número y validaremos si acaba en 4",
        icon: "info",
        input: "text",                    // Leer <- input
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        // Si el usuario canceló (extra de JS)
        if (!result.isConfirmed) {return;}

        // Leer <- Swal.fire(input)
        let numeroUsuario = Number.parseInt(result.value);

        // Validación (no existe en PSeInt, pero es necesaria en JS)
        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            });
            return;}

            // mod <- %
        let ultimoDigito = Math.abs(numeroUsuario) % 10;

        // En PSeInt:
        // Si UltimoDigito = 4 Entonces
        if (ultimoDigito === 4) {

            // En PSeInt:
            // Escribir "el numero acaba en 4"
            Swal.fire({
                title: "Resultado",
                text: "El número acaba en 4",
                icon: "success"
            });

        } else {

            // En PSeInt:
            // Escribir "El numero no acaba en 4"
            Swal.fire({
                title: "Resultado",
                text: "El número no acaba en 4",
                icon: "error"
            });
        }
    });
}



// ================================
// Ejercicio 04
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
// ================================
function ejercicio04() {

    // En PSeInt:
    // Escribir "Escribe tres números"
    // En JavaScript:
    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 04"
        // <input id= "variable" class="tipo de bolsa" placeholder="texto mostrado">
        html: `
            <p>Escribe tres números y los ordenaremos de menor a mayor</p>
            <input id="num1" class="swal2-input" placeholder="Número 1">
            <input id="num2" class="swal2-input" placeholder="Número 2">
            <input id="num3" class="swal2-input" placeholder="Número 3">`,
        icon: "info",
        confirmButtonText: "Ordenar",
        showCancelButton: true,
        preConfirm: () => {

            // En PSeInt:
            // Leer numeroUsuario1, numeroUsuario2, numeroUsuario3
            // En JavaScript:
            // Leer <- document.getElementById()
            // Convertimos a número con Number.parseInt()

            const n1 = Number.parseInt(document.getElementById("num1").value);
            const n2 = Number.parseInt(document.getElementById("num2").value);
            const n3 = Number.parseInt(document.getElementById("num3").value);

            // Validación (extra de JS)
            if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
                Swal.showValidationMessage(
                    "Todos los valores deben ser números válidos"
                );
                return false;
            }

            // Retornamos los valores válidos
            return [n1, n2, n3];
        }
    }).then((result) => {

        // Si el usuario canceló
        if (!result.isConfirmed) return;

        // En PSeInt:
        // a <- numeroUsuario1, b <- numeroUsuario2, c <- numeroUsuario3
        // En JavaScript:
        // Usamos un arreglo
        let numeros = result.value;

        // ---------------------
        // MÉTODO BURBUJA
        // ---------------------

        for (let i = 0; i < numeros.length - 1; i++) {
            for (let j = 0; j < numeros.length - 1 - i; j++) {

                // En PSeInt:
                // Si numeros[j] > numeros[j+1] Entonces
                if (numeros[j] > numeros[j + 1]) {

                    // Intercambio
                    let aux = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = aux;
                }
            }
        }

        // En PSeInt:
        // Escribir "Los numeros son ..."
        Swal.fire({
            title: "Resultado",
            text: `Los números ordenados son: ${numeros.join(", ")}`,
            icon: "success"
        });
    });
}



// // 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
// function ejercicio05() {}
// //6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
// function ejercicio06() {}
// //7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//    //Tipo A 10% de descuento
//   // Tipo B 15% de descuento
//    // Tipo C 20% de descuento
    
//    function ejercicio07() {}
// //8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
// function ejercicio08() {}
// //9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
// function ejercicio09() {}
// //10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
//     function ejercicio10() {}
// //11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
// function ejercicio11() {}
// //12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
// function ejercicio12() {}
// //13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
// function ejercicio13() {}
// //14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
// function ejercicio14() {}
// //15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
// function ejercicio15() {}
// //16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
// function ejercicio16() {}
// //17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
// function ejercicio17() {}
// //18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//    // $10. Si se compran unidades separadas hasta 9.
//    // $8. Si se compran entre 10 unidades hasta 99.
//   //  $7. Entre 100 y 499 unidades.
//   //  $6. Para mas de 500 unidades.
//   // La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
// function ejercicio18() {}
// //19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//    // Cajero (56$/día).

//    // Servidor (64$/día).

//    // Preparador de mezclas (80$/día).

//    // Mantenimiento (48$/día).

//     //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
// function ejercicio19() {}
// //20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//    // ¿Cuántos números son Pares?

//    // ¿Cuál es el mayor de todos?

//     //Si el tercero es par, calcular el cuadrado del segundo.

//    // Si el primero es menor que el cuarto, calcular la media de los 4 números.

//    // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
// function ejercicio20() {}
// //21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
// function ejercicio21() {}
// //22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
// function ejercicio22() {}
// //23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
// function ejercicio23() {}
// //24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
// function ejercicio24() {}
// //25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
// function ejercicio25() {}
// //26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
// function ejercicio26() {}
// //27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
// function ejercicio27() {}
// //28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
// function ejercicio28() {}
// //29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
// function ejercicio29() {}
// //30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
// function ejercicio30() {}
// //31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
// function ejercicio31() {}
// //32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
// function ejercicio032() {}
// //33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
// function ejercicio33() {}
// //34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
// function ejercicio34() {}
// //35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
// function ejercicio35() {}
// //36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
// function ejercicio36() {}
// //37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
// function ejercicio37() {}
// //38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
// function ejercicio38() {}
// //39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
// function ejercicio39() {}
//    // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
// //40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

//    // Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
// function ejercicio40() {}

// ===============================
// Función de limpieza (index.html)
// ===============================
function limpiarTodo() {
    const zona = document.getElementById("zona-ejercicio");
    if (zona) {
        zona.innerHTML = "";
    }
}
