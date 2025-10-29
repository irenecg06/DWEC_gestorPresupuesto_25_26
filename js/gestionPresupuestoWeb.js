function mostrarDatoEnId(idElemento, valor){
    let elemento = document.getElementById(idElemento);
    
    if (elemento)
        elemento.textContent = valor;        
};

function mostrarGastoWeb(idElemento, gasto){
    let elemento = document.getElementById(idElemento)

    let divGasto = document.createElement("div");
    divGasto.classList.add("gasto");

    
    
    elemento.appendChild(divGasto);
};

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){

};





export   {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}