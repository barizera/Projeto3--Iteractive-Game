console.clear();
const prompt = require("prompt-sync")();

console.log(`\t####  A BATALHA MEDIEVAL!!  ####`);
console.log();

const personagem = {
  name: "",
  health: 100,
  stamina: 100,
  ataques: {
    att1: { nome: "Corpo a corpo", dano: 5 },
    att2: { nome: "Fire Ball", dano: 20 },
    att3: { nome: "Chuva de Fogo", dano: 30 },
  },
  food: 0,
  checkHpPersonagem: function () {
    if (this.health < 1) {
      console.log(`${this.name}, você foi abatido!`);
    }
  },
  alteraStamina: function (qnt) {
    this.stamina += qnt;
  },
  magiaNegra: function () {
    return personagem.stamina - Math.floor(Math.random() * 101);
  },
  alteraStatus: function () {
    this.health += 25;
    this.stamina += 50;
    this.ataques.att1.dano += 5;
    this.ataques.att2.dano += 10;
    this.ataques.att3.dano += 15;
  },
  treinoUp: function () {
    this.health += 10;
    this.ataques.att1.dano += 5;
    this.ataques.att2.dano += 5;
    this.ataques.att3.dano += 5;
  },
  resetStatus: function () {
    this.health = 100;
    this.stamina = 100;
    this.food = 0;
    this.ataques.tt1.dano = 5;
    this.ataques.att2.dano = 20;
    this.ataques.att3.dano = 30;
  },
};

const monster1 = {
  name: "Minotauro",
  health: 100,
  ataques: {
    att1: { nome: "Corpo a Corpo", dano: 10 },
    att2: { nome: "Cabeçada", dano: 20 },
  },
  resetStatus: function () {
    this.health = 100;
  },
  checkHealthMonster1: function () {
    if (this.health <= 0) {
      console.log(`O ${monster1.name} foi abatido!`);
    }
  },
};

const monster2 = {
  name: "Black Warrior",
  health: 125,
  ataques: {
    att1: { nome: "Corpo a Corpo", dano: 10 },
    att2: { nome: "Arremesso de Arma", dano: 25 },
  },
  checkHealthMonster2: function () {
    if (this.health <= 0) {
      console.log(`O ${monster2.name} foi abatido!`);
    }
  },
  resetStatus: function () {
    this.health = 125;
  },
};

const monster3 = {
  name: "Black Mage",
  health: 100,
  ataques: {
    att1: { nome: "Corpo a Corpo", dano: 10 },
    att2: { nome: "Black Ball", dano: 25 },
  },
  checkHealthMonster3: function () {
    if (this.health <= 0) {
      console.log(`O ${monster3.name} foi abatido!`);
    }
  },
  resetStatus: function () {
    this.health = 100;
  },
};

// ATAQUE:
function ataqueBatalha(vidaAtual, ataqueEscolhido) {
  vidaAtual -= ataqueEscolhido;
  let attAleatorio = Math.floor(Math.random() * 101);
  // Função de aleatoriedade para que um guardião ajude no ataque e cause mais dano ao defensor
  if (attAleatorio >= 95) {
    console.log(`Um espírito guardião te ajudou no ataque causando 20 de dano.`);
    vidaAtual -= 20;
  }
  return vidaAtual;
}

let magiaNegra = (stamina) => stamina - Math.floor(Math.random() * 101);

let restart = "sim";

