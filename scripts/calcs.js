function calculos(){

    erroVv3 = JSON.parse(localStorage.getItem("erroVv3") || '[]');
    erroVv6 = JSON.parse(localStorage.getItem("erroVv6") || '[]');
    erroVv5 = JSON.parse(localStorage.getItem("erroVv5") || '[]');

    console.log(erroVv3);
    console.log(erroVv5);
    console.log(erroVv6);

    if(erroVv3*erroVv6*erroVv5 == 1){
        molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
        mm = JSON.parse(localStorage.getItem("mMolar") || '[]');
    
        T = Number(document.getElementById('T').value)+273;
    
        A = 1.16145;
        B = 0.14874;
        C = 0.52487;
        D = 0.77320;
        E = 2.16178;
        F = 2.43787;
    
        w = 0;
        w1 = 0;
        viscVal = Array(molec);
        cpVal = Array(molec);
        condVal = Array(molec);
        for(i in molec){
            viscVal[i] = 0;
            if(lenjon[i][0] == 1){
                sig = Number(document.getElementsByClassName('sig_visc')[w1].value);
                eps = Number(document.getElementsByClassName('eps_visc')[w1].value);
    
                T_ad = T/eps;
                omega = A*T_ad**(-B) + C*Math.exp(-D*T_ad) + E*Math.exp(-F*T_ad);
                viscVal[i] = (2.669e-6)*((mm[i]*T)**0.5)/(omega*sig**2);
    
                w1++;
    
            }else{
                Tc = Number(document.getElementsByClassName('tc_visc')[w].value);
                Pc = Number(document.getElementsByClassName('pc_visc')[w].value);
                Zc = Number(document.getElementsByClassName('zc_visc')[w].value);
    
                et = (Tc**(1/6))/((mm[i]**0.5)*Pc**(2/3));
                viscVal[i] = ((1.9*T/Tc - 0.29)*1e-7)*(Zc**(-2/3))/et;
    
                w++;
            }
    
            cpVal[i] = 0;
            a0 = Number(document.getElementsByClassName('a0_calor')[i].value);
            a1 = Number(document.getElementsByClassName('a1_calor')[i].value);
            a2 = Number(document.getElementsByClassName('a2_calor')[i].value);
            a3 = Number(document.getElementsByClassName('a3_calor')[i].value);
            a4 = Number(document.getElementsByClassName('a4_calor')[i].value);
    
            cpVal[i] = 8.314*(a0 + a1*T + a2*T**2 + a3*T**3 + a4*T**4);
    
            condVal[i] = (viscVal[i]/mm[i])*(1.32*cpVal[i] + 3.74)
    
            if(isNaN(condVal[i])){
                document.getElementsByClassName("lamb_conducao")[i].value = "";
            }else{
                document.getElementsByClassName("lamb_conducao")[i].value = condVal[i];
            }
            
        }
    
        localStorage.setItem("viscVal", JSON.stringify(viscVal));
        localStorage.setItem("cpVal", JSON.stringify(cpVal));
    
        verif6();
    }
}