(() => {
  const btn = document.querySelector("[data-form-btn]");
  const input = document.querySelector("[data-form-input]");

  const crearTask = (evento) => {
    evento.preventDefault(); //Con este metodo desactivo la recarga de la pagina al enviar un formulario
    const valorInput = input.value;
    const list = document.querySelector("[data-list]"); //Container mayor
    const task = document.createElement("li"); //Container padre <li>
    task.classList.add("card");
    list.appendChild(task);

    const taskContent = document.createElement("div"); //Container hijo <div> del padre <li>
    taskContent.appendChild(checkComplete()); // Aqui lleno con una etiqueta <i> que es el icono de checkpoint

    const tittleTasks = document.createElement("span"); //hijo <span> del container <diV> del taskContent
    tittleTasks.classList.add("task");
    tittleTasks.innerHTML = valorInput;
    
    taskContent.appendChild(tittleTasks);
    const contenidoTask = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //Aqui el div task lo llenamos con el nuevo contenido de etiquetas con el metodo innertHTML
    task.appendChild(taskContent);
    list.appendChild(task);
    input.value = "";
  };
  btn.addEventListener("click", crearTask); //cuando yo haga click en el boton, va activar la funcion crearTask

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})();