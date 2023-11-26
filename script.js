//  // Simula la carga de un archivo JSON de manera asíncrona
//  const cargarJSON = () => {
//   return new Promise((resolve, reject) => {
//     // Puedes cambiar la ruta del archivo JSON según tu estructura de carpetas
//     fetch('table.json')
//       .then(response => response.json())
//       .then(data => resolve(data))
//       .catch(error => reject(error));
//   });
// };

// // Función para llenar la tabla con los datos del JSON
// const llenarTabla = async () => {
//   try {
//     const datosJSON = await cargarJSON();
//     const tablaBody = document.querySelector('#miTabla tbody');

//     // Limpiar el cuerpo de la tabla
//     tablaBody.innerHTML = '';

//     // Iterar sobre los datos y agregar filas a la tabla
//     for (let i = 0; i < datosJSON.Networks.length; i++) {
//       const nuevaFila = document.createElement('tr');

//       // Puedes personalizar esto según la estructura de tu JSON
//       const celdas = ['Networks', 'Frequencies', 'Maximum MIMO Stream', 'Maximun Theoretical Throughput (Per Stream)', 'Maximun Theoretical Throughput (TOTAL)'];

//       celdas.forEach(celda => {
//         const nuevaCelda = document.createElement('td');
//         nuevaCelda.textContent = datosJSON[celda][i];
//         nuevaFila.appendChild(nuevaCelda);
//       });

//       tablaBody.appendChild(nuevaFila);
//     }
//   } catch (error) {
//     console.error('Error al cargar el JSON:', error);
//   }
// };

// Llamar a la función para llenar la tabla cuando la página cargue
document.addEventListener('DOMContentLoaded', llenarTabla);

//sidebar
 // Hide the custom popover content
//  function hideCustomPopover() {
//   document.querySelector('.custom-popover').style.display = 'none';
// }