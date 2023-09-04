export default function comecoScroll(){
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