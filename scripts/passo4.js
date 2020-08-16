function difusoes() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
    coef = JSON.parse(localStorage.getItem("coeficientes") || '[]');

    atomos = [];
    dif = "<h3>Informe os volumes de difusão atomica (&nu; [cm<sup>3</sup>/mol]) para os seguintes átomos:</h3>";
    for(i in molec){
        mol= molec[i].split("");
        for(j in mol){
            a = parseInt(j) + 1;
            if(isNaN(mol[j])){
                if(j < (mol.length - 1)){
                    if(isNaN(mol[a])){
                        if(mol[a] == mol[a].toLowerCase()){
                            mol[a] = mol[j].concat(mol[a]);
                            j++;  
                        }
                    }
                }
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

    
    nAtomos = Array(molec.length);
    for(i in molec){
        nAtomos[i] = Array(atomos.length);
        for(j in atomos){
            nAtomos[i][j] = 0;
        }
    }

    for(i in molec){
        mol= molec[i].split("");
        for(j = 0; j <= mol.length; j++){
            a = parseInt(j)+1;
            if(isNaN(mol[j])){
                if(j < (mol.length - 1)){
                    if(isNaN(mol[a])){  
                        if(mol[a] == mol[a].toLowerCase()){
                            mol[a] = mol[j].concat(mol[a]);
                            j++;
                            a = parseInt(j)+1; 
                        }
                    }
                }
                for(k in atomos){
                    if(mol[j] == atomos[k]){
                        if(j < (mol.length-1)){
                            if(isNaN(mol[a])){
                                nAtomos[i][k] = parseInt(nAtomos[i][k]) + 1;
                            }else{
                                nAtomos[i][k] = parseInt(nAtomos[i][k]) + parseInt(mol[a]);
                            }
                        }else{
                            nAtomos[i][k] = parseInt(nAtomos[i][k]) + 1;
                        }
                    }
                }
            }
        }
    }

    balanco = [];
    for(i in atomos){
        balanco = balanco.concat(0);
    }

    for(i in molec){
        for(j in atomos){
            balanco[j] = balanco[j] + parseInt(coef[i])*parseInt(nAtomos[i][j]);
        }
    }

    console.log(balanco);

    ba = 0;
    for(i in balanco){
        ba = ba + Math.abs(balanco[i]);
    }

    if(ba != 0){
        alert("Equação desbalanceada!");
    }

    localStorage.setItem("atomos", JSON.stringify(atomos));
    localStorage.setItem("nAtomos", JSON.stringify(nAtomos));

    document.getElementById("dados_difusoes").innerHTML = dif;

}