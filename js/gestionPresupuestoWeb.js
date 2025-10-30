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

};





export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}