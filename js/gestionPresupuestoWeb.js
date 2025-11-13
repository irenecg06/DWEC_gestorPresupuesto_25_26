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
    gastoFecha.textContent = gasto.obtenerPeriodoAgrupacion("dia");
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

    let btnEditar = document.createElement("button");
    btnEditar.classList.add("gasto-editar");
    let manejador = 

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

function nuevoGastoWeb(){
    let descripcion = prompt("Introduzca una descripción para el nuevo gasto: ");
    let valor = Number(prompt("Introduzca un valor para el nuevo gasto: "));
    let fecha = prompt("Introduzca una fecha en formato yyyy-mm-dd : ");
    let etiquetas = prompt("Introduzca etiquetas para el nuevo gasto en formato etiqueta1,etiqueta2,etiqueta3 : ");
    etiquetas = etiquetas.split(",").map(etiqueta => etiqueta.trim());
    let gasto = new GP.CrearGasto(descripcion, valor, fecha, etiquetas);
    GP.anyadirGasto(gasto);
    repintar();
};

let btnAnyadirGasto = document.getElementById("anyadirgasto");
btnAnyadirGasto.addEventListener("click", nuevoGastoWeb);
 
function EditarHandle(){
    this.handleEvent = function(event){
        let descripcion = prompt("Introduzca una descripción para el gasto: ", this.gasto.descripcion);
        let valor = Number(prompt("Introduzca un valor para el gasto: ", this.gasto.valor));
        let fecha = prompt("Introduzca una fecha en formato yyyy-mm-dd : ", this.gasto.obtenerPeriodoAgrupacion("dia"));
        let etiquetas = prompt("Introduzca etiquetas para el gasto en formato etiqueta1,etiqueta2,etiqueta3 : ", this.gasto.etiquetas);
        etiquetas = etiquetas.split(",").map(etiqueta => etiqueta.trim());
        this.gasto.actualizarDescripcion(descripcion);
        this.gasto.actualizarValor(valor);
        this.gasto.actualizarFecha(fecha);
        this.gasto.anyadirEtiquetas(etiquetas);
        repintar();
    };
};

function BorrarHandle(){
    this.handleEvent = function(event){
        GP.borrarGasto(this.gasto.id);
        repintar();
    };
};

function BorrarEtiquetasHandle(){
    this.handleEvent = function(event){
        this.gasto.borrarEtiquetas(this.etiqueta);
        repintar();
    };
};



export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar,
    actualizarPresupuestoWeb
}