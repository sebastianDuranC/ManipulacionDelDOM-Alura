const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

/* //1ra manera de hacerlo
btn.addEventListener("click", function (evento) {
  //Con este metodo desactivo la recarga de la pagina al enviar un formulario
  evento.preventDefault();
  console.log("Hize click en el boton");
  console.log(input.value);
  //Con esto muestro cada evento que sufre el boton
  //console.log(evento);
});

//2da manera de hacerlo
btn.addEventListener("click", (evento) => {
  //Con este metodo desactivo la recarga de la pagina al enviar un formulario
  evento.preventDefault();
  console.log("Hize click en el boton");
  console.log(input.value);
  //Con esto muestro cada evento que sufre el boton
  //console.log(evento);
}); */

const crearTask = (evento) => {
  evento.preventDefault();
  console.log("Hize click en el boton");
  console.log(input.value);
};
btn.addEventListener('click', crearTask);
