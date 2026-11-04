document.documentElement.classList.add('fm');
const $=s=>document.querySelector(s);
const bg=$('#bg');
const setMenuOpen=open=>{$('#ln').classList.toggle('open',open);bg.classList.toggle('x',open);bg.setAttribute('aria-expanded',String(open));bg.setAttribute('aria-label',open?'Tutup menu':'Buka menu')};
bg.onclick=()=>setMenuOpen(!$('#ln').classList.contains('open'));
$('#ln').onclick=e=>{if(e.target.closest('a'))setMenuOpen(false)};
const tools=[
 {name:'ANSYS Fluent',image:'Image_Icon/Ansys.png'},
 {name:'AutoCAD',image:'Image_Icon/Autocad.png'},
 {name:'MATLAB',image:'Image_Icon/MathLab.png'},
 {name:'VS Code',image:'Image_Icon/Vscode.png'}
];
const toolTrack=$('#t1');
const toolSlides=tools.map(({name,image},i)=>'<span class="sw'+(i?'':' is-active')+'" aria-hidden="'+(i?'true':'false')+'"><img src="'+image+'" alt=""><span class="sw-label">'+name+'</span></span>').join('');
toolTrack.innerHTML=toolSlides;
const toolCards=[...toolTrack.querySelectorAll('.sw')];
let activeTool=0,toolRotation;
const showTool=i=>{toolCards.forEach((card,index)=>{const active=index===i;card.classList.toggle('is-active',active);card.setAttribute('aria-hidden',String(!active))});activeTool=i};
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const updateToolRotation=()=>{clearInterval(toolRotation);if(!motionPreference.matches)toolRotation=setInterval(()=>showTool((activeTool+1)%toolCards.length),6000)};
updateToolRotation();
motionPreference.addEventListener('change',updateToolRotation);
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
const TEAM_PHOTO_FORMATS={
 'electrical/muhammad-nur-faizin':'jpg',
 'electrical/muhammad-farrel-caesar':'jpg',
 'electrical/mokhamad-rayhan-faturahman':'jpg'
};
const teamPhotoSlug=name=>name.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const teamPhotoPath=(name,folder)=>'gambar_anggota/'+folder+'/'+teamPhotoSlug(name);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
/* ===== Struktur tim: coverflow 3D + flip card =====
   Foto dicari lewat TEAM_PHOTO_FORMATS (lihat README). Warna aksen tiap kartu ada di TEAM_ACCENT. */
const TEAM_ACCENT={pengurus:'#3C7BD9',modeling:'#2F9BC9','mat-model':'#5470DB',software:'#7C5CE0',electrical:'#EBA02F',mekanikal:'#1FB09C',perlengkapan:'#EA6A58',pdd:'#DC5A92'};
const teamPhoto=(name,folder,kind)=>{
 const slug=teamPhotoSlug(name),format=TEAM_PHOTO_FORMATS[folder+'/'+slug];
 const hasPhoto=format==='jpg'||format==='png',isCard=kind==='card';
 const src=hasPhoto?teamPhotoPath(name,folder)+'.'+format:'gambar_anggota/'+(isCard?'placeholder-card.svg':'placeholder-avatar.svg');
 return '<img class="'+(isCard?'tc__img':'tc__avatar')+'" src="'+src+'" alt="'+(isCard?'Foto '+escapeHtml(name):'')+'" decoding="async" draggable="false"'+(hasPhoto?' data-team-photo':'')+'>'
};
/* kalau foto gagal dimuat: coba placeholder dulu, kalau placeholder juga tidak ada, pakai siluet bawaan CSS */
document.addEventListener('error',event=>{
 const image=event.target;
 if(!image.matches||!image.matches('.tc__img,.tc__avatar'))return;
 if(image.hasAttribute('data-team-photo')){
  image.removeAttribute('data-team-photo');
  image.src='gambar_anggota/'+(image.classList.contains('tc__avatar')?'placeholder-avatar.svg':'placeholder-card.svg')
 }else{
  image.classList.add('is-missing');
  image.removeAttribute('src')                                                  // hilangkan ikon gambar rusak
 }
},true);

const TEAM_CARDS=[
 {key:'pengurus',folder:'pengurus',name:TEAM_MANAGEMENT[0].name,role:'Ketua Tim',backTitle:'Pengurus utama',desc:'',listLabel:'Sekretaris & bendahara',unit:'pengurus',
  people:TEAM_MANAGEMENT.slice(1).map(m=>({name:m.name,sub:m.position}))},
 ...TEAM_LEADERS.map(t=>({key:t.folder,folder:t.folder,name:t.leader,role:'Ketua Divisi '+t.division,backTitle:'Divisi '+t.division,desc:t.description,listLabel:'Anggota',unit:'anggota',
  people:t.members.map(name=>({name}))}))
];

