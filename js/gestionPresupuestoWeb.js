import * as GP from './gestionPresupuesto.js';

function mostrarDatoEnId(idElemento, valor){
    let elemento = document.getElementById(idElemento);
    
    if (elemento)
        elemento.textContent = valor;        
};

function mostrarGastoWeb(idElemento, gasto){
    let elemento = document.getElementById(idElemento)

    let divGasto = document.createElement("div");
    divGasto.classList.add("gasto");

    let gastoDescripcion = document.createElement("div");
    gastoDescripcion.classList.add("gasto-descripcion");
    gastoDescripcion.textContent = gasto.descripcion;
    divGasto.appendChild(gastoDescripcion);

    let gastoFecha = document.createElement("div");
    gastoFecha.classList.add("gasto-fecha");
    gastoFecha.textContent = gasto.fecha;
    divGasto.appendChild(gastoFecha);

    let gastoValor = document.createElement("div");
    gastoValor.classList.add("gasto-valor");
    gastoValor.textContent = gasto.valor;
    divGasto.appendChild(gastoValor);

    let gastoEtiquetas = document.createElement("div");
    gastoEtiquetas.classList.add("gasto-etiquetas");
    gasto.etiquetas.forEach(etiqueta => {
        let gastoEtiqueta = document.createElement("span");
        gastoEtiqueta.classList.add("gasto-etiquetas-etiqueta");
        gastoEtiqueta.textContent = etiqueta;
        gastoEtiquetas.appendChild(gastoEtiqueta);        
    });
    divGasto.appendChild(gastoEtiquetas);

    elemento.appendChild(divGasto);
};

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
    let elemento = document.getElementById(idElemento)

    let agrupacion = document.createElement("div");
    agrupacion.classList.add("agrupacion");

    let textAgrup = document.createElement("h1");
    textAgrup.textContent = "Gastos agrupados por " + periodo;
    agrupacion.appendChild(textAgrup);

    Object.entries(agrup).forEach(([key, value]) => {
        let agrupacionDato = document.createElement("div");
        agrupacionDato.classList.add("agrupacion-dato");
    
        let agrupacionDatoClave = document.createElement("span");
        agrupacionDatoClave.classList.add("agrupacion-dato-clave");
        agrupacionDatoClave.textContent = key;
        agrupacionDato.appendChild(agrupacionDatoClave);
    
        let agrupacionDatoValor = document.createElement("span");
        agrupacionDatoValor.classList.add("agrupacion-dato-valor");
        agrupacionDatoValor.textContent = value;
        agrupacionDato.appendChild(agrupacionDatoValor);

        agrupacion.appendChild(agrupacionDato);
    });

    elemento.appendChild(agrupacion);
};

function repintar(){
    let presupuesto = GP.mostrarPresupuesto();
    mostrarDatoEnId("presupuesto", presupuesto);
    let gastosTotales = GP.calcularTotalGastos();
    mostrarDatoEnId("gastos-totales", gastosTotales);
    let balanceTotal = GP.calcularBalance();
    mostrarDatoEnId("balance-total", balanceTotal);
    let listadoCompleto = document.getElementById("listado-gastos-completo");
    listadoCompleto.innerHTML = "";
    let listarGastos = GP.listarGastos();
    listarGastos.forEach(gasto => {mostrarGastoWeb("listado-gastos-completo", gasto)});
};

function actualizarPresupuestoWeb(){
    let presupuesto = Number(prompt("Introduzca un presupuesto: "));
    GP.actualizarPresupuesto(presupuesto);
    repintar();
}

let btnActualizarPresupuesto = document.getElementById("actualizarpresupuesto");
btnActualizarPresupuesto.addEventListener("click", actualizarPresupuestoWeb)



export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar,
    actualizarPresupuestoWeb
}