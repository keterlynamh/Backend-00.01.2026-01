/* ============================================================
   CONFIGURACIÓN DE IMÁGENES
   ============================================================ */
const IMG_PRINCIPAL = "./Images/Neuvillete Iocn.webp"; 
const IMG_EXITO = "./Images/Good Kaveh.webp"; 
const IMG_FALLO = "./Images/Exercise Wrong.webp"; 

/* --- FUNCIONES MOTOR DEL ASISTENTE --- */
async function botPregunta(titulo, placeholder = "Ingresa el valor...") {
    const { value: respuesta } = await Swal.fire({
        title: `Hola, ${titulo}`,
        imageUrl: IMG_PRINCIPAL,
        imageWidth: 90, imageHeight: 90,
        input: 'text',
        inputPlaceholder: placeholder,
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        customClass: { popup: 'bot-popup animate__animated animate__fadeInDown', image: 'bot-img-custom' },
        confirmButtonColor: '#4f46e5'
    });
    return (respuesta && respuesta.trim() !== "") ? respuesta : null;
}

function botRespuesta(mensaje, esExito = true) {
    Swal.fire({
        title: esExito ? "¡Resultado listo!" : "Atención",
        html: mensaje,
        imageUrl: esExito ? IMG_EXITO : IMG_FALLO,
        imageWidth: 90, imageHeight: 90,
        confirmButtonText: 'Entendido',
        customClass: { popup: 'bot-popup animate__animated animate__zoomIn', image: 'bot-img-custom' },
        confirmButtonColor: esExito ? '#10b981' : '#ef4444'
    });
}

/* ============================================================
   BLOQUE 1: CONDICIONALES (1 - 10)
   ============================================================ */

// 1. Tres Dígitos
async function ej01() {
    let n = await botPregunta("ingresa un número para ver si tiene 3 dígitos:");
    if(!n) return;
    let num = Math.abs(Number(n));
    let esTres = (num > 99 && num < 1000);
    botRespuesta(`
        <b>Resultado:</b> ${esTres ? 'Tiene 3 dígitos' : 'No tiene 3 dígitos'}<br><br>
        <b>Explicación:</b> El número que ingresaste fue el <b>${n}</b>. El sistema revisó si estaba entre el 100 y el 999. Como ves, el <b>${n}</b> ${esTres ? 'sí' : 'no'} cumple con esa regla.
    `, esTres);
}

// 2. Es Negativo
async function ej02() {
    let n = await botPregunta("dime un número para ver si es negativo:");
    if(!n) return;
    let esNeg = Number(n) < 0;
    botRespuesta(`
        <b>Resultado:</b> ${esNeg ? 'Es Negativo' : 'Es Positivo o Cero'}<br><br>
        <b>Explicación:</b> Tomamos tu número <b>${n}</b> y lo comparamos con el 0. Como <b>${n}</b> es ${esNeg ? 'menor' : 'mayor o igual'} que cero, sabemos su polaridad.
    `, esNeg);
}

// 3. Termina en 4
async function ej03() {
    let n = await botPregunta("escribe un número para ver si termina en 4:");
    if(!n) return;
    let termina = n.endsWith('4');
    botRespuesta(`
        <b>Resultado:</b> ${termina ? 'Sí, termina en 4' : 'No termina en 4'}<br><br>
        <b>Explicación:</b> Miramos el último dígito del número <b>${n}</b> que nos diste. Al ver que termina en "${n.slice(-1)}", confirmamos que ${termina ? 'efectivamente es un 4' : 'no es un 4'}.
    `, termina);
}

async function ej04() {
    let a = await botPregunta("primer número:"), b = await botPregunta("segundo número:"), c = await botPregunta("tercer número:");
    if(!a || !b || !c) return;
    let arr = [Number(a), Number(b), Number(c)].sort((x,y)=>x-y);
    botRespuesta(`<b>Resultado:</b> Ordenados: ${arr.join(' < ')}<br><br><b>Explicación:</b> Se comparan los tres valores y se organizan de menor a mayor automáticamente.`);
}

