function difusoes() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');

    atomos = [];
    dif = "<h3>Informe os volumes de difusão atomica (&nu; [cm<sup>3</sup>/mol]) para os seguintes átomos:</h3>";
    for(i in molec){
        mol= molec[i].split("");
        for(j in mol){
            if(isNaN(mol[j])){
                if(atomos.indexOf(mol[j]) == -1){
                    atomos = atomos.concat(mol[j]);
                    dif = dif.concat("<p>");
                    dif = dif.concat(mol[j]);
                    dif = dif.concat("</p>");
                    dif = dif.concat('<input class="vol_dif"></input>');
                }
            }
        }
    }
    
    localStorage.setItem("atomos", JSON.stringify(atomos));

    document.getElementById("dados_difusoes").innerHTML = dif;
}