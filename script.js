document.documentElement.classList.add('fm');
const $=s=>document.querySelector(s);
const bg=$('#bg');
bg.onclick=()=>{const o=$('#ln').classList.toggle('open');bg.classList.toggle('x',o);bg.setAttribute('aria-expanded',o)};
$('#ln').onclick=e=>{if(e.target.tagName==='A'){$('#ln').classList.remove('open');bg.classList.remove('x')}};
const tags=['ANSYS Fluent','AutoCAD','MATLAB','Figma','VS Code'];
{const l=tags.map(t=>'<span class="sw">'+t+'</span>').join('');$('#t1').innerHTML=l+l+l+l+l+l}
function tabs(el,list,fn){el.innerHTML=list.map((t,i)=>'<button class="'+(i?'':'on')+'">'+t+'</button>').join('')+'<i class="ind"></i>';
 const bs=[...el.querySelectorAll('button')],ind=el.querySelector('.ind'),bx=el.nextElementSibling;
 const mv=b=>{ind.style.width=b.offsetWidth+'px';ind.style.height=b.offsetHeight+'px';ind.style.transform='translate('+b.offsetLeft+'px,'+b.offsetTop+'px)'};
 bs.forEach((b,i)=>b.onclick=()=>{bs.forEach(x=>x.classList.remove('on'));b.classList.add('on');mv(b);bx.classList.add('out');clearTimeout(bx._t);bx._t=setTimeout(()=>{fn(list[i]);bx.classList.remove('out')},220)});
 ind.style.transition='none';mv(bs[0]);requestAnimationFrame(()=>requestAnimationFrame(()=>ind.style.transition=''));
 const re=()=>mv(el.querySelector('.on'));addEventListener('resize',re);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(re);fn(list[0])}
const DIV=[["Modeling", [["CO", "Kristoforus Rizkiano Tembang Langit", "250934721248"], ["Anggota", "Muhammad Firdhie Andalas", "250934717540"], ["Anggota", "M. Rangga Satria Noorfando", "250934702662"], ["Anggota", "Rakha Aribawa Rahman", "230934606756"], ["Anggota", "Lutfi Ahmad Suriyana", "250934701541"]]], ["Mat Model", [["CO", "Muhammad Alfian Firmansyah", "250934724477"], ["Anggota", "Muhammad Iqbal Maulana", "250934730396"], ["Anggota", "Khalidatul Aliyah Safitri", "250934726013"], ["Anggota", "Muhamad Ferly Farnando", "250934702060"]]], ["Software", [["CO", "Fattar Davino Aulia Rahman", "250934722594"], ["Anggota", "Muhamad Supriyadi", "250934726299"], ["Anggota", "Muhammad Aryaputra Manda", "250934701411"], ["Anggota", "M. Nauval Al-Ghafary Wardoyo", "250934723431"], ["Anggota", "Haudh Al Maa'uun", "250934721118"]]], ["Electrical", [["CO", "Muhammad Nur Faizin", "250934703028"], ["Anggota", "Muhammad Farrel Caesar", "250934702395"], ["Anggota", "Mokhamad Rayhan Faturahman", "250934726358"], ["Anggota", "Dava Maulana Yudha", "230531601107"], ["Anggota", "Iltizamul Haqqi", "230934606469"], ["Anggota", "Mexcelino Perwira Dirganesia", "250934722234"], ["Anggota", "Mochammad Ardiansyah Tri Wicaksono", "250934700849"]]], ["Mekanikal", [["CO", "M. Salman Alfarizi Ramadani", "250934722594"], ["Anggota", "Mukhamad Nur Alfan", "230934605477"], ["Anggota", "Mohammad Miftah Yusron Hana'i", "250934726021"], ["Anggota", "Febrian Patria Yoni", "250934720252"], ["Anggota", "Muhammad Fadil", "250934730333"], ["Anggota", "Mohamad Rizky Fadilah", "250934720260"], ["Anggota", "Mohammad Hisyam Rifai", "250934730343"]]], ["Perlengkapan", [["CO", "Handhika Hidayatullah", "250934700440"], ["Anggota", "Loudy Firza Aulia", "250934723692"], ["Anggota", "Keihan Daafa Parsya", "250934722195"], ["Anggota", "Girendra Hangestubrata", "250934721009"], ["Anggota", "Jalalludin Satriya Nayaka", "250934703508"]]], ["PDD", [["Anggota", "Legison Satria Manik Allo", "250934730083"], ["Anggota", "Maritza Aprilia Putri", "250934725052"], ["CO", "Mohammad Miftah Yusron Hana'i", "250934726021"]]]];
const PENG=[["Ketua Tim", "Mochammad Ardiansyah Tri Wicaksono", "250934700849"], ["Sekretaris Tim 1", "Mohammad Miftah Yusron Hana'i", "250934726021"], ["Sekretaris Tim 2", "Mohamad Supriyadi", "250934726299"], ["Bendahara Tim 1", "Khalidatul Aliyah Safitri", "250934726013"], ["Bendahara Tim 2", "Loudy Firza Aulia", "250934723692"], ["Bendahara Tim 3", "Maritza Aprilia Putri", "250934725052"]];
const ap={};
DIV.forEach(([d,m])=>m.forEach(([p,n,i])=>{(ap[i]=ap[i]||[]).push({d:d,n:n,p:p})}));
PENG.forEach(([r,n,i])=>{(ap[i]=ap[i]||[]).push({r:r,n:n})});
const lab=x=>(x.p==='CO'?'CO ':'Anggota ')+x.d;
const ini=n=>n.replace(/[^A-Za-z ]/g,'').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
const mk=(n,i,main,alts,k)=>'<div class="card" style="animation-delay:'+k*70+'ms"><div class="av">'+ini(n)+'</div><div><b>'+n+'</b><small>'+i+'</small><span class="role">'+main+'</span>'+alts.map(x=>'<span class="role alt">'+x+'</span>').join('')+'</div></div>';
const orgFn=t=>{
 let h;
 if(t==='Pengurus'){
  h='<p class="tl">Struktur Tim Proyek Mekanika Fluida<small>'+PENG.length+' orang</small></p>'+PENG.map(([r,n,i],k)=>mk(n,i,r,(ap[i]||[]).filter(x=>x.d).map(lab),k)).join('');
 }else{
  const d=DIV.find(x=>x[0]===t);
  h='<p class="tl">Divisi '+t+'<small>'+d[1].length+' orang</small></p>'+d[1].map(([p,n,i],k)=>mk(n,i,p,(ap[i]||[]).filter(x=>x.r||(x.n===n&&x.d!==t)).map(x=>x.r||lab(x)),k)).join('');
 }
 $('#tm').innerHTML=h};