// 5. Zapatos con escala de descuentos
async function ej05() {
    let q = await botPregunta("¿cuántos pares de zapatos vas a comprar? ($80 c/u)");
    if(!q) return;
    let n = Number(q), subtotal = n * 80;
    let d = n > 30 ? 0.4 : n > 20 ? 0.2 : n > 10 ? 0.1 : 0;
    let descuentoTotal = subtotal * d;
    botRespuesta(`
        <b>Desglose de Compra:</b><br>
        - Pares: ${n}<br>
        - Subtotal: $${subtotal}<br>
        - Descuento (${d*100}%): -$${descuentoTotal}<br>
        <b>Total a pagar: $${subtotal - descuentoTotal}</b><br><br>
        <b>Explicación:</b> Multiplicamos los pares por $80. Luego, según la cantidad (${n}), aplicamos el porcentaje de descuento correspondiente y lo restamos del total.
    `);
}

// 6. Horas Extra
async function ej06() {
    let h = await botPregunta("¿cuántas horas trabajaste esta semana?");
    if(!h) return;
    let horas = Number(h), normales = Math.min(horas, 40), extras = Math.max(0, horas - 40);
    let pago = (normales * 20) + (extras * 25);
    botRespuesta(`
        <b>Cálculo de Sueldo:</b><br>
        - Horas Normales: ${normales} x $20 = $${normales*20}<br>
        - Horas Extras: ${extras} x $25 = $${extras*25}<br>
        <b>Total: $${pago}</b><br><br>
        <b>Explicación:</b> Las primeras 40 horas son a precio estándar ($20). Si trabajaste más de 40, cada hora adicional (extra) se paga a $25.
    `);
}

// 7. TIENDA DE HELADOS (MEMBRESÍAS A, B, C) - ¡CORREGIDO!
async function ej07() {
    const { value: tipo } = await Swal.fire({
        title: 'Hola, bienvenido a la heladería. ¿Qué membresía tienes?',
        input: 'select',
        inputOptions: { 'A': 'Tipo A (10%)', 'B': 'Tipo B (15%)', 'C': 'Tipo C (20%)', 'N': 'Ninguna (0%)' },
        imageUrl: IMG_PRINCIPAL, imageWidth: 90,
        confirmButtonText: 'Siguiente'
    });
    
    let respuestaMonto = await botPregunta(`¿Cuál es el costo total de los helados que vas a llevar?`);
    if(!respuestaMonto) return;
    
    let montoOriginal = Number(respuestaMonto);
    let porcentaje = tipo === 'A' ? 0.10 : tipo === 'B' ? 0.15 : tipo === 'C' ? 0.20 : 0;
    let ahorro = montoOriginal * porcentaje;
    let totalPagar = montoOriginal - ahorro;

    botRespuesta(`
        <b>Ticket de Venta Detallado:</b><br>
        - Consumo inicial: $${montoOriginal}<br>
        - Membresía detectada: <b>Tipo ${tipo}</b><br>
        - Descuento aplicado: <b>${porcentaje * 100}%</b><br>
        - Dinero que te ahorras: -$${ahorro.toFixed(2)}<br><br>
        <b>Total Final a Pagar: $${totalPagar.toFixed(2)}</b><br><br>
        <b>Explicación:</b> Como tu compra fue de $${montoOriginal} y tienes membresía ${tipo}, el sistema restó el ${porcentaje * 100}% del precio total. ¡Disfruta tu helado!
    `);
}
// 8. Promedio de Notas
async function ej08() {
    let n1 = await botPregunta("Nota 1:"), n2 = await botPregunta("Nota 2:"), n3 = await botPregunta("Nota 3:");
    let p = (Number(n1)+Number(n2)+Number(n3))/3;
    botRespuesta(`<b>Promedio: ${p.toFixed(2)}</b><br><br><b>Explicación:</b> Sumamos tus 3 notas y dividimos el resultado entre 3 para hallar el punto medio.`);
}

