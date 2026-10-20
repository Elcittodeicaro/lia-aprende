<script>
/* ---------- migración: el progreso pasa de "posición del tema" a "título del tema" ---------- */
(function migrate(){if(store.progV===2)return;
 Object.values(store.people).forEach(p=>{const np={};Object.entries(p.prog||{}).forEach(([k,v])=>{const m=k.match(/^(\d)-(\w+)-(\d+)$/);
  if(m){const t=(OLD_TITLES[`${m[1]}-${m[2]}`]||[])[+m[3]];if(t){np[`${m[1]}-${m[2]}-${t}`]=v;return}}np[k]=v});p.prog=np;
  if(p.ok==null)p.ok=(p.g.sessions>0)||Object.keys(store.people).length>1||store.current!=='Estudiante'});
 store.progV=2;save()})();

/* ---------- variedad: primero las preguntas que no han salido, y a veces formato «¿es correcta?» ---------- */
const SEENMAX=60;
function seenList(t){const g=me().g;g.seen=g.seen||{};return g.seen[t.t]=g.seen[t.t]||[]}
/* clave de una pregunta: enunciado + respuestas (varias preguntas comparten «¿Cuál está bien escrita?») */
const qkey=it=>it.k||(it.q+'|'+(it.o?[...it.o].sort().join('/'):''));
function markSeen(t,items){const L=seenList(t);items.forEach(it=>{const k=qkey(it);const i=L.indexOf(k);if(i>=0)L.splice(i,1);L.push(k)});while(L.length>SEENMAX)L.shift();save()}
function trueFalse(it){const right=it.o[it.a];const useRight=Math.random()<.5;const wrongs=it.o.filter((_,i)=>i!==it.a);const shownOpt=useRight||!wrongs.length?right:pick(wrongs);
 return {q:`${it.q} — Respuesta propuesta: «${shownOpt}». ¿Es correcta?`,q0:it.q,k:qkey(it),o:['Sí, es correcta','No, no es correcta'],a:shownOpt===right?0:1,e:`${it.e?it.e+' ':''}La respuesta correcta es «${right}».`}}
buildSession=function(topic){const L=seenList(topic);let items;
 if(topic.g){items=[];const keys=new Set();let guard=0;
  while(items.length<8&&guard++<120){const it=topic.g();if(keys.has(qkey(it)))continue;if(L.includes(qkey(it))&&guard<80)continue;keys.add(qkey(it));items.push(it)}}
 else{const all=topic.q.map(mkStatic);const fresh=shuffle(all.filter(x=>!L.includes(qkey(x)))),old=all.filter(x=>L.includes(qkey(x))).sort((a,b)=>L.indexOf(qkey(a))-L.indexOf(qkey(b)));
  items=fresh.concat(old).slice(0,8);items=shuffle(items).map(x=>x.o&&x.o.length>=2&&Math.random()<.25?trueFalse(x):x)}
 markSeen(topic,items);return items.map(prepMC)};

/* ---------- referencia del currículo en temas y fichas ---------- */
const _openFicha2=openFicha;
openFicha=function(i){_openFicha2(i);const p=me(),t=DATA[p.course][p.subj][i];
 $('fichaEyebrow').textContent=`${p.course}º · ${S[p.subj].n} · ${TRIN[triOf(p.course,p.subj,i)]} trimestre${t.ref?' · '+t.ref:''}`};
const _renderHome2=renderHome;
renderHome=function(){_renderHome2();const p=me();
 document.querySelectorAll('#topics .topic').forEach(el=>{const b=el.querySelector('[data-f]');if(!b)return;const t=DATA[p.course][p.subj][+b.dataset.f];
  if(t&&t.ref&&!el.querySelector('.ref'))el.querySelector('h3').insertAdjacentHTML('afterend',`<span class="ref">${t.ref}</span>`)})};

/* ---------- bienvenida y perfil ---------- */
let welCourse=null;
function renamePerson(oldN,newN){newN=newN.trim().slice(0,20);if(!newN)return 'Escribe un nombre.';if(newN===oldN)return '';
 if(store.people[newN])return 'Ya hay un estudiante con ese nombre en este dispositivo.';
 store.people[newN]=store.people[oldN];delete store.people[oldN];if(store.current===oldN)store.current=newN;save();return ''}
function renderWelcome(){const p=me();welCourse=welCourse||p.course;
 $('welMascot').innerHTML=lince(p.g.wear,'happy');
 $('welName').value=store.current==='Estudiante'?'':store.current;
 $('welCourses').innerHTML=[1,2,3,4,5,6].map(c=>`<button type="button" data-welc="${c}" aria-pressed="${c===welCourse}">${c}º</button>`).join('');$('welMsg').innerHTML=''}
const _show2=show;
show=function(id){_show2(id);const nav=document.querySelector('.nav'),hud=document.querySelector('.hud');if(nav)nav.hidden=id==='vWelcome';if(hud)hud.hidden=id==='vWelcome'};
const _renderPeople2=renderPeople;
renderPeople=function(){_renderPeople2();const p=me();
 $('profMascot').innerHTML=lince(p.g.wear,'happy');$('profName').textContent=store.current;$('renameInput').value=store.current;
 renderHome();$('profMsg').innerHTML=''};
function profNote(t,ok=true){$('profMsg').innerHTML=`<div class="note ${ok?'ok':'ko'}">${esc(t)}</div>`}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.welc){welCourse=+b.dataset.welc;document.querySelectorAll('[data-welc]').forEach(x=>x.setAttribute('aria-pressed',x===b))}
 else if(b.dataset.c&&!$('vPeople').hidden){profNote(`Curso cambiado a ${b.dataset.c}º. Los temas ya son los de ese curso.`)}});
$('welForm').addEventListener('submit',e=>{e.preventDefault();const n=$('welName').value.trim();
 if(!n){$('welMsg').innerHTML='<div class="note ko">Escribe tu nombre para empezar.</div>';return}
 const err=renamePerson(store.current,n);if(err){$('welMsg').innerHTML=`<div class="note ko">${esc(err)}</div>`;return}
 const p=me();p.course=welCourse||p.course;p.ok=true;save();renderHome();show('vHome')});
$('renameForm').addEventListener('submit',e=>{e.preventDefault();e.stopPropagation();const err=renamePerson(store.current,$('renameInput').value);
 if(err){profNote(err,false);return}renderPeople();renderStats();profNote('Nombre guardado.')});
$('profStyle').onclick=()=>{renderShop();show('vShop')};
/* al añadir un estudiante nuevo, empieza por la bienvenida */
$('addForm').addEventListener('submit',()=>{setTimeout(()=>{const p=me();if(!p.ok){welCourse=p.course;renderWelcome();show('vWelcome')}},0)});
renderHome();
if(!me().ok){renderWelcome();show('vWelcome')}
</script>
