 $(function() {

        var calendario = $(".calendario");
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
                calendario.fadeIn();
            });

            return false;
        });

    });