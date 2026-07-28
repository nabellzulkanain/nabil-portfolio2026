
const body=document.body;
const themeBtn=document.querySelector('.theme-btn');
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');

if(localStorage.getItem('theme')==='dark'){body.classList.add('dark');themeBtn.textContent='☀';}
themeBtn.addEventListener('click',()=>{body.classList.toggle('dark');const dark=body.classList.contains('dark');themeBtn.textContent=dark?'☀':'☾';localStorage.setItem('theme',dark?'dark':'light');});
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
