var add_task = document.getElementById("add_task");
var input_task = document.getElementById("input_task");
var ul = document.getElementById("ul");

// Creamos una funcion de tipo CLick
add_task.addEventListener("click", () => {
  // Obtenemos el valor del input
  const text = input_task.value;

  // Creamos un nuevo elemento
  const nw = document.createElement("li");

   // Tomamos el valor del input y lo almacenamos en en Li
  nw.textContent = text;
  ul.appendChild(nw);
  input_task.value = ""; // Para que se limpie el input, y no siga con el mismo valor de antes;

  // Creamos el icono de Papeleria para eliminar tareas
  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-trash-can", "iconb");
  ul.appendChild(icon); // Esta es la funcion para que el icono aparezca

  // Eliminamos las tareas
  icon.addEventListener("click", () => {
    ul.removeChild(nw);
    ul.removeChild(icon);
  });
});

// Creamos una funcion para el botn Reload
var reload = document.getElementById("reload");
reload.addEventListener("click", () => {
  location.reload();
});
