  function ejercicio01() {
    const numeroUsuario = parseInt(prompt("Escribe tu numero"), 10);

    if (numeroUsuario > 99 && numeroUsuario < 1000) {
      alert("Si tiene 3 digitos");
    } else {
      alert("NO tiene 3 digitos");
    }
  }

  function ejercicio02(){
    const numero = parseInt (prompt ("Escribe tu numero"), 10);

    if (numero > 0){
        alert("Tu numero no es negativo")
    } else {}
        alert("Tu numero es negativo")

  }

  

function ejercicio03(){
    const numero = parseInt (prompt("Escribe tu numero"), 10);

    if (numero % 10 === 4){
        alert ("Tu numero termina en 4")
    }else {
        alert ("Tu numero no termina en 4")
    }

}

function ejercicio04() {
    const numero01 = parseInt(prompt("Ingresa primero numero"), 10);
    const numero02 = parseInt(prompt("Ingresa segundo numero"), 10);
    const numero03 = parseInt(prompt("Ingresar tercer numero"), 10);

    let mensaje = "";

    if (numero01 <= numero02 && numero01 <= numero03) {
      if (numero02 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero02 + ", " + numero01;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero03 + ", " + numero01;
      }
    }

    if (numero02 <= numero01 && numero02 <= numero03) {
      if (numero01 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero01 + ", " + numero02;
      } else {
        mensaje = "El orden es " + numero01 + ", " + numero03 + ", " + numero02;
      }
    }

    if (numero03 <= numero01 && numero03 <= numero02) {
      if (numero02 <= numero01) {
        mensaje = "El orden es " + numero01 + ", " + numero02 + ", " + numero03;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero01 + ", " + numero03;
      }
    }

    document.getElementById("resultado").textContent = mensaje;
  }


function ejercicio05() {
    const unidad = 80;
    const cantidad = parseInt(prompt("Cuantas zapatillas desea"), 10);

    const total = unidad * cantidad;

    let porcentaje = 0;

    if (cantidad >= 30) {
      porcentaje = 40;
    } else if (cantidad >= 20 && cantidad <= 29) {
      porcentaje = 20;
    } else if (cantidad >= 10) {
      porcentaje = 10;
    } else {
      porcentaje = 0;
    }

    const descuento = total * (porcentaje / 100);
    const totalfinal = total - descuento;

    document.getElementById("resultado05").textContent =
      "Total de pagar: $ " + totalfinal;

}


function ejercicio06() {
    const horas = parseFloat(prompt("Ingresa las horas trabajadas en la semana"));
    let sueldo = 0;

    if (horas <= 40) {
      sueldo = horas * 20;
    } else {
      const horasNormales = 40;
      const horasExtra = horas - 40;
      sueldo = (horasNormales * 20) + (horasExtra * 25);
    }

    document.getElementById("resultado06").textContent =
      "Tu sueldo semanal es: $" + sueldo;
  }



function ejercicio07() {
  const m = prompt("Indica tu tipo de membresía (a, b o c)")
    .trim()
    .toLowerCase();

  let n = 0;

  if (m === "a") {
    n = 10;
  } else if (m === "b") {
    n = 15;
  } else if (m === "c") {
    n = 20;
  } 

  document.getElementById("resultado07").textContent =
    "Su descuento de membresía es " + n + "%";
}



function ejercicio08() {
  const n1 = parseFloat (prompt ("Ingresar su primera nota"));
  const n2 = parseFloat (prompt ("Ingresar su segunda nota"));
  const n3 = parseFloat (prompt ("Ingresar su tercera nota"));

let np = n1 + n2 + n3
let nf = np / 3


if (nf >= 10.5){
  men = "Usted a sido aprobado con " + nf
} else {
  men = "Usted a sido desaprobado con " + nf
}

document.getElementById("resultado08").textContent = men
}


function ejercicio09(){

  const s = parseFloat (prompt("Ingresar su sueldo"));
let a = 0;

if (s > 2000){
   a = 5;
}else{
   a = 10;
}

const ap = s * (a / 100);
const sf = ap + s;

document.getElementById("resultado09").textContent =
"Su sueldo total es " + sf.toFixed(2);
}


function ejercicio10(){
  const n = parseFloat(prompt("Ingresa tu numero"));

if (n % 2 === 0){
  document.getElementById("resultado10").textContent =
  "Tu numero " + n + " es par"
} else {
  document.getElementById("resultado10").textContent =
  "Tu numero " + n + " es impar"
}





}













