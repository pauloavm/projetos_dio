const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularRankeadas(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  }

  return { saldo, nivel };
}

rl.question("Digite o número de vitórias: ", (vitorias) => {
  rl.question("Digite o número de derrotas: ", (derrotas) => {
    const resultado = calcularRankeadas(parseInt(vitorias), parseInt(derrotas));
    console.log(
      `O herói tem o saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`
    );
    rl.close();
  });
});
