
//calendario
 $(function() {
        var cajaPrincipal = $('html, body');
        var calendario = $(".calendario");
        var seccionCalendario = $("#calendario");
        var resumenCharla = null;
        
        //$(".calendario thead .hidden").removeClass("hidden");

        $(".charla-info a").click(function(evento) {
            evento.preventDefault();

            var cajaId = $(this).attr("href");

            calendario.fadeOut("fast", function() {
                resumenCharla = $(cajaId);
                resumenCharla.fadeIn();
            });

            return false;
        });

        $(".resumen-regresar a").click(function(evento) {
            evento.preventDefault();

            resumenCharla.fadeOut("fast", function() {
                calendario.fadeIn(function(){
                    cajaPrincipal.animate({
                        scrollTop: seccionCalendario.offset().top
                    }, 1000);
                });
            });

            return false;
        });

});

 //general
$(function(){    
    var cajaPrincipal = $('html, body');

    //scroll en click de secciones
    $("#menu li a").click(function(evento) {
       var enlace = $(evento.target);
       var seccion = $(enlace.attr("href"));
       if(enlace.length){

       cajaPrincipal.animate({
          scrollTop: seccion.offset().top
       }, 1000);

       }
    });        
});

//ARRANCAR APLICACION
//$(window).load(function(){alert(1);});
$( window ).on("load", function() {
  // Run code  
  $("#caja-loading").fadeOut("fast");
});
