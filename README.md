# Desafio Individual – Formulário de cadastro Pessoal

### Autor:

- Wagner Silva Moreira
- **Idade**: 30 anos
- **Tipo de deficiência:** Cegueira total
- **CID:** H54

### Objetivo:

Desenvolver um cadastro pessoal num *site* pequeno e acessível, com campos do formulários, além de usár fuções em javascript. 
### Ferramenta:

Visual Studio Code no Windows.

### Linguagens: 

- CSS
- HTML
- JavaScript

## Descrição do site

### HTML

No ínício, começa com `<!DOCTYPE HTML>`, uma declaração para avisar aos navegadores que é um documento HTML, e dentro, tem `<html>` representa a raiz de um documento HTML e contém um atributo "lang" para declarar o idioma da página da web a fim de ajudar os mecanismos de busca e os navegadores. 

Dentro desse elemento, tem um elemento `<head>` designado para informar os metadados e buscar os recursos. Está entre `<html>` e `<body>`. 

#### Metadados

- O `<link>` é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:
  - O atributo "`rel`" é um relacionamento de tipo de arquivo;
  - O atributo "`type`" é um tipo de arquivo;
  - O atributo "`media`" especifica quais os dispositivos o documento deve ser renderizado.

- `<meta charset="UTF-8">`: É um elemento de metadado para a codificação e a renderização de caracteres para o documento HTML
- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: É um elemento de metadado de fornecimento de HTTP para o conteúdo do navegador
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: É um elemento de metadado para renderizar a compatiblidade de visualizacão da página com todos os dispositivos
- `<title>Cadastro Pessoal</title>`: O <title> é um elemento que renderiza o título para a aba do navegador

#### Corpo

O elemento `<body>` renderiza todo o corpo de um document.

No corpo, vocês encontram os elementos <div>, que são divisões ou uma seções num documento HTML. O atributo "`class`" é um nome de classe para um elemento para pegar os seletores de um arquivo CSS.

Além disso, numa divisão, temos:

- `<h1>` é um cabeçalho de primeiro grau.
- `<h2>` é um cabeçalho de segundo grau.
- `<p>` é uma definição de parágrafos.
- `<hr/>` é um mais frequentemente exibido como uma regra horizontal que é usada para separar conteúdo (ou definir uma alteração) numa página HTML.

#### Formulário

O `<form>` é um elemento de criação de formulário usado para onde o usuário possa preencher os campos. Nele, tem um atributo "`onsumbit`" é um evento de submissão em JavaScript que executa a função. Dentro do formulário, definimos as classes `grupo-de-caixa` para agrupar o rótulo e o campo para uma mesma linha e expandir a largura do campo até à largura da classe "`descricao`".

Nele, temos:

##### Rótulos

- O `<label>` é um elemento que rotula a informação.
  - O atriuto "`for`" é um método que pega o identificador do campo de entrada.

##### Campos de entrada

- O `<input>` é um elemento de campo de entrada para o usuário escrever o valor e preenchê-lo.
  - O atributo "`id`" é uma vinculação do campo ao rótulo.
  - O atributo "`required`" significa que o campo não pode ser vazio.
  - O atributo "`aria-required`" é semelhante ao "required" para pessoas com deficiência.
  - O atributo "`maxlength`" define o limite de caracteres.
  - O atributo "`placeholder`" é um valor da dica ou do exemplo.
  - O atributo "`pattern`" é um método de expressão regular.

#### Fim

O comando `<button type="button" onclick="carregarEndereco()">Clique para carregar os campos do endereço</button>` é um botão com um evento "onclick" que executa a função "carregarEndereco()" para checar se CEP é válido ou não e também preencher todos os campos de forma automática. 

O comando `<input id="cadastrar" type="submit" value="Enviar dados">` é um botão de submissão com um valor para renderizar

O comando `<script type="text/javascript" src="js/script.dev.js"></script>` é elemento para anexar o arquivo externo em JavaScript e define o tipo de documento

### JavaScript

Executamos uma função (`function`) chamada `carregarEndereco()`, que foi executada ao clicar o botão em HTML. Dentro de uma função, usamos `getElementById` para pegar o valor por meio de um identificador do campo de entrada. Então ao obter o valor, analisamos os seguintes casos :

Validação do CEP
Quando consultado um CEP de formato inválido, por exemplo: "950100100" (9 dígitos), "95010A10" (alfanumérico), "95010 10" (espaço), o código de retorno da consulta será um 400 (Bad Request). Antes de acessar o webservice, valide o formato do CEP e certifique-se que o mesmo possua {8} dígitos. Exemplo de como validar o formato do CEP em javascript está disponível nos exemplos abaixo.
Quando consultado um CEP de formato válido, porém inexistente, por exemplo: "99999999", o retorno conterá um valor de "erro" igual a "true". Isso significa que o CEP consultado não foi encontrado 
- Checamos se for (`if ()`) menor que 8 números (`length != 8`) de CEP, avisamos (`alert`) que o CEP deve ter 8 números sem hífen.
- Pegamos a expressão regular de CEP para testar se é válido ou não – se válido, avisamos que é válido, senão avisamos que é inválido.

No fim, na última função, dentro da qual temos um comando `window.location.href`, que encaminha paraa próxima página de mensagem enviada com sucesso. 

## Referências

### HTML

- [O uso de `aria-required`](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute)
- [O uso de `pattern`](https://pt.stackoverflow.com/questions/182118/como-usar-o-atributo-pattern)
- [O uso de expressão regular de números permitidos](https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp)


### JavaScript

- [Validação de CEP pelo ViaCEP](https://viacep.com.br/#:~:text=Acessando%20o%20webservice%20de%20CEP,piped%22%20ou%20%22querty%22.)
- [A expressão regular de CEP](https://dfilitto.com.br/video-aulas/validacao-do-cep-utilizando-expressao-regular/)

### CSS

Aprendi tentando usar cores diferentes, e perguntando para colegas o resultado, visto que sou cego total. 