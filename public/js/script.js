$(document).ready(function() {
  $('.mouse').css({"top": window.innerHeight / 2 - 200, "left": window.innerWidth / 2 -200});

  $(document).mousemove(function(event)  {
    var mouseX = event.originalEvent.pageX;
    var mouseY = event.originalEvent.pageY;
    $(".mouse").css({"top": mouseY - 200, "left": mouseX - 200})
  })

  document.addEventListener('touchmove', function(event) {
    var mouseX = event.touches[0].screenX;
    var mouseY = event.touches[0].screenY;
    $(".mouse").css({"top": mouseY - 200, "left": mouseX - 200})
  });

  particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
})
