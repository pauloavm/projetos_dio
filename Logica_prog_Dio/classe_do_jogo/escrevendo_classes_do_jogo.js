class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Example usage:
const hero1 = new Hero("Gandalf", 1000, "mago");
hero1.atacar();

//   const hero2 = new Hero('Aragorn', 35, 'guerreiro');
//   hero2.atacar();

//   const hero3 = new Hero('Kung Fu', 25, 'monge');
//   hero3.atacar();

//   const hero4 = new Hero('Naruto', 20, 'ninja');
//   hero4.atacar();
