function viscosidades() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');

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
        visc = visc.concat('</h3><p>&sigma; [&#8491;]</p><input class="sig_visc"></input><p>&epsilon;/k [K]</p><input class="eps_visc"></input><p>Massa molar [g/mol]</p><input class="mm_visc"></input></div>');
    }
    

    document.getElementById("dados_viscosidades").innerHTML = visc;
}