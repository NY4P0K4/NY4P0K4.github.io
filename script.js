function changeTheme() {
  const rootElement = document.documentElement;
  const currentTheme = rootElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
  }
}

const tema = window.location.pathname.slice(1, -1).toLowerCase();

const nats = {
  'matematica' : [['https://docs.google.com/document/d/1dzi8q8Jtgf9WkELcb_ktnXoZdaPjRA4t0UIUcXhQVKU/edit?usp=sharing', 'Quebrando a Banca', ['C5'], ['H31', 'H32']], ['https://canva.link/99qkmkowvxmjlld', 'Jogo: Kassino', ['C5'], ['H30', 'H31']]],
  'linguagens' : [['https://canva.link/0ob1jdygsqsw6u0', 'A Paixão, Segundo G.H.', ['?'], ['H4', 'H22']], ['https://wordwall.net/pt/resource/108331158/2ª-geração-do-romantismo-brasileiro', 'Game Literário', ['?'], ['H15']]],
  'humanas' : [['https://canva.link/3othh3sfqfxx90z', 'Apresentação Geopolítica', ['C1'], ['H1', 'H2', 'H3', 'H4', 'H5']], ['https://www.canva.com/design/DAHDv1aRlMk/NehFtNc3D8n7L4rDWQKsNQ', 'Neocolonialismo: Raj Britânico', ['C2'], ['H8', 'H10', 'H12']], ['https://canva.link/cmu56393aa0gbc9', 'PRAVDA: A Grande Guerra', ['C3'], ['H15', 'H16', 'H20']]],
  'naturezas' : [['av1.jpeg', 'Meme Evolucionista', ['C3'], ['H15', 'H18']], ['https://canva.link/aqp3r6b0yluvr1s', 'Guerras e Conflitos', ['C1', 'C2'], ['H1', 'H9', 'H11']], ['https://docs.google.com/document/d/1HzSLVOPeMkOP1Y9pMdw6wIFHOChm4IY-gay8iseYlQE/edit?usp=sharing', 'Disputa Elétrica', ['C1', 'C2'], ['H1', 'H7', 'H9', 'H11', 'H12']]],
  'tecnico' : [['https://canva.link/0u0xn19zejrxmo0', 'Canva: Grand Prix', ['?'], ['?']]]
};

function createAt(which) {
  const x = document.createElement('a');
  x.target = '_blank'
  x.href = nats[tema][which][0]
  x.innerHTML = `
    <button class="item">
      <p class="title">${nats[tema][which][1]}</p>
      <img src='av${which+1}.jpeg'>
      <br><sub></sub>
      <p class="hab"><strong>Competencias: ${nats[tema][which][2].join(', ')}<br>Habilidades ${nats[tema][which][3].join(', ')}</strong></p>
    </button>
  `
  return x
}

const ats = document.getElementById('atividades');

for(var i=0; i<nats[tema].length; i++)
  ats.appendChild(createAt(i));