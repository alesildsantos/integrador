
//data no topo
var d = new Date();
var wDay = d.getDay();
var wDayArr = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
wDay = wDayArr[wDay];
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var monthArr = ["Jan", "Fev","Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov","Dez"];
month = monthArr[month];
document.getElementById("date").innerHTML=wDay+", "+date+" / "+month+" / "+year;

//Cadastro
function cadastrar() {
    var vNom = document.getElementById("fNom").value;
    var vCpf = document.getElementById("fCpf");
    var vFon = document.getElementById("fFon");
    var vCel = document.getElementById("fCel");
    var vCep = document.getElementById("fCep");
    var vLog = document.getElementById("fLog").value;
    var vNum = document.getElementById("fNum").value;
    var vCom = document.getElementById("fCom").value;
    var vBai = document.getElementById("fBai").value;
    var vCid = document.getElementById("fCid").value;
    var vEst = document.getElementById("fEst").value;

    if (vNom!="" ) {
        if (vCpf.value!="" && vCpf.checkValidity()) {
            if (vFon.value!="" && vFon.checkValidity()) {
                if (vCel.value!="" && vCel.checkValidity()) {
                    if (vCep.value!="" && vCep.checkValidity()) {
                        if (vLog!="") {
                            if (vNum!="") {
                                if (vCom!="") {
                                    if (vBai!="") {
                                        if (vCid!="") {
                                            if (vEst!="") {
                                                return true;
                                            }else {
                                                alert("Informe o Estado");
                                                return false;
                                            }
                                        }else {
                                            alert("Informe a Cidade");
                                            return false;
                                        }
                                    }else {
                                        alert("Informe o Bairro");
                                        return false;
                                    }
                                }else {
                                    alert("Informe o Complemento");
                                    return false;
                                }
                            }else {
                                alert("Informe o número");
                                return false;
                            }
                        }else {
                            alert("Informe o Logradouro");
                            return false;
                        }
                    }else {
                        alert("Informe um CEP válido");
                        return false;
                    }
                }else {
                    alert("Informe um número de celular válido");
                    return false;
                }
            }else {
                alert("Informe um número de telefone válido");
                return false;
            }
        }else {
            alert("Informe um CPF ou CNPJ válido");
            return false;
        }
    }else {
        alert("Informe o Nome");
        return false;
    }
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('fLog').value=("");
    document.getElementById('fBai').value=("");
    document.getElementById('fCid').value=("");
    document.getElementById('fEst').value=("");   
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('fLog').value=(conteudo.logradouro);
    document.getElementById('fBai').value=(conteudo.bairro);
    document.getElementById('fCid').value=(conteudo.localidade);
    document.getElementById('fEst').value=(conteudo.uf);    
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('fLog').value="...";
        document.getElementById('fBai').value="...";
        document.getElementById('fCid').value="...";
        document.getElementById('fEst').value="...";
        //document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?cal lback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
}
