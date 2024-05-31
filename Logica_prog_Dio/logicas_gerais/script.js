// let pokemon = ["pikachu", "charmander", "Bulbassaur"];

// pokemon.pop();

// console.log(pokemon);

// let numero = "1";
// console.log(numero === 1);

function calcularXpGanhos(nivelMonstro, dificuldadeBatalha) {
    return nivelMonstro * dificuldadeBatalha * 100;
  }
  
  // Função principal para executar a simulação
  function simularBatalha(nivelMonstro, dificuldadeBatalha) {
    const xpGanhos = calcularXpGanhos(nivelMonstro, dificuldadeBatalha);
    console.log(`Voce ganhou ${xpGanhos} XP!`);
  }
  
//   // Exemplos de uso
//   simularBatalha(15, 20); // Espera: Voce ganhou 30000 XP!
//   simularBatalha(45, 40); // Espera: Voce ganhou 180000 XP!
//   simularBatalha(41, 38); // Espera: Voce ganhou 155800 XP!
  