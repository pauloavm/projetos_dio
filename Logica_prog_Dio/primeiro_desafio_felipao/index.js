let nomeHeroi = "Guerreiro do Sol";
let xpHeroi = 7500;

if (xpHeroi < 1000) {
  let nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 12000) {
  let nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  let nivel = "Prata Ouro";
} else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
  let nivel = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  let nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  let nivel = "Imortal";
} else {
  let nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