const ORG=['Pengurus'].concat(DIV.map(d=>d[0])),tb=$('#tb');
const cnt=t=>t==='Pengurus'?PENG.length:DIV.find(x=>x[0]===t)[1].length;
tb.innerHTML=ORG.map((t,i)=>'<button role="tab" class="'+(i?'':'on')+'" data-t="'+t+'"><span>'+t+'</span><em>'+cnt(t)+'</em></button>').join('');
$('#ddm').innerHTML=ORG.map(t=>'<a href="#divisi" data-d="'+t+'">'+t+'</a>').join('');
function pick(t){[...tb.children].forEach(b=>b.classList.toggle('on',b.dataset.t===t));const b=tb.querySelector('.on');if(innerWidth<=820)tb.scrollTo({left:b.offsetLeft-22,behavior:'smooth'});const bx=$('#tm');bx.classList.add('out');clearTimeout(bx._t);bx._t=setTimeout(()=>{orgFn(t);bx.classList.remove('out')},180)}
tb.onclick=e=>{const b=e.target.closest('button');if(b)pick(b.dataset.t)};
document.querySelectorAll('[data-d]').forEach(a=>a.addEventListener('click',()=>pick(a.dataset.d)));
orgFn('Pengurus');
const col={'3D CAD':'linear-gradient(135deg,#377A98,#140951)','Simulasi CFD':'radial-gradient(circle at 40% 50%,#FF4D5A,#FFB84D 24%,#22C7A9 55%,#140951)','Foto asli':'linear-gradient(160deg,#5FD39A,#0A3B3A)'};
const items=[['3D CAD','Runner turbin, sudut isometrik'],['Simulasi CFD','Kontur kecepatan air di dalam bak'],['Foto asli','Alat saat uji coba'],['3D CAD','Tampak atas bak pusaran'],['Simulasi CFD','Streamline aliran masuk'],['Foto asli','Proses perakitan']];
let cur=[],ix=0;
tabs($('#gt'),['Semua','3D CAD','Simulasi CFD','Foto asli'],f=>{cur=items.filter(i=>f==='Semua'||i[0]===f);
 $('#gd').innerHTML=cur.map((it,i)=>'<button class="pic" data-i="'+i+'" style="background:'+col[it[0]]+';animation-delay:'+i*60+'ms">'+it[0]+'</button>').join('')});
