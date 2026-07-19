
document.querySelectorAll('.button-ripple').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const r=document.createElement('span');
    const d=Math.max(btn.clientWidth,btn.clientHeight);
    r.style.cssText=`
      position:absolute;
      width:${d}px;
      height:${d}px;
      border-radius:50%;
      left:${e.offsetX-d/2}px;
      top:${e.offsetY-d/2}px;
      background:rgba(255,255,255,.25);
      transform:scale(0);
      animation:ripple .6s ease-out;
      pointer-events:none;`;
    btn.appendChild(r);
    setTimeout(()=>r.remove(),600);
  });
});

const style=document.createElement('style');
style.textContent='@keyframes ripple{to{transform:scale(4);opacity:0;}}';
document.head.appendChild(style);
