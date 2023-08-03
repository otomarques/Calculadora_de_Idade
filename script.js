

// funçao principal



function calcularIdade(event) {
  event.preventDefault()
  console.log("Funcionando");
  let dadosUsuario = pegarValores();

  let calcIdade = calcular(dadosUsuario.ano);
  console.log(calcIdade);

  let Classificaetaria = ClassificarFaixaetaria(calcIdade);
  console.log(Classificaetaria);

  let usuarioAtualizado = organizarDados(dadosUsuario, calcIdade, Classificaetaria);

  cadastrarUsuario(usuarioAtualizado);
  console.log(usuarioAtualizado);
  window.location.reload();

}

// 1. PEGAR OS VALORES

function pegarValores() {
  let nomeRecebido = document.getElementById("nome").value.trim();// trim apaga possiveis espaços em branco no campo

  let diaNascimento = parseInt(document.getElementById("dia-nascimento").value)
  let mesmNascimento = parseInt(document.getElementById("mes-nascimento").value)
  let anoNascimento = parseInt(document.getElementById("ano-nascimento").value)


  let dadosUsuario = {
    nome: nomeRecebido,
    dia: diaNascimento,
    mes: mesmNascimento,
    ano: anoNascimento
  }

  console.log(dadosUsuario);

  return dadosUsuario;

}

//PASSO 2   - Calcular

function calcular(ano) {
  //let dataHoraAtual = Intl.DateTimeFormat('pt-BR',{timeStyle:,dateStyle: "short"}).format(Date.now())
  let anoAtual = new Date().getFullYear();
  // Date().getMonth()
  //  Date().getDay()
  let resultadoAno = anoAtual - ano
  console.log(anoAtual, resultadoAno);
  return resultadoAno;

}
//PASSO 3 -  Classificar
function ClassificarFaixaetaria(resultadoAno) {
  //  faixa etária

  // Resultado            Faixa
  // 0 à 12                Criança
  // 13 à 17                Adolescente
  // 18 à 65               Adulto
  // Acima de 65         Idoso

  if (resultadoAno <= 12) {
    return "Criança";

  } else if (resultadoAno <= 17) {
    return "Adolescente";
  } else if (resultadoAno <= 65) {
    return "Adulto";
  } else {
    return "Idoso";
  }


}

// 4.  ORGANIZAR AS INFORMAÇOES

function organizarDados(dadosUsuario, calcIdade, Classificaetaria) {
  let dataHoraAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: "long", dateStyle: "short" }).format(Date.now())

  let dadosUsuarioAtualizado = {
    ...dadosUsuario,//traz todos atributos do objeto
    idade: calcIdade, 
    classificacao: Classificaetaria,
    dataCadastro: dataHoraAtual


  }
  console.log(dadosUsuarioAtualizado);
  return dadosUsuarioAtualizado;
}

// Passo 5 - Salvar

function cadastrarUsuario(usuarioAtualizad) {
  let listaUsuarios = [];
  // if (localStorage.getItem("usuariosCadastrados") == true)
 if (localStorage.getItem("usuariosCadastrados")) {
  listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));


  
 }



  listaUsuarios.push(usuarioAtualizad)

  localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))

  console.log(usuarioAtualizad);

  // passos 6  ler lista
}
function carregarUsuarios() {
  

  let listaUsuarios = [];
  if (localStorage.getItem("usuariosCadastrados")) {
    listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
  
  
    
   }
   if (listaUsuarios.length == 0){
    let tabela =document.getElementById("corpo-tabela");
  
    tabela.innerHTML = '<tr class="linha-mensagem" <td  colspan="6"> Nenhum usuario cadastrado!</td> </tr>'
    } else{
  
      montarTabela(listaUsuarios);
    }
  
   
  }
  window.addEventListener('DOMContentLoaded', ()=> carregarUsuarios() );


  // passos 7 montar tabelas
 

  function montarTabela(listaDeCadastrados ) {
    let tabela =document.getElementById("corpo-tabela");
  
    let template = '';
  
    listaDeCadastrados.forEach(pessoa => {
      template +=  `<tr>
      <td data-cell="nome">${pessoa.nome}</td>
      <td data-cell="Data de Nascimento">${pessoa.ano}</td>
      <td data-cell="Idade">${pessoa.idade}</td>
     
      <td data-cell="faixa etária">${pessoa.classificacao}</td>
     </tr> `
      
    });
    tabela.innerHTML = template;
  }
  
  function deletarRegistros() {
    localStorage.removeItem("usuariosCadastrados")
    window.location.reload();
  }
  