export default function imageViewer(){let e=!1,t=1,n=!1,s=0,a=0,i=0,r=0;const o=document.querySelector(".image-viewer-container"),c=o.querySelector("img"),l=e=>{document.body.style.overflow=e?"hidden":"auto",e?o.classList.add("active"):o.classList.remove("active")};let d=0;const m=e=>{n&&e.stopPropagation(),n=!1};c.addEventListener("wheel",e=>{e.preventDefault();const n=c.getBoundingClientRect(),s=e.clientX-n.left,a=e.clientY-n.top,o=s-n.width/2,l=a-n.height/2,d=t;t+=-.001*e.deltaY,d<(t=Math.min(Math.max(.8,t),4))?(i-=o*(t-d),r-=l*(t-d)):(i=0,r=0),c.style.transform=`translate(${i}px, ${r}px) scale(${t})`},{passive:!1}),c.addEventListener("mousedown",e=>{e.preventDefault(),n=!0,s=e.clientX,a=e.clientY},{passive:!1}),c.addEventListener("mousemove",e=>{if(n){const n=(new Date).getTime();if(n-d<100)return;d=n;const o=e.clientX-s,l=e.clientY-a;i+=o,r+=l,s=e.clientX,a=e.clientY,c.style.transform=`translate(${i}px, ${r}px) scale(${t})`}},{passive:!1}),c.addEventListener("mouseup",m,{passive:!1}),c.addEventListener("mouseleave",m,{passive:!1}),o.addEventListener("click",n=>{n.target===n.currentTarget&&(l(e=!1),t=1,i=0,r=0,c.style.transform=`translate(${i}px, ${r}px) scale(${t})`)});const v=document.querySelectorAll(".markdown-body img, .masonry-item img, #shuoshuo-content img"),u=n=>{"Escape"===n.key&&e&&(l(e=!1),t=1,i=0,r=0,c.style.transform=`translate(${i}px, ${r}px) scale(${t})`,document.removeEventListener("keydown",u))};v.forEach(t=>{t.addEventListener("click",()=>{l(e=!0),c.src=t.src,document.addEventListener("keydown",u)})}),!v.length&&o&&o.parentNode.removeChild(o)};