
/* ---------- Lía, la lince ---------- */
const DARK='#2B2118',CREAM='#F6E7CF';
const PELAJE={pelaje_dorado:['#D9A35B','#8A5A2B'],pelaje_nieve:['#EEF1F5','#9AA6BF'],pelaje_chocolate:['#9A6744','#4A2E1E'],pelaje_naranja:['#E8853D','#9C4A1A'],
 pelaje_gris:['#B4AEA9','#5F5A56'],pelaje_rosa:['#F2A7BE','#B5577A'],pelaje_azul:['#8DB3FF','#2F5BB7'],pelaje_noche:['#4A4E69','#22223B'],pelaje_oro:['#F2C94C','#B57F0E']};
const FONDO={fondo_verde:'#CFEBD9',fondo_azul:'#D6E4FF',fondo_rosa:'#FBD9E4',fondo_amarillo:'#FBEAB8',fondo_morado:'#E4D9FB',fondo_noche:'#1F2A44',fondo_arcoiris:'url(#arco)'};
const star5=(cx,cy,R,r)=>Array.from({length:10},(_,i)=>{const a=-Math.PI/2+i*Math.PI/5,d=i%2?r:R;return `${(cx+d*Math.cos(a)).toFixed(1)},${(cy+d*Math.sin(a)).toFixed(1)}`}).join(' ');
const ACC={
 bandana:`<path d="M22 79q28 15 56 0l-2 9q-26 13-52 0z" fill="#0B7A43"/><path d="M24 84q26 12 52 0" stroke="#fff" stroke-width="2.5" fill="none"/>`,
 pajarita:`<g fill="#1F5FD6"><path d="M50 90l-13-7v14z"/><path d="M50 90l13-7v14z"/><circle cx="50" cy="90" r="3.2" fill="#163F8F"/></g>`,
 pajarita_roja:`<g fill="#C8402F"><path d="M50 90l-13-7v14z"/><path d="M50 90l13-7v14z"/><circle cx="50" cy="90" r="3.2" fill="#8E2A1E"/></g>`,
 bufanda:`<path d="M20 78q30 16 60 0l-1 10q-29 14-58 0z" fill="#C8402F"/><path d="M26 82l4 9M38 86l3 9M52 87l2 9M64 85l2 9" stroke="#F2BE45" stroke-width="2.5"/><path d="M64 86l6 20h-10l-3-18z" fill="#C8402F"/>`,
 medalla:`<path d="M44 80l6 10 6-10" stroke="#1F5FD6" stroke-width="4" fill="none"/><circle cx="50" cy="96" r="7" fill="#E3A21A" stroke="#B57F0E" stroke-width="1.5"/><polygon points="${star5(50,96,4.5,2)}" fill="#FFF3C4"/>`,
 gafas:`<g stroke="#1F5FD6" stroke-width="3" fill="none"><circle cx="38" cy="54" r="8.5"/><circle cx="62" cy="54" r="8.5"/><path d="M46.5 54h7"/></g>`,
 gafas_sol:`<g><circle cx="38" cy="54" r="9" fill="#1B2740"/><circle cx="62" cy="54" r="9" fill="#1B2740"/><path d="M47 54h6" stroke="#1B2740" stroke-width="3"/><path d="M33 50l5-2" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/><path d="M57 50l5-2" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>`,
 gafas_estrella:`<g fill="#E8577A" stroke="#B5577A" stroke-width="1"><polygon points="${star5(38,54,11,5)}"/><polygon points="${star5(62,54,11,5)}"/></g><path d="M47 54h6" stroke="#B5577A" stroke-width="3"/>`,
 flor:`<g transform="translate(77 31)">${[0,72,144,216,288].map(a=>`<circle cx="${(6*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(6*Math.sin(a*Math.PI/180)).toFixed(1)}" r="5" fill="#E8577A"/>`).join('')}<circle r="3.5" fill="#F2BE45"/></g>`,
 estrella:`<polygon points="${star5(23,32,8,3.5)}" fill="#F2BE45" stroke="#B57F0E" stroke-width="1"/>`,
 lazo:`<g transform="translate(76 30)" fill="#E8577A"><path d="M0 0l-11-7v14z"/><path d="M0 0l11-7v14z"/><circle r="3.2" fill="#B5577A"/></g>`,
 gorro:`<path d="M37 30L50 -5L63 30z" fill="#C8402F"/><path d="M41 19h18M45 8h10" stroke="#F2BE45" stroke-width="3"/><circle cx="50" cy="-6" r="4.5" fill="#F2BE45"/>`,
 corona:`<path d="M34 29l2-19 7 9 7-13 7 13 7-9 2 19z" fill="#E3A21A" stroke="#B57F0E" stroke-width="1.5" stroke-linejoin="round"/>`,
 cordobes:`<ellipse cx="50" cy="28" rx="31" ry="5.5" fill="#2B2118"/><rect x="36" y="8" width="28" height="20" rx="2" fill="#2B2118"/><rect x="36" y="21" width="28" height="4" fill="#C8402F"/>`,
 gorra:`<path d="M31 31Q32 8 50 8Q68 8 69 31z" fill="#1F5FD6"/><path d="M64 29h22q1 5-6 6H63z" fill="#163F8F"/><circle cx="50" cy="9" r="2.5" fill="#163F8F"/>`,
 auriculares:`<path d="M19 52Q19 8 50 8Q81 8 81 52" stroke="#2B2118" stroke-width="4" fill="none"/><rect x="10" y="45" width="13" height="20" rx="6" fill="#0B7A43"/><rect x="77" y="45" width="13" height="20" rx="6" fill="#0B7A43"/>`,
 birrete:`<path d="M50 6L84 18L50 30L16 18z" fill="#1B2740"/><path d="M36 23v8q14 7 28 0v-8" fill="#1B2740"/><path d="M80 19v14" stroke="#F2BE45" stroke-width="2"/><circle cx="80" cy="34" r="2.5" fill="#F2BE45"/>`
};
const SLOT={gorro:'cabeza',corona:'cabeza',cordobes:'cabeza',gorra:'cabeza',auriculares:'cabeza',birrete:'cabeza',
 gafas:'cara',gafas_sol:'cara',gafas_estrella:'cara',bandana:'cuello',pajarita:'cuello',pajarita_roja:'cuello',bufanda:'cuello',medalla:'cuello',
 flor:'oreja',estrella:'oreja',lazo:'oreja'};
