$(document).ready(function() {
  $(document).mousemove(function(event)  {
    var mouseX = event.originalEvent.pageX;
    var mouseY = event.originalEvent.pageY;
    $(".mouse").css({"top": mouseY - 200, "left": mouseX - 200})
  })

  particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
})