while (restart == "sim") {
  let nome = prompt(`\nBem vindo(a) a batalha medieval, qual será o nome do seu personagem?: `);

  console.log(
    `\n\tOK ${nome} \n\tVocê é um Mago.\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano}.\n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano}.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.\n`
  );

  console.log(
    `Como todo grande Mago, temos algumas responsabilidades, e a de hoje é defender a nossa sociedade dos perigos que rondam ela.`
  );
  console.log(
    `E para começar sua aventura, temos uma batalha com um monstro que está tentando destruir uma das nossas vilas.`
  );

  let pronto = prompt(`Está pronto para começar a nossa primeira batalha?: (S/N) `).toLowerCase();
  // pronto != (diferente) de 's' --> true && pronto != (diferente) de 'sim' --> true
  while (pronto != "s" && pronto != "sim") {
    console.log(`\nAgora não há mais volta, ${nome}, enquanto sua resposta não for "S" não sairá do lugar!`);
    pronto = prompt(`Está pronto para começar a nossa primeira batalha?: (S/N) `).toLowerCase();
  }

  console.log(
    `\nAqui grande Mago, você se deparou com um filhote de minotauro, ele não parece ser tão perigoso, mas não o subestime ele pode ser fatal.`
  );

  prompt("\nAgora vamos ver o que seus ataques fazem..aperte enter para continuar");
  let round = 1;
  while (true) {
    //console.log(round)
    console.log(`\n\t #### Você está no Round ${round} ####`);
    round++;
    // DEMONSTRAR OS STATUS, DO USER E NPC
    console.log(
      `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
    );
    console.log(
      `\n\tStatus do ${monster1.name}:\n\tVida: ${monster1.health}.\n\tAtaque ${monster1.ataques.att1.nome} causa: ${monster1.ataques.att1.dano} de dano.\n\t${monster1.ataques.att2.nome} causa: ${monster1.ataques.att2.dano} de dano`
    );
    console.log(
      `\nQual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - Ataque Corpo a corpo\n\t(2) - Bola de Fogo\n\t(3) - Chuva de Elementos`
    );
    let ataqueEscolhidoPersonagem = +prompt("\tAtaque: ");

    while (ataqueEscolhidoPersonagem != "1" && ataqueEscolhidoPersonagem != "2" && ataqueEscolhidoPersonagem != "3") {
      console.log(`Por favor, escolha um ataque válido!`);
      console.log(
        `Qual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - ${personagem.ataques.att1.nome}: ${personagem.ataques.att1.dano} \n\t(2) - ${personagem.ataques.att2.nome}: ${personagem.ataques.att2.dano}\n\t(3) - ${personagem.ataques.att3.nome}: ${personagem.ataques.att3.dano}`
      );
      ataqueEscolhidoPersonagem = prompt("\n\tR: ");
    }

    // Escolhas dos ataquesdo Mago
    if (ataqueEscolhidoPersonagem == 1) {
      // monster.health está sendo alterado pela function ataquebBatalha.
      monster1.health = ataqueBatalha(monster1.health, personagem.ataques.att1.dano);
      console.log(`\nSeu ataque que causou ${personagem.ataques.att1.dano} de dano.`);
      console.log();
    } else if (ataqueEscolhidoPersonagem == 2) {
      monster1.health = ataqueBatalha(monster1.health, personagem.ataques.att2.dano);
      console.log(`\nSeu ataque que causou ${personagem.ataques.att2.dano} de dano.`);
      console.log();
    } else if (ataqueEscolhidoPersonagem == 3) {
      monster1.health = ataqueBatalha(monster1.health, personagem.ataques.att3.dano);
      console.log(`\nSeu ataque que causou ${personagem.ataques.att3.dano} de dano.`);
      console.log();
    }
    // CHECK DE VIDA DO MONSTRO
    monster1.checkHealthMonster1();
    if (monster1.health <= 0) {
      break;
    }

    prompt("... para ir ao ataque do seu oponente, aperte enter.");

    // ### ATAQUES DO NPC MONSTER1 ###
    let ataqueMonster1 = Math.floor(Math.random() * 2 + 1);
    if (ataqueMonster1 == 1) {
      personagem.health = ataqueBatalha(personagem.health, monster1.ataques.att1.dano);
      console.log(`\nO ataque ${monster1.ataques.att1.nome} causou ${monster1.ataques.att1.dano} de dano em você.`);
      console.log();
    } else {
      personagem.health = ataqueBatalha(personagem.health, monster1.ataques.att2.dano);
      console.log(`\nO ataque ${monster1.ataques.att2.nome} causou ${monster1.ataques.att2.dano} de dano em você.`);
    }
    personagem.checkHpPersonagem();

    if (personagem.health <= 0) {
      break;
    }
    prompt("\n... vamos para o próximo round... aperte enter.");
  }

  if (personagem.health <= 0) {
    console.log(`\nA batalha foi difícil para você, mas saiba que cada derrota é um aprendizado.`);
    console.log(
      `Você foi carregado para uma floresta por um aldeão, aos cuidados de Taoistas. E toda sua vida foi recuperada.`
    );
    personagem.health = 100;
  } else {
    // Método que altera o status agindo como se fosse um Lvl Up.
    personagem.treinoUp();
    prompt(`\nAperte enter para continuar...`);
    console.log(
      `\nAo vencer a batalha você aprendeu algumas formas de masterizar seus ataques e com isso você ganha mais conhecimento de luta e domínio sobre sua própria magia.`
    );
    console.log(`\n\tSeus novos Status:`);
    console.log(
      `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
    );
    console.log(`\nOpa, achamos uma Food da Vida no corpo do Minotauro.`);
    personagem.food++;
    console.log(`O que será que essa food faz?`);
    console.log(
      `Ela recupera toda a sua vida, e você podera comer ela no momento certo. Você vai saber quando for a hora.\n`
    );
    console.log(`Agora que você descobriu que a função da food, vamos até a cidade contar o seu feito.`);
  }

  console.log(
    `\nCada batalha você gasta 50 de stamina, e se ela estiver abaixo de 25, você pode perder as forças durante a batalha. CUIDADO!`
  );
  personagem.alteraStamina(-50);

  //console.log(personagem.stamina);
  prompt("\nVamos a cidade... aperte enter");

  console.log(
    `\nChegamos a cidade grande Mago, e lembrando que sua Stamina está em ${personagem.stamina} e sua vida em ${personagem.health}Hp, você precisa descansar, pois amanhã o dia será longo, tem uma horda de Magos Negros e Black Warriors vindo a nossa cidade e precisamos estar bem descansados.\n`
  );
  console.log(
    `Você tem 2 opções de descanso:\n\t1 - Ir a um dormitório (Recupera toda a sua vida e 25 de stamina)\n\t2 - Ir para a taverna beber e descansar (Recupera toda sua stamina e 25Hp da sua vida atual) `
  );
  let descanso = prompt(`\tEscolha: `);
  while (descanso != "1" && descanso != "2") {
    console.log(`Digite 1 ou 2 apenas.`);
    descanso = prompt(`\tEscolha: `);
  }
  if (descanso == "1") {
    personagem.health = 100;
    personagem.alteraStamina(25);
    if (personagem.stamina > 100) {
      personagem.stamina = 100;
    }
  } else {
    personagem.health += 25;
    personagem.stamina = 100;
    if (personagem.health > 100) {
      personagem.health = 100;
    }
  }

  console.log(`Bom dia, Grande Mago! Descansou bem?`);
  console.log(`\n\tStatus do Personagem:\n\tVida: ${personagem.health}.\n\tStamina: ${personagem.stamina}.`);

  // IF PARA VER SE O PLAYER QUER RECUPERAR A VIDA.
  let comerFood = prompt(`\nSua vida está em ${personagem.health}Hp. Deseja comer a Food da Vida?: `);
  while (comerFood != "s" && comerFood != "sim" && comerFood != "n" && comerFood != "nao") {
    comerFood = prompt(`\nSua vida está em ${personagem.health}Hp. Deseja comer a Food da Vida?: `);
    console.log(`Digite Sim ou Não grande Mago!`);
  }
  if (comerFood == "sim" || comerFood == "s") {
    personagem.health = 100;
    console.log(`Você comeu a Food da Vida e teve sua vida revigorada.\n`);
    console.log(`\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.`);
  } else {
    console.log(`Tudo bem, vamos continuar nossa jornada.`);
  }

  prompt(`\nVamos continuar nossa jornada... aperte enter...`);

  // ### CHEGANDO A BIFURCAÇÃO ###
  console.log(
    `\nChegamos em uma bifurcação no meio do caminho, e ao olhar para esquerda, percebemos uma floresta verde e com o céu bem limpo.\nPara a direita, temos umas montanhas cheio de nuvens carregadas onde só os mais temidos ou os mais sortudos conseguem sobreviver.`
  );
  console.log(
    `Ao seguir pela floresta, vamos gastar 40 de Stamina para uma passagem mais tranquila, pelas montanhas vamos gastar 80 de stamina para uma caminhada mais árdua, mas que podemos ter algumas recompensas dos mortos pelo caminho.`
  );
  console.log(`\n E aí ${personagem.name}, por onde vamos seguir?:\n\t1- Floresta;\n\t2- Montanhas.`);
  let caminhoEscolhido = prompt(`Escolha:`);
  while (caminhoEscolhido != "1" && caminhoEscolhido != "2") {
    console.log(`Essa escolha não é válida, coragem Mago!`);
    caminhoEscolhido = prompt(`\tEscolha:`);
  }
  // ### CAMINHO 1 ESCOLHIDO ###
  if (caminhoEscolhido == "1") {
    personagem.alteraStamina(-40);
    console.log(`\nCaminhando pela floresta você foi parado por um Elfo, que parecia estar bem nervoso.`);
    console.log(`Ele chegou até você e perguntou se podia ajudar a vila dele, em troca ele te daria sua energia.`);
    console.log(
      `Você como um Mago da Luz, aceitou ajudar o Elfo, e ele começou a falar algumas frases élficas e você começou a sentir um poder a mais dentro do corpo.`
    );
    prompt(`\n... aperte enter para saber o resultado do que o Elf estava falando...`);
    personagem.treinoUp();
    console.log(
      `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
    );
    console.log(`Mais a frente você avista a aldeia e percebe algo...`);
    console.log(`\nA aldeia de Elfos estava sendo atacada por um Black Warrior.`);
    console.log(`Vamos ajudar...`);
    prompt(`Para iniciar a batalha... aperte enter.`);

    // ### INÍCIO DA BATALHA 2 CAMINHO 1 ###
    round = 1;
    while (true) {
      //console.log(round)
      console.log(` #### Você está no Round ${round} ####`);
      round = round + 1;
      // DEMONSTRAR OS STATUS, DO USER E NPC
      console.log(
        `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
      );
      console.log(
        `\n\tStatus do ${monster2.name}:\n\tVida: ${monster2.health}.\n\tAtaque ${monster2.ataques.att1.nome} causa: ${monster2.ataques.att1.dano} de dano.\n\t${monster2.ataques.att2.nome} causa: ${monster2.ataques.att2.dano} de dano`
      );
      console.log(
        `\nQual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - Ataque Corpo a corpo\n\t(2) - Bola de Fogo\n\t(3) - Chuva de Elementos`
      );
      let ataqueEscolhidoPersonagem = +prompt("\tAtaque: ");

      while (ataqueEscolhidoPersonagem != "1" && ataqueEscolhidoPersonagem != "2" && ataqueEscolhidoPersonagem != "3") {
        console.log(`Por favor, escolha um ataque válido!`);
        console.log(
          `Qual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - ${personagem.ataques.att1.nome}: ${personagem.ataques.att1.dano} \n\t(2) - ${personagem.ataques.att2.nome}: ${personagem.ataques.att2.dano}\n\t(3) - ${personagem.ataques.att3.nome}: ${personagem.ataques.att3.dano}`
        );
        ataqueEscolhidoPersonagem = prompt("\n\tR: ");
      }

      // Escolhas dos ataquesdo Mago
      if (ataqueEscolhidoPersonagem == 1) {
        // monster.health está sendo alterado pela function ataquebBatalha.
        monster2.health = ataqueBatalha(monster2.health, personagem.ataques.att1.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att1.dano} de dano.`);
        console.log();
      } else if (ataqueEscolhidoPersonagem == 2) {
        monster2.health = ataqueBatalha(monster2.health, personagem.ataques.att2.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att2.dano} de dano.`);
        console.log();
      } else if (ataqueEscolhidoPersonagem == 3) {
        monster2.health = ataqueBatalha(monster2.health, personagem.ataques.att3.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att3.dano} de dano.`);
        console.log();
      }
      monster2.checkHealthMonster2();
      if (monster2.health <= 0) {
        break;
      }

      prompt("... para ir ao ataque do seu oponente, aperte enter.");

      // ### ATAQUES DO NPC MONSTER2 ###
      let ataqueMonster2 = Math.floor(Math.random() * 2 + 1);
      if (ataqueMonster2 == 1) {
        personagem.health = ataqueBatalha(personagem.health, monster2.ataques.att1.dano);
        console.log(`\nO ataque ${monster2.ataques.att1.nome} causou ${monster2.ataques.att1.dano} de dano em você.`);
        console.log();
      } else {
        personagem.health = ataqueBatalha(personagem.health, monster2.ataques.att2.dano);
        console.log(`\nO ataque ${monster2.ataques.att2.nome} causou ${monster2.ataques.att2.dano} de dano em você.`);
      }
      personagem.checkHpPersonagem();
      if (personagem.health <= 0) {
        break;
      }
      prompt("\n... vamos para o próximo round... aperte enter.");
    }
    console.log(`\nVasculhando o corpo do Black Warrior, achamos outra Food da Vida!`);
    personagem.food++;
    console.log(`\nCom o Black Warrior abatido e Food da Vida na bolsa, podemos seguir na jornada!`);
  }
  // ### CAMINHO 2 ESCOLHIDO ###
  else {
    console.log(
      `Antes de prosseguir, você pode acampar na sua barraca mágica e recuperar toda sua stamina atualmente você tem ${personagem.stamina} de stamina.`
    );
    let acampar = prompt(`Deseja realmente acampar?: `);
    while (acampar != "s" && acampar != "sim" && acampar != "n" && acampar != "nao") {
      console.log(`Não entendi direito.`);
      acampar = prompt(`Deseja realmente acampar?: `);
    }
    if (acampar == "s" || acampar == "sim") {
      personagem.stamina = 100;
      console.log(`\nApós descansar um pouco, você está pronto para seguir.`);
    } else {
      if (personagem.stamina < 80) {
        console.log(`\nNão tem jeito, você está sem forças para essa caminhada.`);
        prompt(`Está ouvindo essa voz?... aperte enter...`);
        console.log(`\nVocê escuta uma voz: "Durma um pouco". E você pega no sono até recuperar sua stamina até 80.`);
        personagem.stamina = 80;
      }
      console.log(`\nOpa, está bem disposto para nossa caminhada.`);
    }
    console.log(`\nSua stamina está em ${personagem.stamina}.`);

    prompt(`\nVamos seguir... Aperte enter para continuar...`);

    console.log(
      `\nAo adentrar pelo caminho das montanhas, você percebe que alguns corpos estão intactos ainda, mas existem algumas auras negras ao redor deles.`
    );
    let verificar = "";
    do {
      console.log(`Você deseja verificar os corpos? Saiba que esses corpos podem estar sob efeitos de magia negra.`);
      verificar = prompt(`Vericfica?(S/N): `);
    } while (verificar != "sim" && verificar != "s" && verificar != "nao" && verificar != "n");
    // SE VERIFICAR O CORPO
    if (verificar == "s" || verificar == "sim") {
      console.log(`\nOK, vamos revirar esse corpo!`);
      console.log(`Muita coragem a sua de revirar um corpo possuído por magia negra.`);
      console.log(`Você encontrou 2 Foods da Vida, porém, a magia negra te consumiu.`);
      personagem.food += 2;
      if (personagem.food == "1") {
        console.log(
          `Agora você possui ${personagem.food} food a Magia Negra é algo desconhecido, coisas boas podem acontecer e coisas ruins também.`
        );
      } else {
        console.log(
          `Agora você possui ${personagem.food} foods a Magia Negra é algo desconhecido, coisas boas podem acontecer e coisas ruins também.`
        );
      }
    } else {
      console.log(
        `\nVocê decidiu não verificar, porém, a magia negra te puxa para o corpo e você sente que ela se alojou em você.`
      );
      console.log(`A magia negra é algo desconhecido por nós.`);
    }

    console.log(`\nPrecisamos fazer um teste mental para saber o que a Magia respingada nos trará?`);
    prompt(`\nVamos lá... aperte enter para ir ao teste e saber o que acontecerá com você.`);

    if (personagem.magiaNegra() >= 1) {
      console.log(`\nVocê sentiu um enjôo e não se sente bem para continuar.`);
      personagem.stamina = 0;
      console.log(`Sua stamina caiu repentinamente para ${personagem.stamina}.`);
      console.log(`Lembrando que para esse caminho precisamos de 80 de stamina. Você foi obrigado a descansar.`);
      let descansar = prompt(`A cada hora de descanso, você recupera 10 de stamina. Quantas horas vamos descansar?: `);
      if (descansar < 8 || descansar > 10) {
        console.log(`\nGrande Mago, você caiu em um sono profundo.`);
        console.log(`E foi obrigado a descansar 8h, recuperando 80 de stamina.`);
        personagem.stamina = 80;
      } else {
        //for para fazer o descanso durar o tempo que o user decidir descansar.
        for (let i = 0; i <= descansar; i++) {
          console.log(`\nse passaram ${i} horas, nossa stamina está em ${personagem.stamina}.`);
          personagem.alteraStamina(10);
          prompt(`Pressione enter para passar mais 1h...`);
        }
      }
    } else {
      console.log(`Você está sentindo essa forte vibração em seu corpo?`);
      personagem.alteraStatus();
      console.log(
        `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
      );
      console.log(`\nVocê ficou mais forte e isso pode te garantir vantagens em nossa jornada!`);
    }

    prompt(`\n... aperte enter...`);
    console.log(
      `\nVocê seguiu caminhando e mais pra frente, você viu um Black Mage parado com seu cajado preto encostado ao chão.`
    );

    console.log(`Estamos diante de uma nova batalha. Vamos ver se você ficou mais forte mesmo?`);

    // #### BATALHA 2 CAMINHO 2 - BLACK MAGE ####
    round = 1;
    while (true) {
      //console.log(round)
      console.log(` #### Você está no Round ${round} ####`);
      round = round + 1;
      // DEMONSTRAR OS STATUS, DO USER E NPC
      console.log(
        `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
      );
      console.log(
        `\n\tStatus do ${monster3.name}:\n\tVida: ${monster3.health}.\n\tAtaque ${monster3.ataques.att1.nome} causa: ${monster3.ataques.att1.dano} de dano.\n\t${monster3.ataques.att2.nome} causa: ${monster3.ataques.att2.dano} de dano`
      );
      console.log(
        `\nQual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - Ataque Corpo a corpo\n\t(2) - Bola de Fogo\n\t(3) - Chuva de Elementos`
      );
      let ataqueEscolhidoPersonagem = +prompt("\tAtaque: ");

      while (ataqueEscolhidoPersonagem != "1" && ataqueEscolhidoPersonagem != "2" && ataqueEscolhidoPersonagem != "3") {
        console.log(`Por favor, escolha um ataque válido!`);
        console.log(
          `Qual ataque você vai escolher para poder derrotar seu oponente?: \n\t(1) - ${personagem.ataques.att1.nome}: ${personagem.ataques.att1.dano} \n\t(2) - ${personagem.ataques.att2.nome}: ${personagem.ataques.att2.dano}\n\t(3) - ${personagem.ataques.att3.nome}: ${personagem.ataques.att3.dano}`
        );
        ataqueEscolhidoPersonagem = prompt("\n\tR: ");
      }

      // Escolhas dos ataquesdo Mago
      if (ataqueEscolhidoPersonagem == 1) {
        // monster.health está sendo alterado pela function ataquebBatalha.
        monster3.health = ataqueBatalha(monster3.health, personagem.ataques.att1.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att1.dano} de dano.`);
        console.log();
      } else if (ataqueEscolhidoPersonagem == 2) {
        monster3.health = ataqueBatalha(monster3.health, personagem.ataques.att2.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att2.dano} de dano.`);
        console.log();
      } else if (ataqueEscolhidoPersonagem == 3) {
        monster3.health = ataqueBatalha(monster3.health, personagem.ataques.att3.dano);
        console.log(`\nSeu ataque que causou ${personagem.ataques.att3.dano} de dano.`);
        console.log();
      }
      // CHECK DE VIDA DO MONSTRO
      monster3.checkHealthMonster3();
      if (monster3.health <= 0) {
        break;
      }

      prompt("... para ir ao ataque do seu oponente, aperte enter.");

      // ### ATAQUES DO NPC MONSTER1 ###
      let ataqueMonster3 = Math.floor(Math.random() * 2 + 1);
      if (ataqueMonster3 == 1) {
        personagem.health = ataqueBatalha(personagem.health, monster3.ataques.att1.dano);
        console.log(`\nO ataque ${monster3.ataques.att1.nome} causou ${monster3.ataques.att1.dano} de dano em você.`);
        console.log();
      } else {
        personagem.health = ataqueBatalha(personagem.health, monster3.ataques.att2.dano);
        console.log(`\nO ataque ${monster3.ataques.att2.nome} causou ${monster3.ataques.att2.dano} de dano em você.`);
      }
      personagem.checkHpPersonagem();

      if (personagem.health <= 0) {
        break;
      }
      prompt("\n... vamos para o próximo round... aperte enter.");
    }
    console.log(`\nVasculhando o corpo do Black Mage, achamos outra Food da Vida!`);
    personagem.food++;
    console.log(`\nCom o Black Mage abatido e Food da Vida na bolsa, podemos seguir na jornada!`);
  }
  if (personagem.health < 50) {
    console.log(`\nFoi por pouco, mas conseguimos.`);
  } else {
    console.log(`\nPassamos por essa grande batalha facilmente.`);
  }
  // BATALHA TERMINADA RETIRAR 50 DE STAMINA
  personagem.alteraStamina(-50);

  prompt(`\nVamos seguir? ... aperte enter...`);
  comerFood = prompt(`\nSua vida está em ${personagem.health}Hp. Deseja comer a Food da Vida?: `);
  while (comerFood != "s" && comerFood != "sim" && comerFood != "n" && comerFood != "nao") {
    comerFood = prompt(`\nSua vida está em ${personagem.health}Hp. Deseja comer a Food da Vida?: `);
    console.log(`Digite Sim ou Não grande Mago!`);
    prompt("\n...");
  }

  if (comerFood == "sim" || comerFood == "s") {
    personagem.health = 100;
    console.log(`Você comeu a Food da Vida e teve sua vida revigorada.\n`);
    console.log(`\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.`);
  } else {
    prompt(`Tudo bem, vamos continuar...`);
  }

  console.log(
    `\n\tSua Vida: ${personagem.health}.\n\tSua stamina: ${personagem.stamina}.\n\tSeu ataque ${personagem.ataques.att1.nome} causa: ${personagem.ataques.att1.dano} de dano \n\tSua ${personagem.ataques.att2.nome} causa: ${personagem.ataques.att2.dano} de dano.\n\tSeu ataque ${personagem.ataques.att3.nome} causa: ${personagem.ataques.att3.dano} de dano.`
  );

  console.log(`\nChegamos ao fim da nossa jornada! E você provou que realmente é um grande Mago da Luz.`);
  personagem.resetStatus();
  monster1.resetStatus();
  monster2.resetStatus();
  monster3.resetStatus();
  do {
    restart = prompt(`Deseja jogar novamente e tentar se aventurar pelos outros caminhos? (SIM/NÃO): `).toLowerCase();
  } while (restart != "sim" && restart != "nao");
}
console.log(`FIM!!! Obrigado por jogar com a Bari Tech!`);
