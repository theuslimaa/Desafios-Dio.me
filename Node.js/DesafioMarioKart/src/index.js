
const player1 = {
    NOME: "Peach",          // Nome do jogador
    VELOCIDADE: 3,          // Atributo de velocidade
    MANOBRABILIDADE: 4,     // Atributo de manobrabilidade (curvas)
    PODER: 2,               // Atributo de poder (confrontos)
    PONTOS: 0               // Pontuação inicial
  };
  
  
  const player2 = {
    NOME: "Bowser",      
    VELOCIDADE: 5,         
    MANOBRABILIDADE: 2,     
    PODER: 5,               
    PONTOS: 0              
  };
  
  // Função assíncrona que simula a rolagem de um dado (valor entre 1 e 6)
  async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;  // Retorna um número aleatório de 1 a 6
  }
  
  // Função assíncrona que sorteia um tipo de bloco (reta, curva, confronto)
  async function getRandomBlock() {
    let random = Math.random();  // Gera um número aleatório entre 0 e 1
    let result;
  
    // Define o bloco com base no valor aleatório gerado
    switch (true) {
      case random < 0.33:
        result = "RETA";         // 33% de chance de ser uma reta
        break;
      case random < 0.66:
        result = "CURVA";        // 33% de chance de ser uma curva
        break;
      default:
        result = "CONFRONTO";    // 33% de chance de ser um confronto
    }
  
    return result;  // Retorna o tipo de bloco sorteado
  }
  
  // Função que exibe o resultado de uma rolagem para um personagem
  async function rollResult(characterName, block, diceResult, attribute) {
    // Mostra no console o nome do personagem, o tipo de teste, o resultado do dado e o valor do atributo
    console.log(
      `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
  }
  
  // Função principal que simula as 5 rodadas da corrida
  async function MarioKartRaceEngine(character1, character2) {
    // Loop de 5 rodadas
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Rodada ${round}`);  // Exibe o número da rodada
  
      // Sorteia o tipo de bloco para a rodada
      let block = await getRandomBlock();
      console.log(`Bloco: ${block}`);  // Exibe o tipo de bloco sorteado
  
      // Rola o dado para ambos os personagens
      let diceResult1 = await rollDice();
      let diceResult2 = await rollDice();
  
      // Variáveis para armazenar os resultados finais dos testes de habilidades
      let totalTestSkill1 = 0;
      let totalTestSkill2 = 0;
  
      // Caso o bloco seja uma reta, compara a velocidade dos jogadores
      if (block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE;  // Soma dado + velocidade para Mario
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE;  // Soma dado + velocidade para Luigi
  
        // Exibe os resultados da rolagem para ambos os jogadores
        await logRollResult(
          character1.NOME,
          "velocidade",
          diceResult1,
          character1.VELOCIDADE
        );
  
        await logRollResult(
          character2.NOME,
          "velocidade",
          diceResult2,
          character2.VELOCIDADE
        );
      }
  
      // Caso o bloco seja uma curva, compara a manobrabilidade dos jogadores
      if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;  // Soma dado + manobrabilidade para Mario
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;  // Soma dado + manobrabilidade para Luigi
  
        // Exibe os resultados da rolagem para ambos os jogadores
        await rollResult(
          character1.NOME,
          "manobrabilidade",
          diceResult1,
          character1.MANOBRABILIDADE
        );
  
        await rollResult(
          character2.NOME,
          "manobrabilidade",
          diceResult2,
          character2.MANOBRABILIDADE
        );
      }
  
      // Caso o bloco seja um confronto, compara o poder dos jogadores
      if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.PODER;  // Soma dado + poder para Mario
        let powerResult2 = diceResult2 + character2.PODER;  // Soma dado + poder para Luigi
  
        // Exibe a mensagem de confronto entre os dois jogadores
        console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);
  
        // Exibe os resultados da rolagem para ambos os jogadores
        await rollResult(
          character1.NOME,
          "poder",
          diceResult1,
          character1.PODER
        );
  
        await rollResult(
          character2.NOME,
          "poder",
          diceResult2,
          character2.PODER
        );
  
        // Verifica quem venceu o confronto e ajusta os pontos
        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
          );
          character2.PONTOS--;  // Luigi perde um ponto
        }
  
        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
          );
          character1.PONTOS--;  // Mario perde um ponto
        }
  
        // Se o poder for igual, o confronto termina empatado
        console.log(
          powerResult2 === powerResult1
            ? "Confronto empatado! Nenhum ponto foi perdido"
            : ""
        );
      }
  
      // Verifica quem ganhou a rodada
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;  // Mario ganha um ponto
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;  // Luigi ganha um ponto
      }
  
      console.log("-----------------------------");
    }
  }
  
  // Função que declara o vencedor após as 5 rodadas
  async function declareWinner(character1, character2) {
    // Exibe a pontuação final dos dois jogadores
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
  
    // Verifica quem é o vencedor
    if (character1.PONTOS > character2.PONTOS)
      console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
      console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else
      console.log("A corrida terminou em empate");
  }
  
  // Função principal que executa o jogo
  (async function main() {
    console.log(
      `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );
  
    // Executa a corrida e depois declara o vencedor
    await MarioKartRaceEngine(player1, player2);
    await declareWinner(player1, player2);
  })();
  