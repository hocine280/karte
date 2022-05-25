(function ($) { 
    // Menu //
    function menu()
    { 
      $('.navbar-collapse a').on('click',function()
      {
        $(".navbar-collapse").collapse('hide');
      });
    }
    $(window).scroll(function() 
    {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });

    // Animation lorsqu'on revient en haut (page qui glisse) // 
    $(function() 
    {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
          }, 1000);
            event.preventDefault();
      });
    });  

    // Bannière des cookies qui s'enlève lorsque l'utilisateur appuie sur "j'accepte" //
    function cookie()
    {
        $("#AcceptCookie").click(function()
        {
          localStorage.setItem('AcceptCookie', 'true'); 
          $("#ConsentCookie").fadeOut();
        }); 
        var cookie = localStorage.getItem("AcceptCookie")
        if(cookie == 'true')
        {
          $("#ConsentCookie").css("display", "none"); 
        }
        else
        {
          $("#ConsentCookie").css("display", ""); 
        }
    }  

    // Apparition en fondu au chargement de la page //
    function fondu()
    {
      $(document).ready(function()
      {
        $("#text-home").css("display", "none");
        $("#text-home").slideUp(300).delay(150).fadeIn(500);
      });
    }
    window.addEventListener("DOMContentLoaded", cookie, menu, fondu); 
})(jQuery);

// Element qui s'affiche lors du scroll de la page //
$(document).ready(function()
{
  $(window).on('scroll', function () 
  {
  var elmt   = $('.from-top, .from-bottom, .from-left, .from-right');
  var scroll = $(window).scrollTop();
      $(elmt).each(function() 
      {  
        var topImg = $(this).offset().top - 400;
            if ( topImg < scroll ) 
            {
            $(this).css("transform", "translate(0,0)");
            $(this).css("opacity", "1");
            };
      });
  });
});