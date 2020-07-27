$(document).ready(function(){

    $('.dados').fadeOut(0);
    i = 0;

    $('.passos').click( function(){
        if (i==0) {
            $('.passos').not(this).fadeOut(300);
            $('.passos').not(this).css({width: "0px", height: "0px", padding: "0px", transition: ".45s"});
            $(this).css({width: "100%", height: "500px", cursor: "auto", transition: ".5s"});
            $('.passos-titulo').slideUp(300);
            $('.passos-texto p').slideUp(300);
            $(this).find(".dados").fadeIn(900);
            i = 1;
        }
        else{
            i = 0;
        }
        
        
    });

    $('.fechar').click( function(){
        $('.passos').fadeIn(300);
        if( $(window).width() <= 456){
            $('.passos').css({width: "46%", height: "200px", padding: "10px", cursor: "pointer"});
        }
        else{
            $('.passos').css({width: "200px", height: "183px", padding: "10px", cursor: "pointer"});
        }
        
        $('.dados').fadeOut(300);
        $('.passos-titulo').fadeIn(300);
        $('.passos-texto p').fadeIn(300);
    });

  });