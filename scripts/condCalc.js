function conducoes(){

    molec = JSON.parse(localStorage.getItem("moleculas") || '[]');
    lenjon = JSON.parse(localStorage.getItem("lenjon") || '[]');
    mm = JSON.parse(localStorage.getItem("mMolar") || '[]');

    T = parseFloat(document.getElementById('T').value);

    A = 1.16145;
    B = 0.14874;
    C = 0.52487;
    D = 0.77320;
    E = 2.16178;
    F = 2.43787;

    w = 0;
    viscVal = Array(molec);
    for(i in molec){
        viscVal[i] = 0;
        if(lenjon[i][0] == 1){
            T_ad = T/lenjon[i][2];
            omega = A*T_ad**(-B) + C*Math.exp(-D*T_ad) + E*Math.exp(-F*T_ad);
            viscVal[i] = (2.669e-3)*((mm[i]*T)**0.5)/(omega*lenjon[i][1]**2);

        }else{
            Tc = document.getElementsByClassName('tc_visc')[w].value
            Pc = document.getElementsByClassName('pc_visc')[w].value
            Zc = document.getElementsByClassName('zc_visc')[w].value

            et = (Tc**(1/6))/((mm[i]**0.5)*Pc**(2/3));
            viscVal[i] = ((1.9*T/Tc - 0.29)*1e-4)*(Zc**(-2/3))/et;

            w++;
        }
    }

    localStorage.setItem("viscVal", JSON.stringify(viscVal));


}