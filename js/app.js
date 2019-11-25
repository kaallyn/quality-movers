$(document).ready(function(e){
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
  }

  $(window).scroll(function(e){
      parallax();
  });

  $('.top-btn').addClass('animated pulse');

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  $(function () {
    $(window).paroller();
  });

  var card = $('.check'),
    offset = .9;

  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(card, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
  });

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
    });
  }

  console.log("      .--.   |V| \n     /    \\ _| / \n     q .. p \\ / \n      \\--/  // \n     __||__//\n    /.    _/ \n   // \\  / \n  //   || \n  \\\\  /  \\ \n   )\\|    | \n  / || || | \n  |/\\| || | \n     | || | \n     \\ || / \n   __/ || \\__ \n  \\____/\\____/ \n\n Greetings!");

});
