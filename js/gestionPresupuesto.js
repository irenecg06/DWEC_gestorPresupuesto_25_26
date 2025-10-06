let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    if (isNaN(nuevoPresupuesto) || nuevoPresupuesto < 0.0)
    {
        console.log('El presupuesto introducido no es válido.')
        return -1;
    }
    else {
        presupuesto = nuevoPresupuesto;
    }
    return presupuesto;
}

function mostrarPresupuesto() {
    return 'Tu presupuesto actual es de ' + presupuesto + ' €'
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    if (isNaN(valor) || valor < 0.0){
        valor = 0;
    }

    fecha = Date.parse(fecha);

    if (isNaN(fecha)){
        fecha = Date.now();
    }
        this.descripcion = descripcion;
        this.valor = valor;
        this.fecha = fecha;
        this.etiquetas = etiquetas;

        this.mostrarGasto = function() {
            return 'Gasto correspondiente a ' + this.descripcion + ' con valor ' + this.valor + ' €'
        };

        this.actualizarDescripcion = function(nuevaDescripcion) {
            this.descripcion = nuevaDescripcion;
        };

        this.actualizarValor = function(nuevoValor) {
            if(nuevoValor >= 0.0)
                this.valor = nuevoValor;
        };
        this.mostrarGastoCompleto = function() {
            let verEtiquetas = this.etiquetas.map(etiqueta => "- " + etiqueta).join("\n");
            let fechaFormateada = new Date(this.fecha);
            return "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €.\n" + 
                   "Fecha: " + fechaFormateada.toLocaleString() + "\n" +
                   "Etiquetas:\n" + verEtiquetas + "\n";
        };
        this.actualizarFecha = function(nuevaFecha) {
            let tiempo = Date.parse(nuevaFecha);
            if (!isNaN(tiempo))
                this.fecha = tiempo;
        };
        this.anyadirEtiquetas = function(...nuevasEtiquetas) {
            for (let etiqueta of nuevasEtiquetas){
                if (!(this.etiquetas.includes(etiqueta))){
                    this.etiquetas.push(etiqueta);
                }
            }
        };
        this.borrarEtiquetas = function(...etiquetasBorrar) {
            for (let etiqueta of etiquetasBorrar){
                let position = this.etiquetas.indexOf(etiqueta);
                if (position >= 0)
                    this.etiquetas.splice(position, 1);
            }
        };
        this.obtenerPeriodoAgrupacion = function(periodo) {
            let fechaFormateada = new Date(this.fecha);
            let anyo = fechaFormateada.getFullYear();
            if (periodo == "anyo"){
                return anyo;
            }
            if (periodo == "mes" || periodo == "dia"){
                let mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, "0");
                if (periodo == "mes"){
                    return anyo + "-" + mes;
                }
                let dia = fechaFormateada.getDate().toString().padStart(2, "0");
                return anyo + "-" + mes + "-" + dia;
            }
        };
}



function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto++;
    gastos.push(gasto);
}

function borrarGasto(idGasto) {
    let position = gastos.findIndex(gasto => gasto.id === idGasto);
    if (position >= 0)
        gastos.splice(position, 1);
}

function calcularTotalGastos() {
    let total = 0;
    for (let gasto of gastos)
        total += gasto.valor;

    return total;
}

function calcularBalance() {
    return (presupuesto - calcularTotalGastos());
}

function filtrarGastos() {

}

function agruparGastos() {
    
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
