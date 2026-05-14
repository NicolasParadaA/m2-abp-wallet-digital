const historialTransaccionesDOM = document.getElementById("historialTransaccionesDOM");

function agregarTransaccionesDOM(listaTransacciones) {
    function formatearMonto(transaccion) {
        let valor = "";
        let formatoMonto = transaccion.monto.toLocaleString("es-CL", { style: "currency", currency: "CLP" })
        if (transaccion.ingreso) {
            valor = `<span class="badge rounded-pill text-bg-success">${formatoMonto}</span>`;
        } else if (transaccion.egreso) {
            valor = `<span class="badge rounded-pill text-bg-danger">${formatoMonto}</span>`;
        }
        return valor;
    }

    let transacciones = "";
    listaTransacciones.forEach(transaccion => {
        let { glosa, fecha } = transaccion;
        let formatoFecha = moment(fecha).format("DD/MM/YY h:mm a")
        let elementoMonto = formatearMonto(transaccion);
        transacciones += `
            <li class="list-group-item">Fecha: ${formatoFecha}<br>Glosa: ${glosa}<br>Monto: ${elementoMonto}</li>
        `;
    });
    historialTransaccionesDOM.innerHTML = transacciones;
}

function main() {
    agregarTransaccionesDOM(historialTransacciones);
}
main();