(function(){
 const ICON_USERS='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
 const ICON_BACK='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>';
 const stage=$('#tm'),prevB=$('#tcPrev'),nextB=$('#tcNext'),ticksEl=$('#tcTicks'),countEl=$('#tcCount'),liveEl=$('#tcLive');
 if(!stage)return;
 const N=TEAM_CARDS.length,pad=n=>String(n).padStart(2,'0');
 const accent=c=>TEAM_ACCENT[c.key]||'#140951';

 const cardHtml=(c,i)=>{
  const rows=c.people.map((p,k)=>'<li class="tc__row" style="--i:'+k+'">'+teamPhoto(p.name,c.folder,'member')+'<span><strong>'+escapeHtml(p.name)+'</strong>'+(p.sub?'<em>'+escapeHtml(p.sub)+'</em>':'')+'</span></li>').join('');
  return '<article class="tc" data-i="'+i+'" style="--ac:'+accent(c)+'"><div class="tc__inner">'
   +'<div class="tc__face tc__front"><button class="tc__open" type="button" tabindex="-1" aria-expanded="false" aria-label="'+escapeHtml(c.role)+': '+escapeHtml(c.name)+'. Tekan untuk melihat '+c.unit+'.">'
    +teamPhoto(c.name,c.folder,'card')+'<span class="tc__shade"></span>'
    +'<span class="tc__pill">'+ICON_USERS+c.people.length+' '+c.unit+'</span>'
    +'<span class="tc__cap"><strong>'+escapeHtml(c.name)+'</strong><span class="tc__role">'+escapeHtml(c.role)+'</span></span></button></div>'
   +'<div class="tc__face tc__back" inert><header class="tc__bh"><div><h4>'+escapeHtml(c.backTitle)+'</h4>'+(c.desc?'<p>'+escapeHtml(c.desc)+'</p>':'')+'</div>'
    +'<button class="tc__flipback" type="button" aria-label="Balik ke foto '+escapeHtml(c.role)+'" title="Balik ke foto">'+ICON_BACK+'</button></header>'
    +'<div class="tc__lh"><span>'+escapeHtml(c.listLabel)+'</span><b>'+c.people.length+'</b></div>'
    +'<ul class="tc__list" tabindex="0" aria-label="Daftar '+c.unit+': '+escapeHtml(c.backTitle)+'">'+rows+'</ul></div>'
  +'</div></article>'
 };
 stage.innerHTML=TEAM_CARDS.map(cardHtml).join('');
 ticksEl.innerHTML=TEAM_CARDS.map((c,i)=>'<button class="tcf__tick" type="button" data-i="'+i+'" style="--ac:'+accent(c)+'" aria-label="Ke kartu '+(i+1)+': '+escapeHtml(c.role)+'"></button>').join('');

 const cards=[...stage.querySelectorAll('.tc')],ticks=[...ticksEl.children];
 const flip=cards.map(()=>({v:0,from:0,to:0,t0:0,dur:0}));   // v: 0 = foto, 1 = daftar anggota
 let pos=0,target=0,cur=0,spread=0,spreadT0=null,cw=300,raf=0,last=0,drag=null,suppress=false,lastWheel=0;
 const still=()=>matchMedia('(prefers-reduced-motion:reduce)').matches&&!document.documentElement.classList.contains('fm');
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const easeInOut=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
 const easeOut=p=>1-Math.pow(1-p,3);

 /* Satu fungsi yang menempatkan semua kartu berdasarkan jarak d dari posisi tengah (pos). */
 function render(){
  for(let i=0;i<N;i++){
   const d=i-pos,ax=Math.abs(d),s=Math.sign(d),near=Math.min(ax,1),f=flip[i].v;
   const off=ax<=1?ax*.72:.72+(ax-1)*.27;                 // sisi dekat renggang, sisi jauh menumpuk
   const x=s*off*cw*spread;
   const z=-Math.min(ax,4)*80*spread+(1-near)*30+Math.sin(Math.PI*f)*70;   // kartu yang di-flip "terangkat"
   const ry=-s*near*34*spread;
   const sc=(1-near*.1-Math.min(Math.max(ax-1,0),3)*.035)*(1+f*.03)*(.88+.12*spread);
   let op=ax>3?Math.max(0,1-(ax-3)):1;if(spread<1&&ax>.5)op*=spread;
   const c=cards[i];
   c.style.transform='translate3d('+x.toFixed(2)+'px,0,'+z.toFixed(2)+'px) rotateY('+ry.toFixed(2)+'deg) scale('+sc.toFixed(4)+')';
   c.style.zIndex=100-Math.round(ax*10);
   c.style.opacity=op>=1?'':op.toFixed(3);
   c.style.visibility=ax>4||op<=0?'hidden':'visible';
   c.style.setProperty('--a',near.toFixed(3));
  }
 }

 function frame(t){
  const dt=clamp((t-last)/1000,.001,.05);last=t;
  let busy=false;
  if(spreadT0!==null){const p=clamp((t-spreadT0)/1100,0,1);spread=easeOut(p);if(p<1)busy=true;else spreadT0=null}
  const k=drag&&drag.moved?30:(still()?60:9);            // makin besar = makin cepat mengejar
  if(Math.abs(target-pos)>.0005){pos+=(target-pos)*(1-Math.exp(-k*dt));busy=true}else pos=target;
  for(const f of flip){
   if(f.v===f.to)continue;
   const p=f.dur?clamp((t-f.t0)/f.dur,0,1):1;
   f.v=p<1?f.from+(f.to-f.from)*easeInOut(p):f.to;
   if(p<1)busy=true
  }
  render();
  raf=busy?requestAnimationFrame(frame):0
 }
 const kick=()=>{if(!raf){last=performance.now();raf=requestAnimationFrame(frame)}};

 function syncUi(){
  ticks.forEach((t,i)=>t.setAttribute('aria-current',i===cur?'true':'false'));
  cards.forEach((c,i)=>{c.querySelector('.tc__open').tabIndex=i===cur?0:-1});
  prevB.disabled=cur===0;nextB.disabled=cur===N-1;
  if(document.activeElement===prevB&&prevB.disabled)nextB.focus({preventScroll:true});
  if(document.activeElement===nextB&&nextB.disabled)prevB.focus({preventScroll:true});
  countEl.textContent=pad(cur+1)+' / '+pad(N);
  liveEl.textContent='Kartu '+(cur+1)+' dari '+N+': '+TEAM_CARDS[cur].role+', '+TEAM_CARDS[cur].name
 }

 function setFlip(i,to){
  const f=flip[i];if(f.to===to)return;
  f.from=f.v;f.to=to;f.t0=performance.now();f.dur=still()?0:Math.max(380,900*Math.abs(to-f.v));
  const c=cards[i];
  c.classList.toggle('is-flipped',!!to);
  c.querySelector('.tc__open').setAttribute('aria-expanded',to?'true':'false');
  c.querySelector('.tc__front').inert=!!to;
  c.querySelector('.tc__back').inert=!to;
  kick()
 }
 function toggleFlip(i){
  const to=flip[i].to?0:1;
  setFlip(i,to);
  const c=cards[i];
  c.querySelector(to?'.tc__flipback':'.tc__open').focus({preventScroll:true});
  liveEl.textContent=to?'Menampilkan '+TEAM_CARDS[i].unit+' '+TEAM_CARDS[i].backTitle:'Kembali ke foto '+TEAM_CARDS[i].role
 }
 function goTo(i,focusIt){
  i=clamp(i,0,N-1);
  if(i!==cur&&flip[cur].to)setFlip(cur,0);
  target=i;
  if(i!==cur){cur=i;syncUi()}
  if(focusIt)cards[cur].querySelector('.tc__open').focus({preventScroll:true});
  kick()
 }

 /* klik: kartu samping -> pindah ke tengah, kartu tengah -> flip */
 stage.addEventListener('click',e=>{
  if(suppress){suppress=false;e.preventDefault();e.stopPropagation();return}
  if(e.target.closest('.tc__flipback')){toggleFlip(cur);return}
  const open=e.target.closest('.tc__open');
  if(!open)return;
  const i=+open.closest('.tc').dataset.i;
  if(i!==cur)goTo(i);else toggleFlip(i)
 },true);

 /* drag / swipe */
 const STEP=()=>cw*.62;
 stage.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0)return;
  if(e.target.closest('.tc__list'))return;
  drag={id:e.pointerId,x:e.clientX,y:e.clientY,startPos:pos,moved:false,hist:[[performance.now(),e.clientX]]}
 });
 stage.addEventListener('pointermove',e=>{
  if(!drag||e.pointerId!==drag.id)return;
  const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
  if(!drag.moved){
   if(Math.abs(dx)<8||Math.abs(dx)<Math.abs(dy))return;
   drag.moved=true;stage.setPointerCapture(e.pointerId);stage.classList.add('is-drag');
   if(flip[cur].to)setFlip(cur,0)
  }
  let t=drag.startPos-dx/STEP();
  if(t<0)t*=.35;else if(t>N-1)t=N-1+(t-(N-1))*.35;     // tahan di ujung, terasa "kenyal"
  target=t;
  const now=performance.now();drag.hist.push([now,e.clientX]);
  while(drag.hist.length>2&&now-drag.hist[0][0]>90)drag.hist.shift();
  const idx=clamp(Math.round(t),0,N-1);if(idx!==cur){cur=idx;syncUi()}
  kick()
 });
 const endDrag=e=>{
  if(!drag||e.pointerId!==drag.id)return;
  const d=drag;drag=null;stage.classList.remove('is-drag');
  if(!d.moved)return;
  suppress=true;setTimeout(()=>{suppress=false},60);
  const h=d.hist,a=h[0],b=h[h.length-1],v=b[0]>a[0]?(a[1]-b[1])/(b[0]-a[0])*1000/STEP():0;   // kartu/detik
  goTo(clamp(Math.round(target+clamp(v*.18,-2,2)),0,N-1))
 };
 stage.addEventListener('pointerup',endDrag);
 stage.addEventListener('pointercancel',endDrag);

 /* scroll horizontal (trackpad / shift+wheel) */
 stage.addEventListener('wheel',e=>{
  const dx=e.shiftKey?e.deltaY:e.deltaX;
  if(Math.abs(dx)<6||Math.abs(dx)<Math.abs(e.shiftKey?e.deltaX:e.deltaY))return;
  e.preventDefault();
  const now=performance.now();if(now-lastWheel<380)return;
  lastWheel=now;goTo(cur+(dx>0?1:-1))
 },{passive:false});

 /* keyboard */
 stage.addEventListener('keydown',e=>{
  const k=e.key;
  if(k==='ArrowRight'||k==='ArrowLeft'){e.preventDefault();goTo(cur+(k==='ArrowRight'?1:-1),true)}
  else if(k==='Home'){e.preventDefault();goTo(0,true)}
  else if(k==='End'){e.preventDefault();goTo(N-1,true)}
  else if(k==='Escape'&&flip[cur].to){e.preventDefault();toggleFlip(cur)}
 });
 prevB.addEventListener('click',()=>goTo(cur-1));
 nextB.addEventListener('click',()=>goTo(cur+1));
 ticksEl.addEventListener('click',e=>{const t=e.target.closest('.tcf__tick');if(t)goTo(+t.dataset.i)});

 const measure=()=>{cw=cards[0].offsetWidth||300;render()};
 addEventListener('resize',measure);
 measure();syncUi();

 /* satu momen pembuka: kartu menyebar dari tengah saat bagian ini terlihat */
 if(still()||!('IntersectionObserver' in window)){spread=1;render()}
 else{
  render();
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){io.disconnect();spreadT0=performance.now();kick()}},{threshold:.3});
  io.observe(stage)
 }
})();
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

(function(){const cv=$('#flow');if(!cv)return;const ctx=cv.getContext('2d'),hero=cv.parentElement;
let W,H,dx,cols,rows,AC=[],mx=-1e4,my=-1e4,run=true,raf=0;const dy=26,t0=performance.now(),reducedMotion=matchMedia('(prefers-reduced-motion:reduce)'),motionReduced=()=>reducedMotion.matches&&!document.documentElement.classList.contains('fm');
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
function loop(n){raf=0;if(!run||motionReduced())return;draw(n);raf=requestAnimationFrame(loop)}
function start(){if(run&&!motionReduced()&&!raf)raf=requestAnimationFrame(loop)}
function motionChanged(){if(motionReduced()){if(raf)cancelAnimationFrame(raf);raf=0}else start()}
if(reducedMotion.addEventListener)reducedMotion.addEventListener('change',motionChanged);else reducedMotion.addListener(motionChanged);
size();addEventListener('resize',size);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(size);
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
hero.addEventListener('pointerleave',()=>{mx=my=-1e4});
if(window.IntersectionObserver)new IntersectionObserver(e=>{run=e[0].isIntersecting;if(run)start();else if(raf){cancelAnimationFrame(raf);raf=0}}).observe(hero);
else start()})();