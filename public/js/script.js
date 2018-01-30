$(document).ready(function() {
  currentImage = '';

  function setMousePicture() {
    $.ajax({
      url: "/images",
    }).done(function(images) {
      image = images
      num = Math.floor(Math.random() * images.length)

      while(currentImage === image[num]) {
        num = Math.floor(Math.random() * images.length)
      }

      currentImage = images[num];
      $('.mouse').css({"background-image" : `url('../img/${images[num]}')`})
    });
  }

  setMousePicture();

  $('#particles-js').on('click', function() {
    setMousePicture();
  });

  $('.mouse').css({"top": window.innerHeight / 2 - 200, "left": window.innerWidth / 2 -200});

  /* $(document).mousemove(function(event)  {
    var mouseX = event.originalEvent.pageX;
    var mouseY = event.originalEvent.pageY;
    $(".mouse").css({"top": mouseY - 200, "left": mouseX - 200})
  }); 

  document.addEventListener('touchmove', function(event) {
    var mouseX = event.touches[0].screenX;
    var mouseY = event.touches[0].screenY;
    $(".mouse").css({"top": mouseY - 200, "left": mouseX - 200})
  });
	*/
  particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(".upload-more").on('click', function() {
    var elem = $('.upload-form');
    console.log(elem.hasClass('collapsed'));
    if(!elem.hasClass('collapsed')) {
      $('.button-text').text('More');
      elem.addClass('collapsed');
    } else {
      $('.button-text').text('Less');
      elem.removeClass('collapsed');
    }
  })
})