// 9. Aumento de Sueldo
async function ej09() {
    let s = await botPregunta("Sueldo actual:");
    if(!s) return;
    let sueldo = Number(s), aumento = sueldo > 2000 ? 0.05 : 0.10;
    botRespuesta(`<b>Nuevo Sueldo: $${(sueldo*(1+aumento)).toFixed(2)}</b><br><br><b>Explicación:</b> Como ganas ${sueldo > 2000 ? 'más' : 'menos'} de $2000, te corresponde un aumento del ${aumento*100}%.`);
}

async function ej10() {
    let n = await botPregunta("ingresa un número para ver si es Par o Impar:");
    if(!n) return;
    let r = Number(n)%2==0;
    botRespuesta(`<b>Resultado:</b> Es ${r?'PAR':'IMPAR'}<br><br><b>Explicación:</b> Al dividir ${n} entre 2, el residuo es ${Number(n)%2}. Si es 0, el número es par.`);
}

/* ============================================================
   BLOQUE 2: LÓGICA Y CONVERSIONES (11 - 20)
   ============================================================ */

// 11. Mayor de Tres
async function ej11() {
    let a = await botPregunta("primer número:"), b = await botPregunta("segundo número:"), c = await botPregunta("tercer número:");
    if(!a || !b || !c) return;
    let mayor = Math.max(a, b, c);
    botRespuesta(`
        <b>Resultado:</b> El mayor es ${mayor}<br><br>
        <b>Explicación:</b> Pusiste el <b>${a}</b>, el <b>${b}</b> y el <b>${c}</b>. Al compararlos todos en una balanza, el que tiene más valor es el <b>${mayor}</b>.
    `);
}

// 12. Mayor de Dos
async function ej12() {
    let a = await botPregunta("primer número:"), b = await botPregunta("segundo número:");
    if(!a || !b) return;
    let mayor = Math.max(a, b);
    botRespuesta(`
        <b>Resultado:</b> El mayor es ${mayor}<br><br>
        <b>Explicación:</b> Entre el <b>${a}</b> y el <b>${b}</b> que elegiste, el sistema detectó que el <b>${mayor}</b> es el que está más lejos del cero en la recta numérica.
    `);
}

// 13. Es Vocal
async function ej13() {
    let l = await botPregunta("ingresa una letra:");
    if(!l) return;
    let r = /^[aeiouáéíóú]$/i.test(l);
    botRespuesta(`
        <b>Resultado:</b> ${r ? 'Es Vocal' : 'No es vocal'}<br><br>
        <b>Explicación:</b> Analizamos la letra <b>"${l}"</b> que escribiste. La comparamos con el grupo (A, E, I, O, U) y vimos que <b>"${l}"</b> ${r ? 'está' : 'no está'} en esa lista.
    `);
}

// 14. Es Primo 
async function ej14() {
    let n = Number(await botPregunta("un número del 1 al 10:"));
    if(!n) return;
    let primos = [2, 3, 5, 7];
    let r = primos.includes(n);
    botRespuesta(`
        <b>Resultado:</b> ${r ? 'Es Primo' : 'No es primo'}<br><br>
        <b>Explicación:</b> Tu número fue el <b>${n}</b>. En el rango del 1 al 10, solo el 2, 3, 5 y 7 son primos (solo se dividen por ellos mismos). Por eso, el <b>${n}</b> ${r ? 'es' : 'no es'} parte de ese grupo especial.
    `);
}

// 15. Conversiones
async function ej15() {
    let cm = await botPregunta("Centímetros:"), lb = await botPregunta("Libras:");
    botRespuesta(`
        <b>Conversión:</b><br>
        - ${cm} cm = ${(cm/2.54).toFixed(2)} pulgadas<br>
        - ${lb} lb = ${(lb/2.204).toFixed(2)} kg<br><br>
        <b>Explicación:</b> Usamos los valores universales: 1 pulgada = 2.54cm y 1 kg = 2.204lb para transformar tus unidades.
    `);
}

