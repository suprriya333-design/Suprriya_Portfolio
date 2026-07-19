
document.querySelectorAll('img[data-src]').forEach(img=>{
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      img.src=img.dataset.src;
      img.onload=()=>img.classList.add('loaded');
      io.unobserve(img);
    });
  });
  io.observe(img);
});
