



// Elements
const stickyElement = document.querySelector('#navbar');
const nav = document.getElementById('navbar');
const workSection = document.querySelector('#projects');
var clickStartTime;
var clickDurationThreshold = 1000; // Duración mínima en milisegundos para considerar como clic sostenido
var mouseMove= false;
var elements =document.querySelectorAll('#navbar .nav-list a');

  
// Functions
function checkStickyPosition() {
  // Get the bounding rectangle of the sticky element
  const rect = stickyElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate the progress of the element's top position within the threshold
  const progress = rect.top / windowHeight;

  // Calculate the desired radius based on the progress
  const maxRadius = 150;
  const minRadius = 50;
  const radius = (1 - progress) * (maxRadius - minRadius) + minRadius;

  // Update the CSS variable with the desired radius
  document.documentElement.style.setProperty('--light-radius', `${radius}vmax`);
  
  // Check if the element's top position is within a small threshold
  if (rect.top >= 0 && rect.top <= 1) {
    // Sticky element is at the top
    console.log('Nav element is at the top');
    nav.classList.remove('transparent_bg');
    nav.classList.add('blur_bg');
  }
  else {
    // Sticky element is not at the top
    console.log('Nav element is not at the top');
    nav.classList.remove('blur_bg');
    nav.classList.add('transparent_bg');
  }
}
function update(e){
  if(mouseMove)
  {var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')}
}



    
// Event listener for the scroll event
window.addEventListener('scroll', checkStickyPosition);
document.addEventListener('mousemove',update)
document.addEventListener('mousedown', function(e) {
  if (e.button === 0) { // Verifica si se ha presionado el botón izquierdo del mouse
    clickStartTime = Date.now(); // Guarda el tiempo de inicio del clic
  }
});
document.addEventListener('mouseup', function(event) {
  if (event.button === 0) { // Verifies if the left mouse button is released
    var clickEndTime = Date.now(); // Gets the end time of the click
    var clickDuration = clickEndTime - clickStartTime; // Calculates the click duration

    if (clickDuration >= clickDurationThreshold) {
      mouseMove = true;
    }
    else {
      mouseMove = false;
    }

    // Change the cursor based on the value of mouseMove
    document.documentElement.style.cursor = mouseMove ? 'grab' : 'auto';
  }
});

elements.forEach(function(element) {
  element.addEventListener("mouseenter", function() {
    var computedStyle = window.getComputedStyle(element);
    var dg = computedStyle.getPropertyValue("--degree");
    document.documentElement.style.setProperty('--degree', dg);
    console.log("Element is being hovered: " + dg);
  });

  element.addEventListener("mouseleave", function() {
    document.documentElement.style.setProperty('--degree', "0deg");
  });
});
checkStickyPosition();



