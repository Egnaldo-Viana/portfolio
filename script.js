// funcao para navegacao mobile

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const iconMenu = document.querySelector('.hamburger-icon');
iconMenu.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu-links a');
menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// botao download do curriculo
document.getElementById('btn-download').addEventListener('click', function () {
  window.open('img/curriculo-front-end.pdf', '_blank');
});

// botao que leva até os contatos
document
  .querySelector('#scroll-contato')
  .addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#contact');
  });

// icones do perfil
document
  .querySelector('.icone-linkedin')
  .addEventListener('click', function () {
    location.href = 'https://www.linkedin.com/in/egnaldo-viana/';
  });

document.querySelector('.icone-github').addEventListener('click', function () {
  location.href = 'https://github.com/Egnaldo-Viana';
});

// funcoes das setas
document.querySelectorAll('[data-target]').forEach(function (seta) {
  seta.addEventListener('click', function () {
    const targetId = seta.getAttribute('data-target');
    window.location.href = targetId;
  });
});

// projetos
const projetos = [
  {
    id: 'bikcraft',
    git: 'https://github.com/Egnaldo-Viana/bikcraft',
    live: 'https://egnaldo-viana.github.io/bikcraft/',
  },
  {
    id: 'animais',
    git: 'https://github.com/Egnaldo-Viana/animais',
    live: 'https://egnaldo-viana.github.io/animais/',
  },
  {
    id: 'wildbeast',
    git: 'https://github.com/Egnaldo-Viana/Wildbeast',
    live: 'https://egnaldo-viana.github.io/Wildbeast/',
  },
  {
    id: 'flexblog',
    git: 'https://github.com/Egnaldo-Viana/Flexblog',
    live: 'https://egnaldo-viana.github.io/Flexblog/',
  },
];

projetos.forEach((projeto) => {
  document
    .querySelector(`#git-${projeto.id}`)
    .addEventListener('click', () => (location.href = projeto.git));

  document
    .querySelector(`#${projeto.id}`)
    .addEventListener('click', () => (location.href = projeto.live));
});
