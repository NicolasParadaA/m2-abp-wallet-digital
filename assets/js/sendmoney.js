let contacto1 = {
    nombre: "Pedro",
    apellido: "Soto",
    cbu: "111111111",
    alias: "Pedrito",
    nombreBanco: "Banco Estado"
}

let contacto2 = {
    nombre: "Carlos",
    apellido: "Pereira",
    cbu: "222222222",
    alias: "Carlitos",
    nombreBanco: "Banco Estado"
}

let contacto3 = {
    nombre: "Marta",
    apellido: "Osorio",
    cbu: "333333333",
    alias: "Martita",
    nombreBanco: "Banco Falabella"
}
let contacto4 = {
    nombre: "Martin",
    apellido: "López",
    cbu: "444444444",
    alias: "Martincito",
    nombreBanco: "Banco Chile"
}
let contacto5 = {
    nombre: "José",
    apellido: "ibañez",
    cbu: "555555555",
    alias: "jose",
    nombreBanco: "Banco itaú"
}
let contacto6 = {
    nombre: "Pepito",
    apellido: "rosas",
    cbu: "666666666",
    alias: "pepe",
    nombreBanco: "Banco ScotiaBank"
}

let contactos = [contacto1, contacto2, contacto3, contacto4, contacto5, contacto6];

function crearInfoContacto(contacto) {
    if (!contacto) {
        return "";
    }
    let { nombre, apellido, cbu, alias, nombreBanco } = contacto;
    let infoContacto = `
        <li class="list-group-item glass-button">
                <div class="contact-info">
                    <span class="contact-name">${nombre} ${apellido}</span>
                    <span class="contact-details">
                            CBU: ${cbu}, Alias: ${alias}, Banco: ${nombreBanco}
                    </span>
                </div>
        </li>
    `;
    return infoContacto;

    // let li = document.createElement("li");
    // let div = document.createElement("div");

    // li.classList.add("list-group-item")
    // li.appendChild(div)
}

function agregarContactosDom(listaContactos) {
    let elementosLista = "";
    listaContactos.forEach(contacto => {
        elementosLista += crearInfoContacto(contacto);
    });
    document.getElementById("contactList").innerHTML = elementosLista;

}

//INICIO FUNCIÓN AGREGAR NUEVOS CONTACTOS
document.getElementById("formAddContacto").addEventListener("submit", function(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cbu = document.getElementById("cbu").value;
    let alias = document.getElementById("alias").value;
    let banco = document.getElementById("banco").value;
    let nuevoContacto = {
        nombre,
        apellido,
        cbu,
        alias,
        nombreBanco: banco
    };
    contactos.push(nuevoContacto);
    alert(`Su nuevo contacto ${nombre} ${apellido}, ha sido agregado con éxito.`)
    agregarContactosDom(contactos);
    const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgregarContacto"));
    modal.hide();
});
//FIN FUNCIÓN AGREGAR NUEVOS CONTACTOS
// INICIO EVENTO BUSCAR CONTACTO
document.getElementById("searchContact").addEventListener("input", function(event){
    let textoBusqueda = event.target.value;
    // CONVERIT A MINÚSCULAS Y QUITAR ESPACIOS
    textoBusqueda = textoBusqueda.toLocaleLowerCase();
    //AHORA LE QUITAMOS CUALQUIER ESPACIO ADICIONAL
    textoBusqueda = textoBusqueda.trim();
    let contactosFiltrados = contactos.filter(function(contacto){
        let nombre = contacto.nombre.toLocaleLowerCase();
        let apellido = contacto.apellido.toLocaleLowerCase();
        let alias = contacto.alias.toLocaleLowerCase();
        let nombreApellido = `${nombre} ${apellido}`;
        // CONJUNTO DE REGLAS DE FILTRADO
        let reglaNombre = nombre.includes(textoBusqueda);
        let reglaApellido = apellido.includes(textoBusqueda);
        let reglaAlias = alias.includes(textoBusqueda);
        let reglaNombreApellido = nombreApellido.includes(textoBusqueda);
        if(reglaNombre || reglaApellido || reglaAlias || reglaNombreApellido){
            return contacto;
        }
    });
    agregarContactosDom(contactosFiltrados);
})
// FIN EVENTO BUSCAR CONTACTO
// INICIO LÓGICA FORM ENVIAR DINERO
function crearInfoContactoSelect(contacto){
    if(!contacto){
        return "";
    }
    let {nombre, apellido, cbu, alias, nombreBanco } = contacto;
    let infoContacto = `<option value="${cbu}">${alias} - ${cbu} - ${nombreBanco}</option>`;
    return infoContacto;
}
function agregarContactosSelect(listaContactos){
    let elementosSelect= "";
    listaContactos.forEach(contacto => {
        elementosSelect += crearInfoContactoSelect(contacto); 
    });
    document.getElementById("enviarContacto").innerHTML = elementosSelect;

}
const formEnviarDinero = document.getElementById("formEnviarDinero")
formEnviarDinero.addEventListener("submit", function(event){
    event.preventDefault();
    let monto = document.getElementById("enviarMonto").value
    let cbuDestino = document.getElementById("enviarContacto").value
    if(monto > saldo){
        alert(`Usted no tiene el saldo suficiente para la operación.\nSaldo disponible:${saldo}`)
    }else {
        alert(`Se ha enviado la suma de ${monto}.\nCuenta CBU N°: ${cbuDestino}`);
        descontarSaldo(monto);
        actualizarSaldosDOM();
    }
});
// FIN LÓGICA FORM ENVIAR DINERO
function actualizarSaldosDOM(){
    document.querySelectorAll(".outputSaldo").forEach(el => el.textContent = saldo);
    document.getElementById("enviarMonto").setAttribute("max", saldo);
}

function main() {
    agregarContactosDom(contactos);
    agregarContactosSelect(contactos);

    actualizarSaldosDOM();
}

main();