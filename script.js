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
const TEAM_LEADERS=[
 {division:'Modeling',folder:'modeling',leader:'Kristoforus Rizkiano Tembang Langit',description:'Draf singkat: pemodelan bentuk dan perilaku aliran air untuk membantu mengevaluasi rancangan turbin vortex.',members:['Muhammad Firdhie Andalas','M. Rangga Satria Noorfando','Rakha Aribawa Rahman','Lutfi Ahmad Suriyana']},
 {division:'Mat Model',folder:'mat-model',leader:'Muhammad Alfian Firmansyah',description:'Draf singkat: kajian material dan model komponen yang digunakan pada proyek Vortex Hydro.',members:['Muhammad Iqbal Maulana','Khalidatul Aliyah Safitri','Muhamad Ferly Farnando']},
 {division:'Software',folder:'software',leader:'Fattar Davino Aulia Rahman',description:'Draf singkat: pengembangan dan pengelolaan kebutuhan perangkat lunak untuk mendukung proyek Vortex Hydro.',members:['Muhamad Supriyadi','Muhammad Aryaputra Manda','M. Nauval Al-Ghafary Wardoyo',"Haudh Al Maa'uun"]},
 {division:'Electrical',folder:'electrical',leader:'Muhammad Nur Faizin',description:'Draf singkat: dukungan sistem dan komponen kelistrikan untuk kebutuhan proyek Vortex Hydro.',members:['Muhammad Farrel Caesar','Mokhamad Rayhan Faturahman','Dava Maulana Yudha','Iltizamul Haqqi','Mexcelino Perwira Dirganesia','Mochammad Ardiansyah Tri Wicaksono']},
 {division:'Mekanikal',folder:'mekanikal',leader:'M. Salman Alfarizi Ramadani',description:'Draf singkat: rancangan mekanis dan komponen turbin vortex dalam proyek Vortex Hydro.',members:['Mukhamad Nur Alfan',"Mohammad Miftah Yusron Hana'i",'Febrian Patria Yoni','Muhammad Fadil','Mohamad Rizky Fadilah','Mohammad Hisyam Rifai']},
 {division:'Perlengkapan',folder:'perlengkapan',leader:'Handhika Hidayatullah',description:'Draf singkat: kebutuhan perlengkapan untuk mendukung kegiatan dan pengerjaan proyek Vortex Hydro.',members:['Loudy Firza Aulia','Keihan Daafa Parsya','Girendra Hangestubrata','Jalalludin Satriya Nayaka']},
 {division:'PDD',folder:'pdd',leader:"Mohammad Miftah Yusron Hana'i",description:'Draf singkat: dukungan publikasi dan dokumentasi kegiatan proyek Vortex Hydro.',members:['Legison Satria Manik Allo','Maritza Aprilia Putri']}
];
const TEAM_MANAGEMENT=[
 {position:'Ketua Tim',name:'Mochammad Ardiansyah Tri Wicaksono'},
 {position:'Sekretaris Tim 1',name:"Mohammad Miftah Yusron Hana'i"},
 {position:'Sekretaris Tim 2',name:'Mohamad Supriyadi'},
 {position:'Bendahara Tim 1',name:'Khalidatul Aliyah Safitri'},
 {position:'Bendahara Tim 2',name:'Loudy Firza Aulia'},
 {position:'Bendahara Tim 3',name:'Maritza Aprilia Putri'}
];
const TEAM_PHOTO_FORMATS={};
const teamPhotoSlug=name=>name.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const teamPhotoPath=(name,folder)=>'gambar_anggota/'+folder+'/'+teamPhotoSlug(name);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const teamPhoto=(name,folder,variant='member')=>{
 const path=teamPhotoPath(name,folder),format=TEAM_PHOTO_FORMATS[folder+'/'+teamPhotoSlug(name)];
 const hasPhoto=format==='jpg'||format==='png';
 const isLeader=variant!=='member';
 const image=hasPhoto?path+'.'+format:'gambar_anggota/'+(isLeader?'placeholder-card.svg':'placeholder-avatar.svg');
 const imageClass=variant==='leader'||variant==='management'?'team-card__image':variant==='leader-detail'||variant==='management-detail'?'team-detail__leader-photo':'team-member__photo';
 const label=variant.startsWith('management')?'Foto pengurus: ':isLeader?'Foto ketua divisi: ':'Foto anggota: ';
 return '<img class="'+imageClass+'" src="'+image+'" alt="'+label+escapeHtml(name)+'" decoding="async"'+(hasPhoto?' data-team-photo':'')+'>'
};
document.addEventListener('error',event=>{
 const image=event.target;
 if(!image.matches('.team-card__image,.team-detail__leader-photo,.team-member__photo')||!image.hasAttribute('data-team-photo'))return;
 image.removeAttribute('data-team-photo');
 image.src='gambar_anggota/'+(image.classList.contains('team-member__photo')?'placeholder-avatar.svg':'placeholder-card.svg')
},true);
const teamDeck=$('#tm');
teamDeck.innerHTML='<button class="team-card" type="button" data-management-index="0" aria-haspopup="dialog" aria-label="Lihat Ketua Tim: '+escapeHtml(TEAM_MANAGEMENT[0].name)+'"><span class="team-card__visual">'+teamPhoto(TEAM_MANAGEMENT[0].name,'pengurus','management')+'</span></button>'+TEAM_LEADERS.map((team,index)=>'<button class="team-card" type="button" data-team-index="'+index+'" aria-haspopup="dialog" aria-label="Lihat deskripsi dan anggota Divisi '+escapeHtml(team.division)+'"><span class="team-card__visual">'+teamPhoto(team.leader,team.folder,'leader')+'</span></button>').join('');
const teamDetail=$('#teamDetail'),teamDetailContent=$('#teamDetailContent');
let teamDetailOpener=null,teamCloseTimer;
function showTeamDetail(content,opener){
 clearTimeout(teamCloseTimer);
 teamDetailContent.innerHTML=content;
 teamDetailOpener=opener;
 teamDetail.hidden=false;
 teamDetail.setAttribute('aria-hidden','false');
 document.body.classList.add('team-detail-open');
 teamDetail.offsetHeight;
 teamDetail.classList.add('is-open');
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  opener.animate([{transform:'scale(1)'},{transform:'scale(.95)'},{transform:'scale(1.025)'},{transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
  teamDetail.animate([{opacity:0},{opacity:1}],{duration:260,easing:'ease-out'});
  teamDetail.querySelector('.team-detail__panel').animate([{opacity:0,transform:'translateY(30px) scale(.94)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:420,easing:'cubic-bezier(.16,1,.3,1)'});
 }
 teamDetail.querySelector('[data-team-close]').focus()
}
function closeTeamDetail(){
 if(!teamDetail.classList.contains('is-open'))return;
 teamDetail.classList.remove('is-open');
 teamDetail.setAttribute('aria-hidden','true');
 document.body.classList.remove('team-detail-open');
 clearTimeout(teamCloseTimer);
 teamCloseTimer=setTimeout(()=>{teamDetail.hidden=true},220);
 if(teamDetailOpener)teamDetailOpener.focus();
 teamDetailOpener=null
}
function openTeamDetail(index,opener){
 const team=TEAM_LEADERS[index];
 if(!team)return;
 const content='<header class="team-detail__header"><p class="team-detail__eyebrow">Struktur tim · Divisi</p><h2 id="teamDetailTitle">'+escapeHtml(team.division)+'</h2><p class="team-detail__note">Deskripsi singkat ini merupakan draf awal, bukan uraian tugas resmi.</p></header><section class="team-detail__leader">'+teamPhoto(team.leader,team.folder,'leader-detail')+'<div><span class="team-detail__role">CO / Ketua Divisi</span><h3>'+escapeHtml(team.leader)+'</h3></div></section><section class="team-detail__description"><h3>Deskripsi singkat</h3><p>'+escapeHtml(team.description)+'</p></section><section class="team-detail__members" aria-labelledby="teamMembersHeading"><div class="team-detail__members-heading"><h3 id="teamMembersHeading">Anggota divisi</h3><span>'+team.members.length+' anggota</span></div><ul class="team-member-list">'+team.members.map((name,index)=>'<li class="team-member" style="--member-index:'+index+'">'+teamPhoto(name,team.folder)+'<span>'+escapeHtml(name)+'</span></li>').join('')+'</ul></section>';
 showTeamDetail(content,opener)
}
{
 const deck=teamDeck;
 let drag=null,suppressClick=false;
 deck.addEventListener('mousedown',event=>{
  if(event.button!==0)return;
  drag={startX:event.clientX,startScroll:deck.scrollLeft,moved:false};
 });
 window.addEventListener('mousemove',event=>{
  if(!drag)return;
  const delta=event.clientX-drag.startX;
  if(!drag.moved&&Math.abs(delta)<6)return;
  drag.moved=true;
  deck.classList.add('is-dragging');
  deck.scrollLeft=drag.startScroll-delta;
  event.preventDefault()
 });
 const endDrag=()=>{
  if(!drag)return;
  if(drag.moved){
   const card=deck.querySelector('.team-card');
   const gap=parseFloat(getComputedStyle(deck).columnGap)||0;
   const step=card.getBoundingClientRect().width+gap;
   const target=Math.min(deck.scrollWidth-deck.clientWidth,Math.max(0,Math.round(deck.scrollLeft/step)*step));
   deck.classList.add('is-snapping');
   deck.scrollTo({left:target,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
   setTimeout(()=>deck.classList.remove('is-snapping'),420);
   suppressClick=true;
   setTimeout(()=>{suppressClick=false},0)
  }
  drag=null;
  deck.classList.remove('is-dragging')
 };
 window.addEventListener('mouseup',endDrag);
 deck.addEventListener('click',event=>{
  if(suppressClick){event.preventDefault();event.stopImmediatePropagation();suppressClick=false;return}
  const managementCard=event.target.closest('[data-management-index]');
  if(managementCard){
   const person=TEAM_MANAGEMENT[Number(managementCard.dataset.managementIndex)];
   if(!person)return;
   const members=TEAM_MANAGEMENT.slice(1);
   const content='<header class="team-detail__header"><p class="team-detail__eyebrow">Struktur tim · Pengurus utama</p><h2 id="teamDetailTitle">'+escapeHtml(person.position)+'</h2></header><section class="team-detail__leader">'+teamPhoto(person.name,'pengurus','management-detail')+'<div><span class="team-detail__role">'+escapeHtml(person.position)+'</span><h3>'+escapeHtml(person.name)+'</h3></div></section><section class="team-detail__members" aria-labelledby="teamMembersHeading"><div class="team-detail__members-heading"><h3 id="teamMembersHeading">Sekretaris &amp; bendahara</h3><span>'+members.length+' pengurus</span></div><ul class="team-member-list">'+members.map((member,index)=>'<li class="team-member" style="--member-index:'+index+'">'+teamPhoto(member.name,'pengurus')+'<span class="team-member__info"><strong>'+escapeHtml(member.name)+'</strong><span>'+escapeHtml(member.position)+'</span></span></li>').join('')+'</ul></section>';
   showTeamDetail(content,managementCard);
   return
  }
  const leaderCard=event.target.closest('[data-team-index]');
  if(leaderCard)openTeamDetail(Number(leaderCard.dataset.teamIndex),leaderCard)
});
}
teamDetail.addEventListener('click',event=>{
 if(event.target===teamDetail||event.target.closest('[data-team-close]'))closeTeamDetail()
});
document.addEventListener('keydown',event=>{
 if(!teamDetail.classList.contains('is-open'))return;
 if(event.key==='Escape'){closeTeamDetail();return}
 if(event.key!=='Tab')return;
 const focusable=[...teamDetail.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')];
 if(!focusable.length)return;
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
});
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
document.documentElement.classList.add('js');
let sc=0;const rvs=[...document.querySelectorAll('h2,.lead,.step,.tabs,#tj,.ctlbar,footer .cols')];
rvs.forEach(e=>{e.classList.add('rv');if(e.classList.contains('step'))e.style.transitionDelay=(sc++)*120+'ms'});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});rvs.forEach(e=>io.observe(e));
const pg=$('#pg');addEventListener('scroll',()=>{const h=document.documentElement;pg.style.transform='scaleX('+h.scrollTop/((h.scrollHeight-h.clientHeight)||1)+')'},{passive:true});
const lk=[...document.querySelectorAll('.links>a,.dd>a')];
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)lk.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['top','tentang','divisi','dokumentasi'].forEach(id=>so.observe(document.getElementById(id)));

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
