function viscosidades() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
    lenjon = JSON.parse(localStorage.getItem("lenjon") || '[]');

    visc = "";
    for(i in molec){
        mol= molec[i].split("");
        m="";
        for(j in mol){
            if(isNaN(mol[j])){
                m = m.concat(mol[j]);
            }else{
                m = m.concat("<sub>");
                m = m.concat(mol[j]);
                m = m.concat("</sub>");
            }
        }
        visc = visc.concat('<div><h3>Dados para o ');
        visc = visc.concat(m);

        if(lenjon[i][0] == 1){
            visc = visc.concat('</h3><p>&sigma; [&#8491;]</p><input class="sig_visc"></input><p>&epsilon;/k [K]</p><input class="eps_visc"></input><p>Massa molar [g/mol]</p><input class="mm_visc"></input></div>');

        }else{
            visc = visc.concat('</h3><p>P<sub>c</sub> [atm]</p><input class="pc_visc"></input><p>T<sub>c</sub> [K]</p><input class="tc_visc"></input></h3><p>Z<sub>c</sub></p><input class="zc_visc"></input><p>Massa molar [g/mol]</p><input class="mm_visc"></input></div>');
        }
    }

    document.getElementById("dados_viscosidades").innerHTML = visc;

    w = 0;
    for(i in molec){
        if(lenjon[i][0] == 1){
            document.getElementsByClassName("sig_visc")[w].value = lenjon[i][1];
            document.getElementsByClassName("eps_visc")[w].value = lenjon[i][2];
            w++;
        }
    }

    x = document.getElementById("passo3").getElementsByTagName("input");
    cx = x.length;

    t3 = 1;

    for(i = 0; i < x; i++){
        if(x[i] == ""){
            t3 = 0;
        }
    }

    if(t3 == 1){
        $("#passo3").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }

    localStorage.setItem("t3", JSON.stringify(t3));
    
}