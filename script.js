const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

const crearTask = (evento) => {
  evento.preventDefault();  //Con este metodo desactivo la recarga de la pagina al enviar un formulario
  const valorInput = input.value;
  const task = document.createElement('li');
  const list = document.querySelector('[data-list]');
  list.appendChild(task);
  task.classList.add('card');
  //Aqui guardamos las etiquetas html que queramos insertar en comillas invertidas, y el valor dentro de estas lo ponemos con ${valorInput}
  const contenidoTask = `<div>
                      <i class="far fa-check-square icon"></i>
                      <span class="task">${valorInput}</span>
                     </div>
                     <i class="fas fa-trash-alt trashIcon icon"></i>`;
  //Aqui el div task lo llenamos con el nuevo contenido de etiquetas con el metodo innertHTML
  task.innerHTML = contenidoTask;
  console.log(contenidoTask);
  input.value = "";
};
btn.addEventListener('click', crearTask); //cuando yo haga click en el boton, va activar la funcion crearTask