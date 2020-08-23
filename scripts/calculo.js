
function calcular() {

    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
    atomos = JSON.parse(localStorage.getItem("atomos") || '[]');
    nAtomos = JSON.parse(localStorage.getItem("nAtomos") || '[]');
    coef = JSON.parse(localStorage.getItem("coeficientes") || '[]');
    mm = JSON.parse(localStorage.getItem("mMolar") || '[]');
    viscVal = JSON.parse(localStorage.getItem("viscVal") || '[]');
    cpVal = JSON.parse(localStorage.getItem("cpVal") || '[]');
    moa = JSON.parse(localStorage.getItem("moa") || '[]');
    MOrA = JSON.parse(localStorage.getItem("MOrA") || '[]');
    seA = JSON.parse(localStorage.getItem("seA") || '[]');
    
    F = Array(molec);
    Fa0 = Number(document.getElementsByClassName("F")[0].value);
    nA = 0;
    dn = 0;
    Ft = 0;
    for(i in molec){
        F[i] = Number(parseFloat(document.getElementsByClassName("F")[i].value));
        if(F[i]/coef[i] < Fa0 && F[i] > 0){
            Fa0 = F[i];
            nA = i;
        }
        dn = dn - coef[i];
        Ft = Ft + F[i];
    }

    ya0 = Fa0/Ft;
    ea = ya0*dn/coef[nA];

    xA = Number(parseFloat(document.getElementById("xA").value));

    yi = Array(molec);
    viscm = 0;
    for(i in molec){
        yi[i] = ((F[i]/Fa0)-(coef[i]/coef[nA])*xA)/(1+ea*xA);
        viscm = viscm + yi[i]*viscVal[i];
    }


    voluMol = Array(molec);
    w = 0;
    for(i in molec){
        if(MOrA[i] == 1){
            voluMol[i] = Number(document.getElementsByClassName("volM_dif")[w].value);
            w++;
        }
        else{
            vma = 0;
            w1 = 0;
            for(j in atomos){
                if(seA[j] == 1){
                    vma = vma + nAtomos[i][j]*Number(document.getElementsByClassName("volA_dif")[w1].value);
                    w1++;  
                }
                        
            }
            voluMol[i] = vma;
        }     
    }

    T = Number(document.getElementById("T").value);

    Dai = Array(molec);
    somaSup = 0;
    somaInf = 0;
    for(i in molec){
        if(i != nA){
            Dai[i] = (0.00101*(T**1.75)*(1/mm[nA] + 1/mm[i])**0.5)/(1.0133*(voluMol[nA]**(1/3) + voluMol[i]**(1/3))**2);
            somaSup = somaSup + (1/Dai[i])*(yi[i] - yi[nA]*coef[i]/coef[nA]);
        }
        somaInf = somaInf + coef[i]/coef[nA];
    }

    Dim = 1e-4/(somaSup/(1-yi[nA]*somaInf));

    mmM = 0;
    for(i in molec){
        mmM = mmM + yi[i]*mm[i];
    }
    
    den = mmM*273/(22.4*T);

    Sc = viscm/(den*Dim);

    diam = Number(document.getElementById("Dr").value)/1000;

    somaFM = 0;
    for(i in molec){
        if(coef[i] > 0){
            somaFM = somaFM + F[i]*mm[i]
        }
    }

    G = somaFM/((3.1415*diam**2)*3600000/4);

    dp = Number(document.getElementById("dp").value)/1000;

    Re = dp*G/viscm;

    if(Re > 190){
        jd = 0.983*Re**(-0.41)
    }else{
        jd = 1.66*Re**(-0.51)
    }

    P = Number(document.getElementById("P").value);
    rA = Number(document.getElementById("rA").value);
    am = Number(document.getElementById("am").value);

    delta = 0;
    for(i in molec){
        delta = delta - coef[i];
    }

    erro =1;
    Pfa = P*(1+yi[nA]);
    while(erro>0.00001){
        dP = rA*mmM*Pfa*(Sc**(2/3))/(3600*am*G*jd);
        Pas = P*yi[nA] - dP;
        Pfa1 = (delta*(P*yi[nA]-Pas))/Math.log((P+delta*P*yi[nA])/(P+delta*Pas));
        erro = Math.abs(Pfa1-Pfa)/Pfa;
        Pfa = Pfa1;
    }

    km = 1000*rA/(3600*am*dP);

    cpm = 0;
    for(i in molec){
        cpm = cpm + yi[i]*cpVal[i];
    }

    condVal = Array(molec);
    for(i in molec){
        condVal[i] = Number(document.getElementsByClassName("lamb_conducao")[i].value);
    }

    condm = 0;
    for(i in molec){
        soma = 0;
        for(j in molec){
            Aij = ((1+((condVal[i]/condVal[j])**0.5)*((mm[i]/mm[j])**(1/4)))**2)/((8*(1+mm[i]/mm[j]))**0.5);
            soma = soma + yi[j]*Aij;
        } 
        condm = condm + yi[i]*condVal[i]/soma;
    }

    Pr = cpm*viscm/(mmM*condm);
    
    ff = Number(document.getElementById("ff").value);

    VdivA = ff*dp/6;

    poro = Number(document.getElementById("e").value)/100;

    Rel = G*poro*VdivA/(viscm*ff);

    if(Rel>50){
        jh = 0.61*ff*Rel**(-0.41);
    }else{
        jh = 0.91*ff*Rel**(-0.51);
    }
    
    dA0 = 0;
    dA1 = 0;
    dA2 = 0;
    dA3 = 0;
    dA4 = 0;
    dH0 = 0;
    A0Val = Array(molec);
    A1Val = Array(molec);
    A2Val = Array(molec);
    A3Val = Array(molec);
    A4Val = Array(molec);
    dhVal = Array(molec);
    for(i in molec){
        A0Val[i] = Number(document.getElementsByClassName("a0_calor")[i].value);
        A1Val[i] = Number(document.getElementsByClassName("a1_calor")[i].value);
        A2Val[i] = Number(document.getElementsByClassName("a2_calor")[i].value);
        A3Val[i] = Number(document.getElementsByClassName("a3_calor")[i].value);
        A4Val[i] = Number(document.getElementsByClassName("a4_calor")[i].value);
        dhVal[i] = Number(document.getElementsByClassName("dh_calor")[i].value)*1000;
        dA0 = dA0 -coef[i]*A0Val[i];
        dA1 = dA1 -coef[i]*A1Val[i];
        dA2 = dA2 -coef[i]*A2Val[i];
        dA3 = dA3 -coef[i]*A3Val[i];
        dA4 = dA4 -coef[i]*A4Val[i];
        dH0 = dH0 -coef[i]*dhVal[i];
    }
    
    T0 = 298;
    dH = dH0 + 8.314*((dA0*T + (dA1/2)*T**2 + (dA2/3)*T**3 + (dA3/4)*T**4 + (dA4/5)*T**5)-(dA0*T0 + (dA1/2)*T0**2 + (dA2/3)*T0**3 + (dA3/4)*T0**4 + (dA4/5)*T0**5))


    dT = (rA*mmM*dH*(Pr)**(2/3))/(3600*am*jh*cpm*G);

    hf = 1000*dH*rA/(3600*am*dT)
    
    tmTexto = "<p>k<sub>m</sub> = ";
    tmTexto = tmTexto.concat(km.toPrecision(5));
    tmTexto = tmTexto.concat(" mol/m<sup>2</sup>.s.atm</p><p>&Delta;P = ");
    tmTexto = tmTexto.concat(dP.toPrecision(5));
    tmTexto = tmTexto.concat(" atm</p>");
    document.getElementById("tm").innerHTML = tmTexto

    tcTexto = "<p>h<sub>f</sub> = ";
    tcTexto = tcTexto.concat(hf.toPrecision(5));
    tcTexto = tcTexto.concat(" J/m<sup>2</sup>.s.K</p><p>&Delta;T = ");
    tcTexto = tcTexto.concat(dT.toPrecision(5));
    tcTexto = tcTexto.concat(" ºC</p>");
    document.getElementById("tc").innerHTML = tcTexto

    viscTexto = "<p>&mu;<sub>m</sub> = ";
    viscTexto = viscTexto.concat((1000*viscm).toPrecision(5));
    viscTexto = viscTexto.concat(" cp</p>");
    for(i in molec){
        viscTexto = viscTexto.concat("<p>&mu;<sub>");
        viscTexto = viscTexto.concat(molec[i]);
        viscTexto = viscTexto.concat("</sub> = ");
        viscTexto = viscTexto.concat((1000*viscVal[i]).toPrecision(5));
        viscTexto = viscTexto.concat(" cp</p>");
    }
    document.getElementById("visc_resultado").innerHTML = viscTexto

    difTexto = "<p>D<sub>";
    difTexto = difTexto.concat(molec[nA]);
    difTexto = difTexto.concat("-m</sub> = ");
    difTexto = difTexto.concat((Dim*10000).toPrecision(5));
    difTexto = difTexto.concat(" cm<sup>2</sup>/s</p>");
    for(i in molec){
        if(i != nA){
            difTexto = difTexto.concat("<p>D<sub>");
            difTexto = difTexto.concat(molec[nA]);
            difTexto = difTexto.concat("-");
            difTexto = difTexto.concat(molec[i]);
            difTexto = difTexto.concat("</sub> = ");
            difTexto = difTexto.concat(Dai[i].toPrecision(5));
            difTexto = difTexto.concat(" cm<sup>2</sup>/s</p>");
        }
    }
    document.getElementById("dif_resultado").innerHTML = difTexto

    cpTexto = "<p>Cp<sub>m</sub> = ";
    cpTexto = cpTexto.concat(cpm.toPrecision(5));
    cpTexto = cpTexto.concat(" J/mol.K</p>");
    for(i in molec){
        cpTexto = cpTexto.concat("<p>Cp<sub>");
        cpTexto = cpTexto.concat(molec[i]);
        cpTexto = cpTexto.concat("</sub> = ");
        cpTexto = cpTexto.concat(cpVal[i].toPrecision(5));
        cpTexto = cpTexto.concat(" J/mol.K</p>");
    }
    document.getElementById("cp_resultado").innerHTML = cpTexto

    condTexto = "<p>&lambda;<sub>m</sub> = ";
    condTexto = condTexto.concat((1000*condm).toPrecision(5));
    condTexto = condTexto.concat(" J/m.s.K</p>");
    for(i in molec){
        condTexto = condTexto.concat("<p>&lambda;<sub>");
        condTexto = condTexto.concat(molec[i]);
        condTexto = condTexto.concat("</sub> = ");
        condTexto = condTexto.concat((1000*condVal[i]).toPrecision(5));
        condTexto = condTexto.concat(" J/m.s.K</p>");
    }
    document.getElementById("cond_resultado").innerHTML = condTexto

    mmTexto = "<p>MM<sub>m</sub> = ";
    mmTexto = mmTexto.concat(mmM.toPrecision(5));
    mmTexto = mmTexto.concat(" g/mol</p><p>&rho;<sub>m</sub> = ");
    mmTexto = mmTexto.concat(den.toPrecision(5));
    mmTexto = mmTexto.concat(" kg/m<sup>3</sup></p>");
    
    document.getElementById("mm_resultado").innerHTML = mmTexto

    dhTexto = "<p>-&Delta;H<sub>reação(25ºC)</sub> = ";
    dhTexto = dhTexto.concat(dH0.toPrecision(5));
    dhTexto = dhTexto.concat(" J/mol</p><p>-&Delta;H<sub>reação(");
    dhTexto = dhTexto.concat(parseInt(T));
    dhTexto = dhTexto.concat("ºC)</sub> = ");
    dhTexto = dhTexto.concat(dH.toPrecision(5));
    dhTexto = dhTexto.concat(" J/mol</p>");
    
    document.getElementById("dh_resultado").innerHTML = dhTexto


    $('.saidas').slideDown(300);
}