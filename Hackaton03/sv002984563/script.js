console.log("Hackaton 3");

function Ejercicio01(){

    console.log("Inicio de ejercicio 1");
    let strNumero = prompt("Ingresa un numero para saber si tiene tres digitos: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero >90 && numero <1000) {
            Swal.fire({
            title: "Respuesta",
            text: "Si tiene 3 digitos",
            icon: "success"
        });
        }
        else{
            Swal.fire({
            title: "Respuesta",
            text: "No tiene 3 digitos",
            icon: "error"
        });
        }
    } 
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 01");
}

function Ejercicio02(){

    console.log("Inicio de ejercicio 2");
    let strNumero = prompt("Ingresa un numero para determinar si es negativo: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero <0) {
            Swal.fire({
            title: "Respuesta",
            text: "Es un numero negativo",
            icon: "success"
        });
        }
        else{
            Swal.fire({
            title: "Respuesta",
            text: "No es un numero negativo",
            icon: "success"
        });
        }
    } 
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 01");
}

function Ejercicio03(){

    console.log("Inicio de ejercicio 3");
    let strNumero = prompt("Ingresa un numero para determinar si termina en 4: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero <0){
            numero = numero * (-1);
        };
    } 

    let ultimo = numero % 10;

    if(ultimo === 4){
            Swal.fire({
            title: "Respuesta",
            text: "Si termina en 4",
            icon: "success"
        });
    } else{
            Swal.fire({
            title: "Respuesta",
            text: "No termina en 4",
            icon: "error"
        });
    }
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 02");
}

function Ejercicio04(){
    console.log("Inicio de ejercicio 4");
    let a = Number(prompt("Ingresa tu primer numero"));
    let b = Number(prompt("Ingresa tu segundo numero"));
    let c = Number(prompt("Ingresa tu tercer numero"));

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    }

    let menor;
    let mayor;

  //Definir numero menor
  if (a < b && a < c){
    menor = a;
  } else if (b < a && b < c) {
        menor = b;
    } else {
        menor = c;
    }
  

  //Definir numero mayor
  if (a > b && a > c){
    mayor = a;
  } else if (b > a && b > c){
        mayor = b;
    } else {
        mayor = c;
    }

  //Definir numero del medio
  let medio = a + b + c - menor - mayor;

    Swal.fire({
            title: "Respuesta",
            text: "Ordenados de menor a mayor: " + menor + "," + medio + "," + mayor, 
            icon: "success"
        });

  console.log("Menor: ", menor);
  console.log("medio: ", medio);
  console.log("mayor ", mayor);

}

function Ejercicio05(){
    console.log("Inicio ejercicio 5")

    let Respuesta;
    let precio = 80;
    let a = 0.9;
    let b = 0.8; 
    let c = 0.6;

    let numero = Number(prompt("Ingresa la cantidad de zapatos que quieres: "))
    

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debe ingresar numeros, no letras", 
            icon: "error"
        });
    } else if (numero < 0){
        Swal.fire({
            title: "Respuesta",
            text: "Debe ingresar numeros positivos", 
            icon: "error"
        });
    } 
    
    if (numero >= 10 && numero <= 20) {
         Respuesta = numero * precio * a
     } else if (numero >= 21 && numero <= 30) {
         Respuesta = numero * precio * b
     } else {
          Respuesta = numero * precio * c
        }

     Swal.fire({
         title: "Respuesta",
         text: "Su monto a pagar es: " + Respuesta, 
         icon: "success"
       });

     console.log("Su monto a cancelar es: ", Respuesta)

}

function Ejercicio06(){

    console.log("Inicio de ejercicio 6")

    let precio1 = 20;
    let precio2 = 25;
    let n = 40;
    let pago;

    let numero = Number(prompt("Ingrese la cantidad de horas trabajadas: "));
    if (numero > n){
        pago = n * precio1 + (numero - n) * precio2
    } else {
        pago = numero * precio1
    }

    console.log("El pago es de: " + pago)
    Swal.fire({
        title: "Respuesta",
        text: "El pago es de: " + pago,
        icon: "success"
    })
}

function Ejercicio07(){

    console.log("Inicio de ejercicio 7")

    let membresia = prompt("Ingrese su tipo de membresia (a, b, c): ");
    let resultado;
    membresia = membresia.toLowerCase();


    if (membresia === "a"){
        resultado = 10 
    } else if (membresia === "b"){
        resultado = 15 
    } else if (membresia === "c") {
         resultado = 20 
    } else {
        resultado = "Membresia invalida"
    }

    console.log("Descuento de: " + resultado)
    Swal.fire({
        title: "Respuesta",
        text: "Usted tiene un descuento de: " + resultado,
        icon: "success"
    })        
}

function Ejercicio08(){
 
   console.log("Inicio de ejercicio 8");

    let a = Number(prompt("Ingresa tu primera nota: "));
    let b = Number(prompt("Ingresa tu segunda nota: "));
    let c = Number(prompt("Ingresa tu tercera nota: "));
   
    let promedio = (a + b + c) / 3
    if (promedio >= 0 && promedio <= 9){
        Swal.fire({
            title: "Respuesta",
            text: "No esta aprobado", 
            icon: "error"
        });
    } else if (promedio >= 10 && promedio <= 20) {
        Swal.fire({
            title: "Respuesta",
            text: "Esta aprobado",
            icon: "success"
        })
    } 
    console.log("Fin de ejercicio 8")
}

