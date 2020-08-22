function inicializa() {
    document.getElementById("reacao").value = "C2H5OH = CH3CHO + H2";
    document.getElementById("T").value = 548;
    document.getElementById("P").value = 1;
    document.getElementById("Dr").value = 35;
    document.getElementById("dp").value = 2.289;
    document.getElementById("ff").value = 0.778;
    document.getElementById("e").value = 37;
    document.getElementById("am").value = 1.26;
    document.getElementById("xA").value = 0.362;
    document.getElementById("rA").value = 0.193;
    conferirReacao();
    calculos();
}