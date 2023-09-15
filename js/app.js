let ingresoTotal = 0;
let egresoTotal = 0;
let presupuesto = 0;

document.addEventListener("DOMContentLoaded", function () {
  presupuesto = Number(prompt("Ingrese el nuevo presupuesto"));
  if (presupuesto !== null && !isNaN(parseInt(presupuesto))) {
    realizarCalculos(ingresoTotal, egresoTotal);
  } else {
    alert("Ingrese un valor de presupuesto válido.");
  }
  document.getElementById("ingresos").innerHTML = `<p>$${ingresoTotal}</p>`;
  document.getElementById("egresos").innerHTML = `<p>$${egresoTotal}</p>`;
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
                        <div class="elemento_valor" id="valor_ingreso">+${valor}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" onclick="eliminarIngreso()">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                        </div>`;
    newboxent.setAttribute("class", "elemento limpiarEstilos");
    let nuevocontenedor = document.getElementById("lista-ingresos");
    nuevocontenedor.insertAdjacentElement("beforeend", newboxent);

    ingresoTotal = ingresoTotal + valor;
    document.getElementById("ingresos").innerHTML = `<p>+${ingresoTotal}</p>`;
  } else if (tipo === "Egreso") {
    let newboxent = document.createElement("div");
    newboxent.innerHTML = `
    <div class="elemento_descripcion">${descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor" id="valor_egreso">-${valor}</div>
        <div class="elemento_porcentaje"></div>
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
  }
  realizarCalculos(ingresoTotal, egresoTotal);
};

function realizarCalculos(ingresoTotal, egresoTotal) {
  const saldo = presupuesto - egresoTotal + ingresoTotal;
  let valorPresupuestoElement = document.getElementById("presupuestoNuevo");
  valorPresupuestoElement.innerHTML = `$${saldo}`;
  document.getElementById('ingresos').innerHTML =`<p>+${ingresoTotal}</p>`;
  document.getElementById("egresos").innerHTML = `<p>-${egresoTotal}</p>`;
}

let eliminarIngreso = () => {
  let elemento = document.getElementById("lista-ingresos");
  let ingresodelete = elemento.querySelector(".elemento");
  let quitarIngreso = parseInt(
    document.getElementById("valor_ingreso").innerHTML
  );
  ingresoTotal -= quitarIngreso;
  realizarCalculos(ingresoTotal, egresoTotal);
  elemento.removeChild(ingresodelete);
};

let eliminarEgreso = () => {
  let elemento = document.getElementById("lista-egresos");
  let egresodelete = elemento.querySelector(".elemento");
  let quitarEgreso = document.getElementById("valor_egreso").innerHTML;
  let quitarEgreso0 = parseInt(quitarEgreso.replace("-", ""));
  egresoTotal -= quitarEgreso0;
  realizarCalculos(ingresoTotal, egresoTotal);
  elemento.removeChild(egresodelete);
};
