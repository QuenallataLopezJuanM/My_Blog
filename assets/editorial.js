const bar=document.getElementById("bar"),top_=document.getElementById("top");
addEventListener("scroll",()=>{const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight);bar.style.width=(p*100)+"%";top_.classList.toggle("on",h.scrollTop>500)});
top_.onclick=()=>scrollTo({top:0,behavior:"smooth"});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".card,.timeline li,.cols>div,.contenido h2,table,.nota,.ficha,.destacado,.sobre").forEach(e=>{e.classList.add("rv");io.observe(e)});
