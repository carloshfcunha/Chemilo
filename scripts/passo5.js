function calores() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');

    calor = "";
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
        calor = calor.concat('<div><h3>Dados para o ');
        calor = calor.concat(m);
        calor = calor.concat('</h3><p>a<sub>0</sub></p><input class="a0_calor"></input><p>a<sub>1</sub></p><input class="a0_calor"></input><p>a<sub>2</sub></p><input class="a0_calor"></input><p>a<sub>3</sub></p><input class="a0_calor"></input><p>a<sub>4</sub></p><input class="a0_calor"></input></div>');
    }
    

    document.getElementById("dados_calores").innerHTML = calor;
}