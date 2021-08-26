// EStá é uma diretiva de ECMAScript 5
"use strict";

// Uma funcção
function carregaEndereco() 
{
  // O método "getElementById" checa a caixa de entrada pelo identificador "cep"
  cep = document.getElementById("cep").value;

  //  Verifica se não é igual a 8 números
  if (cep.length != 8) 
  {
    // Alarma que deve escrever 8Números
    alert("CEP precisa ter 8 números");
    return;
  }

  // Pega o endereço, concatenando o subdomínio JSON
  url = "https://viacep.com.br/ws/".concat(cep, "/json/");
  // Checa e baixa o arquivo JSON
  fetch(url).then(function _callee(res) 
  {
    // Assincrona e regenera o arquivo JSON
    return regeneratorRuntime.async(function _callee$(_context) 
    {
      // Repete a sincronização do arquivo baixado
      while (1) 
      {
        // Troca de casos para checar se o CEP é válido ou inválido;
        switch (_context.prev = _context.next) 
        {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(res.json());

          case 2:
            endereco = _context.sent;

            if (!endereco.erro) 
            {
              _context.next = 7;
              break;
            }

            alert("Número de CEP inválido");
            document.getElementById("cep").focus();
            return _context.abrupt("return");

          case 7:
            document.getElementById("endereco").value = endereco.logradouro;
            document.getElementById("bairro").value = endereco.bairro;
            document.getElementById("cidade").value = endereco.localidade;
            document.getElementById("estado").value = endereco.uf;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }); // Caso dê errado
  })["catch"](function () 
  {
    alert("Algo deu errado com seu CEP");
    document.getElementById("cep").focus();
  });
}

// Caso todos os campos sejam preenchidos, é aceito enviar
function sucesso() 
{
  window.alert("Os seus dados foram enviados com sucesso!");
}