let lst=[];
$('#gd').onclick=e=>{const b=e.target.closest('.pic');if(b)show(+b.dataset.i,cur)};
function show(i,l){lst=l;ix=(i+lst.length)%lst.length;const it=lst[ix],p=$('#lp');
 if(it.img){p.className='pic im';p.style.background='#fff';p.innerHTML='<img src="'+it.img+'" alt="'+it.alt+'">';$('#lc').textContent=it.cap}
 else{p.className='pic';p.style.background=col[it[0]];p.textContent=it[0];$('#lc').textContent=it[1]}
 $('#ct').textContent=(ix+1)+' / '+lst.length;$('#lb').classList.add('open')}
const close=()=>$('#lb').classList.remove('open');
$('#cl').onclick=close;$('#pv').onclick=()=>show(ix-1,lst);$('#nx').onclick=()=>show(ix+1,lst);
$('#lb').onclick=e=>{if(e.target.id==='lb')close()};
document.onkeydown=e=>{if(!$('#lb').classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(ix-1,lst);if(e.key==='ArrowRight')show(ix+1,lst)};
const SRC=[...document.querySelectorAll('.srcb')].map(b=>{const m=b.querySelector('img');return{img:m.src,alt:m.alt,cap:b.dataset.cap}});
document.querySelectorAll('.srcb').forEach((b,k)=>b.onclick=()=>show(k,SRC));
document.documentElement.classList.add('js');
let sc=0;const rvs=[...document.querySelectorAll('h2,.lead,.step,.tabs,#tj,.ctlbar,footer .cols')];
rvs.forEach(e=>{e.classList.add('rv');if(e.classList.contains('step'))e.style.transitionDelay=(sc++)*120+'ms'});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});rvs.forEach(e=>io.observe(e));
const pg=$('#pg');addEventListener('scroll',()=>{const h=document.documentElement;pg.style.transform='scaleX('+h.scrollTop/((h.scrollHeight-h.clientHeight)||1)+')'},{passive:true});
const lk=[...document.querySelectorAll('.links>a,.dd>a')];
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)lk.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['top','tentang','divisi','dokumentasi'].forEach(id=>so.observe(document.getElementById(id)));

$('#tm').addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.transform='perspective(600px) rotateX('+(-(e.clientY-r.top-r.height/2)/r.height*8)+'deg) rotateY('+((e.clientX-r.left-r.width/2)/r.width*8)+'deg)'});
$('#tm').addEventListener('pointerout',e=>{const c=e.target.closest('.card');if(c)c.style.transform=''});
const still=()=>matchMedia('(prefers-reduced-motion:reduce)').matches&&!document.documentElement.classList.contains('fm');
const wp=document.createElement('div');wp.style.cssText='position:fixed;left:0;right:0;top:0;height:calc(100% + 160px);transform:translateY(100%);z-index:90;pointer-events:none;display:flex;flex-direction:column';
const wv1='<svg viewBox="0 0 1200 80" preserveAspectRatio="none" style="display:block;width:100%;height:80px"><path d="M0 40C150 0 300 0 450 40s300 40 450 0 200-20 300 0V80H0z" fill="#244A80"/></svg>';
wp.innerHTML=wv1+'<div style="flex:1;background:#244A80"></div>'+wv1.replace('style="display:block','style="transform:scaleY(-1);display:block');document.body.appendChild(wp);
const ez='cubic-bezier(.7,0,.3,1)';
function go(t){const a=wp.animate([{transform:'translateY(100%)'},{transform:'translateY(-80px)'}],{duration:500,easing:ez,fill:'forwards'});
 a.finished.then(()=>{t.scrollIntoView({behavior:'instant'});return wp.animate([{transform:'translateY(-80px)'},{transform:'translateY(-100%)'}],{duration:550,easing:ez,fill:'forwards'}).finished}).then(()=>wp.getAnimations().forEach(x=>x.cancel()))}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();if(still()||wp.getAnimations().length)t.scrollIntoView();else go(t)});
const sw=[...document.querySelectorAll('.wv svg')],row=$('.hero .row'),nv=document.querySelector('nav');
addEventListener('scroll',()=>{const y=scrollY;nv.classList.toggle('sc',y>20);if(still())return;sw.forEach((s,i)=>s.style.translate=Math.sin(y/170+i*1.7)*30+'px 0');row.style.translate='0 '+y*-.06+'px'},{passive:true});
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n;setTimeout(()=>{const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)},1000)});
$('.hero').addEventListener('pointerdown',e=>{if(e.target.closest('a'))return;const r=e.currentTarget.getBoundingClientRect(),d=document.createElement('i');d.className='rip';d.style.left=e.clientX-r.left+'px';d.style.top=e.clientY-r.top+'px';e.currentTarget.appendChild(d);setTimeout(()=>d.remove(),950)});
const sp=$('#sp');document.addEventListener('mousemove',e=>{sp.style.transform='translate('+(e.clientX+10)+'px,'+(e.clientY+10)+'px)'});

