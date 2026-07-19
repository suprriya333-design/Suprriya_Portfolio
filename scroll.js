const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("fade-up");
    }
  });
},{threshold:0.15});

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-animate]").forEach(el=>observer.observe(el));
});
