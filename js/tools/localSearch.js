Global.initLocalSearch=(()=>{let e=Global.hexo_config.path;if(!e)return void console.warn("`hexo-generator-searchdb` plugin is not installed!");let t,o=!1,n=!0;0===e.length?e="search.xml":e.endsWith("json")&&(n=!1);const r=document.querySelector(".search-input"),l=document.getElementById("search-result"),s=(e,t,o)=>{let n=e.length;if(0===n)return[];let r=0,l=[],s=[];for(o||(t=t.toLowerCase(),e=e.toLowerCase());(l=t.indexOf(e,r))>-1;)s.push({position:l,word:e}),r=l+n;return s},i=(e,t,o,n)=>{let r=o[o.length-1],{position:l,word:s}=r,i=[],a=0;for(;l+s.length<=t&&0!==o.length;){s===n&&a++,i.push({position:l,length:s.length});const e=l+s.length;o.pop();for(let t=o.length-1;t>=0&&(l=(r=o[t]).position,s=r.word,!(e<=l));t--)o.pop()}return{hits:i,start:e,end:t,searchTextCount:a}},a=(e,t)=>{let o="",n=t.start;return t.hits.forEach(t=>{o+=e.substring(n,t.position);let r=t.position+t.length;o+=`<b class="search-keyword">${e.substring(t.position,r)}</b>`,n=r}),o+=e.substring(n,t.end)},c=()=>{if(!o)return;let e=r.value.trim().toLowerCase(),n=e.split(/[-\s]+/);n.length>1&&n.push(e);let c=[];if(e.length>0&&t.forEach(({title:t,content:o,url:r})=>{let l=t.toLowerCase(),h=o.toLowerCase(),u=[],p=[],d=0;if(n.forEach(e=>{u=u.concat(s(e,l,!1)),p=p.concat(s(e,h,!1))}),u.length>0||p.length>0){let n=u.length+p.length;[u,p].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let l=[];if(0!==u.length){let o=i(0,t.length,u,e);d+=o.searchTextCountInSlice,l.push(o)}let s=[];for(;0!==p.length;){let t=p[p.length-1],{position:n,word:r}=t,l=n-20,a=n+80;l<0&&(l=0),a<n+r.length&&(a=n+r.length),a>o.length&&(a=o.length);let c=i(l,a,p,e);d+=c.searchTextCountInSlice,s.push(c)}s.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);let h=parseInt(Global.theme_config.navbar.search.top_n_per_article?Global.theme_config.navbar.search.top_n_per_article:1,10);h>=0&&(s=s.slice(0,h));let g="";0!==l.length?g+=`<li><a href="${r}" class="search-result-title">${a(t,l[0])}</a>`:g+=`<li><a href="${r}" class="search-result-title">${t}</a>`,s.forEach(e=>{g+=`<a href="${r}"><p class="search-result">${a(o,e)}...</p></a>`}),g+="</li>",c.push({item:g,id:c.length,hitCount:n,searchTextCount:d})}}),1===n.length&&""===n[0])l.innerHTML='<div id="no-result"><i class="fa-solid fa-magnifying-glass fa-5x"></i></div>';else if(0===c.length)l.innerHTML='<div id="no-result"><i class="fa-solid fa-box-open fa-5x"></i></div>';else{c.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let e='<ul class="search-result-list">';c.forEach(t=>{e+=t.item}),e+="</ul>",l.innerHTML=e,window.pjax&&window.pjax.refresh(l)}},h=()=>{fetch(Global.hexo_config.root+e).then(e=>e.text()).then(e=>{o=!0,t=(t=n?[...(new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent})):JSON.parse(e)).filter(e=>e.title).map(e=>(e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e));const r=document.querySelector("#no-result");r&&(r.innerHTML='<i class="fa-solid fa-magnifying-glass fa-5x"></i>')})};Global.theme_config.navbar.search.preload&&h(),r&&r.addEventListener("input",c),document.querySelectorAll(".search-popup-trigger").forEach(e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").classList.add("active"),setTimeout(()=>r.focus(),500),o||h()})});const u=()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").classList.remove("active")};document.querySelector(".search-pop-overlay").addEventListener("click",e=>{e.target===document.querySelector(".search-pop-overlay")&&u()}),document.querySelector(".search-input-field-pre").addEventListener("click",()=>{r.value="",r.focus(),c()}),document.querySelector(".popup-btn-close").addEventListener("click",u);try{swup.hooks.on("page:view",e=>{u()})}catch(e){}window.addEventListener("keyup",e=>{"Escape"===e.key&&u()})});