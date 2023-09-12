let egresos = [900, 400];
let ingresos = [9000, 400];
let x = 0;

const totalIngresos = () => {
  let totalIngresos = 0;
  for (const ingreso of ingresos) {
    totalIngresos += ingreso;
  }
  return totalIngresos;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (const egreso of egresos) {
    totalEgreso += egreso;
  }
  return totalEgreso;
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarCabecero = () => {
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = totalEgresos() / totalIngresos();
  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
};


const agregarDato = () => {
  // const valor = parseInt(document.getElementById('valor'));
  // const descripcion = (document.getElementById("descripcion"));
  // const tipo = document.getElementById("tipo").value;
  // console.log(document.getElementById('valor'));

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

agregarDato();

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
