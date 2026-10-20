<style>
/* v6 · Layout: barra superior fina con estadísticas, camino de nodos en zigzag, barra de pestañas abajo; las partidas ocupan toda la pantalla */
:root{--tab-h:64px;--path-step:46px;--on:#FFFFFF}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--on:#111827}}
:root[data-theme="dark"]{--on:#111827}
body{padding-bottom:calc(var(--tab-h) + env(safe-area-inset-bottom,0px) + 8px)}
body.lesson{padding-bottom:0}
.wrap{padding-block:8px 32px}
/* cabecera */
.top{position:sticky;top:env(safe-area-inset-top,0px);z-index:20;background:var(--paper);margin-inline:-16px;padding:8px 16px;border-bottom:1.5px solid var(--line);gap:8px;flex-wrap:nowrap}
.brand{border:none;background:none;padding:0;display:flex;align-items:center;gap:8px;cursor:pointer}
.logo{width:38px;height:38px;border-radius:11px;padding:2px}
.brand-name{font-family:var(--display);font-weight:800;font-size:1.5rem;color:var(--ink)}
.hud{flex-wrap:nowrap;gap:4px;margin-left:auto}
.pill{padding:4px 8px;font-size:.95rem}
.pill.goal{gap:4px}
.goal svg{width:22px;height:22px;transform:rotate(-90deg)}
.goal .gtrack{stroke:var(--line)}.goal .gfill{stroke:var(--accent);transition:stroke-dashoffset .5s}
.goal.done .gfill{stroke:var(--star)}
.who{padding:3px}
#whoName{display:none}
@media (max-width:420px){#hudLvl,#soundBtn{display:none}.pill{padding:4px 7px}}
@media (min-width:700px){#whoName{display:inline}}
body.lesson .top,body.lesson .tabbar,body.lesson .foot{display:none}
body:not([data-view="vPeople"]) .foot{display:none}
/* pestañas abajo */
.tabbar{position:fixed;left:0;right:0;bottom:0;z-index:30;display:grid;grid-template-columns:repeat(5,1fr);background:var(--sheet);border-top:1.5px solid var(--line);padding:6px 6px calc(6px + env(safe-area-inset-bottom,0px))}
.tabbar button{border:none;background:none;display:grid;justify-items:center;gap:2px;padding:4px 0;border-radius:12px;font-size:.72rem;font-weight:700;color:var(--muted)}
.tabbar button[aria-pressed="true"]{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}
.tabbar .ti svg{width:26px;height:26px;display:block}
@media (min-width:760px){.tabbar{max-width:560px;margin:0 auto 12px;border:1.5px solid var(--line);border-radius:20px;bottom:0}}
/* botones en relieve */
.btn3d{--c:var(--accent);display:flex;align-items:center;justify-content:center;gap:8px;width:100%;border:none;border-radius:16px;padding:14px 18px;font-family:var(--display);font-weight:800;font-size:1.15rem;letter-spacing:.02em;text-transform:uppercase;background:var(--c);color:var(--on);box-shadow:0 5px 0 color-mix(in srgb,var(--c) 68%,#000);transition:transform .08s,box-shadow .08s;cursor:pointer}
.btn3d:active:not(:disabled){transform:translateY(4px);box-shadow:0 1px 0 color-mix(in srgb,var(--c) 68%,#000)}
.btn3d:disabled{background:var(--line);color:var(--muted);box-shadow:0 5px 0 color-mix(in srgb,var(--line) 70%,#000);cursor:default}
.btn-ghost{width:100%;border:2px solid var(--line);border-bottom-width:5px;background:var(--sheet);border-radius:16px;padding:12px 16px;font-family:var(--display);font-weight:800;font-size:1.05rem;text-transform:uppercase;letter-spacing:.02em;color:var(--mates)}
.btn-ghost:active{transform:translateY(3px);border-bottom-width:2px}
.btn-ghost.danger{color:var(--bad)}
/* tarjeta de hoy */
.today{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:center;background:var(--sheet);border:1.5px solid var(--line);border-radius:20px;padding:14px;margin-top:12px}
.today .mascot{width:70px;grid-row:span 2}
.today h2{font-size:1.35rem}
.today .gbar{display:grid;gap:4px;font-size:.85rem;color:var(--muted);font-weight:700}
.today .gbar .bar{height:12px}
.today .gbar .bar b{background:var(--star)}
.today .btn3d{grid-column:1/-1;margin-top:10px}
.today .next{display:block;font-family:var(--body);font-size:.8rem;font-weight:700;text-transform:none;letter-spacing:0;opacity:.9}
/* asignaturas como selector segmentado */
.subjects{flex-wrap:nowrap;gap:6px;margin-top:14px;background:var(--sheet);border:1.5px solid var(--line);border-radius:16px;padding:5px}
.subj{flex:1 1 0;min-width:0;border:none;border-radius:12px;padding:9px 6px;justify-content:center;text-align:center;font-size:.86rem;line-height:1.15;background:transparent}
.subj i{display:none}
.subj[aria-pressed="true"]{background:var(--c);color:var(--on);box-shadow:0 3px 0 color-mix(in srgb,var(--c) 68%,#000)}
/* camino */
.path{display:grid;gap:0;margin-top:16px}
.unit{--c:var(--accent);background:var(--c);color:var(--on);border-radius:18px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:22px;box-shadow:0 4px 0 color-mix(in srgb,var(--c) 68%,#000)}
.unit:first-child{margin-top:0}
.unit.next,.unit.past{background:var(--sheet);color:var(--ink);border:1.5px solid var(--line);box-shadow:none}
.unit h3{font-size:1.15rem}
.unit small{display:block;opacity:.85;font-size:.82rem}
.unit .ucount{font-family:var(--display);font-weight:800;font-size:.95rem;white-space:nowrap;background:color-mix(in srgb,var(--on) 22%,transparent);border-radius:999px;padding:3px 10px}
.unit.next .ucount,.unit.past .ucount{background:var(--paper)}
.nodes{position:relative;display:grid;justify-items:center;gap:22px;padding:46px 0 8px}
.nodewrap{position:relative;display:grid;justify-items:center;gap:4px;transform:translateX(calc(var(--x,0) * var(--path-step)))}
.node{--c:var(--accent);width:74px;height:70px;border-radius:50%;border:none;background:var(--c);color:var(--on);box-shadow:0 7px 0 color-mix(in srgb,var(--c) 65%,#000);display:grid;place-items:center;cursor:pointer;transition:transform .08s}
.node:active{transform:translateY(5px);box-shadow:0 2px 0 color-mix(in srgb,var(--c) 65%,#000)}
.node svg{width:34px;height:34px}
.node.todo{background:var(--line);color:var(--muted);box-shadow:0 7px 0 color-mix(in srgb,var(--line) 70%,#000)}
.node.cur{outline:6px solid color-mix(in srgb,var(--c) 30%,transparent);outline-offset:4px}
.nodewrap .nstars{font-size:.85rem;letter-spacing:1px;color:var(--star)}
.nodewrap .nstars .off{color:var(--line)}
.nodewrap .nlabel{font-size:.78rem;font-weight:700;color:var(--muted);max-width:130px;text-align:center;line-height:1.2}
.startbub{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:var(--sheet);color:var(--c);border:2px solid var(--line);border-radius:12px;padding:5px 10px;font-family:var(--display);font-weight:800;white-space:nowrap;animation:bob 1.6s ease-in-out infinite}
.startbub::after{content:"";position:absolute;top:100%;left:50%;width:10px;height:10px;background:var(--sheet);border-right:2px solid var(--line);border-bottom:2px solid var(--line);transform:translate(-50%,-55%) rotate(45deg)}
@keyframes bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,-5px)}}
.pathmascot{position:absolute;width:86px;top:50%;transform:translateY(-50%);pointer-events:none}
.pathmascot.l{left:2%}.pathmascot.r{right:2%}
/* hoja inferior */
.sheet-bg{position:fixed;inset:0;background:rgba(10,15,30,.45);z-index:40}
.bsheet{position:fixed;left:0;right:0;bottom:0;z-index:41;background:var(--sheet);border-radius:24px 24px 0 0;padding:20px 18px calc(18px + env(safe-area-inset-bottom,0px));display:grid;gap:10px;max-width:560px;margin:0 auto;box-shadow:0 -10px 30px rgba(0,0,0,.18);animation:up .22s ease}
@keyframes up{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
.bsheet h3{font-size:1.4rem}
.bsheet p{margin:0;color:var(--muted)}
.bsheet .mascot.sm{width:70px;margin:0}
.bsheet .eyebrow{color:var(--c)}
.bsheet .meta{display:flex;gap:10px;align-items:center;color:var(--muted);font-weight:700;flex-wrap:wrap}
.bsheet .close{position:absolute;top:12px;right:14px;border:none;background:none;font-size:1.4rem;color:var(--muted);cursor:pointer}
/* aviso */
.toast{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 12px);transform:translateX(-50%);z-index:60;background:var(--ink);color:var(--paper);padding:10px 16px;border-radius:14px;font-weight:700;box-shadow:0 8px 20px rgba(0,0,0,.25);max-width:90vw;text-align:center;animation:up .25s ease}
/* partida a pantalla completa */
body.lesson .wrap{max-width:640px}
#vQuiz{display:grid;grid-template-rows:auto 1fr auto;min-height:calc(100dvh - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px) - 16px)}
#vQuiz[hidden]{display:none}
.lesson-top{display:flex;align-items:center;gap:12px;padding-top:6px}
.xbtn{border:none;background:none;font-size:1.5rem;color:var(--muted);padding:4px 6px;cursor:pointer;line-height:1}
.lbar{flex:1;height:16px;border:none;background:var(--line)}
.lbar b{background:var(--c,var(--accent));box-shadow:inset 0 -4px 0 rgba(0,0,0,.08)}
.lesson-body{padding-top:14px;--c:var(--accent)}
.lesson-body .eyebrow{font-size:.72rem}
.lesson-body .qnum{margin:6px 0 0}
.qrow{display:flex;gap:10px;align-items:flex-start;margin-top:10px}
.qmascot{width:64px;flex:none}
.qrow .question{margin:6px 0 14px;font-size:1.4rem}
.opts{gap:10px}
.opt{border:2px solid var(--line);border-bottom-width:5px;border-radius:16px;padding:14px 16px;font-size:1.08rem;font-weight:700;transition:transform .06s}
.opt:active:not(:disabled){transform:translateY(2px)}
.opt.sel{border-color:var(--mates);background:color-mix(in srgb,var(--mates) 12%,var(--sheet));color:var(--mates)}
.opt.right{border-color:var(--ok)}
.opt.wrong{border-color:var(--bad)}
#ansForm button{display:none}
#ansForm input{font-size:1.3rem;padding:14px;border-radius:16px;border-bottom-width:4px}
.lesson-foot{position:sticky;bottom:0;margin-inline:-16px;padding:14px 16px calc(14px + env(safe-area-inset-bottom,0px));background:var(--paper);border-top:1.5px solid var(--line);display:grid;gap:10px}
.lesson-foot.ok{background:var(--okbg);border-top-color:transparent}
.lesson-foot.ko{background:var(--badbg);border-top-color:transparent}
.lesson-foot.ok .btn3d{--c:var(--ok)}
.lesson-foot.ko .btn3d{--c:var(--bad)}
.lesson-foot .fb{margin:0;padding:0;background:none!important}
.lesson-foot .fb .mascot{width:52px}
.lesson-foot #qFb:empty{display:none}
/* resultados */
#vResult .sheet{border:none;background:none;padding:12px 0}
#resBox .rewards .rw:not(.hot),#resBox .week{display:none}
.resactions{position:sticky;bottom:0;margin-inline:-16px;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:var(--paper);border-top:1.5px solid var(--line)}
.stats3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.st{border:2px solid var(--c);border-radius:16px;overflow:hidden;text-align:center;background:var(--sheet)}
.st small{display:block;background:var(--c);color:var(--on);font-weight:800;font-size:.72rem;letter-spacing:.06em;padding:4px 0}
.st b{display:block;font-family:var(--display);font-size:1.5rem;padding:8px 0;color:var(--c);font-variant-numeric:tabular-nums}
.st.xp{--c:var(--star)}.st.acc{--c:var(--ok)}.st.time{--c:var(--mates)}
.goalres{margin-top:14px;background:var(--sheet);border:1.5px solid var(--line);border-radius:16px;padding:12px 14px;display:grid;gap:6px}
.goalres b{font-family:var(--display)}
.goalres .bar b{background:var(--star)}
.resactions{display:grid;gap:10px;margin-top:18px}
/* retos */
.streakcal{background:var(--sheet);border:1.5px solid var(--line);border-radius:18px;padding:14px;margin-top:12px;display:grid;gap:10px}
.streakcal .sc-top{display:flex;align-items:center;gap:12px}
.streakcal .sc-top b{font-family:var(--display);font-size:2rem;color:var(--flame);line-height:1}
.streakcal .days{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;text-align:center;font-size:.78rem;font-weight:700;color:var(--muted)}
.streakcal .d{display:grid;justify-items:center;gap:4px}
.streakcal .dot{width:30px;height:30px;border-radius:50%;background:var(--paper);border:2px solid var(--line);display:grid;place-items:center}
.streakcal .dot.on{background:var(--flame);border-color:var(--flame)}
.streakcal .dot.on svg path{fill:#fff}
.streakcal .dot.today{border-color:var(--flame)}
.goalpick{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.goalpick button{border:2px solid var(--line);border-bottom-width:4px;background:var(--paper);border-radius:14px;padding:10px 4px;font-weight:700;display:grid;gap:2px}
.goalpick button b{font-family:var(--display);font-size:1.1rem}
.goalpick button[aria-pressed="true"]{border-color:var(--accent);color:var(--accent)}
@media (prefers-reduced-motion:reduce){.startbub{animation:none}}
</style>
<script>
/* ---------- v6: experiencia tipo Duolingo ---------- */
const TI={
 path:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
 bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0" stroke-linecap="round"/></svg>',
 trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v3M8 20h8M9 17h6v3H9z"/></svg>',
 user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
 star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
 book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21a2 2 0 0 1 2-2h13"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 flame:'<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 1-5 1-9z" fill="var(--line)"/></svg>'
};
document.querySelectorAll('.ti').forEach(el=>el.innerHTML=TI[el.dataset.icon]||'');

/* meta diaria y días practicados */
const goalOf=g=>g.goal||50;
const dayXp=g=>(g.dayXp||{})[TODAY()]||0;
function addDayXp(d){if(!(d>0))return;const g=me().g;g.dayXp=g.dayXp||{};const t=TODAY();const before=g.dayXp[t]||0;g.dayXp[t]=before+d;
 const ks=Object.keys(g.dayXp).sort();while(ks.length>21)delete g.dayXp[ks.shift()];
 if(before<goalOf(g)&&g.dayXp[t]>=goalOf(g)&&g.goalDay!==t){g.goalDay=t;g.coins+=10;if(cur)cur.goalHit=true;toast('¡Meta diaria cumplida! +10 monedas');beep('win')}save()}
function markDay(){const g=me().g;g.days=g.days||{};g.days[TODAY()]=1;const ks=Object.keys(g.days).sort();while(ks.length>60)delete g.days[ks.shift()]}
let toastT;function toast(t){const el=$('toast');el.textContent=t;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>el.hidden=true,2600)}

/* cabecera: anillo de la meta */
const _rs6=renderStats;
renderStats=function(){_rs6();const g=me().g,x=dayXp(g),G=goalOf(g),p=Math.min(1,x/G),C=2*Math.PI*9;
 const el=$('hudGoal');el.classList.toggle('done',x>=G);
 el.innerHTML=`<svg viewBox="0 0 22 22"><circle class="gtrack" cx="11" cy="11" r="9" fill="none" stroke-width="3.5"/><circle class="gfill" cx="11" cy="11" r="9" fill="none" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C*(1-p)).toFixed(1)}"/></svg><b>${Math.min(x,G)}/${G}</b>`;
 el.setAttribute('aria-label',`Meta diaria: ${x} de ${G} XP`)};

/* camino de temas */
const ZIG=[0,1,1.6,1,0,-1,-1.6,-1];
function currentNode(c,s){const L=DATA[c][s],T=trimNow().t||1;
 const by=t=>L.map((x,i)=>i).filter(i=>triOf(c,s,i)===t);
 for(const t of [T,...[1,2,3].filter(x=>x!==T)]){const i=by(t).find(i=>{const m=mastery(c,s,i);return m==null||m<90});if(i!=null)return i}return 0}
function renderPath(){const p=me(),c=p.course,s=p.subj,L=DATA[c][s],col=S[s].c,nowT=trimNow(),curI=currentNode(c,s);
 const order=[1,2,3];let html='',k=0,unitN=0;
 for(const tr of order){const idx=L.map((x,i)=>i).filter(i=>triOf(c,s,i)===tr);if(!idx.length)continue;unitN++;
  const kind=nowT.t===0?'':tr===nowT.t?'now':tr<nowT.t?'past':'next';
  const done=idx.filter(i=>starN(mastery(c,s,i))===3).length;
  html+=`<div class="unit ${kind}" style="--c:${col}"><div><h3>${TRIN[tr]} trimestre</h3><small>${kind==='now'?'Ahora en clase':kind==='past'?'Para repasar':kind==='next'?'Próximamente':'Repaso de verano'}</small></div><span class="ucount">${done}/${idx.length} ${IC_STAR_MINI}</span></div><div class="nodes">`;
  idx.forEach((i,j)=>{const t=L[i],m=mastery(c,s,i),n=starN(m),isCur=i===curI;const x=ZIG[(k++)%ZIG.length];
   const cls=n===3?'done':(m!=null||isCur||kind==='now'||kind==='past')?'open':'todo';
   html+=`<div class="nodewrap" style="--x:${x}">${isCur?`<span class="startbub" style="--c:${col}">${m==null?'¡EMPIEZA!':'¡SIGUE!'}</span>`:''}
    <button class="node ${cls==='todo'?'todo':''} ${isCur?'cur':''}" style="--c:${col}" data-node="${i}" aria-label="${esc(t.t)}, ${n} de 3 estrellas">${n===3?TI.check:t.g?TI.star:TI.book}</button>
    <span class="nstars">${starsHTML(m)}</span><span class="nlabel">${esc(t.t)}</span></div>`});
  html+=`<div class="pathmascot ${unitN%2?'r':'l'}">${lince(p.g.wear,unitN%2?'happy':'ok')}</div></div>`}
 $('topics').innerHTML=html}
const IC_STAR_MINI='★';
function renderToday(){const p=me(),g=p.g,x=dayXp(g),G=goalOf(g),i=currentNode(p.course,p.subj),t=DATA[p.course][p.subj][i];
 const greet=new Date().getHours()<14?'¡Buenos días':'¡Buenas tardes';
 $('todayCard').innerHTML=`<div class="mascot">${lince(g.wear,'happy')}</div><h2>${greet}, ${esc(store.current)}!</h2>
  <div class="gbar"><span>Meta diaria · ${Math.min(x,G)}/${G} XP${x>=G?' · ¡cumplida!':''}</span><div class="bar"><b style="width:${Math.min(100,x/G*100)}%"></b></div></div>
  <button class="btn3d" data-p="${i}" style="--c:${S[p.subj].c}">${x>0?'Continuar':'Empezar'}</button>
  <span class="next" style="grid-column:1/-1;color:var(--muted);text-align:center">${S[p.subj].n} · ${esc(t.t)}</span>`}
const _rh6=renderHome;
renderHome=function(){_rh6();renderPath();renderToday();renderStats()};

/* hoja del tema */
function openSheet(id){$('sheetBg').hidden=false;$(id).hidden=false}
function closeSheets(){$('sheetBg').hidden=true;['nodeSheet','exitSheet'].forEach(x=>$(x).hidden=true)}
function openNode(i){const p=me(),c=p.course,s=p.subj,t=DATA[c][s][i],m=mastery(c,s,i),rec=p.prog[pkey(c,s,i)];
 const sh=$('nodeSheet');sh.style.setProperty('--c',S[s].c);
 sh.innerHTML=`<button class="close" data-close aria-label="Cerrar">✕</button><div class="eyebrow">${S[s].n} · ${TRIN[triOf(c,s,i)]} trimestre${t.ref?' · '+esc(t.ref):''}</div><h3>${esc(t.t)}</h3>
  <div class="meta"><span class="stars" style="font-size:1.3rem">${starsHTML(m)}</span><span>${m==null?(t.g?'Ejercicios infinitos':`${t.q.length} preguntas`):`${m} % · ${rec?rec.n:0} partida${rec&&rec.n===1?'':'s'}`}</span></div>
  <button class="btn3d" data-p="${i}" style="--c:${S[s].c}">Jugar · hasta +${t.g?120:120} XP</button>
  <button class="btn-ghost" data-f="${i}">Ficha de repaso</button>`;
 openSheet('nodeSheet')}

/* navegación y vistas */
if(!views.includes('vRetos'))views.push('vRetos');
const _show6=show;
show=function(id){closeSheets();_show6(id);document.body.dataset.view=id;
 document.body.classList.toggle('lesson',['vQuiz','vResult','vWelcome'].includes(id));
 $('navRetos').setAttribute('aria-pressed',id==='vRetos');$('navPerfil').setAttribute('aria-pressed',id==='vPeople');
 $('navLogros').setAttribute('aria-pressed',id==='vLogros'||id==='vProg');
 if(['vFicha','vQuiz','vResult'].includes(id))$('navTemas').setAttribute('aria-pressed','true')};
function renderStreak(){const g=me().g,days=g.days||{},st=liveStreak(g);const m0=monday();
 const L=['L','M','X','J','V','S','D'];
 $('streakCal').innerHTML=`<div class="sc-top"><b>${st}</b><div><strong>día${st===1?'':'s'} de racha</strong><br><small style="color:var(--muted)">${g.lastDay===TODAY()?'¡Ya has jugado hoy!':'Juega una partida hoy para mantenerla.'}</small></div></div>
  <div class="days">${L.map((l,j)=>{const d=dayStr(m0+j*864e5);const on=days[d]||(d===g.lastDay);return `<div class="d"><span class="dot ${on?'on':''} ${d===TODAY()?'today':''}">${TI.flame}</span>${l}</div>`}).join('')}</div>`}
function goRetos(){stopTimer();cur.over=true;renderHome();renderStreak();show('vRetos')}
$('navRetos').onclick=goRetos;
$('navPerfil').onclick=()=>$('whoBtn').onclick();
$('brandBtn').onclick=()=>$('navTemas').onclick();
$('hudGoal').onclick=goRetos;

/* partida: elegir y luego «Comprobar» (como en Duolingo); el contrarreloj sigue siendo de un toque */
const _bc6=baseCur;baseCur=function(m){return Object.assign(_bc6(m),{t0:Date.now(),sel:null})};
document.addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b||$('vQuiz').hidden||!cur||cur.mode==='timed'||cur.locked||b.disabled)return;
 e.stopPropagation();e.preventDefault();document.querySelectorAll('.opt').forEach(x=>x.classList.toggle('sel',x===b));cur.sel=+b.dataset.o;$('qCheck').disabled=false},true);
const _rq6=renderQ;
renderQ=function(){_rq6();const f=$('lessonFoot');f.className='lesson-foot';cur.sel=null;
 const timed=cur.mode==='timed';$('qCheck').hidden=timed;$('qCheck').disabled=true;$('qNext').hidden=true;
 $('qMascot').innerHTML=lince(me().g.wear,'ok');$('vQuiz').style.setProperty('--c',$('quizSheet').style.getPropertyValue('--c')||'var(--accent)');
 const inp=$('ans');if(inp){inp.addEventListener('input',()=>{$('qCheck').disabled=!inp.value.trim()});inp.setAttribute('enterkeyhint','done')}};
$('qCheck').onclick=()=>{if(cur.locked)return;const f=$('ansForm');
 if(f){if(!$('ans').value.trim())return;f.requestSubmit?f.requestSubmit():f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}))}
 else if(cur.sel!=null)answer(cur.sel)};
const _an6=answer;
answer=function(v){const fresh=!(cur.locked||cur.over);const x0=me().g.xp;_an6(v);if(!fresh)return;addDayXp(me().g.xp-x0);
 if(cur.mode==='timed'){renderStats();return}
 const ok=!!$('qFb').querySelector('.fb.ok');$('lessonFoot').className='lesson-foot '+(ok?'ok':'ko');$('qCheck').hidden=true;
 $('qNext').textContent=cur.i===cur.items.length-1?'Ver resultado':'Continuar';$('qMascot').innerHTML=lince(me().g.wear,ok?'happy':'oops');renderStats()};
$('quizBack').onclick=()=>{if(cur.mode==='timed'||cur.over||(cur.i===0&&!cur.locked)){stopTimer();cur.over=true;renderHome();show('vHome');return}
 $('exitMascot').innerHTML=lince(me().g.wear,'oops');openSheet('exitSheet')};
$('exitStay').onclick=closeSheets;
$('exitLeave').onclick=()=>{closeSheets();stopTimer();cur.over=true;renderHome();show('vHome')};

/* resultados con estadísticas */
const fmtT=ms=>{const s=Math.max(1,Math.round(ms/1000));return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`};
const _fi6=finish;
finish=function(){const t0=cur.t0||Date.now(),xp0=cur.xp0,x1=me().g.xp;_fi6();const g=me().g;addDayXp(g.xp-x1);markDay();save();
 const n=cur.mode==='timed'?cur.answered:cur.items.length,acc=n?Math.round(cur.score/n*100):0,G=goalOf(g),dx=dayXp(g);
 const box=$('resBox');const top=box.querySelector('.res-top');
 top.insertAdjacentHTML('afterend',`<div class="stats3"><div class="st xp"><small>XP TOTAL</small><b>+${g.xp-xp0}</b></div><div class="st acc"><small>PRECISIÓN</small><b>${acc} %</b></div><div class="st time"><small>TIEMPO</small><b>${fmtT(Date.now()-t0)}</b></div></div>
  <div class="goalres"><b>${dx>=G?'¡Meta diaria cumplida!':`Meta diaria: ${dx}/${G} XP`}</b><div class="bar"><b style="width:${Math.min(100,dx/G*100)}%"></b></div></div>`);
 const row=box.querySelector('.row');if(row){const again=row.querySelector('[data-act="again"]'),ficha=row.querySelector('[data-act="ficha"]'),home=row.querySelector('[data-act="home"]');
  const wrap=document.createElement('div');wrap.className='resactions';
  if(home){home.className='btn3d';home.textContent='Continuar';wrap.appendChild(home)}
  if(again&&!again.hidden){again.className='btn-ghost';wrap.appendChild(again)}
  if(ficha){ficha.className='btn-ghost';wrap.appendChild(ficha)}
  row.replaceWith(wrap)}
 if(cur.goalHit){confetti()}renderStats()};

/* logros → progreso, perfil → meta diaria */
const _rl6=renderLogros;
renderLogros=function(){_rl6();$('logrosBox').insertAdjacentHTML('afterbegin','<button class="btn-ghost" id="toProg" style="margin-bottom:14px">Ver mi progreso por temas</button>');
 $('toProg').onclick=()=>{renderProg();show('vProg')}};
const _rp6=renderProg;
renderProg=function(){_rp6();if(!$('progBack'))$('vProg').insertAdjacentHTML('afterbegin','<button class="back" id="progBack">← Logros</button>');$('progBack').onclick=()=>{renderLogros();show('vLogros')}};
const _rpe6=renderPeople;
renderPeople=function(){_rpe6();if(!$('goalPick')){$('profMsg').insertAdjacentHTML('beforebegin','<div class="label">Meta diaria</div><div class="goalpick" id="goalPick"></div>')}
 const G=goalOf(me().g);$('goalPick').innerHTML=[[30,'Tranquila'],[50,'Normal'],[100,'Intensa']].map(([v,l])=>`<button data-goal="${v}" aria-pressed="${G===v}"><b>${v} XP</b>${l}</button>`).join('')};
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.node!=null)openNode(+b.dataset.node);
 else if(b.dataset.close!=null)closeSheets();
 else if(b.dataset.goal){me().g.goal=+b.dataset.goal;save();renderPeople();renderStats();profNote(`Meta diaria: ${b.dataset.goal} XP al día.`)}});
$('sheetBg').onclick=closeSheets;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheets()});
renderHome();show(me().ok?'vHome':'vWelcome');
</script>