async function ej16() {
    let n = Number(await botPregunta("número (1-7):"));
    let d = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    botRespuesta(`<b>Resultado:</b> ${d[n-1] || 'Día Inválido'}<br><br><b>Explicación:</b> El programa asocia cada número con una posición en el calendario semanal.`);
}

// 17. Siguiente Segundo
async function ej17() {
    let h = Number(await botPregunta("Hora:")), m = Number(await botPregunta("Minutos:")), s = Number(await botPregunta("Segundos:"));
    let hO = h, mO = m, sO = s;
    s++; if(s==60){s=0; m++;} if(m==60){m=0; h++;} if(h==24) h=0;
    botRespuesta(`
        <b>Nueva Hora:</b> ${h}:${m}:${s}<br><br>
        <b>Explicación:</b> Tu hora original era <b>${hO}:${mO}:${sO}</b>. Le sumamos un segundo y, como el tiempo avanza, ajustamos los minutos o la hora si era necesario para llegar a las <b>${h}:${m}:${s}</b>.
    `);
}

// 18. CDs
async function ej18() {
    let n = Number(await botPregunta("¿Cuántos CDs llevarás?"));
    let p = n<=9?10:n<=99?8:n<=499?7:6;
    botRespuesta(`<b>Total: $${n*p}</b><br><br><b>Explicación:</b> El precio unitario bajó a $${p} porque compraste ${n} unidades (venta por volumen).`);
}

// 19. Salario por ID
async function ej19() {
    let id = await botPregunta("ID Empleado (1-4):"), dias = await botPregunta("Días trabajados:");
    let tarifas = {1:56, 2:64, 3:80, 4:48};
    botRespuesta(`<b>Pago: $${tarifas[id]*dias}</b><br><br><b>Explicación:</b> El ID ${id} tiene una tarifa diaria de $${tarifas[id]}. Multiplicamos eso por los ${dias} días.`);
}

// 20. Pares y Mayor (4 números)
async function ej20() {
    let n1 = Number(await botPregunta("N1")), n2 = Number(await botPregunta("N2")), n3 = Number(await botPregunta("N3")), n4 = Number(await botPregunta("N4"));
    let lista = [n1, n2, n3, n4];
    let pares = lista.filter(x => x % 2 === 0).length;
    botRespuesta(`
        <b>Pares:</b> ${pares} | <b>Mayor:</b> ${Math.max(...lista)}<br><br>
        <b>Explicación:</b> Revisamos tus números: <b>${n1}, ${n2}, ${n3} y ${n4}</b>. De ellos, ${pares} son pares y el más grande de todos los que escribiste es el <b>${Math.max(...lista)}</b>.
    `);
}

/* ============================================================
   BLOQUE 3: BUCLES (21 - 30)
   ============================================================ */

async function ej21() {
    let n = Number(await botPregunta("Número para Factorial:"));
    let res=1, camino="";
    for(let i=1; i<=n; i++) { res *= i; camino += (i==n)? i : i+"x"; }
    botRespuesta(`<b>Resultado: ${res}</b><br><b>Paso a paso:</b> ${camino}<br><br><b>Explicación:</b> El factorial (!) es multiplicar el número por todos sus anteriores. Aquí multiplicamos desde 1 hasta llegar a ${n}.`);
}

// 22. Suma Progresiva (Gauss)
async function ej22() {
    let r = await botPregunta("dime hasta qué número quieres sumar:");
    if(!r) return;
    let n = parseInt(r);
    let suma = (n * (n + 1)) / 2;
    botRespuesta(`
        <b>Suma Total: ${suma}</b><br><br>
        <b>Explicación:</b> Querías sumar todo desde el 1 hasta el <b>${n}</b>. En lugar de ir uno por uno, usamos un truco: multiplicamos tu número <b>${n}</b> por <b>${n+1}</b> y el resultado lo dividimos entre 2.
    `);
}