const ABT=['Prinsip kerja turbin vortex','Mengapa menggunakan mikrohidro','Cara kerjanya'],abN=$('#abNav'),abP=$('#abPanel');
abN.innerHTML=ABT.map((t,i)=>'<button role="tab" class="'+(i?'':'on')+'" data-i="'+i+'"><span>'+t+'</span><em>0'+(i+1)+'</em></button>').join('');
$('#ddm0').innerHTML=ABT.map((t,i)=>'<a href="#tentang" data-a="'+i+'">'+t+'</a>').join('');
const abFn=i=>{abP.innerHTML='<p class="tl"><small>0'+(i+1)+' / 03</small>'+ABT[i]+'</p><div class="empty">Konten menyusul</div>'};
function pickA(i){[...abN.children].forEach((b,k)=>b.classList.toggle('on',k===i));if(innerWidth<=820)abN.scrollTo({left:abN.children[i].offsetLeft-22,behavior:'smooth'});abP.classList.add('out');clearTimeout(abP._t);abP._t=setTimeout(()=>{abFn(i);abP.classList.remove('out')},180)}
abN.onclick=e=>{const b=e.target.closest('button');if(b)pickA(+b.dataset.i)};
document.querySelectorAll('[data-a]').forEach(a=>a.addEventListener('click',()=>pickA(+a.dataset.a)));
abFn(0);

(function(){const cv=$('#flow');if(!cv)return;const ctx=cv.getContext('2d'),hero=cv.parentElement;
let W,H,dx,cols,rows,AC=[],mx=-1e4,my=-1e4,run=true;const dy=26,t0=performance.now();
const sm=(a,b,x)=>{x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)};
const pk=n=>({i:Math.floor(Math.random()*cols),j:Math.floor(Math.random()*rows),b:n,l:2200+Math.random()*2600});
function size(){const d=Math.min(devicePixelRatio||1,2);W=hero.clientWidth;H=hero.clientHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);dx=W<700?30:42;cols=Math.ceil(W/dx)+4;rows=Math.ceil(H/dy)+2;AC=[];draw(performance.now())}
function draw(n){const t=(n-t0)/1000;ctx.clearRect(0,0,W,H);
 if(!AC.length)for(let k=0;k<Math.round(cols*rows/110);k++)AC.push(pk(n-Math.random()*3000));
 const am={};AC.forEach((a,k)=>{if(n>a.b+a.l){a=AC[k]=pk(n)}am[a.i+'_'+a.j]=Math.sin(Math.PI*Math.min(1,(n-a.b)/a.l))});
 for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){
  const bx=(i-2)*dx,by=j*dy,ph=by*.0062-t*.55+bx*.0021;
  let x=bx+30*Math.sin(ph)+12*Math.sin(by*.013+bx*.004-t*.9),y=by+5*Math.sin(bx*.01+t*.8);
  const px=x-mx,py=y-my,d=Math.hypot(px,py);if(d<150){const f=Math.pow(1-d/150,2)*34;x+=px/(d||1)*f;y+=py/(d||1)*f*.5}
  const c=.5+.5*Math.sin(ph+1.2),fy=y/H,al=sm(0,.16,fy)*(1-.88*sm(.58,.95,fy)),a=am[i+'_'+j];
  if(a>.02){ctx.fillStyle='rgba(169,214,230,'+(Math.min(1,.15+a*.95)*Math.max(.25,al*1.3)).toFixed(3)+')';ctx.fillRect(x-1.5,y-9,3,18)}
  else{ctx.fillStyle='rgba('+(55+114*c|0)+','+(122+92*c|0)+','+(152+78*c|0)+','+(al*(.28+.6*c)).toFixed(3)+')';ctx.fillRect(x-1,y-6,2,12)}}}
function loop(n){if(run&&!still())draw(n);requestAnimationFrame(loop)}
size();addEventListener('resize',size);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(size);
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
hero.addEventListener('pointerleave',()=>{mx=my=-1e4});
if(window.IntersectionObserver)new IntersectionObserver(e=>{run=e[0].isIntersecting}).observe(hero);
requestAnimationFrame(loop)})();