const ACC_ORDER=['bandana','bufanda','pajarita','pajarita_roja','medalla','gafas','gafas_sol','gafas_estrella','flor','estrella','lazo','auriculares','gorro','corona','cordobes','gorra','birrete'];
function lince(wear=[],mood='ok'){
 const pk=wear.find(w=>PELAJE[w]),[FUR,INNER]=PELAJE[pk]||PELAJE.pelaje_dorado,fk=wear.find(w=>FONDO[w]);
 const bg=fk?`<defs><linearGradient id="arco" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FBD9E4"/><stop offset=".33" stop-color="#FBEAB8"/><stop offset=".66" stop-color="#CFEBD9"/><stop offset="1" stop-color="#D6E4FF"/></linearGradient></defs><circle cx="50" cy="46" r="56" fill="${FONDO[fk]}"/>`:'';
 const eyes=mood==='happy'?`<path d="M33 56q5-7 10 0M57 56q5-7 10 0" stroke="${DARK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`
  :mood==='oops'?`<path d="M34 54h8M58 54h8" stroke="${DARK}" stroke-width="3.2" stroke-linecap="round"/>`
  :`<circle cx="38" cy="54" r="4.6" fill="${DARK}"/><circle cx="62" cy="54" r="4.6" fill="${DARK}"/><circle cx="39.6" cy="52.4" r="1.5" fill="#fff"/><circle cx="63.6" cy="52.4" r="1.5" fill="#fff"/>`;
 const mouth=mood==='oops'?`<ellipse cx="50" cy="73" rx="3" ry="3.4" fill="${DARK}"/>`:`<path d="M50 67q-4 6-9 3M50 67q4 6 9 3" stroke="${DARK}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
 const acc=ACC_ORDER.filter(w=>wear.includes(w)).map(w=>ACC[w]).join('');
 return `<svg viewBox="0 -12 100 112" class="lince" role="img" aria-label="Lía, la lince">${bg}
  <path d="M28 9L27 -3M72 9L73 -3" stroke="${DARK}" stroke-width="3" stroke-linecap="round"/>
  <polygon points="16,44 28,8 46,32" fill="${FUR}"/><polygon points="23,38 28,18 39,32" fill="${INNER}"/>
  <polygon points="84,44 72,8 54,32" fill="${FUR}"/><polygon points="77,38 72,18 61,32" fill="${INNER}"/>
  <polygon points="18,58 3,80 30,76" fill="${FUR}"/><polygon points="82,58 97,80 70,76" fill="${FUR}"/>
  <ellipse cx="50" cy="57" rx="34" ry="30" fill="${FUR}"/>
  <ellipse cx="50" cy="71" rx="15" ry="11" fill="${CREAM}"/>
  <g fill="${INNER}"><circle cx="30" cy="44" r="2"/><circle cx="70" cy="44" r="2"/><circle cx="26" cy="60" r="2.2"/><circle cx="74" cy="60" r="2.2"/><circle cx="50" cy="35" r="2"/></g>
  ${eyes}<path d="M45 63h10l-5 5z" fill="#3B2A20"/>${mouth}${acc}</svg>`;
}

/* ---------- iconos ---------- */
const IC={
 coin:`<svg viewBox="0 0 20 20" class="ic" aria-hidden="true"><circle cx="10" cy="10" r="8.5" fill="var(--star)"/><circle cx="10" cy="10" r="5.2" fill="none" stroke="var(--sheet)" stroke-width="1.6" opacity=".75"/></svg>`,
 flame:`<svg viewBox="0 0 20 20" class="ic" aria-hidden="true"><path d="M10 1c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 1-5 1-9z" fill="var(--flame)"/></svg>`,
 sndOn:`<svg viewBox="0 0 20 20" class="ic" aria-hidden="true"><path d="M3 7h3l5-4v14l-5-4H3z" fill="currentColor"/><path d="M14 6c2 2 2 6 0 8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,
 sndOff:`<svg viewBox="0 0 20 20" class="ic" aria-hidden="true"><path d="M3 7h3l5-4v14l-5-4H3z" fill="currentColor"/><path d="M14 7l5 6M19 7l-5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
};
const starPts=(cx,cy,R,r)=>Array.from({length:10},(_,i)=>{const a=-Math.PI/2+i*Math.PI/5,d=i%2?r:R;return `${(cx+d*Math.cos(a)).toFixed(1)},${(cy+d*Math.sin(a)).toFixed(1)}`}).join(' ');
const MEDAL=`<svg viewBox="0 0 40 50" class="medal" aria-hidden="true"><path d="M9 0h8l6 17h-8z" class="r1"/><path d="M31 0h-8l-6 17h8z" class="r2"/><circle cx="20" cy="33" r="15" class="d"/><polygon points="${starPts(20,33,8.5,3.7)}" class="g"/></svg>`;

/* ---------- juego: niveles, logros, tienda ---------- */
const LEVELS=['Semilla','Brote','Plantón','Olivo joven','Olivo','Olivar','Olivo centenario','Olivo milenario'];
const lvlXP=n=>50*n*(n-1);
function levelOf(xp){let n=1;while(xp>=lvlXP(n+1))n++;return n}
const lvlName=n=>LEVELS[Math.min(n,LEVELS.length)-1];
const lvlPct=xp=>{const n=levelOf(xp);return Math.round((xp-lvlXP(n))/(lvlXP(n+1)-lvlXP(n))*100)};
const BADGES=[
 ['primera','Primer paso','Termina tu primera práctica',g=>g.sessions>=1],
 ['perfecta','Sin fallos','Haz una práctica perfecta',g=>g.perfects>=1],
 ['perfecta5','Imparable','Consigue 5 prácticas perfectas',g=>g.perfects>=5],
 ['a50','Medio centenar','Acierta 50 preguntas',g=>g.correct>=50],
 ['a250','Cerebrito','Acierta 250 preguntas',g=>g.correct>=250],
 ['a1000','Sabio de la Subbética','Acierta 1.000 preguntas',g=>g.correct>=1000],
 ['c5','En racha','Acierta 5 preguntas seguidas',g=>g.bestCombo>=5],
 ['c10','Supercombo','Acierta 10 preguntas seguidas',g=>g.bestCombo>=10],
 ['d3','Constante','Practica 3 días seguidos',g=>g.streak>=3],
 ['d7','Una semana entera','Practica 7 días seguidos',g=>g.streak>=7],
 ['reto','Reto cumplido','Completa un reto del día',g=>g.dailyCount>=1],
 ['reto5','Retador','Completa 5 retos del día',g=>g.dailyCount>=5],
 ['rayo','Rayo','Acierta 10 en el contrarreloj',g=>g.timedBest>=10],
 ['rayo20','Velocidad de la luz','Acierta 20 en el contrarreloj',g=>g.timedBest>=20],
 ['trio','Todoterreno','Practica las tres asignaturas',g=>Object.keys(g.subjects).length>=3],
 ['estrellas','Tres estrellas','Consigue 3 estrellas en un tema',g=>g.stars3],
 ['nivel5','Olivo','Llega al nivel 5',g=>levelOf(g.xp)>=5],
 ['estilo','Con estilo','Compra algo en la tienda',g=>g.owned.length>=1],
 ['fashion','Lince a la moda','Ten 8 cosas de la tienda',g=>g.owned.length>=8],
 ['rescate','Aprendo de mis errores','Corrige 10 fallos en el repaso',g=>g.rescued>=10],
 ['supera','Mejor que nunca','Supera tus aciertos de la semana pasada',g=>!!g.beatWeek]];
function newBadges(g){const got=[];BADGES.forEach(([id,n,d,t])=>{if(!g.badges.includes(id)&&t(g)){g.badges.push(id);got.push([n,d])}});return got}
/* tienda: [id, nombre, precio, categoría, nivel mínimo] */
const SHOP=[
 ['gafas','Gafas',30,'acc',1],['flor','Flor de feria',40,'acc',1],['estrella','Horquilla de estrella',40,'acc',1],['lazo','Lazo',45,'acc',1],['pajarita','Pajarita azul',50,'acc',1],
 ['pajarita_roja','Pajarita roja',50,'acc',1],['gorra','Gorra',60,'acc',2],['bandana','Pañuelo verdiblanco',70,'acc',2],['gafas_sol','Gafas de sol',80,'acc',3],
 ['bufanda','Bufanda',80,'acc',3],['auriculares','Auriculares',90,'acc',3],['gorro','Gorro de fiesta',90,'acc',4],['cordobes','Sombrero cordobés',120,'acc',4],
 ['gafas_estrella','Gafas de estrella',120,'acc',5],['corona','Corona',150,'acc',5],['birrete','Birrete de graduación',200,'acc',6],['medalla','Medalla de oro',250,'acc',7],
 ['pelaje_nieve','Lince de las nieves',60,'pel',1],['pelaje_chocolate','Chocolate',60,'pel',1],['pelaje_naranja','Naranja',70,'pel',2],['pelaje_gris','Gris plata',80,'pel',3],
 ['pelaje_rosa','Rosa chicle',100,'pel',4],['pelaje_azul','Azul galaxia',120,'pel',5],['pelaje_noche','Medianoche',150,'pel',6],['pelaje_oro','Oro brillante',250,'pel',8],
 ['fondo_verde','Fondo olivar',30,'fon',1],['fondo_azul','Fondo cielo',30,'fon',1],['fondo_rosa','Fondo flamenca',40,'fon',2],['fondo_amarillo','Fondo sol',40,'fon',2],
 ['fondo_morado','Fondo lavanda',50,'fon',3],['fondo_noche','Fondo noche estrellada',90,'fon',5],['fondo_arcoiris','Fondo arcoíris',150,'fon',7]];
const SHOPCAT={acc:'Accesorios',pel:'Pelaje',fon:'Fondos'};
let shopTab='acc';
function wearItem(g,id){const w=g.wear;const k=w.indexOf(id);if(k>=0){w.splice(k,1);return}
 const cat=(SHOP.find(x=>x[0]===id)||[])[3];
 for(let i=w.length-1;i>=0;i--){const o=w[i];const oc=(SHOP.find(x=>x[0]===o)||[])[3];
  if((cat==='pel'&&oc==='pel')||(cat==='fon'&&oc==='fon')||(cat==='acc'&&SLOT[o]&&SLOT[o]===SLOT[id]))w.splice(i,1)}
 w.push(id)}
const OKMSG=['¡Genial!','¡Muy bien!','¡Eso es!','¡Fenomenal!','¡Olé!','¡De diez!','¡Bravo!'];
const KOMSG=['¡Casi! Mira la explicación.','No pasa nada, ¡a por la siguiente!','Equivocarse también es aprender.'];

/* ---------- estado guardado ---------- */
const KEY='micuaderno.v1';
const blankG=()=>({xp:0,coins:0,streak:0,lastDay:'',bestCombo:0,correct:0,sessions:0,perfects:0,dailyDay:'',dailyCount:0,timedBest:0,tb:{},subjects:{},stars3:false,badges:[],owned:[],wear:[],fails:[],rescued:0,weeks:{},beatWeek:''});
const newPerson=course=>({course,subj:'lengua',prog:{},g:blankG()});
let store={current:'Estudiante',sound:true,people:{Estudiante:newPerson(1)}};
try{const raw=localStorage.getItem(KEY);if(raw){const s=JSON.parse(raw);if(s&&s.people&&s.people[s.current])store=s}}catch(e){}
if(store.sound===undefined)store.sound=true;
Object.values(store.people).forEach(p=>{p.g=Object.assign(blankG(),p.g||{});p.prog=p.prog||{}});
function save(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
const me=()=>store.people[store.current];
const dayStr=t=>{const z=new Date(t);return `${z.getFullYear()}-${String(z.getMonth()+1).padStart(2,'0')}-${String(z.getDate()).padStart(2,'0')}`};
const TODAY=()=>dayStr(Date.now()),YEST=()=>dayStr(Date.now()-864e5);
const liveStreak=g=>(g.lastDay===TODAY()||g.lastDay===YEST())?g.streak:0;
const monday=(t=Date.now())=>t-((new Date(t).getDay()+6)%7)*864e5;
const WEEK=()=>dayStr(monday()),PREVWEEK=()=>dayStr(monday()-7*864e5);
const weekOf=g=>({now:g.weeks[WEEK()]||0,last:g.weeks[PREVWEEK()]||0});
/* fallos guardados: la pregunta tal cual, sin funciones */
const FAILMAX=50;
function addFail(g,it,s){const f={q:it.q,e:it.e||'',s};if(it.o){f.o=it.o;f.a=it.a}else if('num' in it)f.num=it.num;else if(it.frac)f.frac=it.frac;else f.txt=it.txt;
 g.fails=g.fails.filter(x=>x.q!==it.q);g.fails.push(f);if(g.fails.length>FAILMAX)g.fails.shift()}
function dropFail(g,q){const n=g.fails.length;g.fails=g.fails.filter(x=>x.q!==q);return g.fails.length<n}
function touchDay(g){const t=TODAY();if(g.lastDay===t)return;g.streak=g.lastDay===YEST()?g.streak+1:1;g.lastDay=t}
const pkey=(c,s,i)=>`${c}-${s}-${(DATA[c][s][i]||{t:i}).t}`;
function mastery(c,s,i){const p=me().prog[pkey(c,s,i)];if(!p||!p.h.length)return null;const h=p.h.slice(-3);return Math.round(h.reduce((a,b)=>a+b,0)/h.length)}
const starN=m=>m==null?0:m>=90?3:m>=70?2:m>=40?1:0;
const starsHTML=m=>{const n=starN(m);return '★'.repeat(n)+`<span class="off">${'★'.repeat(3-n)}</span>`};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- sonido y confeti ---------- */
let actx;
function beep(kind){if(!store.sound)return;try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();
 const seq={ok:[[660,.08],[880,.12]],ko:[[240,.12],[180,.16]],win:[[523,.1],[659,.1],[784,.1],[1047,.22]],coin:[[988,.06],[1319,.12]]}[kind];let t=actx.currentTime;
 seq.forEach(([f,d])=>{const o=actx.createOscillator(),gn=actx.createGain();o.type='triangle';o.frequency.value=f;gn.gain.setValueAtTime(.13,t);gn.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(gn);gn.connect(actx.destination);o.start(t);o.stop(t+d+.02);t+=d})}catch(e){}}
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function confetti(){if(RM)return;const cv=$('fx'),ctx=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;
 const cols=['#0B7A43','#E3A21A','#C8402F','#1F5FD6','#F07A69','#4CC489'];
 const ps=Array.from({length:130},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight/3,vx:(Math.random()-.5)*13,vy:-Math.random()*13-4,r:Math.random()*7+4,c:pick(cols),a:Math.random()*6}));
 let f=0;(function step(){ctx.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.vy+=.33;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.a+=.18;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=p.c;ctx.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);ctx.restore()});
  if(++f<120)requestAnimationFrame(step);else ctx.clearRect(0,0,cv.width,cv.height)})()}

/* ---------- vistas ---------- */
const views=['vWelcome','vHome','vFicha','vQuiz','vResult','vLogros','vShop','vProg','vPeople'];
const navMap={navTemas:'vHome',navLogros:'vLogros',navShop:'vShop',navProg:'vProg'};
function show(id){views.forEach(v=>$(v).hidden=v!==id);Object.entries(navMap).forEach(([b,v])=>$(b).setAttribute('aria-pressed',v===id||(b==='navTemas'&&['vFicha','vQuiz','vResult'].includes(id))));window.scrollTo(0,0)}
let cur={},timer=null;
function stopTimer(){clearInterval(timer);timer=null}

function renderStats(){const g=me().g,n=levelOf(g.xp);
 $('hudLvlN').textContent=`Nv. ${n}`;$('hudXp').style.width=lvlPct(g.xp)+'%';
 $('hudCoinsBox').innerHTML=`${IC.coin}<b>${g.coins}</b>`;$('hudStreakBox').innerHTML=`${IC.flame}<b>${liveStreak(g)}</b>`;
 $('soundBtn').innerHTML=store.sound?IC.sndOn:IC.sndOff;$('soundBtn').setAttribute('aria-label',store.sound?'Quitar el sonido':'Poner el sonido');
 $('whoName').textContent=store.current;$('avatar').textContent=store.current.charAt(0).toUpperCase()}

function renderHome(){
 const p=me(),g=p.g,st=liveStreak(g);
 $('heroMascot').innerHTML=lince(g.wear,'happy');
 const msg=g.lastDay===TODAY()?`¡Ya has practicado hoy! Llevas ${st} día${st===1?'':'s'} seguido${st===1?'':'s'}.`
  :st>0?`¡Practica hoy para no perder tu racha de ${st} día${st===1?'':'s'}!`:`¡Hola, ${esc(store.current)}! Soy Lía. ¿Jugamos?`;
 $('heroMsg').innerHTML=`${msg}<small>Nivel ${levelOf(g.xp)} · ${lvlName(levelOf(g.xp))}</small>`;
 const doneToday=g.dailyDay===TODAY();
 $('dailyInfo').textContent=doneToday?'Hecho hoy. Vuelve mañana para otro.':'XP doble y 20 monedas de premio';
 $('dailyChip').innerHTML=doneToday?'<span class="chip done">✓ Hecho</span>':'';$('dailyChip').className='chip-wrap';
 const best=g.tb[p.course]||0;$('timedInfo').textContent=best?`Tu récord en ${p.course}º: ${best} aciertos`:'¿Cuántas aciertas en un minuto?';
 const nf=g.fails.length;$('failsBtn').disabled=nf===0;
 $('failsInfo').textContent=nf?`${nf} pregunta${nf===1?'':'s'} por corregir`:'¡No tienes fallos pendientes!';
 renderWeek();
 $('cycles').innerHTML=[[1,2],[3,4],[5,6]].map((cs,k)=>`<div class="cycle"><span>${['1.er','2.º','3.er'][k]} ciclo</span><div>${cs.map(c=>`<button class="course" data-c="${c}" aria-pressed="${p.course===c}" aria-label="${c}.º de Primaria">${c}º</button>`).join('')}</div></div>`).join('');
 $('subjects').innerHTML=Object.entries(S).map(([k,s])=>`<button class="subj" style="--c:${s.c}" data-s="${k}" aria-pressed="${p.subj===k}"><i></i>${s.n}</button>`).join('');
 const topics=DATA[p.course][p.subj],c=S[p.subj].c;
 const nowT=trimNow();
 const card=(t,i)=>{const m=mastery(p.course,p.subj,i);const n=(p.prog[pkey(p.course,p.subj,i)]||{n:0}).n;const cnt=t.g?'Ejercicios infinitos':`${t.q.length} preguntas`;
  return `<article class="topic" style="--c:${c}"><div><h3>${t.t}${m==null?'<span class="new">Nuevo</span>':''}</h3><div class="meta"><span class="stars" aria-label="${starN(m)} de 3 estrellas">${starsHTML(m)}</span> · ${m==null?cnt:`${m} % · ${n} práctica${n===1?'':'s'}`}</div></div>
  <div class="acts"><button class="btn" data-f="${i}">Repasar</button><button class="btn main" data-p="${i}">Jugar</button></div></article>`};
 const groups=[[],[],[]];topics.forEach((t,i)=>groups[triOf(p.course,p.subj,i)-1].push(card(t,i)));
 const order=nowT.t===0?[1,2,3]:[nowT.t,...[1,2,3].filter(x=>x<nowT.t).reverse(),...[1,2,3].filter(x=>x>nowT.t)];
 $('topics').innerHTML=`<div class="trimbar"><b>${nowT.label}</b><span>${nowT.sub}</span></div>`+order.map(tr=>{if(!groups[tr-1].length)return '';
  const kind=nowT.t===0?'':tr===nowT.t?'now':tr<nowT.t?'past':'next';
  const head=kind==='now'?`Ahora en clase · ${TRIN[tr]} trimestre`:kind==='past'?`Para repasar · ${TRIN[tr]} trimestre`:kind==='next'?`Próximamente · ${TRIN[tr]} trimestre`:`${TRIN[tr]} trimestre`;
  return `<div class="tgroup ${kind}"><div class="thead">${head}</div>${groups[tr-1].join('')}</div>`}).join('');
 const weak=[];Object.keys(S).forEach(s=>DATA[p.course][s].forEach((t,i)=>{const m=mastery(p.course,s,i);if(m!=null&&m<70)weak.push({s,i,m,t:t.t})}));
 weak.sort((a,b)=>a.m-b.m);
 $('refuerzo').innerHTML=weak.length?`<div class="reforzar"><h3>Para reforzar en ${p.course}º</h3><ul>${weak.slice(0,3).map(w=>`<li><button data-ws="${w.s}" data-wi="${w.i}">${w.t}</button> · ${S[w.s].n} · ${w.m} %</li>`).join('')}</ul></div>`:'';
 renderStats();
}
/* ---------- trimestres (calendario escolar de Andalucía) ---------- */
const TRIN={1:'1.er',2:'2.º',3:'3.er'};
function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da)}
function trimNow(d=new Date()){const y=d.getMonth()>=8?d.getFullYear():d.getFullYear()-1;
 const start=new Date(y,8,10),xmas=new Date(y,11,23),jan=new Date(y+1,0,8),palm=new Date(easter(y+1).getTime()-7*864e5),end=new Date(y+1,5,23);
 const f=x=>x.toLocaleDateString('es-ES',{day:'numeric',month:'long'});
 if(d<start)return {t:1,label:'El curso empieza pronto',sub:`Clases desde el ${f(start)}. Puedes ir adelantando el 1.er trimestre.`};
 if(d<xmas)return {t:1,label:'1.er trimestre',sub:`Hasta las vacaciones de Navidad (${f(xmas)})`};
 if(d<jan)return {t:1,label:'Vacaciones de Navidad',sub:'Buen momento para repasar el 1.er trimestre'};
 if(d<palm)return {t:2,label:'2.º trimestre',sub:`Hasta Semana Santa (${f(palm)})`};
 if(d<end)return {t:3,label:'3.er trimestre',sub:'Hasta final de curso (22 de junio)'};
 return {t:0,label:'Vacaciones de verano',sub:'Repasa todo el curso o adelanta el siguiente'}}
/* trimestre de cada tema: el indicado en los datos (según el libro del colegio) o, si no, el orden del tema */
function triOf(c,s,i){const t=DATA[c][s][i];if(t.tri)return t.tri;const n=DATA[c][s].length;return Math.min(3,Math.floor(i*3/n)+1)}
function seenTopics(c,s){const T=trimNow().t;return DATA[c][s].map((t,i)=>i).filter(i=>T===0||triOf(c,s,i)<=T)}
function weekText(g){const {now,last}=weekOf(g);
 if(last>0&&now>last)return {t:`¡Semana superada! ${now} aciertos, un ${Math.round((now-last)/last*100)} % más que la pasada.`,pct:100,sub:`La semana pasada: ${last}`};
 if(last>0)return {t:`Te faltan ${last+1-now} aciertos para superar la semana pasada`,pct:Math.round(now/(last+1)*100),sub:`Esta semana: ${now} · La pasada: ${last} · Premio: 30 monedas`};
 return {t:`Meta de la semana: 30 aciertos`,pct:Math.min(100,Math.round(now/30*100)),sub:`Llevas ${now}. La semana que viene, ¡intenta superarte!`}}
function renderWeek(){const w=weekText(me().g);
 $('weekBox').innerHTML=`<div class="wtop"><b>${w.t}</b></div><div class="bar"><b style="width:${w.pct}%"></b></div><small>${w.sub}</small>`}
function openFicha(i){const p=me(),t=DATA[p.course][p.subj][i];cur.topicIdx=i;
 document.querySelector('#vFicha .sheet').style.setProperty('--c',S[p.subj].c);
 $('fichaEyebrow').textContent=`${p.course}º · ${S[p.subj].n} · Ficha de repaso`;$('fichaTitle').textContent=t.t;
 $('fichaList').innerHTML=t.f.map(x=>`<li>${x}</li>`).join('');show('vFicha')}

/* ---------- partidas ---------- */
function setQuizHead(text,color){$('quizSheet').style.setProperty('--c',color);$('quizEyebrow').textContent=text}
function baseCur(mode){return {mode,i:0,score:0,combo:0,xp:0,coins:0,xp0:me().g.xp,over:false,locked:false}}
function startTopic(i){const p=me(),t=DATA[p.course][p.subj][i];stopTimer();
 cur={...baseCur('topic'),topicIdx:i,items:buildSession(t)};p.g.subjects[p.subj]=1;
 setQuizHead(`${p.course}º · ${S[p.subj].n} · ${t.t}`,S[p.subj].c);show('vQuiz');renderQ()}
function startDaily(){const p=me(),c=p.course,seen=new Set(),items=[],subs=['lengua','mates','medio'];let guard=0;stopTimer();
 while(items.length<10&&guard++<300){const s=subs[items.length%3],t=DATA[c][s][pick(seenTopics(c,s))];const it=t.g?t.g():mkStatic(pick(t.q));if(seen.has(it.q))continue;seen.add(it.q);items.push({...prepMC(it),s})}
 cur={...baseCur('daily'),items:shuffle(items),first:p.g.dailyDay!==TODAY()};subs.forEach(s=>p.g.subjects[s]=1);
 setQuizHead(`${c}º · Reto del día${cur.first?' · XP doble':''}`,'var(--star)');show('vQuiz');renderQ()}
function startTimed(){const p=me(),gens=DATA[p.course].mates.map(t=>t.g);stopTimer();
 cur={...baseCur('timed'),gens,items:[prepMC(pick(gens)())],answered:0,end:Date.now()+60000};p.g.subjects.mates=1;
 setQuizHead(`${p.course}º · Contrarreloj · Matemáticas`,'var(--flame)');show('vQuiz');renderQ();timer=setInterval(tick,200);tick()}
function startFails(){const p=me(),g=p.g;stopTimer();if(!g.fails.length){renderHome();show('vHome');return}
 cur={...baseCur('fails'),items:shuffle(g.fails).slice(0,8).map(f=>prepMC({...f})),fixed:0};
 setQuizHead('Repasa tus fallos','var(--lengua)');show('vQuiz');renderQ()}
function tick(){const left=Math.max(0,cur.end-Date.now());$('qBar').style.width=(left/600)+'%';$('qCount').textContent=`Quedan ${Math.ceil(left/1000)} s`;
 if(left<=0&&!cur.over){cur.over=true;stopTimer();finish()}}
function renderQ(){const it=cur.items[cur.i];cur.locked=false;
 if(cur.mode!=='timed'){const n=cur.items.length;$('qCount').textContent=`Pregunta ${cur.i+1} de ${n}`;$('qBar').style.width=`${cur.i/n*100}%`}
 $('qScore').textContent=`${cur.score} acierto${cur.score===1?'':'s'} · ${cur.xp} XP`;
 if(it.s){$('qTag').hidden=false;$('qTag').textContent=S[it.s].n;$('qTag').style.color=S[it.s].c}else $('qTag').hidden=true;
 $('qText').textContent=it.q;$('qFb').innerHTML='';$('qNext').hidden=true;
 if(it.o){$('qBody').innerHTML=`<div class="opts">${it.o.map((o,k)=>`<button class="opt" data-o="${k}">${esc(o)}</button>`).join('')}</div>`}
 else{const numeric=('num' in it);
  $('qBody').innerHTML=`<form class="answer" id="ansForm"><input id="ans" ${numeric?'inputmode="decimal"':''} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Tu respuesta" placeholder="Tu respuesta"><button class="btn main">Comprobar</button></form>`;
  setTimeout(()=>{try{$('ans').focus({preventScroll:true})}catch(e){}},30)}}
