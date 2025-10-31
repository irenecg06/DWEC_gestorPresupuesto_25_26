import * as GP from './gestionPresupuesto.js';
import * as GPW from './gestionPresupuestoWeb.js';

GP.actualizarPresupuesto(1500);
let presupuesto = GP.mostrarPresupuesto();
GPW.mostrarDatoEnId("presupuesto", presupuesto);

let gasto1 = new GP.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new GP.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = new GP.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = new GP.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = new GP.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = new GP.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");
        
GP.anyadirGasto(gasto1);
GP.anyadirGasto(gasto2);
GP.anyadirGasto(gasto3);
GP.anyadirGasto(gasto4);
GP.anyadirGasto(gasto5);
GP.anyadirGasto(gasto6);

let gastosTotales = GP.calcularTotalGastos();
GPW.mostrarDatoEnId("gastos-totales", gastosTotales);

let balanceTotal = GP.calcularBalance();
GPW.mostrarDatoEnId("balance-total", balanceTotal);

