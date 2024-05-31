let nomeHeroi = "TeoPae";
let xpHeroi = 9368;
let nivel = "";

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 12000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata Ouro";
} else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
  nivel = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
