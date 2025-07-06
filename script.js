const button = document.querySelector(".js-button");
const doneList = document.getElementById("doneList");

button.onclick = () => {
  doneList.style.display = "block";
  button.style.display = "none";
};
