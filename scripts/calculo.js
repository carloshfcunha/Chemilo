
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

    condVal = Array(molec);
    for(i in molec){
        condVal[i] = document.getElementsByClassName("lamb_conducao")[i].value;
    }
    
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

    G = Fa0*mm[nA]/((3.1415*diam**2)*3600000/4);

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
    condm = 0;
    for(i in molec){
        cpm = cpm + yi[i]*cpVal[i];
        condm = condm + yi[i]*condVal[i];
        console.log(cpVal[i]);
    }
    console.log(cpm);

    Pr = cpm*viscm/(mmM*condm);
    console.log(Pr);







}