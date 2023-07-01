function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
window.addEventListener("DOMContentLoaded", function() {
  var iframe = document.getElementById("video");
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

function obtenerDimensionesPantalla() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  console.log("Ancho de pantalla: " + width + "px");
  console.log("Altura de pantalla: " + height + "px");
}
