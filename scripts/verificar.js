function verif(passo) {

    inp = document.getElementById(passo).getElementsByTagName("input");
    linp = inp.length;

    erroVerif = [];

    a = 0;
    if(passo == "passo1"){
        a = 1;
        erroVerif[0] = erroVerif.concat(1);
    }

    erroV = 1;
    for(i=a; i<linp; i++){
        erroVerif = erroVerif.concat(1);
        vinp = inp[i].value.replace(',', '.');
        inp[i].value = vinp;

        if(isNaN(vinp) || vinp == ""){
            erroVerif[i] = 0;
        }

        erroV = erroV*Number(erroVerif[i]);
    }
    localStorage.setItem("erroV", JSON.stringify(erroV));
}

function verif1() {

    passo = "passo1"

    verif(passo);

    erroV1 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV1", JSON.stringify(erroV1));

    if(erroV1 == 1){
        $("#passo1").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo1").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}

function verif2() {

    passo = "passo2"

    verif(passo);

    erroV2 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV2", JSON.stringify(erroV2));

    if(erroV2 == 1){
        $("#passo2").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo2").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}
function verif3() {

    passo = "passo3"

    verif(passo);

    erroV3 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV3", JSON.stringify(erroV3));

    if(erroV3 == 1){
        $("#passo3").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo3").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}
function verif4() {

    passo = "passo4"

    verif(passo);

    erroV4 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV4", JSON.stringify(erroV4));

    if(erroV4 == 1){
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }else{
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}
function verif5() {

    passo = "passo5"

    verif(passo);

    erroV5 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV5", JSON.stringify(erroV5));

    if(erroV5 == 1){
        $("#passo5").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo5").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}
function verif6() {

    passo = "passo6"

    verif(passo);

    erroV6 = JSON.parse(localStorage.getItem("erroV") || '[]');

    localStorage.setItem("erroV6", JSON.stringify(erroV6));

    if(erroV6 == 1){
        $("#passo6").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }else{
        $("#passo6").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos ou se deixou alguma entrada em branco.")
    }

}
