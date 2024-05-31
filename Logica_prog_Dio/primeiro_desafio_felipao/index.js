// Variáveis
let nomeHero = "TeoPae";
let xpHero = 9368;
let level = "";

// Teste de nível
if (xpHero < 1000) {
  level = "Ferro";
} else if (xpHero >= 1001 && xpHero <= 12000) {
  level = "Bronze";
} else if (xpHero >= 2001 && xpHero <= 5000) {
  level = "Prata Ouro";
} else if (xpHero >= 5001 && xpHero <= 8000) {
  level = "Platina Diamante";
} else if (xpHero >= 8001 && xpHero <= 9000) {
  level = "Ascendente";
} else if (xpHero >= 9001 && xpHero <= 10000) {
  level = "Imortal";
} else {
  level = "Radiante";
}

// exibição de resultado
console.log(`O Herói de nome ${nomeHero} está no nível de ${level}.`);

/* usei as variáveis em inglês uma vez que em usa maior parte os programa
usam este idioma para execução dos códigos.
*/
