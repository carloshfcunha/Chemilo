

function conferirReacao() {

    idReacao = document.getElementById('reacao');
    reacao = idReacao.value.toUpperCase();    
    compostos = reacao.split(" ");

    comprimento = compostos.length;

    nIguais = 0;
    nMaises = 0;
    err = 0;
    for (var i in compostos){
        if(compostos[i] == "="){
            nIguais++;
            if(i != comprimento - 1){
                if (compostos[i+1] == "+" || compostos[i+1] == "="){
                err = 1;
                }
            }
        }
        else if(compostos[i] == "+"){
            nMaises++;
            if(i != comprimento - 1){
                if (compostos[i+1] == "+" || compostos[i+1] == "="){
                err = 1;
                }
            }
        }
        else if(i != comprimento - 1){
            if((compostos[i+1] == "+") && (compostos[i+1] == "=") && (i = comprimento - 2)){
                err = 1;
            }
        }
    }

    if (compostos[0] == "+" || compostos[0] == "=" || compostos[comprimento - 1] == "+" || compostos[comprimento - 1] == "="){
        err = 1;
    }

    nMoleculas = comprimento-nIguais-nMaises;

    if((nIguais == 1) && (nMaises == nMoleculas - 2) && (err == 0)){

        coeficientes = [];
        moleculas = [];
        for (var i in compostos){
            if (compostos[i] != "+" && compostos[i] != "="){
                separacao = compostos[i].split("");
                k = 0;
                l = 0;
                nome = ""
                mol = ""
                for (var j in separacao){
                    if (isNaN(separacao[j])){
                        nome = nome.concat(separacao[j]);
                        k = 1;
                        if (l == 0){
                            mol = mol.concat(1);
                        }
                        l = 1
                    }else{
                        if (k == 1){
                            nome = nome.concat(separacao[j]);
                        }else{
                            mol = mol.concat(separacao[j]);
                            l = 1;
                        }
                    }
                }
                moleculas.push(nome);
                coeficientes.push(mol);
            }
        }

    }else{
        alert("Equação da reação incorreta!")
    }
    
}

