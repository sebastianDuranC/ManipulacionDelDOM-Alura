//Crea el elemento checkbox
const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};
//Cuando hago click en el elemento checkbox este cambia de estado a un color azul
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
};

export default checkComplete;