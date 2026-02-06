const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe tu número: ", function (dato) {
    let numeroUsuario = Number(dato);

    // Convertir a valor absoluto (como en tu PSeInt)
    if (numeroUsuario < 0) {
        numeroUsuario = -numeroUsuario;
    }

    // Verificar si tiene 3 dígitos
    if (numeroUsuario > 99 && numeroUsuario < 1000) {
        console.log("Sí tiene 3 dígitos");
    } else {
        console.log("NO tiene 3 dígitos");
    }

    rl.close();
});
