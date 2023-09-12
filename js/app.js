const agregarDato = () => {
  let valor = parseInt(document.getElementById('valor').value);
  let descripcion = (document.getElementById('descripcion').value);
  let tipo = document.getElementById('tipo').value;

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
    let nuevocontenedor = document.getElementById("ingreso_padre");
    nuevocontenedor.insertAdjacentElement("beforeend", newboxent);
  }
};

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
