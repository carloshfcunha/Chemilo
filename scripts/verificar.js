function verif(passo) {

    inp = document.getElementById(passo).getElementsByTagName("input");
    linp = inp.length;

    erroVerif = [];
    erroVerifm = [];

    a = 0;
    if(passo == "passo1"){
        a = 1;
        erroVerif[0] = erroVerif.concat(1);
        erroVerifm[0] = erroVerifm.concat(1);
    }

    erroV = 1;
    erroVm = 1;
    for(i=a; i<linp; i++){
        erroVerif = erroVerif.concat(1);
        erroVerifm = erroVerifm.concat(1);
        vinp = inp[i].value.replace(',', '.');
        inp[i].value = vinp;

        if(isNaN(vinp)){
            erroVerif[i] = 0;
            erroVerifm[i] = 0;
        }
        if(vinp == ""){
            erroVerif[i] = 0;
            erroVerifm[i] = 1;
        }

        erroV = erroV*Number(erroVerif[i]);
        erroVm = erroVm*Number(erroVerifm[i]);
    }

    erroVv = 1;
    if(linp == 0){
        erroV = 0;
        erroVm = 1;
        erroVv = 0;
    }

    localStorage.setItem("erroV", JSON.stringify(erroV));
    localStorage.setItem("erroVm", JSON.stringify(erroVm));
    localStorage.setItem("erroVv", JSON.stringify(erroVv));
}

function verif1() {

    passo = "passo1"

    verif(passo);

    erroV1 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm1 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv1 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV1", JSON.stringify(erroV1));
    localStorage.setItem("erroVm1", JSON.stringify(erroVm1));
    localStorage.setItem("erroVv1", JSON.stringify(erroVv1));

    if(erroV1 == 1){
        $("#passo1").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo1").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm1 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.")
        }
    }

}

function verif2() {

    passo = "passo2"

    verif(passo);

    erroV2 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm2 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv2 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV2", JSON.stringify(erroV2));
    localStorage.setItem("erroVm2", JSON.stringify(erroVm2));
    localStorage.setItem("erroVv2", JSON.stringify(erroVv2));

    if(erroV2 == 1){
        $("#passo2").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo2").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm2 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.");
        }
    }

}
function verif3() {

    passo = "passo3"

    verif(passo);

    erroV3 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm3 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv3 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV3", JSON.stringify(erroV3));
    localStorage.setItem("erroVm3", JSON.stringify(erroVm3));
    localStorage.setItem("erroVv3", JSON.stringify(erroVv3));

    if(erroV3 == 1){
        $("#passo3").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo3").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm3 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.");
        }
    }

}
function verif4() {

    passo = "passo4"

    verif(passo);

    erroV4 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm4 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv4 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV4", JSON.stringify(erroV4));
    localStorage.setItem("erroVm4", JSON.stringify(erroVm4));
    localStorage.setItem("erroVv4", JSON.stringify(erroVv4));

    if(erroV4 == 1){
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }else{
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm4 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.");
        }
    }

}
function verif5() {

    passo = "passo5"

    verif(passo);

    erroV5 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm5 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv5 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV5", JSON.stringify(erroV5));
    localStorage.setItem("erroVm5", JSON.stringify(erroVm5));
    localStorage.setItem("erroVv5", JSON.stringify(erroVv5));

    if(erroV5 == 1){
        $("#passo5").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
        calculos();
    }else{
        $("#passo5").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm5 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.");
        }
    }

}
function verif6() {

    passo = "passo6"

    verif(passo);

    erroV6 = JSON.parse(localStorage.getItem("erroV") || '[]');
    erroVm6 = JSON.parse(localStorage.getItem("erroVm") || '[]');
    erroVv6 = JSON.parse(localStorage.getItem("erroVv") || '[]');

    localStorage.setItem("erroV6", JSON.stringify(erroV6));
    localStorage.setItem("erroVm6", JSON.stringify(erroVm6));
    localStorage.setItem("erroVv6", JSON.stringify(erroVv6));

    if(erroV6 == 1){
        $("#passo6").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }else{
        $("#passo6").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
        if(erroVm6 == 0){
            alert("Preenchimento incorreto! Verifique se não utilizou letras nas entradas de dados numéricos.");
        }
    }

}
