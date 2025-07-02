let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark'); // troca ícone para X
  navbar.classList.toggle('active');     // mostra/esconde menu
};

  const projetos = document.querySelectorAll('.portifolio-box');
  const btnMais = document.getElementById('ver-mais');
  const btnMenos = document.getElementById('ver-menos');

  let mostrando = 3;

  function atualizarProjetos() {
    projetos.forEach((projeto, index) => {
      if (index < mostrando) {
        projeto.classList.add('mostrar');
      } else {
        projeto.classList.remove('mostrar');
      }
    });

    btnMais.style.display = mostrando >= projetos.length ? 'none' : 'inline-block';
    btnMenos.style.display = mostrando > 3 ? 'inline-block' : 'none';
  }

  atualizarProjetos();

  btnMais.onclick = () => {
    mostrando += 3;
    atualizarProjetos();
  };

  btnMenos.onclick = () => {
    mostrando = 3;
    atualizarProjetos();
  };

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,contact form',{origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', { 
    strings: ['Analista' , 'Desenvolverdor de Sistema'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});