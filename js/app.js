let ingresoTotal = 0;
let egresoTotal = 0;
let nuevoPresupuesto = 0;

document.addEventListener("DOMContentLoaded", function () {
  const nuevoPresupuesto = prompt("Ingrese el nuevo presupuesto");
  if (nuevoPresupuesto !== null && !isNaN(parseInt(nuevoPresupuesto))) {
    const valorPresupuestoElement = document.getElementById("presupuestoNuevo");
    valorPresupuestoElement.innerHTML = `$${nuevoPresupuesto}`;
    realizarCalculos(nuevoPresupuesto, ingresoTotal, egresoTotal); // Pasar valores a realizarCalculos después de actualizar
  } else {
    alert("Ingrese un valor de presupuesto válido.");
  }
});

const agregarDato = () => {
  let valor = parseInt(document.getElementById("valor").value);
  let descripcion = document.getElementById("descripcion").value;
  let tipo = document.getElementById("tipo").value;

  if (tipo === "Ingreso") {
    let newboxent = document.createElement("div");
    newboxent.innerHTML = `
                    <div class="elemento_descripcion">${descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+${valor}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" onclick="eliminarIngreso()">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>`;
    newboxent.setAttribute("class", "elemento limpiarEstilos");
    let nuevocontenedor = document.getElementById("lista-ingresos");
    nuevocontenedor.insertAdjacentElement("beforeend", newboxent);
    ingresoTotal = ingresoTotal + valor;
    document.getElementById("ingresos").innerHTML = `<p>+${ingresoTotal}</p>`;
    document.getElementById("valor").value = "";
    document.getElementById("descripcion").value = "";
  } else if (tipo === "Egreso") {
    let newboxent = document.createElement("div");
    newboxent.innerHTML = `
    <div class="elemento_descripcion">${descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${valor}</div>
        <div class="elemento_porcentaje">%</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn"
                    onclick="eliminarEgreso()">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>`;
    newboxent.setAttribute("class", "elemento limpiarEstilos");
    let nuevocontenedor = document.getElementById("lista-egresos");
    nuevocontenedor.insertAdjacentElement("beforeend", newboxent);
    egresoTotal = egresoTotal + valor;
    document.getElementById("egresos").innerHTML = `<p>-${egresoTotal}</p>`;
    document.getElementById("valor").value = "";
    document.getElementById("descripcion").value = "";
  }
  realizarCalculos(nuevoPresupuesto, ingresoTotal, egresoTotal); // Pasar valores a realizarCalculos después de actualizar
};

function realizarCalculos(nuevoPresupuesto, ingresoTotal, egresoTotal) {
  console.log("El valor del presupuesto es:", nuevoPresupuesto);
  const saldo = nuevoPresupuesto - egresoTotal + ingresoTotal;
  console.log("El saldo actual es:", saldo);
  console.log("Total de ingresos:", ingresoTotal);
  console.log("Total de egresos:", egresoTotal);
}

let eliminarIngreso = () => {
  let elemento = document.getElementById("lista-ingresos");
  let ingresodelete = elemento.querySelector(".elemento");
  elemento.removeChild(ingresodelete);
};

let eliminarEgreso = () => {
  let elemento = document.getElementById("lista-egresos");
  let egresodelete = elemento.querySelector(".elemento");
  elemento.removeChild(egresodelete);
};
