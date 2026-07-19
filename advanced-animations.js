
document.querySelectorAll('.reveal').forEach(el=>{
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.classList.add('visible');
    });
  },{threshold:.2});
  io.observe(el);
});

document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/8;
    const y=(e.clientY-r.top-r.height/2)/8;
    btn.style.transform=`translate(${x}px,${y}px)`;
  });
  btn.addEventListener('mouseleave',()=>btn.style.transform='translate(0,0)');
});
