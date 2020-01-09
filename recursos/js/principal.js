
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
    var menu = $("#menu ul");
    var menuAbierto = false;
    var botonResponsivo = $("#boton-menu-responsive");

    var enbotonPresionado = function(){
        if(botonResponsivo.text()==="☰"){
            botonResponsivo.text("X");
            menuAbierto=true;
        } else {
            botonResponsivo.text("☰");
            menuAbierto=false;
        }
        menu.toggleClass("menu-oculto-en-mediaquery");
    };

    //scroll en click de secciones
    $("#menu li a").click(function(evento) {
       var enlace = $(evento.target);
       var seccion = $(enlace.attr("href"));
       if(enlace.length){//si la caja existe
           $(".seleccionado").removeClass("seleccionado");
           enlace.parent().addClass("seleccionado");

           if(menuAbierto){
             enbotonPresionado();
             menuAbierto=false;
           }

           //scroll hacia la caja
           cajaPrincipal.animate({
              scrollTop: seccion.offset().top
           }, 1000);

       }
    });    

    botonResponsivo.click(enbotonPresionado);    
});

//ARRANCAR APLICACION
//$(window).load(function(){alert(1);});
$( window ).on("load", function() {
  // Run code  
  $("#caja-loading").fadeOut("fast");
});
