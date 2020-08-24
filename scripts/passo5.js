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
        calor = calor.concat('</h3><p>A<sub>0</sub></p><input class="a0_calor"></input><p>A<sub>1</sub></p><input class="a1_calor"></input><p>A<sub>2</sub></p><input class="a2_calor"></input><p>A<sub>3</sub></p><input class="a3_calor"></input><p>A<sub>4</sub></p><input class="a4_calor"></input><p>&Delta;H<sup>0</sup><sub>f(298K)</sub> [kJ/mol]</p><input class="dh_calor"></input></div>');
    }

    
    

    document.getElementById("dados_calores").innerHTML = calor;

    cpt = [["H2",2.883,3.68E-03,-7.72E-06,6.92E-09,-2.13E-12],
    ["H2O",4.395,-4.19E-03,1.41E-05,-1.56E-08,6.32E-12],
    ["O2",3.63,-1.79E-03,6.58E-06,-6.01E-09,1.79E-12],
    ["C2H5OH",4.396,6.28E-04,5.73E-05,-7.02E-08,2.69E-11],
    ["CH3CHO",0.928021561,2.19E-02,-1.21E-05,2.86E-09,0],
    ["CO2",3.259,1.36E-03,1.50E-05,-2.37E-08,1.06E-11],
    ["CH3OH",4.714,-6.99E-03,4.21E-05,-4.44E-08,1.54E-11]];

    dht = [["H2",0],
    ["H2O",-241.818],
    ["O2",0],
    ["C2H5OH",-235.1],
    ["CH3CHO",-166.19],
    ["CO2",-393.509],
    ["CH3OH",-200.66]];

    for(i in molec){
        for(j in cpt){
            if(molec[i] == cpt[j][0]){
                document.getElementsByClassName("a0_calor")[i].value = cpt[j][1];
                document.getElementsByClassName("a1_calor")[i].value = cpt[j][2];
                document.getElementsByClassName("a2_calor")[i].value = cpt[j][3];
                document.getElementsByClassName("a3_calor")[i].value = cpt[j][4];
                document.getElementsByClassName("a4_calor")[i].value = cpt[j][5];
            }
            if(molec[i] == dht[j][0]){
                document.getElementsByClassName("dh_calor")[i].value = dht[j][1];
            }
        }
    }

    verif5();
}