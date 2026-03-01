// Clase que representa un Teléfono
class Telefono {
    constructor(marca, imei, numeroSerie, imeiReportado = false, serieReportada = false) {
        this.marca = marca;
        this.imei = imei;
        this.numeroSerie = numeroSerie;
        this.imeiReportado = imeiReportado;
        this.serieReportada = serieReportada;
    }

    esReportado() {
        return this.imeiReportado || this.serieReportada;
    }
}

// Clase que representa un Repuesto
class Repuesto {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

// Clase que representa un Técnico
class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills; // Array de marcas que el técnico sabe reparar
    }

    puedeReparar(marca) {
        return this.skills.includes(marca);
    }
}

// Clase que representa el flujo de Reparación de un equipo
class Reparacion {
    constructor(telefono) {
        this.telefono = telefono;
        this.diagnosticoInicial = null;
        this.autorizacionEscrita = false;
        this.abonoPorcentaje = 0; // Se requiere 50% mínimo
        this.tecnicoAsignado = null;
        this.repuestos = [];
        this.estaciones = [
            "Ingresado", 
            "Revisión Inicial", 
            "Esperando Aprobación y Abono", 
            "En Reparación", 
            "Terminado", 
            "Entregado"
        ];
        this.estadoActual = 0; // Índice de la estación actual
    }

    mostrarEstado() {
        console.log(`Estado actual del teléfono (IMEI: ${this.telefono.imei}): ${this.estaciones[this.estadoActual]}`);
        return this.estaciones[this.estadoActual];
    }

    avanzarEstado(nuevoEstadoIndex) {
        if (nuevoEstadoIndex < this.estaciones.length && nuevoEstadoIndex >= 0) {
            this.estadoActual = nuevoEstadoIndex;
            console.log(`El equipo ha pasado a la estación: ${this.estaciones[this.estadoActual]}`);
        }
    }

    registrarRevisionInicial(diagnostico) {
        if (this.estadoActual === 0) {
            this.diagnosticoInicial = diagnostico;
            console.log(`Diagnóstico inicial guardado: ${diagnostico}`);
            this.avanzarEstado(1); // Revisión Inicial
            this.avanzarEstado(2); // Esperando Aprobación
        } else {
            console.log("El equipo ya pasó la revisión inicial.");
        }
    }

    autorizarServicio(autorizacionEscrita, porcentajeAbono) {
        if (this.estadoActual === 2) {
            this.autorizacionEscrita = autorizacionEscrita;
            this.abonoPorcentaje = porcentajeAbono;

            if (this.autorizacionEscrita && this.abonoPorcentaje >= 50) {
                console.log("Servicio autorizado y abono del 50% o más completado.");
                this.avanzarEstado(3); // En Reparación
                return true;
            } else {
                console.log("No se pudo autorizar el servicio. Se requiere autorización escrita y al menos 50% de abono.");
                return false;
            }
        }
    }

    asignarTecnico(tecnico) {
        if (this.estadoActual === 3) {
            if (tecnico.puedeReparar(this.telefono.marca)) {
                this.tecnicoAsignado = tecnico;
                console.log(`Técnico ${tecnico.nombre} asignado a la reparación.`);
            } else {
                console.log(`El técnico ${tecnico.nombre} no tiene el skill para reparar la marca ${this.telefono.marca}.`);
            }
        } else {
            console.log("No se puede asignar técnico en este estado.");
        }
    }

    agregarRepuesto(repuesto) {
        if (this.estadoActual === 3 && this.tecnicoAsignado !== null) {
            this.repuestos.push(repuesto);
            console.log(`Repuesto agregado: ${repuesto.nombre} ($${repuesto.costo})`);
        } else {
            console.log("No se pueden agregar repuestos en este estado o sin técnico asignado.");
        }
    }

    finalizarReparacion() {
        if (this.estadoActual === 3 && this.tecnicoAsignado !== null) {
            this.avanzarEstado(4); // Terminado
            console.log("La reparación ha concluido correctamente.");
        }
    }

    entregarEquipo() {
        if (this.estadoActual === 4) {
            this.avanzarEstado(5); // Entregado
            console.log("El equipo ha sido entregado al cliente.");
        }
    }
}

// Clase que representa el Sistema o Sucursal
class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.reparaciones = [];
        this.tecnicos = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    ingresarTelefono(telefono) {
        console.log(`\n--- Intentando ingresar teléfono ${telefono.marca} (IMEI: ${telefono.imei}) ---`);
        if (telefono.esReportado()) {
            console.log("ERROR: El teléfono ingresado tiene número de serie o IMEI reportado. No puede acceder al servicio.");
            return null;
        }

        console.log("Teléfono admitido correctamente.");
        const nuevaReparacion = new Reparacion(telefono);
        this.reparaciones.push(nuevaReparacion);
        nuevaReparacion.mostrarEstado();
        return nuevaReparacion;
    }
}

// --- CASO DE PRUEBA DE LOS REQUISITOS ---

// 1. Crear la Sucursal
const sucursalCentro = new Sucursal("Sucursal Centro");

// 2. Crear Técnicos con diferentes skills
const tecnico1 = new Tecnico("Juan", ["Samsung", "Xiaomi"]);
const tecnico2 = new Tecnico("Maria", ["Apple", "Huawei"]);
sucursalCentro.agregarTecnico(tecnico1);
sucursalCentro.agregarTecnico(tecnico2);

// 3. Crear Teléfonos
// Caso 1: Teléfono reportado
const telefonoReportado = new Telefono("Samsung", "123456789", "SERIE001", true, false);
// Caso 2: Teléfono válido
const telefonoValido = new Telefono("Apple", "987654321", "SERIE002", false, false);

// Flujo 1: Intento de ingreso de teléfono reportado
sucursalCentro.ingresarTelefono(telefonoReportado);

// Flujo 2: Ingreso y flujo completo de teléfono válido
const reparacionActiva = sucursalCentro.ingresarTelefono(telefonoValido);

if (reparacionActiva) {
    // Revisión y diagnóstico inicial
    reparacionActiva.registrarRevisionInicial("Pantalla rota y batería inflada.");
    reparacionActiva.mostrarEstado();

    // Intentar autorizar sin abono suficiente
    reparacionActiva.autorizarServicio(true, 30); // 30% abono, falla
    reparacionActiva.mostrarEstado();

    // Autorizar correctamente con autorización escrita y 50%
    reparacionActiva.autorizarServicio(true, 50); // 50% abono, éxito
    reparacionActiva.mostrarEstado();

    // Asignar Técnico (validar skills)
    reparacionActiva.asignarTecnico(tecnico1); // Falla, Juan no sabe de Apple
    reparacionActiva.asignarTecnico(tecnico2); // Éxito, Maria sí repara Apple

    // Agregar repuestos a la reparación
    const repuesto1 = new Repuesto("Pantalla iPhone X", 120);
    const repuesto2 = new Repuesto("Batería iPhone X", 40);
    reparacionActiva.agregarRepuesto(repuesto1);
    reparacionActiva.agregarRepuesto(repuesto2);

    // Finalizar y entregar
    reparacionActiva.finalizarReparacion();
    reparacionActiva.mostrarEstado();

    reparacionActiva.entregarEquipo();
    reparacionActiva.mostrarEstado();
}
