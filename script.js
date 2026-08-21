function changeTheme() {
  const rootElement = document.documentElement;
  const currentTheme = rootElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootElement.setAttribute("data-theme", "light");
  } else {
    rootElement.setAttribute("data-theme", "dark");
  }
}

const tema = window.location.pathname.slice(1, -1).toLowerCase();

const nats1t = {
  trimestre: 1,
  matematica: [
    [
      "https://docs.google.com/document/d/1dzi8q8Jtgf9WkELcb_ktnXoZdaPjRA4t0UIUcXhQVKU/edit?usp=sharing",
      "Quebrando a Banca",
      ["C5"],
      ["H31", "H32"],
    ],
    [
      "https://canva.link/99qkmkowvxmjlld",
      "Jogo: Kassino",
      ["C5"],
      ["H30", "H31"],
    ],
  ],
  linguagens: [
    [
      "https://canva.link/0ob1jdygsqsw6u0",
      "A Paixão, Segundo G.H.",
      ["?"],
      ["H4", "H22"],
    ],
    [
      "https://wordwall.net/pt/resource/108331158/2ª-geração-do-romantismo-brasileiro",
      "Game Literário",
      ["?"],
      ["H15"],
    ],
  ],
  humanas: [
    [
      "https://canva.link/3othh3sfqfxx90z",
      "Apresentação Geopolítica",
      ["C1"],
      ["H1", "H2", "H3", "H4", "H5"],
    ],
    [
      "https://www.canva.com/design/DAHDv1aRlMk/NehFtNc3D8n7L4rDWQKsNQ",
      "Neocolonialismo: Raj Britânico",
      ["C2"],
      ["H8", "H10", "H12"],
    ],
    [
      "https://canva.link/cmu56393aa0gbc9",
      "PRAVDA: A Grande Guerra",
      ["C3"],
      ["H15", "H16", "H20"],
    ],
  ],
  natureza: [
    ["av1.jpeg", "Meme Evolucionista", ["C3"], ["H15", "H18"]],
    [
      "https://canva.link/aqp3r6b0yluvr1s",
      "Guerras e Conflitos",
      ["C1", "C2"],
      ["H1", "H9", "H11"],
    ],
    [
      "https://docs.google.com/document/d/1HzSLVOPeMkOP1Y9pMdw6wIFHOChm4IY-gay8iseYlQE/edit?usp=sharing",
      "Disputa Elétrica",
      ["C1", "C2"],
      ["H1", "H7", "H9", "H11", "H12"],
    ],
  ],
  tecnico: [
    ["https://canva.link/0u0xn19zejrxmo0", "Canva: Grand Prix", ["?"], ["?"]],
  ],
};

const nats2t = {
  trimestre: 2,
  matematica: [
    ["NE", "AV1<br><b>(Não Entregue)</b>", ["C4"], ["H27", "H28", "H29"]],
  ],
  linguagens: [
    [
      "https://docs.google.com/document/d/1QY_MD3D7zaTeSRA6cwMVGoUklL6TUiVnUN6mgfr8FKk/edit?usp=sharing",
      "Roteiro - Manifesto",
      ["?"],
      ["H3, H24"],
    ],
    [
      "https://docs.google.com/document/d/1rW5ou6zEZDL9qfQv0zVdiPjkPQ2SefWsI7XE2fvDjKo/edit?usp=sharing",
      "Atividade Portfolio Inglês",
      ["?"],
      ["H25"],
    ],
    [
      "NE",
      "Redação RED1000<br><b>(Não Entregue)</b>",
      ["?"],
      ["H22"],
    ],
  ],
  humanas: [
    [
      "https://canva.link/a32dkhkv45fvbo9",
      "Cinema e Totalitarismo",
      ["?"],
      ["H10", "H22", "H26"],
    ],
    [
      "https://canva.link/qil2w3rpn6jvg6l",
      "Dossiê Histórico - WW2",
      ["?"],
      ["?"],
    ],
    [
      "https://drive.google.com/file/d/1t-4hIUkempvgJlgy8MD6VhklGC2GJ9Ok/view?usp=sharing",
      "O Holocausto",
      ["C2, C4"],
      ["H10", "H22", "H26", "H27"],
    ],
  ],
  natureza: [
    [
      "NE",
      "Fotos Mural<br><b>(Não Entregue)</b>",
      ["C1", "C2"],
      ["H1", "H9", "H11"],
    ],
    [
      "https://canva.link/hn7azqh9jvbds61",
      "Apresentação sobre Estequiometria e Industria",
      ["C2"],
      ["H7", "H9", "H10"],
    ],
    [
      "NE",
      "Eletricidade e o corpo humano",
      ["C1", "C2", "C4"],
      ["H3", "H4", "H12", "H23"],
    ],
  ],
  tecnico: [
    ["https://github.com/sessentaeseis/RinhaSenai2026FullStack", "BP - Promotora de Créditos", ["?"], ["H2, H3, H4, H5"]],    
    ["https://drive.google.com/file/d/1Fy64ELH4ApOw5emn-htSPtotyee0Nsym/view?usp=sharing", "IOT: LED a base de limão", ["?"], ["H1, H4, H6"]],
  ],
};

function createAt(which, nat) {
  const x = document.createElement("a");
  x.target = "_blank";
  if (nat[tema][which][0] !== "NE") x.href = nat[tema][which][0];
  x.innerHTML = `
    <button class="item">
      <p class="title">${nat[tema][which][1]}</p>
      <img src='av${which + 1}${nat["trimestre"]}.jpeg'>
      <br><sub></sub>
      <p class="hab">Competencias: <strong>${nat[tema][which][2].join(", ")}</strong><br>Habilidades: <strong>${nat[tema][which][3].join(", ")}</strong></p>
    </button>
  `;
  return x;
}

const ats1 = document.getElementById("atividades1");

for (var i = 0; i < nats1t[tema].length; i++)
  ats1.appendChild(createAt(i, nats1t));

const ats2 = document.getElementById("atividades2");

for (var i = 0; i < nats2t[tema].length; i++)
  ats2.appendChild(createAt(i, nats2t));
