// Função para validar o CEP
// Função começa limpando os campos a serem preenchidos
function limpa_formulário_cep() {

    // Um valor em branco é inserido em cada input
    document.getElementById("logradouro").value = ("");
    document.getElementById("bairro").value = ("");
    document.getElementById("cidade").value = ("");
    document.getElementById("estado").value = ("");
}

// Função para receber os dados de endereço
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        // Atualiza os campos com os valores disponíveis
        document.getElementById("logradouro").value = (conteudo.logradouro);
        document.getElementById("bairro").value = (conteudo.bairro);
        document.getElementById("cidade").value = (conteudo.localidade);
        document.getElementById("estado").value = (conteudo.uf);
    } else {

        // Se o CEP não for encontrado
        limpa_formulário_cep();
        alert("O CEP informado não foi encontrado.\nPor favor, verifique o número e tente novamente.");
        cep.value = ""; // Limpa o input do CEP
    }
}

// Função para pesquisar o CEP
function pesquisacep(valor) {

    // Nova variável cep recebe somente dígitos
    let cep = valor.replace(/\D/g, '');

    // Verifica se o input do CEP não está vazio
    if (cep != "") {

        // Nova variável validacep recebe o CEP dígitado com 8 números
        let validacep = /^[0-9]{8}$/;

        // Executa a validação do CEP
        if (validacep.test(cep)) {

            // Preenche os campos com reticências enquanto a consulta no webservice é realizada
            document.getElementById("logradouro").value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            document.getElementById("estado").value = "...";

            // Cria um elemento JavaScript
            let script = document.createElement('script');

            // Faz uma sincronização com o callback
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            // Insere o novo script no documento e carrega o conteúdo
            document.body.appendChild(script);
        }

        // Se o CEP é inválido, limpa o formulário e emite um alerta
        else {
            limpa_formulário_cep();
            alert("O formato do CEP é inválido.\nVerifique o número e tente novamente.");
            cep.value = ""; // Limpa o input do CEP
        }
    }
    // Com CEP sem valor, o formulário é limpo
    else {
        limpa_formulário_cep();
    }
};