// 23. Suma de Impares
async function ej23() {
    let r = await botPregunta("dime el límite para sumar solo impares:");
    if(!r) return;
    let n = parseInt(r), s = 0;
    for(let i=1; i<=n; i+=2) s += i;
    botRespuesta(`
        <b>Suma de Impares: ${s}</b><br><br>
        <b>Explicación:</b> Empezamos desde el 1 y fuimos saltando de dos en dos hasta llegar a tu límite <b>${n}</b>. Sumamos solo los números "solitarios" (impares) y el total nos dio <b>${s}</b>.
    `);
}

// 24. Suma de Pares hasta el 1000
async function ej24() {
    let bolsaDeMonedas = 0;
    let limiteSuperior = 1000;
    
    // El robot empieza en el 2 y salta de 2 en 2
    for (let paso = 2; paso <= limiteSuperior; paso += 2) {
        bolsaDeMonedas += paso;
    }

    botRespuesta(`
        <b>¡Misión Completada!</b><br>
        El total recolectado hasta el paso <b>${limiteSuperior}</b> es: <b>$${bolsaDeMonedas}</b><br><br>
        
        <b>¿Cómo lo hizo el robot?</b><br>
        Imagina que el robot empezó a caminar. Ignoró el paso 1 porque es impar. <br><br>
        1. En el paso <b>2</b>, recogió 2 monedas.<br>
        2. Saltó al paso <b>4</b> y recogió 4 más.<br>
        3. Siguió así, saltando de dos en dos, hasta que llegó al paso <b>${limiteSuperior}</b>.<br><br>
        
        <b>En palabras simples:</b><br>
        Sumamos solo los números "compañeros" (pares). Al final, la bolsa se llenó con <b>${bolsaDeMonedas}</b> monedas en total. ¡Es mucho más rápido que sumar de uno en uno!
    `);
}

// 25. Factorial (While)
async function ej25() {
    let r = await botPregunta("dime un número para calcular su factorial:");
    if(!r) return;
    let n = parseInt(r), f = 1, i = n;
    while(i > 0) { f *= i; i--; }
    botRespuesta(`
        <b>Factorial: ${f}</b><br><br>
        <b>Explicación:</b> El factorial es multiplicar tu número <b>${n}</b> por todos los de abajo. Hicimos <b>${n} x ${n-1} x ${n-2}...</b> hasta llegar a 1, y el gran total es <b>${f}</b>.
    `);
}

// 26. Restas Sucesivas (División sin dividir)
async function ej26() {
    let D = await botPregunta("¿Qué número quieres dividir? (Dividendo):");
    let d = await botPregunta("¿Entre cuánto lo quieres dividir? (Divisor):");
    if(!D || !d) return;
    let numD = parseInt(D), numd = parseInt(d);
    let cociente = 0, resto = numD;
    
    while(resto >= numd) {
        resto -= numd;
        cociente++;
    }
    
    botRespuesta(`
        <b>Resultado:</b> Cociente: <b>${cociente}</b>, Resto: <b>${resto}</b><br><br>
        <b>Explicación:</b> Para dividir tu número <b>${D}</b> entre <b>${d}</b> sin usar la calculadora, lo que hicimos fue restarle <b>${d}</b> a <b>${D}</b> todas las veces que pudimos. Lo logramos restar <b>${cociente}</b> veces y al final nos sobraron <b>${resto}</b>.
    `);
}

