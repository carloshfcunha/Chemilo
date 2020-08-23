$(document).ready(function(){

    $('.dados').fadeOut(0);
    $('.quadros_duvidas').fadeOut(0);
    $('.textos_duvidas').fadeOut(0);
    $('.saidas').fadeOut(0);
    $('#secundario').fadeOut(0);
    ii = 1;
    jj = 1;
    kk = 1;
    ww = 0;

    $('.passos').click( function(){
        if (ii + jj + kk == 3) {
            $('.passos').not(this).fadeOut(300);
            $('.passos').not(this).css({width: "0px", height: "0px", padding: "0px", transition: ".45s"});
            $(this).css({width: "100%", height: "100%", margin: "0px", cursor: "auto", transition: ".5s"});
            $('.passos-titulo').slideUp(300);
            $('.passos-texto p').slideUp(300);
            $(this).find(".dados").fadeIn(900);
            ii = 0;
            jj = 0;
        }
        else if (jj == 1){
            ii= 1
        }
    });

    $('#duvida1').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida1').fadeIn(300);
        kk = 0;
    });
    $('#duvida2').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida2').fadeIn(300);
        kk = 0;
    });
    $('#duvida3').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida3').fadeIn(300);
        kk = 0;
    });
    $('#duvida4').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida4').fadeIn(300);
        kk = 0;
    });
    $('#duvida5').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida5').fadeIn(300);
        kk = 0;
    });
    $('#duvida6').click( function(){
        $('.quadros_duvidas').fadeIn(300);
        $('#texto_duvida6').fadeIn(300);
        kk = 0;
    });
    $('.fim').click( function(){
        $('.quadros_duvidas').fadeOut(300);
        $('.textos_duvidas').fadeOut(300);
        kk = 1;
    });

    $('.fechar').click( function(){
        $('.passos').fadeIn(300);
        if( $(window).width() <= 456){
            $('.passos').css({width: "46%", height: "200px", margin: "2%", padding: "10px", cursor: "pointer"});
        }
        else{
            $('.passos').css({width: "200px", height: "183px", margin: "2%", padding: "10px", cursor: "pointer"});
        }
        
        $('.dados').fadeOut(300);
        $('.passos-titulo').fadeIn(300);
        $('.passos-texto p').fadeIn(300);

        jj = 1;
    });

    $('#mostrar').click( function(){
        if(ww == 0){
            $('#secundario').slideDown(300);
            ww = 1;
            document.getElementById("mostrar").innerHTML = "Ocultar Informações";
            $('#gambiarra').css({height: "25px"});
        }else{
            $('#secundario').slideUp(300);
            document.getElementById("mostrar").innerHTML = "Mostrar Informações";
            $('#gambiarra').css({height: "0px"});
            ww = 0;
        }
        
        

    });

  });