function setCombo(){const c=$('qCombo');if(cur.combo>=2){c.hidden=false;c.textContent=`Racha ×${cur.combo}`;c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop')}else c.hidden=true}
function answer(v){if(cur.locked||cur.over)return;cur.locked=true;const it=cur.items[cur.i],g=me().g;const ok=check(it,v);let gain=0;
 if(ok){cur.score++;cur.combo++;g.correct++;g.bestCombo=Math.max(g.bestCombo,cur.combo);
  gain=cur.mode==='timed'?5:10+(cur.combo>=3?5:0);if(cur.mode==='daily'&&cur.first)gain*=2;cur.xp+=gain;g.xp+=gain;cur.coins++;g.coins++;beep('ok');
  if(dropFail(g,it.q)&&cur.mode==='fails'){g.rescued++;cur.fixed++}
  const wk=WEEK();g.weeks[wk]=(g.weeks[wk]||0)+1;const ks=Object.keys(g.weeks).sort();while(ks.length>12)delete g.weeks[ks.shift()];
  const {now,last}=weekOf(g);if(last>0&&now===last+1&&g.beatWeek!==wk){g.beatWeek=wk;g.coins+=30;cur.coins+=30;cur.beat=true}}
 else{cur.combo=0;beep('ko');addFail(g,it,it.s||(cur.mode==='timed'?'mates':me().subj))}
 if(cur.mode==='timed')cur.answered++;
 if(it.o){document.querySelectorAll('.opt').forEach(b=>{b.disabled=true;const k=+b.dataset.o;if(k===it.a)b.classList.add('right');else if(k===v)b.classList.add('wrong')})}
 else{$('ans').disabled=true;document.querySelector('#ansForm button').disabled=true}
 const expl=it.e&&!(ok&&cur.mode==='timed')?`<small>${esc(it.e)}</small>`:'';
 $('qFb').innerHTML=`<div class="fb ${ok?'ok':'ko'}"><div class="mascot${ok?' hop':''}">${lince(g.wear,ok?'happy':'oops')}</div><div>${ok?`${pick(OKMSG)}<span class="gain">+${gain} XP</span>${cur.combo>=3&&cur.mode!=='timed'?'<small>¡Bonus de racha!</small>':''}${cur.mode==='fails'?'<small>¡Fallo corregido! Ya no volverá a salir aquí.</small>':''}${cur.beat&&!cur.beatShown?(cur.beatShown=true,'<small>¡Has superado tu semana pasada! +30 monedas</small>'):''}`:`Era: ${esc(shown(it))}<small>${pick(KOMSG)}</small>`}${expl}</div></div>`;
 if(cur.beat&&cur.beatShown===true){cur.beatShown=2;confetti();beep('win')}
 setCombo();$('qScore').textContent=`${cur.score} acierto${cur.score===1?'':'s'} · ${cur.xp} XP`;renderStats();save();
 if(cur.mode==='timed'){setTimeout(()=>{if(cur.over||cur.mode!=='timed')return;cur.i++;cur.items.push(prepMC(pick(cur.gens)()));renderQ()},ok?450:1300)}
 else{$('qNext').hidden=false;$('qNext').textContent=cur.i===cur.items.length-1?'Ver resultado':'Siguiente';setTimeout(()=>{try{$('qNext').focus({preventScroll:true})}catch(e){}},30)}}

function finish(){stopTimer();cur.over=true;
 const p=me(),g=p.g;let bonusXp=0,bonusCoins=0,record=false,title,eyebrow,color,msg,stars='';
 const n=cur.mode==='timed'?cur.answered:cur.items.length;const pct=n?Math.round(cur.score/n*100):0;
 if(cur.mode==='topic'){const k=pkey(p.course,p.subj,cur.topicIdx),rec=p.prog[k]||{h:[],n:0};rec.h.push(pct);rec.h=rec.h.slice(-10);rec.n++;p.prog[k]=rec;
  const m=mastery(p.course,p.subj,cur.topicIdx);if(m>=90)g.stars3=true;stars=`<div class="stars" aria-label="${starN(m)} de 3 estrellas">${starsHTML(m)}</div>`;
  if(pct===100){g.perfects++;bonusXp=20;bonusCoins=5}
  title=DATA[p.course][p.subj][cur.topicIdx].t;eyebrow=`${p.course}º · ${S[p.subj].n}`;color=S[p.subj].c}
 else if(cur.mode==='daily'){if(cur.first){g.dailyDay=TODAY();g.dailyCount++;bonusCoins=20}if(pct===100){g.perfects++;bonusXp=20}
  title='Reto del día';eyebrow=`${p.course}º · Todas las asignaturas`;color='var(--star)'}
 else if(cur.mode==='fails'){if(pct===100){g.perfects++;bonusXp=20}
  title='Repasa tus fallos';eyebrow=`Repaso · ${g.fails.length} pendiente${g.fails.length===1?'':'s'}`;color='var(--lengua)'}
 else{const prev=g.tb[p.course]||0;if(cur.score>prev&&cur.score>0){g.tb[p.course]=cur.score;record=true}g.timedBest=Math.max(g.timedBest,cur.score);
  title='Contrarreloj';eyebrow=`${p.course}º · Matemáticas · 60 segundos`;color='var(--flame)'}
 g.xp+=bonusXp;g.coins+=bonusCoins;g.sessions++;touchDay(g);
 const got=newBadges(g);save();
 const lv0=levelOf(cur.xp0),lv1=levelOf(g.xp);
 msg=cur.mode==='fails'?(cur.fixed?`Has corregido ${cur.fixed} fallo${cur.fixed===1?'':'s'}. ${g.fails.length?`Te quedan ${g.fails.length}.`:'¡Ya no te queda ninguno!'}`:'Esta vez no ha salido, pero cada repaso cuenta. Mira las explicaciones y vuelve a intentarlo.')
  :cur.mode==='timed'?(record?'¡Has batido tu récord! Lía está alucinando.':cur.score>=10?'¡Qué velocidad! Intenta superar tu récord.':'¡Buen calentamiento! Cuanto más practiques, más rápido irás.')
  :pct===100?'¡Perfecto! Ni un solo fallo.':pct>=70?'¡Muy buen trabajo! Repite para llegar a las tres estrellas.':pct>=40?'Vas por buen camino. Repasa la ficha y vuelve a intentarlo.':'Lee la ficha con calma y vuelve a jugar. ¡Tú puedes!';
 const nextXP=lvlXP(lv1+1);
 $('resBox').style.setProperty('--c',color);
 $('resBox').innerHTML=`<div class="res-top"><div class="mascot big${pct>=70||record?' hop':''}">${lince(g.wear,pct>=40||record?'happy':'ok')}</div><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p>${msg}</p></div></div>
  <div class="score-row"><div class="big">${cur.mode==='timed'?cur.score:`${cur.score}/${n}`}</div>${cur.mode==='timed'?'<div>aciertos<br>en 60 s</div>':''}${stars}</div>
  <div class="rewards"><span class="rw">+${cur.xp+bonusXp} XP</span><span class="rw">${IC.coin} +${cur.coins+bonusCoins}</span>${bonusXp?'<span class="rw hot">Perfecta +20 XP</span>':''}${cur.mode==='daily'&&cur.first?'<span class="rw hot">Premio del reto</span>':''}${record?'<span class="rw hot">¡Nuevo récord!</span>':''}${cur.beat?'<span class="rw hot">Semana superada +30</span>':''}</div>
  <div class="week" style="margin-top:14px">${(w=>`<div class="wtop"><b>${w.t}</b></div><div class="bar"><b style="width:${w.pct}%"></b></div><small>${w.sub}</small>`)(weekText(g))}</div>
  ${lv1>lv0?`<div class="levelup">¡Subes al nivel ${lv1}: ${lvlName(lv1)}!</div>`:''}
  <div class="lvl-line"><b>Nivel ${lv1} · ${lvlName(lv1)}</b><div class="bar" style="--c:var(--accent)"><b style="width:${lvlPct(g.xp)}%"></b></div><small>${g.xp} XP · faltan ${nextXP-g.xp} para el nivel ${lv1+1}</small></div>
  ${got.length?`<div class="newbadges"><h3>¡Logro nuevo!</h3><div class="badges">${got.map(([nm,d])=>`<div class="badge on">${MEDAL}<div><b>${nm}</b><small>${d}</small></div></div>`).join('')}</div></div>`:''}
  <div class="row"><button class="btn main" data-act="again">Jugar otra vez</button>${cur.mode==='topic'?'<button class="btn" data-act="ficha">Repasar la ficha</button>':''}<button class="btn" data-act="home">Volver</button></div>`;
 show('vResult');renderStats();
 if(cur.mode==='fails'&&!g.fails.length){const a=document.querySelector('[data-act="again"]');if(a)a.hidden=true}
 if(pct===100||lv1>lv0||got.length||record){confetti();beep('win')}}

/* ---------- logros, tienda, progreso, estudiantes ---------- */
function renderLogros(){const g=me().g,n=levelOf(g.xp);
 $('logrosBox').innerHTML=`<div class="lvlcard"><div class="mascot big">${lince(g.wear,'happy')}</div><div class="lvlinfo"><div class="eyebrow" style="--c:var(--accent)">Nivel ${n} · ${g.xp} XP</div><h2>${lvlName(n)}</h2><div class="bar"><b style="width:${lvlPct(g.xp)}%"></b></div><small>Faltan ${lvlXP(n+1)-g.xp} XP para el nivel ${n+1}</small></div></div>
 <div class="label">Tu olivo crece contigo</div>
 <div class="path">${LEVELS.map((L,i)=>`<span class="${i+1<=n?'on':''}${i+1===Math.min(n,LEVELS.length)?' now':''}">${i+1}. ${L}</span>`).join('')}</div>
 <div class="label">Logros · ${g.badges.length} de ${BADGES.length}</div>
 <div class="badges">${BADGES.map(([id,nm,d])=>`<div class="badge${g.badges.includes(id)?' on':''}">${MEDAL}<div><b>${nm}</b><small>${d}</small></div></div>`).join('')}</div>
 <div class="label">Mis números</div>
 <div class="nums">${[[g.correct,'aciertos'],[g.sessions,'partidas'],[g.perfects,'perfectas'],[g.bestCombo,'mejor racha'],[g.timedBest,'récord contrarreloj'],[g.dailyCount,'retos del día']].map(([v,l])=>`<div class="num"><b>${fmt(v)}</b><small>${l}</small></div>`).join('')}</div>`}
function renderShop(){const g=me().g,lv=levelOf(g.xp);
 const items=SHOP.filter(x=>x[3]===shopTab);
 $('shopBox').innerHTML=`<div class="shop-top"><div class="mascot big">${lince(g.wear,'happy')}</div><div><h2>La tienda de Lía</h2><p>Gana monedas acertando preguntas y viste a Lía como quieras. ¡Al subir de nivel se desbloquean cosas nuevas!</p><span class="pill">${IC.coin}<b>${g.coins}</b> monedas</span></div></div>
 <div class="shoptabs">${Object.entries(SHOPCAT).map(([k,n])=>`<button data-shoptab="${k}" aria-pressed="${k===shopTab}">${n}</button>`).join('')}</div>
 <div class="items">${shopTab==='pel'?`<div class="item${!g.wear.some(w=>PELAJE[w])?' on':''}"><div class="mascot sm">${lince([],'ok')}</div><b>Dorado clásico</b>${g.wear.some(w=>PELAJE[w])?`<button class="btn main" style="--c:var(--accent)" data-unfur="1">Ponérselo</button>`:'<span class="lock">Puesto</span>'}</div>`:''}
 ${items.map(([id,nm,pr,cat,lvl])=>{const own=g.owned.includes(id),on=g.wear.includes(id),locked=lv<lvl;
  const prev=cat==='acc'?[id]:[id];
  return `<div class="item${on?' on':''}"><div class="mascot sm">${lince(prev,'ok')}</div><b>${nm}</b>${own?`<button class="btn${on?'':' main'}" style="--c:var(--accent)" data-wear="${id}">${on?'Quitárselo':'Ponérselo'}</button>`
   :locked?`<span class="lock">Se desbloquea en el nivel ${lvl}</span>`
   :`<button class="btn main" style="--c:var(--ink)" data-buy="${id}" ${g.coins<pr?'disabled':''} aria-label="Comprar ${nm} por ${pr} monedas">${IC.coin} ${pr}</button>`}</div>`}).join('')}</div>`}
function renderProg(){const p=me();$('progEyebrow').textContent=`${store.current} · ${p.course}º de Primaria`;
 const m0=monday(),wk=Array.from({length:6},(_,i)=>{const t=m0-(5-i)*7*864e5,k=dayStr(t),d=new Date(t);return {v:p.g.weeks[k]||0,l:`${d.getDate()}/${d.getMonth()+1}`,now:i===5}});
 const mx=Math.max(10,...wk.map(w=>w.v));
 $('weekChart').innerHTML=`<div class="wchart" role="img" aria-label="Aciertos de las últimas 6 semanas: ${wk.map(w=>w.v).join(', ')}">${wk.map(w=>`<div class="wcol${w.now?' now':''}"><span>${w.v}</span><i style="height:${Math.round(w.v/mx*100)}%"></i></div>`).join('')}</div>
  <div class="wlabels">${wk.map(w=>`<span>${w.now?'Esta':'Sem. '+w.l}</span>`).join('')}</div>`;
 $('progBody').innerHTML=Object.entries(S).map(([s,sv])=>{const rows=DATA[p.course][s].map((t,i)=>({t:t.t,m:mastery(p.course,s,i)}));
  const done=rows.filter(r=>r.m!=null);const avg=done.length?Math.round(done.reduce((a,r)=>a+r.m,0)/done.length):null;
  return `<div class="prog-subj" style="--c:${sv.c}"><h3>${sv.n}<small style="color:var(--muted);font-family:var(--body);font-size:.85rem">${avg==null?'Sin partidas':`Media ${avg} %`}</small></h3>
  ${rows.map(r=>`<div class="prow"><span>${r.t}</span><div class="bar"><b style="width:${r.m||0}%"></b></div><span>${r.m==null?'—':r.m+' %'}</span></div>`).join('')}</div>`}).join('')}
function renderPeople(){if(typeof renderVoices==='function')renderVoices();$('peopleList').innerHTML=Object.keys(store.people).map(n=>{const q=store.people[n];
 return `<div class="person" aria-current="${n===store.current}"><span><b>${esc(n)}</b> · ${q.course}º · Nivel ${levelOf(q.g.xp)}</span>${n===store.current?'<span style="color:var(--accent);font-weight:700">Jugando</span>':`<button class="btn" data-pick="${encodeURIComponent(n)}">Elegir</button>`}</div>`}).join('')}

/* ---------- lectura en voz alta ---------- */
const TTS='speechSynthesis' in window&&typeof SpeechSynthesisUtterance!=='undefined';
let ttsVoice=null,ttsOn=false,ttsId=0;
/* iOS trae voces "de broma" (Eddy, Flo, Rocko…) que suenan muy robóticas: se evitan.
   Se prefieren las voces mejoradas o premium y, entre ellas, las de España. */
const NOVELTY=/eddy|flo\b|grandma|grandpa|abuel|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|junior|ralph|kathy|fred/i;
function voiceScore(v){let s=0;const n=v.name||'',l=(v.lang||'').replace('_','-');
 if(!/^es/i.test(l))return -1;if(NOVELTY.test(n))return 0;
 s+=10;if(/^es-ES/i.test(l))s+=6;else if(/^es-(MX|US)/i.test(l))s+=3;
 if(/premium/i.test(n))s+=30;if(/enhanced|mejorad|natural|neural|siri/i.test(n))s+=20;
 if(/m[oó]nica|marisol|paulina|elvira|helena|lucia|luc[ií]a|carmen/i.test(n))s+=8;
 if(/google/i.test(n))s+=5;if(v.localService)s+=1;return s}
function esVoices(){try{return speechSynthesis.getVoices().filter(v=>voiceScore(v)>0).sort((a,b)=>voiceScore(b)-voiceScore(a))}catch(e){return []}}
function pickVoice(){if(!TTS)return;const vs=esVoices();const want=store.voiceName;
 ttsVoice=(want&&vs.find(v=>v.name===want))||vs[0]||null;if(typeof renderVoices==='function')renderVoices()}
if(TTS){pickVoice();try{speechSynthesis.addEventListener('voiceschanged',pickVoice)}catch(e){}}
const SUP={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6'};
function speakable(t){return String(t)
 .replace(/m\.c\.m\./g,'mínimo común múltiplo').replace(/m\.c\.d\./g,'máximo común divisor')
 .replace(/\bCD\b/g,'complemento directo').replace(/\bCI\b/g,'complemento indirecto').replace(/\bCC\b/g,'complemento circunstancial')
 .replace(/cm²/g,'centímetros cuadrados').replace(/10([⁰¹²³⁴⁵⁶])/g,(m,s)=>`10 elevado a ${SUP[s]}`)
 .replace(/(\d)\s*²/g,'$1 al cuadrado').replace(/(\d)\s*³/g,'$1 al cubo').replace(/√\s*(\d+)/g,'raíz cuadrada de $1')
 .replace(/\s*×\s*/g,' por ').replace(/(\d)\s*:\s*(\d)/g,'$1 entre $2')
 .replace(/\s*−\s*/g,' menos ').replace(/\s\+\s/g,' más ')
 .replace(/\?\/(\d+)/g,'un número partido por $1').replace(/=\s*$/,', ¿cuánto es?').replace(/\s=\s/g,' es igual a ')
 .replace(/_/g,'… ').replace(/[«»"]/g,'')}
function setSpeakBtns(on){['qSpeak','fichaSpeak'].forEach(id=>{const b=$(id);if(!b)return;b.setAttribute('aria-pressed',on);b.innerHTML=`${on?IC.sndOff:IC.sndOn} ${on?'Parar':'Escuchar'}`})}
function ttsStop(){ttsId++;if(TTS){try{speechSynthesis.cancel()}catch(e){}}ttsOn=false;setSpeakBtns(false)}
function speak(text){if(!TTS||!text)return;ttsStop();const id=ttsId;
 try{const u=new SpeechSynthesisUtterance(speakable(text));u.lang=ttsVoice?ttsVoice.lang:'es-ES';if(ttsVoice)u.voice=ttsVoice;u.rate=store.voiceRate||.95;u.pitch=1;
  u.onend=u.onerror=()=>{if(id===ttsId){ttsOn=false;setSpeakBtns(false)}};ttsOn=true;setSpeakBtns(true);speechSynthesis.speak(u)}catch(e){ttsOn=false;setSpeakBtns(false)}}
const ttsAuto=()=>{const g=me().g;return g.ttsAuto==null?me().course<=2:!!g.ttsAuto};
function readQuestion(){const it=cur.items&&cur.items[cur.i];if(!it)return;
 const q=speakable(it.q);
 speak(it.o?`${q} ${it.o.length>1?it.o.slice(0,-1).join(', ')+' o '+it.o[it.o.length-1]:it.o[0]}`:`${q} Escribe tu respuesta.`)}
const _renderQ=renderQ;
renderQ=function(){_renderQ();ttsStop();const row=$('ttsRow');if(!TTS||cur.mode==='timed'){row.hidden=true;return}
 row.hidden=false;$('ttsAuto').checked=ttsAuto();if(ttsAuto())readQuestion()};
const _answer=answer;
answer=function(v){const fresh=!(cur.locked||cur.over);ttsStop();_answer(v);
 if(!fresh||!TTS||cur.mode==='timed'||!ttsAuto())return;const it=cur.items[cur.i],box=$('qFb').querySelector('.fb');if(!box)return;
 speak(box.classList.contains('ok')?(box.querySelector('.fb>div:last-child').firstChild||{}).textContent:`Era: ${shown(it)}. ${it.e||''}`)};
const _openFicha=openFicha;
openFicha=function(i){_openFicha(i);$('fichaSpeak').hidden=!TTS;ttsStop()};
const _show=show;
show=function(id){if(TTS)ttsStop();_show(id)};

function renderVoices(){const box=$('voiceBox');if(!box)return;if(!TTS){box.hidden=true;return}
 const vs=esVoices();box.hidden=false;
 if(!vs.length){$('voiceList').innerHTML='<p>Este dispositivo no tiene voces en español. Sigue los pasos de abajo para descargar una.</p>';return}
 const cur=ttsVoice&&ttsVoice.name;
 $('voiceList').innerHTML=vs.slice(0,8).map((v,i)=>{const good=/premium|enhanced|mejorad|natural|neural|siri/i.test(v.name);
  return `<div class="vitem${v.name===cur?' on':''}"><label><input type="radio" name="voice" value="${esc(v.name)}" ${v.name===cur?'checked':''}><span>${esc(v.name.replace(/\s*\(.*\)\s*$/,''))} <small>${esc(v.lang)}</small></span>${good?'<span class="vbadge">Mejorada</span>':''}</label><button class="btn" data-tryvoice="${esc(v.name)}">Probar</button></div>`}).join('');
 $('voiceRate').value=store.voiceRate||.95;$('voiceRateVal').textContent=`${Math.round((store.voiceRate||.95)*100)} %`}
function tryVoice(name){const v=esVoices().find(x=>x.name===name);if(!v)return;const keep=ttsVoice;ttsVoice=v;speak('¡Hola! Soy Lía. ¿Cuánto es siete por ocho?');ttsVoice=keep}

/* ---------- copia de seguridad ---------- */
const backupText=()=>JSON.stringify({app:'lia',v:1,exported:new Date().toISOString(),store});
function note(txt,ok=true){$('backupMsg').innerHTML=`<div class="note ${ok?'ok':'ko'}">${esc(txt)}</div>`}
async function exportBackup(){const text=backupText();let dl=null;
 try{dl=window.claude&&window.claude.use?await window.claude.use('downloads'):null}catch(e){}
 if(!dl){const r=await fileFallback(text,`lia-copia-${TODAY()}.json`);
  if(r==='ok')note('Copia lista. Guárdala en Archivos, iCloud o envíatela.');else if(r==='cancel')note('Copia cancelada.',false);
  else{showCode(text);note('Aquí no se puede descargar el archivo. Usa el código de abajo.',false)}return}
 try{await dl.save({filename:`lia-copia-${TODAY()}.json`,data:text});note('Copia descargada. Guárdala en un lugar seguro.')}
 catch(e){if(e&&e.code==='declined')note('Descarga cancelada.',false);else if(e&&e.code==='rate_limited')note('Espera un momento y vuelve a intentarlo.',false);
  else{showCode(text);note('No se pudo descargar. Usa el código de abajo.',false)}}}
/* fuera de Claude (app en la pantalla de inicio): compartir el archivo o descargarlo */
async function fileFallback(text,name){
 try{const file=new File([text],name,{type:'application/json'});
  if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Copia de Lía'});return 'ok'}}
 catch(e){if(e&&e.name==='AbortError')return 'cancel'}
 if(window.claude)return 'no';
 try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'application/json'}));a.download=name;document.body.appendChild(a);a.click();a.remove();return 'ok'}catch(e){return 'no'}}
function showCode(text){$('codeArea').value=text;$('codeBox').open=true}
function importBackup(text){let data;try{data=JSON.parse(text)}catch(e){note('Ese archivo o código no es una copia de Lía.',false);return}
 const s=data&&(data.app==='lia'||data.app==='micuaderno')?data.store:null;
 if(!s||!s.people||typeof s.people!=='object'){note('Ese archivo o código no es una copia de Lía.',false);return}
 const added=[],kept=[];
 Object.entries(s.people).forEach(([n,q])=>{if(!q||typeof q!=='object')return;n=String(n).slice(0,20);if(!n)return;
  const inc={course:[1,2,3,4,5,6].includes(q.course)?q.course:1,subj:S[q.subj]?q.subj:'lengua',prog:q.prog&&typeof q.prog==='object'?q.prog:{},g:Object.assign(blankG(),q.g||{})};
  const here=store.people[n];if(!here||(inc.g.xp||0)>(here.g.xp||0)){store.people[n]=inc;added.push(n)}else kept.push(n)});
 if(!added.length&&!kept.length){note('La copia no tiene estudiantes.',false);return}
 save();renderPeople();renderStats();
 note(`${added.length?`Cargado: ${added.join(', ')}.`:''}${kept.length?` Sin cambios (aquí ya había más progreso): ${kept.join(', ')}.`:''}`.trim())}

/* ---------- eventos ---------- */
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset,p=me();
 if(d.c){p.course=+d.c;save();renderHome()}
 else if(d.s){p.subj=d.s;save();renderHome()}
 else if(d.f!=null)openFicha(+d.f);
 else if(d.p!=null)startTopic(+d.p);
 else if(d.ws){p.subj=d.ws;save();renderHome();startTopic(+d.wi)}
 else if(d.o!=null&&!b.disabled)answer(+d.o);
 else if(d.pick){store.current=decodeURIComponent(d.pick);save();renderHome();show('vHome')}
 else if(d.shoptab){shopTab=d.shoptab;renderShop()}
 else if(d.unfur){p.g.wear=p.g.wear.filter(w=>!PELAJE[w]);save();renderShop()}
 else if(d.buy){const it=SHOP.find(x=>x[0]===d.buy);if(it&&p.g.coins>=it[2]&&levelOf(p.g.xp)>=it[4]&&!p.g.owned.includes(it[0])){p.g.coins-=it[2];p.g.owned.push(it[0]);wearItem(p.g,it[0]);beep('coin');const got=newBadges(p.g);save();renderShop();renderStats();if(got.length){confetti();beep('win')}}}
 else if(d.wear){wearItem(p.g,d.wear);save();renderShop()}
 else if(d.act==='again'){cur.mode==='daily'?startDaily():cur.mode==='timed'?startTimed():cur.mode==='fails'?startFails():startTopic(cur.topicIdx)}
 else if(d.act==='ficha')openFicha(cur.topicIdx);
 else if(d.act==='home'){renderHome();show('vHome')}
});
document.addEventListener('submit',e=>{e.preventDefault();
 if(e.target.id==='ansForm'){const v=$('ans').value;if(v.trim())answer(v)}
 if(e.target.id==='addForm'){const n=$('newName').value.trim().slice(0,20);if(!n)return;
  if(!store.people[n])store.people[n]=newPerson(me().course);store.current=n;save();$('newName').value='';renderHome();show('vHome')}
});
$('qNext').onclick=()=>{cur.i++;if(cur.i>=cur.items.length)finish();else renderQ()};
$('quizBack').onclick=()=>{stopTimer();cur.over=true;renderHome();show('vHome')};
$('fichaBack').onclick=$('peopleBack').onclick=()=>{renderHome();show('vHome')};
$('fichaPractice').onclick=()=>startTopic(cur.topicIdx);
$('dailyBtn').onclick=startDaily;
$('timedBtn').onclick=startTimed;
$('failsBtn').onclick=startFails;
$('qSpeak').onclick=()=>{ttsOn?ttsStop():readQuestion()};
$('fichaSpeak').onclick=()=>{if(ttsOn){ttsStop();return}const p=me(),t=DATA[p.course][p.subj][cur.topicIdx];speak(`${t.t}. ${t.f.join(' ')}`)};
$('ttsAuto').onchange=e=>{me().g.ttsAuto=e.target.checked;save();if(e.target.checked)readQuestion();else ttsStop()};
setSpeakBtns(false);
document.addEventListener('change',e=>{if(e.target.name==='voice'){store.voiceName=e.target.value;save();pickVoice();tryVoice(e.target.value)}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-tryvoice]');if(b)tryVoice(b.dataset.tryvoice)});
$('voiceRate').oninput=e=>{store.voiceRate=+e.target.value;$('voiceRateVal').textContent=`${Math.round(store.voiceRate*100)} %`};
$('voiceRate').onchange=()=>{save();speak('Así leeré las preguntas.')};
pickVoice();
$('exportBtn').onclick=exportBackup;
$('importFile').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>importBackup(String(r.result));r.onerror=()=>note('No se pudo leer el archivo.',false);r.readAsText(f);e.target.value=''};
$('codeCopy').onclick=()=>{const t=$('codeArea').value||backupText();$('codeArea').value=t;
 try{navigator.clipboard.writeText(t).then(()=>note('Código copiado.'),()=>{$('codeArea').select();note('Selecciona el código y cópialo.',false)})}catch(e){$('codeArea').select();note('Selecciona el código y cópialo.',false)}};
$('codeBox').ontoggle=()=>{if($('codeBox').open&&!$('codeArea').value)$('codeArea').value=backupText()};
$('codeLoad').onclick=()=>{const t=$('codeArea').value.trim();if(t)importBackup(t);else note('Pega primero el código.',false)};
$('navTemas').onclick=()=>{stopTimer();cur.over=true;renderHome();show('vHome')};
$('navLogros').onclick=$('hudLvl').onclick=()=>{stopTimer();cur.over=true;renderLogros();show('vLogros')};
$('navShop').onclick=()=>{stopTimer();cur.over=true;renderShop();show('vShop')};
$('navProg').onclick=()=>{stopTimer();cur.over=true;renderProg();show('vProg')};
$('whoBtn').onclick=()=>{stopTimer();cur.over=true;renderPeople();show('vPeople')};
$('soundBtn').onclick=()=>{store.sound=!store.sound;save();renderStats();beep('coin')};
$('logo').innerHTML=lince([],'happy');
renderHome();
</script>
