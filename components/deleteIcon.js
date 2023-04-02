//Funcion que crea el icono de eliminar
const deleteIcon = () => {
  // const contenidoTask = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", deleteTask);
  return i;
};
//Funcion que elemina toda la tarea, eliminando al elemeto padre
const deleteTask = (event) => {
  const parent = event.target.parentElement; //Aqui accedemos al elemento padre con el metedo event.target.parentElement
  parent.remove(); //Aquic con el metodo remove el elemento padre muere
};

export default deleteIcon;