async function ej27() {
    let nums = [], s = 0;
    await Swal.fire("Hola", "Vamos a promediar. Ingresa números positivos; uno negativo para ver el resultado.", "info");
    while(true){
        let r = await botPregunta(`Ingresa un valor (Datos actuales: ${nums.length}):`);
        if(r === null || Number(r)<0) break;
        nums.push(Number(r)); s+=Number(r);
    }
    botRespuesta(`
        <b>Resultado:</b> Media: <b>${nums.length>0?(s/nums.length).toFixed(2):0}</b><br>
        <b>Tus números:</b> [${nums.join(', ')}]<br><br>
        <b>Explicación:</b> Sumamos todos los números positivos que escribiste (${s}) y los dividimos entre la cantidad total de datos (${nums.length}).
    `);
}

async function ej28() {
    let caja = 0;
    let moneda = 1;
    
    do {
        caja = caja + moneda; // Mete la moneda
        moneda = moneda + 1;  // Prepara la siguiente
    } while (moneda <= 100);  // ¿Ya llegué a 100? Si no, repite.

    botRespuesta(`
        <b>Resultado: ${caja}</b><br><br>
        <b>Explicación sencilla:</b><br>
        Este robot es "mandado". Él primero mete la moneda en la caja y <b>luego</b> pregunta: "¿Ya puse las 100?". Como todavía no terminaba, siguió repitiendo hasta que llenó la caja con <b>${caja}</b>.
    `);
}

async function ej29() {
    let caja = 0;
    let moneda = 1;
    
    while (moneda <= 100) { // ¿Falta para llegar a 100?
        caja = caja + moneda; // Si falta, la mete.
        moneda = moneda + 1;
    }

    botRespuesta(`
        <b>Resultado: ${caja}</b><br><br>
        <b>Explicación sencilla:</b><br>
        Este robot es muy cauteloso. Antes de meter la moneda número <b>${moneda}</b>, primero se detiene y dice: "¿Es este número menor o igual a 100?". Como es verdad, lo suma. Si le dijeras que sume hasta el 0, este robot no haría nada porque preguntaría primero.
    `);
}

async function ej30() {
    let caja = 0;
    
    // Le decimos: "Empieza en 1, llega a 100, suma de 1 en 1"
    for (let moneda = 1; moneda <= 100; moneda++) {
        caja = caja + moneda;
    }

    botRespuesta(`
        <b>Resultado: ${caja}</b><br><br>
        <b>Explicación sencilla:</b><br>
        Este es el robot "automático". No necesita detenerse a preguntar en cada paso. Él ya tiene anotado en su brazo: <b>"Inicio en 1, Fin en 100, paso a paso"</b>. Es el que más usan los programadores porque es el más ordenado.
    `);
}
/* ============================================================
   BLOQUE 4: AVANZADOS (31 - 40)
   ============================================================ */

async function ej32() {
    let max=0, pG=0;
    for(let i=1;i<=3;i++){
        let n = Math.floor(Math.random()*500000) + 10000;
        if(n>max){ max=n; pG=i; }
    }
    botRespuesta(`<b>Resultado:</b> Provincia ${pG} con ${max.toLocaleString()} hab.<br><br><b>Explicación:</b> Simulamos un censo en 3 provincias. El algoritmo comparó los resultados y detectó que la Provincia ${pG} tiene el pico más alto.`);
}

async function ej34() {
    const { value: t } = await Swal.fire({
        title: 'Hola, ¿qué tabla de multiplicar quieres consultar?',
        input: 'select', 
        inputOptions: { '1':'Tabla del 1','2':'Tabla del 2','3':'Tabla del 3','4':'Tabla del 4','5':'Tabla del 5','6':'Tabla del 6','7':'Tabla del 7','8':'Tabla del 8','9':'Tabla del 9' },
        imageUrl: IMG_PRINCIPAL,
        confirmButtonText: 'Ver Tabla'
    });
    if(!t) return;
    let n = parseInt(t), res = "";
    for(let i=1;i<=10;i++) res += `<b>${n}</b> x ${i} = <b>${n*i}</b><br>`;
    botRespuesta(`<b>Resultado:</b><br>${res}<br><b>Explicación:</b> Se generó la tabla del ${n} multiplicando el valor base por una secuencia del 1 al 10.`);
}

