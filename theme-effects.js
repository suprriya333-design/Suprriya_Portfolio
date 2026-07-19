
const layers=document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  layers.forEach(el=>{
    const s=parseFloat(el.dataset.parallax||0.2);
    el.style.transform=`translateY(${y*s}px)`;
  });
});

const toggle=document.querySelector('.theme-toggle');
if(toggle){
  toggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
  });
}
