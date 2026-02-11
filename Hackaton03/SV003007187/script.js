const { StrictMode } = require("react");



function Ejercicio1() {


    console.log("Calculadora iniciada");

    let numero = (prompt("Ingrese un numero :"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");

        Swal.fire({
            title: "Error",
            text: "El valor ingresado en numeros, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }
    if (numero >= 80 && numero < 1000) {
        console.log("El numero tiene tres digitos");

        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado tiene tres digitos: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log("El numero no tiene tres digitos");

        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado no tiene tres digitos: ${numero}`,
            icon: "error",
            draggable: true




        });
    }

}

function Ejercicio2() {

    console.log("Calculadora iniciada");

    let numero = parseFloat(prompt("Ingrese un numero:"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }

    if (numero < 0) {
        console.log("El numero es negativo");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es negativo: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else if (numero > 0) {
        console.log("El numero es positivo");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es positivo: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log("El numero es cero");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es cero: ${numero}`,
            icon: "info",
            draggable: true
        });
    }
}

function Ejercicio3() {
    console.log("Calculadora iniciada");

    let numero = prompt("Ingrese un numero:"); parseFloat(numero);


    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }


    let ultimoDigito = Math.abs(numero) % 10; /// utilice Math.abs para considerar numeros negativos y %10 porque quiero obtener el ultimo digito.

    if (ultimoDigito === 4) {
        console.log(`El número ${numero} termina en 4`);
        Swal.fire({
            title: " Resultado",
            text: `El número ${numero} TERMINA en 4`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`El número ${numero} NO termina en 4`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${numero} NO termina en 4 (termina en ${ultimoDigito})`,
            icon: "info",
            draggable: true
        });
    }



}

function Ejercicio4() {
    console.log("Calculadora iniciada");


    console.log("=== Ordenador de 3 números ===");


    let num1 = parseInt(prompt("Ingrese el primer número entero:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero:"));


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        Swal.fire({
            title: "Error",
            text: "Debe ingresar tres números enteros válidos",
            icon: "error",
            draggable: true
        });
        return;
    }

    console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);

    if (num1 === null || num2 === null || num3 === null) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero",
            icon: "error",
            draggable: true
        });


    }
    let menor, medio, mayor;


    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
        if (num2 <= num3) {
            medio = num2;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
            medio = num1;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num1;
        }
    } else {
        menor = num3;
        if (num1 <= num2) {
            medio = num1;
            mayor = num2;
        } else {
            medio = num2;
            mayor = num1;
        }
    }


    console.log(`Ordenados: ${menor}, ${medio}, ${mayor}`);
    Swal.fire({
        title: "Resultado",
        text: `Los números ordenados de menor a mayor son: ${menor}, ${medio}, ${mayor}`,
        icon: "success",
        draggable: true
    });



}


function Ejercicio5() {
    let cantidadDeZapatos;
    const precioUnidad = 80;
    let descuento, subtotal, total;

    console.log("Zapateria");
    console.log("Tenemos 20%, 30%, 40% de descuento");

    cantidadDeZapatos = parseInt(prompt("Ingrese cantidadDeZapatos")) || 0;

    total = cantidadDeZapatos * precioUnidad;

    console.log("El valor de la compra es: " + total + "$");

    if (cantidadDeZapatos >= 10 && cantidadDeZapatos < 20) {
        console.log("Se ha ganado un descuento de 10%");
        descuento = total * 0.10;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos >= 20 && cantidadDeZapatos < 30) {
        console.log("Se ha ganado un descuento de 20%");
        descuento = total * 0.20;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos >= 30) {
        console.log("Se ha ganado un descuento de 40%");
        descuento = total * 0.40;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos <= 0) {
        console.log("Número ingresado no es válido");
    }
}

function Ejercicio6() {
    console.log("Tabulador iniciado");
    let horasTrabajadas, PagoTotal, cantidadHorasExtras, PagoHorasExtra, PagoHoraNormal;
    const horaNormal = 20;
    const horaExtra = 25;

let input = prompt("Ingrese la cantidad de horas trabajadas:") || "0";
horasTrabajadas = parseFloat(input);

    if (isNaN(horasTrabajadas)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }if (horasTrabajadas < 40) {
        PagoTotal = horasTrabajadas * horaNormal;
        console.log("El pago total es: " + PagoTotal + "$");
        Swal.fire({
            title: "Resultado",
            text: `El pago total es: ${PagoTotal}$`,
            icon: "success",
            draggable: true
        });
    } else {
        cantidadHorasExtras = horasTrabajadas - 40;
        PagoHorasExtra = cantidadHorasExtras * horaExtra;
        PagoHoraNormal = 40 * horaNormal;
        PagoTotal = PagoHorasExtra + PagoHoraNormal;
        console.log("El pago total es: " + PagoTotal + "$");
        Swal.fire({
            title: "Resultado",
            text: `El pago total es: ${PagoTotal}$`,
            icon: "success",
            draggable: true
        });
    }
}

function Ejercicio7() {
    console.log("Calculadora de descuento iniciada");
    
 
    let compra
   

    compra = prompt("Ingrese el tipo de compra (A, B, C)")
        console.log("Tipo de compra ingresada: " + compra);
        let compraUpper = compra.toUpperCase(); /// en caso el usuario ingrese una letra minuscula, la convierto a mayuscula para que el programa funcione correctamente.

        if (compraUpper === "") { /// "" y NUL ambos son validos
            console.log("El valor ingresado no es válido");
            Swal.fire({
                title: "Error",
                text: "El valor ingresado no es un tipo de compra válido",
                icon: "error",
                draggable: true
                
            });
            return; /// detener la ejecución de la función si el valor ingresado no es válido.
        }

        if (compraUpper === "A") { 
            console.log("Se ha ganado un descuento de 10%");
            Swal.fire({
                title: "Resultado",
                text: "Se ha ganado un descuento de 10%",
                icon: "success",
                draggable: true
            });
        } else if (compraUpper === "B") {
            console.log("Se ha ganado un descuento de 20%");
            Swal.fire({
                title: "Resultado",
                text: "Se ha ganado un descuento de 20%",
                icon: "success",
                draggable: true
            });
        } else if (compraUpper === "C") {
            console.log("Se ha ganado un descuento de 40%");
            Swal.fire({
                title: "Resultado",
                text: "Se ha ganado un descuento de 40%",
                icon: "success",
                draggable: true
            });
        } else {
            console.log("Tipo de compra no válido");
            Swal.fire({
                title: "Error",
                text: "Tipo de cliente",
                icon: "error",
                draggable: true
            });

            
        }
         }

            
function calcularPromedio() { //aqui quise crear una funcion aparte para practicar pero no me deja tener dos funciones dentro de otra funcion asi que : ejercicio8
                
    console.log("Calculadora de promedio iniciada");
                let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
                let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
                let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
                
                let promedio = (nota1 + nota2 + nota3) / 3;


                if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("El valor ingresado no es un numero");
    Swal.fire({     
        title: "Error",
        text: "El valor ingresado debe ser un número, no letras",
        icon: "error",
        draggable: true
    });
    

    if (promedio >= 0 && promedio < 4) {
        console.log("El alumdno fallo la materia");
        Swal.fire({
            title: "Resultado",
            text: "El alumno fallo la materia",
            icon: "error",
            draggable: true
        });
    } else if (promedio >= 4 && promedio <  7) {
        console.log("El alumno esta en el nivel regular");
        Swal.fire({
            title: "Resultado",
            text: "El alumno esta en el nivel regular",
            icon: "info",
            draggable: true
        });
    } else if (promedio >= 7 && promedio <= 10) {
        console.log("El alumno esta en el nivel excelente");
        Swal.fire({
            title: "Resultado",
            text: "El alumno esta en el nivel excelente",
            icon: "success",
            draggable: true
        });
    }

                Swal.fire({
                    title: "Resultado",
                    text: `El promedio es: ${promedio}`,
                    icon: "success",
                    draggable: true
                });
            }
            calcularPromedio
            }

 function Ejercicio9() {
    console.log("Calculadora de salario iniciada");
    let horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
    const tarifaHora = 15;
    let salarioMensual; 
    salarioMensual = horasTrabajadas * tarifaHora;

    if (isNaN(horasTrabajadas)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        
    
    } 
    if (salarioMensual > 2000) {
        console.log("el empleado es elegible para amento 5%")   
        Swal.fire({
            title: "Resultado",
            text: "el empleado es elegible para aumento de 5%",
            icon: "success",
            draggable: true
        });
    }
        
        else if (salarioMensual <= 2000) {
            console.log("el empleado es elegible para aumento de 10%")
            Swal.fire({
                title: "Resultado",
                text: "el empleado es elegible para aumento de 10%",
                icon: "success",
                draggable: true
            });
 }
}

function Ejercicio10() { 
    let n= parseInt(prompt("Ingrese un número entero:"));

    if (isNaN(n)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }

    if (n % 2 === 0) {
        console.log(`El número ${n} es par`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${n} es par`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`El número ${n} es impar`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${n} es impar`,
            icon: "info",
            draggable: true
        });
    }
}


function encontrarMayor() {  /// aqui quise crear una funcion aparte para practicar pero no me deja tener dos funciones dentro de otra funcion asi que : ejercicio11
    
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Ingresa el tercer número:"));
    
     
    let mayor;
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
  
    console.log(`El número mayor es: ${mayor}`);
    alert(`El número mayor es: ${mayor}`);
    
    return mayor;
}

function Ejercicio12() {

    let n1 = parseInt(prompt("Ingrese un número entero:"));
    let n2 = parseInt(prompt("Ingrese otro número entero:"));

    if (isNaN(n1) || isNaN(n2)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero, no letras",
            icon: "error",
            draggable: true
        });

    } else if (n1 > n2) {
        console.log(`El número mayor es: ${n1}`);
        Swal.fire({
            title: "Resultado",
            text: `El número mayor es: ${n1}`,
            icon: "success",
            draggable: true
        });
    } else if (n2 > n1) {
        console.log(`El número mayor es: ${n2}`);
        Swal.fire({
            title: "Resultado",
            text: `El número mayor es: ${n2}`,
            icon: "success",
            draggable: true
        });

        {
            if (n1 === n2) {
            console.log("Ambos números son iguales"); /// agregue una validacion si los numeros son iguales 
            Swal.fire({
                title: "Resultado",
                text: "Ambos números son iguales",
                icon: "info",
                draggable: true
            });
        }
    }
}
 }

 function Ejercicio13() {
    
    let letra = prompt("Ingrese una letra:").toLowerCase();
    let vocales = ["a", "e", "i", "o", "u"];
    if (vocales.includes(letra)) {
        console.log(`La letra ${letra} es una vocal`);
        Swal.fire({
            title: "Resultado",
            text: `La letra ${letra} es una vocal`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`La letra ${letra} no es una vocal`);
        Swal.fire({
            title: "Resultado",
            text: `La letra ${letra} no es una vocal`,
            icon: "info",
            draggable: true
        });
    }
}
   
function Ejercicio14() {
    console.log("Calculadora de un número primo iniciada"); 
    let numero = parseInt(prompt("Ingrese un número entero mayor que 1:"));
let n= (2,3,4,5,6,7,8,9,10);
    if (isNaN(numero) ) {
        console.log("El valor ingresado no es un numero valido");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero mayor que 1",
            icon: "error",
            draggable: true
        });
        
        

        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            console.log(`El número ${numero} es primo`);
            Swal.fire({
                title: "Resultado",
                text: `El número ${numero} es primo`,
                icon: "success",
                draggable: true
            });
        }
        else {
            console.log(`El número ${numero} no es primo`);
            Swal.fire({
                title: "Resultado",
                text: `El número ${numero} no es primo`,
                icon: "info",
                draggable: true
            });
        }
    }
}



function Ejercicio15() {

let centimetros = parseFloat(prompt("Ingresa la cantidad en centímetros:"));
let libras = parseFloat(prompt("Ingresa la cantidad en libras:"));

 
let pulgadas = centimetros / 2.54;
let kilogramos = libras * 0.453592;

 
console.log("Centímetros: " + centimetros + " cm");
console.log("Pulgadas: " + pulgadas + " in");

console.log("Libras: " + libras + " lb");
console.log("Kilogramos: " + kilogramos + " kg");
 }




 function Ejercicio16() {
    console.log("Asignacion numero a dia de semana iniciada");
    let diasSemana = [1, 2, 3, 4, 5, 6, 7];
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero del 1 al 7",
            icon: "error",
            draggable: true
        });
        return;
    }
    let dia;
            switch (numero) {
                case 1:
                    dia = "Lunes";
                    break;
                case 2:
                    dia = "Martes";
                    break;
                case 3:
                    dia = "Miércoles";
                    break;
                case 4:
                    dia = "Jueves";
                    break;
                case 5:
                    dia = "Viernes";
                    break;
                case 6:
                    dia = "Sábado";
                    break;
                case 7:
                    dia = "Domingo";
                    break;
                default:
                    console.log("Número fuera de rango");
                    Swal.fire({
                        title: "Error",
                        text: "Número fuera de rango",
                        icon: "error",
                        draggable: true
                    });
            }
            console.log(`El día correspondiente al número ${numero} es: ${dia}`);
            Swal.fire({
                title: "Resultado",
                text: `El día correspondiente al número ${numero} es: ${dia}`,
                icon: "success",
                draggable: true
            });
             }






function Ejercicio17() {
    let horaInput = prompt("Ingrese la hora (HH:MM:SS):"); 
    let [horas, minutos, segundos] = horaInput.split(":").map(Number); // use split aqui para separar las horas, minutos y segundos

   
    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        Swal.fire("Error", "Formato de hora inválido", "error");
        return;
    }

  
    segundos++;
/// la validacion en este ejercicio es como las agujas del reloj, cuando los segundos llegan a 60, se reinician a 0 y se incrementa en 1 el minuto, lo mismo con los minutos y horas.
   
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    if (horas === 24) {
        horas = 0;
    }

   
    Swal.fire({
        title: "Resultado",
        text: `La hora un segundo después es: ${horas}:${minutos}:${segundos}`,
        icon: "success"
    });
}

function Ejercicio18() {

    const iniciarVenta = () => {
     
    let entrada = parseFloat(prompt("Ingrese la cantidad de CDs a comprar:"));
    let cantidad = parseInt(entrada);

    // 2. Validación: Verificamos que sea un número válido y mayor a cero
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Error: Por favor, ingrese un número entero positivo.");
        return; // salir si hay error
    }

    let precioUnitario = 0;

    
    if (cantidad < 10) {
        precioUnitario = 10;
    } else if (cantidad < 100) {
        precioUnitario = 8;
    } else if (cantidad < 500) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }

    
    const precioTotal = cantidad * precioUnitario;
    const porcentajeGanancia = 0.0825; // 8.25%
    const gananciaVendedor = precioTotal * porcentajeGanancia;

   
    let mensaje = `--- Factura de Venta ---\n`;
    mensaje += `Cantidad: ${cantidad} CDs\n`;
    mensaje += `Precio por unidad: $${precioUnitario}\n`;
    mensaje += `--------------------------\n`;
    mensaje += `Total a pagar: $${precioTotal}\n`;
    mensaje += `Ganancia del vendedor: $${gananciaVendedor.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    alert(mensaje);
}

 
iniciarVenta();
}