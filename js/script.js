let tipoSeguros = [
  { id: 1, nombre: "Previsora", precio: "$ 250000" },
  { id: 2, nombre: "Bolivar", precio: "$ 275000" },
  { id: 3, nombre: "Mapfre", precio: "$ 300000" },
  { id: 4, nombre: "Suramericana", precio: "$ 282000" },
  { id: 5, nombre: "Allianz", precio: "$ 260000" },
  { id: 6, nombre: "Liberty", precio: "$ 260000" },
];

function filtrar(listaFiltrar, nombre, precio, operador) {
  switch (operador) {
    case "===":
      return listaFiltrar.filter((elemento) => elemento[nombre] === precio);

    case "!==":
      return listaFiltrar.filter((elemento) => elemento[nombre] !== precio);

    case "includes":
      return listaFiltrar.filter(
        (elemento) =>
          elemento[nombre].includes(precio) || elemento[precio].includes(nombre)
      );
    default:
  }
}

function ordenar(listaOrdenar, forma, nombre) {
  listaOrdenar.sort((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });

  if (forma === "Ascendente") {
    listaOrdenar.reverse();
  }
  return listaOrdenar;
}

console.log(ordenar(tipoSeguros, "Ascendente"));

let mensaje = `
1. Listar Seguros
2. Filtrar Categorias
3. Ordenar por Nombre de Forma Descendente
4. Ordenar por Precio de Forma Ascendente
5. Agregar Productos al Carrito por Id
6. Ver Costo Total del  Carrito
7. Finalizar Compra
`;

alert(mensaje);
