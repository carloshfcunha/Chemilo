$(document).ready(function(){

    $('.dados').fadeOut(0);
    i = 1;
    j = 1;

    $('.passos').click( function(){
        if (i+j==2) {
            $('.passos').not(this).fadeOut(300);
            $('.passos').not(this).css({width: "0px", height: "0px", padding: "0px", transition: ".45s"});
            $(this).css({width: "100%", height: "100%", margin: "0px", cursor: "auto", transition: ".5s"});
            $('.passos-titulo').slideUp(300);
            $('.passos-texto p').slideUp(300);
            $(this).find(".dados").fadeIn(900);
            i = 0;
            j = 0;
        }
        else if (j==1){
            i = 1
        }
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

        j = 1;
    });

  });