async function ej35() {
    let nums = []; for(let i=0;i<20;i++) nums.push(Math.floor(Math.random()*100) + 1);
    botRespuesta(`
        <b>Números analizados:</b><br>${nums.join(', ')}<br><br>
        <b>Resultado:</b> Mayor: ${Math.max(...nums)} | Menor: ${Math.min(...nums)}<br><br>
        <b>Explicación:</b> De una lista aleatoria de 20 números, el asistente identificó los valores extremos mediante una comparación interna.`);
}

async function ej36() {
    let n = Number(await botPregunta("¿Cuántos números de Fibonacci quieres?"));
    let f=[0,1];
    for(let i=2; i<n; i++) f.push(f[i-1] + f[i-2]);
    botRespuesta(`<b>Serie:</b> ${f.slice(0,n).join(', ')}<br><br><b>Explicación:</b> Esta secuencia empieza con 0 y 1. El siguiente número siempre es la <b>suma de los dos anteriores</b> (0+1=1, 1+1=2, 1+2=3...).`);
}

async function ej37() {
    let r1 = await botPregunta("dime el primer número (A):");
    let r2 = await botPregunta("dime el segundo número (B):");
    
    if(!r1 || !r2) return;

    let a = Math.abs(parseInt(r1));
    let b = Math.abs(parseInt(r2));
    let n1 = a;
    let n2 = b;
    let pasos = "";
    
    // Algoritmo con registro de pasos
    while (b !== 0) {
        let residuo = a % b;
        pasos += `• Dividimos ${a} entre ${b} y el residuo es <b>${residuo}</b>.<br>`;
        a = b;
        b = residuo;
    }

    botRespuesta(`
        <b>Máximo Común Divisor (MCD):</b><br>
        El divisor más grande para ${n1} y ${n2} es: <b>${a}</b>.<br><br>
        
        <b>Paso a paso del proceso:</b><br>
        ${pasos}<br>
        
        <b>¿Qué significa esto?</b><br>
        Buscamos el número más grande que pueda dividir a <b>${n1}</b> y a <b>${n2}</b> al mismo tiempo sin dejar sobras. 
        Siguiendo los pasos de arriba, el último número que dividió perfectamente fue el <b>${a}</b>.
    `);
}
async function ej38() {
    let n = Number(await botPregunta("Número para verificar si es Perfecto:"));
    let s=0, divisores=[];
    for(let i=1; i<n; i++) if(n%i==0){ s+=i; divisores.push(i); }
    let esP = (s===n);
    botRespuesta(`<b>${esP?'¡Es Perfecto!':'No es Perfecto'}</b><br><b>Suma de divisores:</b> ${divisores.join('+')} = ${s}<br><br><b>Explicación:</b> Un número es "perfecto" si al sumar todos sus divisores (excepto él mismo), el resultado es igual al número original.`);
}

async function ej39() {
    let pi=0, d=1, s=1;
    for(let i=0; i<10000; i++) { pi += s*(4/d); d+=2; s*=-1; }
    botRespuesta(`<b>Pi ≈ ${pi.toFixed(6)}</b><br><br><b>Explicación para principiantes:</b> ¿Cómo se calcula Pi? El matemático Leibniz descubrió que si sumas y restas fracciones infinitas (4/1 - 4/3 + 4/5 - 4/7...), el resultado se acerca cada vez más a 3.14159. Aquí lo hicimos 10,000 veces.`);
}

async function ej40() {
    let pi=3, d=2, s=1;
    for(let i=0; i<1000; i++) {
        pi += s*(4/(d*(d+1)*(d+2)));
        d+=2; s*=-1;
    }
    botRespuesta(`<b>Pi ≈ ${pi.toFixed(6)}</b><br><br><b>Explicación para principiantes:</b> Este es el método de Nilakantha. Es como el anterior, pero usa multiplicaciones de tres números en el denominador. Es mucho más rápido y preciso para llegar al valor de Pi.`);
}