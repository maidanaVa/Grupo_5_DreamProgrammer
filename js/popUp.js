let checkBoxOpen = document.getElementById("abrirVentana");
let opacidad = document.getElementById("opacidad");
let ventana = document.getElementById("ventanaEmergente");
let checkBoxClose = document.getElementById("cerrarVentana");

function abrirPopUp() {
  // Cuando el usuario toca el nombre de la tarea, emerge una ventana con mas informacion acerca de la misma
    if (checkBoxOpen.checked == true){
      ventana.style.display = "block";
      opacidad.style.display = "block";
    } else {
      ventana.style.display = "none";
      opacidad.style.display = "none";
    }
  }

function cerrarPopUp(){
  if(checkBoxClose.checked == false) {
    ventana.style.display = "none";
    opacidad.style.display = "none";
  } 
}