// Uma funcção
function carregaEndereco() 
{
  // O método "getElementById" checa a caixa de entrada pelo identificador "cep"
  cep = document.getElementById('cep').value;

  //  Verifica se não é igual a 8 números
    if (cep.length != 8) 
    {
      // Alarma que deve escrever 8 números
      alert("CEP precisa ter 8 números");
      return;
    }
  

  // Pega o endereço, concatenando o subdomínio JSON
  url = `https://viacep.com.br/ws/${cep}/json/`;
  // Checa e baixa o arquivo JSON
  fetch(url)
    .then(async (res) => 
    {
      // Assincrona e regenera o arquivo JSON
      endereco = await res.json()

      // Checa se o CEP está errado
      if (endereco.erro) 
      {
        // Avisa que o está errado
        alert("Número de CEP inválido");
        // O método "getElementById" checa a caixa de entrada pelo identificador "cep"
        document.getElementById("cep").focus();
        return;
      }

      // O método "getElementById" checa as caixas de entradas pelos identificadores para verificar se estão preenchidos
      document.getElementById("endereco").value = endereco.logradouro;
      document.getElementById("bairro").value = endereco.bairro;
      document.getElementById("cidade").value = endereco.localidade;
      document.getElementById("estado").value = endereco.uf;
    }) // Caso dê errado
    .catch(() => 
    {
      // A insistência do mesmo aviso que ainda há errado com o CEP
      alert("Algo deu errado com seu CEP");
      document.getElementById("cep").focus();
    });
}

// Caso todos os campos sejam preenchidos, é aceito enviar
function sucesso() 
{
  window.alert("Os seus dados foram enviados com sucesso!");
}