function conduc(){

    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');

    conducao = "";
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
        conducao = conducao.concat('<div><h3>Condução do ');
        conducao = conducao.concat(m);
        conducao = conducao.concat('</h3><p>&lambda; [kJ/(m.s.K)]</p><input class="lamb_conducao"></input></div>');
    }

    document.getElementById("dados_conducoes").innerHTML = conducao;
    console.log("oi");
    }