function Ejercicio09(){

    console.log("Inicio de ejrcicio 9")
    let sueldo = Number(prompt("Ingresa tu suedo: "));
    let aumento;

    if (sueldo > 2000){
        aumento = sueldo * 0.05
    } else {
        aumento = sueldo * 0.1
    }

    sueldoFinal = sueldo + aumento
    Swal.fire({
            title: "Respuesta",
            text: "Tu sueldo sera: " + sueldoFinal,
            icon: "success"
    })
    console.log("Fin del ejercicio 9")
}

function Ejercicio10(){

    console.log("Inicio de ejercicio 10")
    let n = Number(prompt("Escribe un numero: "))
    let n1;

    if (n % 2 === 0){
        Swal.fire({
            title: "Respuesta",
            text: "Es numero par",
            icon: "success"
        })
    } else {
          Swal.fire({
            title: "Respuesta",
            text: "Es numero impar",
            icon: "success"
        })
    }
    console.log("Fin del ejercicio 10")

}

function Ejercicio11(){

    console.log("Inicio de ejercicio 11")

    let a = Number(prompt("Ingresa tu primer numero: "));
    let b = Number(prompt("Ingresa tu segundo numero: "));
    let c = Number(prompt("Ingresa tu tercer numero: "))

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        Swal.fire({
            title: "Error",
            text: "Debes ingresar un numero: ",
            icon: "error"
        });
        return;
    }

   let mayor = a;

   if (b > mayor) mayor = b 
   
   if (c > mayor)mayor = c

     Swal.fire({
            title: "Respuesta",
            text: "El numero mayor es: " + mayor,
            icon: "success"
        });
        console.log("Fin del ejercicio 11")
}

function Ejercicio12(){

    console.log("Inicio de ejercicio 12")
    let a = Number(prompt("Ingresa tu primer numero"));
    let b = Number(prompt("Ingresa tu segundo numero"));

    let mayor = a
    if (b > mayor){
        mayor = b
    }
    Swal.fire({
        title: "Respuesta",
        text: "El numero mayor es: " + mayor,
        icon: "success"
    })
    console.log("Fin del ejercicio 12")
}

function Ejercicio13(){

    console.log("Inicio de ejercicio 13")
    let letras = prompt("Ingrese una letra: ")
    let resultado;

    letras = letras.toLowerCase(letras)
    switch (letras) {
        case "a":
            resultado = "Si es vocal";
            break;
        case "e":
            resultado = "Si es vocal";
            break;
        case "i":
            resultado = "Si es vocal";
            break;
        case "o":
            resultado = "Si es vocal";
            break;
        case "u":
            resultado = "Si es vocal";
            break;
        default:
            resultado = "No es vocal";
            break;
    }
     
    Swal.fire({
        title: "Respuesta",
        text: resultado,
        icon: "info"
    }) 

    console.log("Fin del ejercicio 13")
}

function Ejercicio14(){

    console.log("Inicio de ejercicio 14")
    let numero = Number(prompt("Ingrese un numero del 1 al 10"))
    let esPrimo; 

    if (isNaN(numero) || numero < 1 || numero > 10) {
        Swal.fire({
            title: "Error",
            text: "Debe ingresar un numero del 1 al 10",
            icon:"error"
        });
        return;
    }

    switch (numero){
        case "2":
             esPrimo = true;
            break;
        case "3":
             esPrimo = true;
            break;
        case "5":
             esPrimo = true;
            break;
        case "7":
            esPrimo = true;
            break;
        default:
            esPrimo = false;
    } 

    if (esPrimo){
         Swal.fire({
              title: "Respuesta",
              text: "El numero es primo",
              icon: "success"
        });
    } else {
         Swal.fire({
             title: "Respuesta",
             text: "El numero no es primo",
             icon: "error"
            });
     }

        console.log("Fin del ejercicio 14")
}

function Ejercicio15(){
 
    console.log("Inicio de ejercicio 15")

    factorCmPulg = 0.393701
    factorLbKg = 0.453592

    let opcion = Number(prompt("Ingrese la opcion a realizar (1-2)"))

    if (opcion < 1 || opcion > 2){
        Swal.fire({
            title: "Error",
            text: "Operacion no valida",
            icon: "error"
        });
    }

    let numero = Number(prompt("Ingrese el numero a convertir"));
    let resultado;

    if (opcion === 1){
        resultado = numero * factorCmPulg
    } Swal.fire({
        title:"Respuesta",
        text: numero + " serian " + resultado + " pulgadas ",
        icon: "success"
    });

    if (opcion === 2){
        resultado = numero * factorLbKg
    } Swal.fire({
        title: "Respuesta",
        text: numero + " serian " + resultado + " kilogramo ",
        icon: "success"
    });

    console.log("Fin del ejercicio 15")
}
