function difusoes() {
    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
    coef = JSON.parse(localStorage.getItem("coeficientes") || '[]');

    volAtom = [["C",16.5],
    ["H",1.98],
    ["O",5.48],
    ["N",5.69],
    ["Cl",19.5],
    ["S",17]];

    volMolec = [["H2",7.07],
    ["D2",6.7],
    ["He",2.88],
    ["N2",17.9],
    ["O2",16.6],
    ["Ne",5.59],
    ["Ar",16.1],
    ["Kr",22.8],
    ["Xe",37.9],
    ["CO",18.9],
    ["CO2",26.9],
    ["N2O",35.9],
    ["NH3",14.9],
    ["H2O",12.7],
    ["CCL2F2",114.8],
    ["SF6",69.7],
    ["Cl2",37.7],
    ["Br2",67.2],
    ["SO2",41.1]];

    MOrA = Array(molec.length);
    volmol = Array(molec.length);
    dif = "";
    h = 0;
    for(i in molec){
        MOrA[i] = 0;
        volmol[i] = 0;
        for(j in volMolec){
            if(molec[i] == volMolec[j][0]){
                if(h == 0){
                    dif = dif.concat("<h3>Informe os volumes de difusão (&nu; [cm<sup>3</sup>/mol]) para as seguintes moléculas:</h3>");
                    h++;
                }
                dif = dif.concat("<p>");
                dif = dif.concat(molec[i]);
                dif = dif.concat("</p>");
                dif = dif.concat('<input class="volM_dif"></input>');
                volmol[i] = volMolec[j][1];
                MOrA[i] = 1;
            }
        }
    }

    atomos = [];
    moa = 1;
    for(i in MOrA){
        moa = moa*MOrA[i]
    }
    if(moa == 0){
        dif = dif.concat("<h3>Informe os volumes de difusão atomica (&nu; [cm<sup>3</sup>/mol]) para os seguintes átomos:</h3>"); 
    }

    seA = [];
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
                    if(MOrA[i] == 0){
                        dif = dif.concat("<p>");
                        dif = dif.concat(mol[j]);
                        dif = dif.concat("</p>");
                        dif = dif.concat('<input class="volA_dif"></input>');
                        seA = seA.concat(1);
                    }else{
                        seA = seA.concat(0);
                    }
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

    w = 0;
    for(i in volmol){
        if(MOrA[i] == 1){
            document.getElementsByClassName("volM_dif")[w].value = volmol[i];
            w++;
        }
    }
    
    w = 0;
    if(moa == 0){
        for(i in atomos){
            if(seA[i] == 1){
                for(j in volAtom){
                    if(atomos[i] == volAtom[j][0]){
                        document.getElementsByClassName("volA_dif")[w].value = volAtom[j][1];
                        w++;
                    }
                }
            }
        }
    }

    for(i in molec){
        if(MOrA[i] == 0){
            vma = 0;
            for(j in atomos){
                for(k in volAtom){
                    if(atomos[j] == volAtom[k][0]){
                        vma = vma + nAtomos[i][j]*volAtom[k][1];
                    }
                }
            }
            volmol[i] = vma;
        }
    }

    localStorage.setItem("MOrA", JSON.stringify(MOrA));
    localStorage.setItem("seA", JSON.stringify(seA));

    x4 = document.getElementById("passo4").getElementsByTagName("input");
    cx4 = x4.length;

    t4 = 1;

    for(i = 0; i < cx4; i++){
        if(isNaN(x4[i].value) || x4[i].value == ""){
            t4 = 0;
        }
    }

    if(t4 == 1){
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(0, 24, 46) , rgb(14, 101, 177))"});
    }else{
        $("#passo4").css({"background-image": "linear-gradient(to bottom right, rgb(177, 0, 0) , rgb(5, 69, 126))"});
    }

    localStorage.setItem("t4", JSON.stringify(t4));

}