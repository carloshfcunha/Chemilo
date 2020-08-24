$(document).ready(function(){

    localStorage.setItem("erroV1", JSON.stringify(0));
    localStorage.setItem("erroV2", JSON.stringify(0));
    localStorage.setItem("erroV3", JSON.stringify(0));
    localStorage.setItem("erroV4", JSON.stringify(0));
    localStorage.setItem("erroV5", JSON.stringify(0));
    localStorage.setItem("erroV6", JSON.stringify(0));
    localStorage.setItem("erroVm1", JSON.stringify(0));
    localStorage.setItem("erroVm2", JSON.stringify(0));
    localStorage.setItem("erroVm3", JSON.stringify(0));
    localStorage.setItem("erroVm4", JSON.stringify(0));
    localStorage.setItem("erroVm5", JSON.stringify(0));
    localStorage.setItem("erroVm6", JSON.stringify(0));
    localStorage.setItem("erroVv1", JSON.stringify(0));
    localStorage.setItem("erroVv2", JSON.stringify(0));
    localStorage.setItem("erroVv3", JSON.stringify(0));
    localStorage.setItem("erroVv4", JSON.stringify(0));
    localStorage.setItem("erroVv5", JSON.stringify(0));
    localStorage.setItem("erroVv6", JSON.stringify(0));

    $('.dados').fadeOut(0);
    $('.quadros_duvidas').fadeOut(0);
    $('.textos_duvidas').fadeOut(0);
    $('.saidas').fadeOut(0);
    $('#secundario').fadeOut(0);
    $('#tampa').fadeOut(0);
    ii = 1;
    jj = 1;
    kk = 1;
    ww = 0;

    $('.passos').click( function(){
        if (ii + jj + kk == 3) {
            $('.passos').not(this).fadeOut(500);
            $('.passos').not(this).css({width: "0px", height: "0px", padding: "0px", margin: "0px", transition: ".5s"});
            $(this).css({width: "100%", height: "100%", margin: "0px", cursor: "auto", transition: ".5s"});
            $('.passos-titulo').slideUp(500);
            $('.passos-texto p').slideUp(500);
            $('#calcular').slideUp(500);
            $(this).find(".dados").slideDown(500);
            ii = 0;
            jj = 0;
        }
        else if (jj == 1){
            ii= 1
        }
    });

    $('#duvida1').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida1').fadeIn(500);
        kk = 0;
    });
    $('#duvida2').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida2').fadeIn(500);
        kk = 0;
    });
    $('#duvida3').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida3').fadeIn(500);
        kk = 0;
    });
    $('#duvida4').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida4').fadeIn(500);
        kk = 0;
    });
    $('#duvida5').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida5').fadeIn(500);
        kk = 0;
    });
    $('#duvida6').click( function(){
        $('.quadros_duvidas').fadeIn(500);
        $('#texto_duvida6').fadeIn(500);
        kk = 0;
    });
    $('.fim').click( function(){
        $('.quadros_duvidas').fadeOut(500);
        $('.textos_duvidas').fadeOut(500);
        kk = 1;
    });

    $('.fechar').click( function(){
        $('.passos').fadeIn(400);
        if( $(window).width() <= 456){
            $('.passos').css({width: "46%", height: "200px", margin: "2%", padding: "10px", cursor: "pointer"});
        }
        else{
            $('.passos').css({width: "200px", height: "183px", margin: "2%", padding: "10px", cursor: "pointer"});
        }
        
        $('.dados').slideUp(500);
        $('.passos-titulo').slideDown(500);
        $('.passos-texto p').slideDown(500);
        $('#calcular').slideDown(500);

        jj = 1;
    });

    $('#mostrar').click( function(){
        if(ww == 0){
            $('#secundario').slideDown(500);
            ww = 1;
            document.getElementById("mostrar").innerHTML = "Ocultar Informações";
            $('#gambiarra').css({height: "25px"});
        }else{
            $('#secundario').slideUp(500);
            document.getElementById("mostrar").innerHTML = "Mostrar Informações";
            $('#gambiarra').css({height: "0px"});
            ww = 0;
        }
        
        

    });

  });