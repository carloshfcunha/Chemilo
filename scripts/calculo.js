
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
    Fa0 = document.getElementsByClassName("F")[0].value;
    nA = 0;
    dn = 0;
    Ft = 0;
    for(i in molec){
        F[i] = parseFloat(document.getElementsByClassName("F")[i].value);
        if(F[i]/coef[i] < Fa0 && F[i] > 0){
            Fa0 = F[i];
            nA = i;
        }
        dn = dn - coef[i];
        Ft = Ft + F[i];
    }

    ya0 = Fa0/Ft;
    ea = ya0*dn/coef[nA];

    xA = parseFloat(document.getElementById("xA").value);

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
            voluMol[i] = document.getElementsByClassName("volM_dif")[w].value;
            w++;
        }
        else{
            vma = 0;
            w1 = 0;
            for(j in atomos){
                if(seA[j] == 1){
                    vma = parseFloat(vma + nAtomos[i][j]*parseFloat(document.getElementsByClassName("volA_dif")[w1].value));
                    w1++;  
                }
                        
            }
            voluMol[i] = vma;
        }     
    }

    T = document.getElementById("T").value;

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

    diam = document.getElementById("Dr").value/1000;

    somaFM = 0;
    for(i in molec){
        if(coef[i] > 0){
            somaFM = somaFM + F[i]*mm[i]
        }
    }

    G = somaFM/((3.1415*diam**2)*3600000/4);

    dp = document.getElementById("dp").value/1000;

    Re = dp*G/viscm;

    if(Re > 190){
        jd = 0.983*Re**(-0.41)
    }else{
        jd = 1.66*Re**(-0.51)
    }

    P = parseFloat(document.getElementById("P").value);
    rA = parseFloat(document.getElementById("rA").value);
    am = parseFloat(document.getElementById("am").value);

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

    cpm = 0;
    for(i in molec){
        cpm = cpm + yi[i]*cpVal[i];
    }

    condVal = Array(molec);
    for(i in molec){
        condVal[i] = document.getElementsByClassName("lamb_conducao")[i].value;
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
    
    ff = document.getElementById("ff").value;

    VdivA = ff*dp/6;

    poro = document.getElementById("e").value/100;

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
        A0Val[i] = document.getElementsByClassName("a0_calor")[i].value;
        A1Val[i] = document.getElementsByClassName("a1_calor")[i].value;
        A2Val[i] = document.getElementsByClassName("a2_calor")[i].value;
        A3Val[i] = document.getElementsByClassName("a3_calor")[i].value;
        A4Val[i] = document.getElementsByClassName("a4_calor")[i].value;
        dhVal[i] = document.getElementsByClassName("dh_calor")[i].value*1000;
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
    
    console.log(dT);

    $('.saidas').slideDown(300);
}