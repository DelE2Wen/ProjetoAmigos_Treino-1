function comecoScroll(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((e)=>{
    e.addEventListener('click', pegarLink);
  });

  function pegarLink(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior:'smooth',
      block: 'start',
    });

  }
}
comecoScroll();

function animandoScroll(){
  const elementos = document.querySelectorAll('[data-scroll]');

  const tamanhodaTela = window.innerHeight * 0.56;

  function surgeScroll(){
    elementos.forEach((e)=>{
      const pegarTop = e.getBoundingClientRect().top;
      const visibilidadeTela = (pegarTop - tamanhodaTela) < 0;
      if(visibilidadeTela){
        e.classList.add('animar');
      }else if(e.classList.contains('animar')){
        e.classList.remove('animar');
      }
    })
  }
  window.addEventListener('scroll', surgeScroll);
}
animandoScroll();

function numerosAmigos(){
  function numerosanimados(){
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((e)=>{
      const selecao = Number(e.innerText);
      let i = 0;
      const temporizador = setInterval(()=>{
        i = Math.floor(i + (selecao/100));
        e.innerText = i;
        if(i>selecao){
          clearInterval(temporizador)
          e.innerText = selecao;
        }
      }, 50 * Math.random())
    })
  }
  function mutacao(mutou){
    if(mutou[0].target.classList.contains('animar')){
      observer.disconnect();
      numerosanimados();
    }
  }
  const targetObservado = document.querySelector('.numero');
  const observer = new MutationObserver(mutacao)
  observer.observe(targetObservado, {attributes: true})
}
numerosAmigos();