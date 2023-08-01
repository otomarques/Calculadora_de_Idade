

// funçao principal



function calcularIdade(event) {
    event.preventDefault()
    console.log("Funcionando");
    let dadosUsuario = pegarValores();
    
    let calcIdade =  calcular(dadosUsuario.ano);
    console.log(calcIdade);

   let Classificaetaria = ClassificarFaixaetaria(calcIdade);
   console.log(Classificaetaria);


    
}

// 1. PEGAR OS VALORES

function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim();

    let diaNascimento = parseInt(document.getElementById("dia-nascimento").value)
    let mesmNascimento = parseInt(document.getElementById("mes-nascimento").value)
    let anoNascimento = parseInt(document.getElementById("ano-nascimento").value)
 
  
    let dadosUsuario = {
      nome: nomeRecebido,
      dia: diaNascimento,
      mes: mesmNascimento,
      ano:anoNascimento
    }
  
    console.log(dadosUsuario);
  
    return dadosUsuario;
  
  }

  //PASSO 2   - Calcular

  function calcular(ano) {
    //let dataHoraAtual = Intl.DateTimeFormat('pt-BR',{timeStyle:,dateStyle: "short"}).format(Date.now())
    let anoAtual = new Date().getFullYear();
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
        
    }else if (resultadoAno <= 17) {
        return "Adolescente";
    } else if (resultadoAno <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    } 
        
   
  }

  // 4.  ORGANIZAR AS INFORMAÇOES

  function organizarDados(dadosUsuario,resultadoAno,) {
    
  }