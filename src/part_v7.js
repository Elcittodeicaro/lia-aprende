<style>
/* v7 · preguntas más claras para niños */
.passage{background:var(--sheet);border:2px solid var(--line);border-radius:18px;padding:12px 14px;margin:6px 0 10px;font-family:var(--body);font-weight:400;font-size:1.15rem;line-height:1.45}
.passage small,.qhint{display:block;font-family:var(--body);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.blank{display:inline-block;min-width:4.5em;border-bottom:3px solid var(--mates);color:var(--mates);padding:0 4px;margin-left:2px;text-align:center}
.blank.filled{border-bottom-style:solid;background:color-mix(in srgb,var(--mates) 10%,transparent);border-radius:6px 6px 0 0}
.liasays{display:flex;gap:10px;align-items:center;margin:4px 0 12px}
.liasays .mascot{width:54px;flex:none}
.liasays .say{position:relative;background:var(--sheet);border:2px solid var(--line);border-radius:16px;padding:8px 12px;font-family:var(--display);font-weight:700;font-size:1.15rem}
.liasays .say small{display:block;font-family:var(--body);font-size:.75rem;color:var(--muted);font-weight:700}
body[data-young] .qrow .question{font-size:1.6rem;line-height:1.3}
body[data-young] .opt{font-size:1.25rem;padding:16px}
body[data-young] .passage{font-size:1.3rem}
.voicewarn{background:color-mix(in srgb,var(--star) 18%,var(--sheet));border:1.5px solid var(--star);border-radius:12px;padding:10px 12px;margin-top:10px;font-weight:700}
</style>
<script>
/* ---------- v7: preguntas claras y mejor voz ---------- */
const young=()=>me().course<=2;
/* «¿Tiene razón Lía?» en lugar de «Respuesta propuesta…» (no en 1.º y 2.º) */
trueFalse=function(it){if(young())return it;const right=it.o[it.a];const wrongs=it.o.filter((_,i)=>i!==it.a);const shownOpt=Math.random()<.5||!wrongs.length?right:pick(wrongs);
 return {q:it.q,claim:shownOpt,q0:it.q,k:qkey(it),o:['Sí, tiene razón','No, se equivoca'],a:shownOpt===right?0:1,e:`${it.e?it.e+' ':''}La respuesta correcta es «${right}».`}};
/* «Sí» siempre antes que «No» */
const _bs7=buildSession;buildSession=function(t){return _bs7(t).map(it=>{if(it.claim&&it.o[0]!=='Sí, tiene razón'){it.o=['Sí, tiene razón','No, se equivoca'];it.a=1-it.a}return it})};
/* forma de cada pregunta: lectura, frase para completar o normal */
function qShape(it){const m=it.q.match(/^«([^»]{12,})»\s*(¿.+)$/);if(m)return {kind:'passage',text:m[1],ask:m[2]};
 if(/…\s*$/.test(it.q)&&!it.claim)return {kind:'blank',stem:it.q.replace(/\s*…\s*$/,'')};return {kind:'plain'}}
const _rq7=renderQ;
renderQ=function(){_rq7();const it=cur.items[cur.i];if(!it)return;document.body.toggleAttribute('data-young',young());
 const sh=qShape(it),q=$('qText');
 if(sh.kind==='passage')q.innerHTML=`<div class="passage"><small>Lee el texto</small>${esc(sh.text)}</div>${esc(sh.ask)}`;
 else if(sh.kind==='blank')q.innerHTML=`<span class="qhint">Completa la frase</span>${esc(sh.stem)} <span class="blank" id="qBlank">&nbsp;</span>`;
 $('qMascot').hidden=!!it.claim;
 if(it.claim){
  q.innerHTML=`${esc(it.q)}<div class="liasays"><div class="mascot">${lince(me().g.wear,'ok')}</div><div class="say"><small>Lía dice:</small>«${esc(it.claim)}»</div></div><span class="qhint">¿Tiene razón Lía?</span>`}};
document.addEventListener('click',e=>{const b=e.target.closest('.opt');const bl=$('qBlank');if(!b||!bl||$('vQuiz').hidden||!cur||cur.locked)return;
 bl.textContent=b.textContent;bl.classList.add('filled')},true);
/* lectura en voz alta adaptada */
readQuestion=function(){const it=cur.items&&cur.items[cur.i];if(!it)return;const sh=qShape(it);
 const opts=it.o?(it.o.length>1?it.o.slice(0,-1).join(', ')+' o '+it.o[it.o.length-1]:it.o[0]):'';
 let t;
 if(it.claim)t=`${speakable(it.q)} Lía dice: ${it.claim}. ¿Tiene razón?`;
 else if(sh.kind==='passage')t=`Lee el texto. ${sh.text.replace(/[.\s]+$/,'')}. ${speakable(sh.ask)} ${opts}`;
 else if(sh.kind==='blank')t=`Completa la frase. ${speakable(sh.stem)}... ${opts}`;
 else t=`${speakable(it.q)} ${it.o?opts:'Escribe tu respuesta.'}`;
 speak(t)};
/* voz: distinguir la voz básica de la mejorada aunque se llamen igual (iOS) */
const vq=v=>{const u=(v.voiceURI||'')+' '+(v.name||'');return /premium/i.test(u)?2:/enhanced|mejorad|neural|natural|siri/i.test(u)?1:0};
voiceScore=function(v){const n=v.name||'',u=v.voiceURI||'',l=(v.lang||'').replace('_','-');
 if(!/^es/i.test(l))return -1;if(NOVELTY.test(n)||/eloquence|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley/i.test(u))return 0;
 let s=10;if(/^es-ES/i.test(l))s+=6;else if(/^es-(MX|US)/i.test(l))s+=3;s+=[0,25,40][vq(v)];if(/compact/i.test(u))s-=4;
 if(/m[oó]nica|marisol|paulina|elvira|helena|luc[ií]a|carmen|ximena|sof[ií]a/i.test(n))s+=6;if(/google/i.test(n))s+=8;return s};
renderVoices=function(){const box=$('voiceBox');if(!box)return;if(!TTS){box.hidden=true;return}
 const vs=esVoices();box.hidden=false;const curN=ttsVoice&&ttsVoice.voiceURI;
 if(!vs.length){$('voiceList').innerHTML='<p>Este dispositivo no tiene voces en español. Sigue los pasos de abajo para descargar una.</p>';return}
 $('voiceList').innerHTML=vs.slice(0,8).map(v=>{const g=vq(v);
  return `<div class="vitem${v.voiceURI===curN?' on':''}"><label><input type="radio" name="voice" value="${esc(v.name)}" data-uri="${esc(v.voiceURI||'')}" ${v.voiceURI===curN?'checked':''}><span>${esc(v.name.replace(/\s*\(.*\)\s*$/,''))} <small>${esc(v.lang)}</small></span>${g?`<span class="vbadge">${g===2?'Premium':'Mejorada'}</span>`:''}</label><button class="btn" data-tryvoice="${esc(v.name)}" data-uri="${esc(v.voiceURI||'')}">Probar</button></div>`}).join('')+
  (ttsVoice&&!vq(ttsVoice)?'<div class="voicewarn">Ahora se usa una voz básica y suena robótica. Descarga una voz mejorada con los pasos de abajo: tarda un par de minutos y se nota mucho.</div>':'');
 $('voiceRate').value=store.voiceRate||.9;$('voiceRateVal').textContent=`${Math.round((store.voiceRate||.9)*100)} %`;
 const det=box.querySelector('.vhelp');if(det&&ttsVoice&&!vq(ttsVoice))det.open=true};
pickVoice=function(){if(!TTS)return;const vs=esVoices();const want=store.voiceURI,wantN=store.voiceName;
 ttsVoice=(want&&vs.find(v=>v.voiceURI===want))||(wantN&&vs.find(v=>v.name===wantN&&vq(v)))||vs[0]||null;if(!$('vPeople').hidden)renderVoices()};
tryVoice=function(name,uri){const v=esVoices().find(x=>uri?x.voiceURI===uri:x.name===name);if(!v)return;const keep=ttsVoice;ttsVoice=v;speak('¡Hola! Soy Lía. ¿Jugamos a aprender?');ttsVoice=keep};
document.addEventListener('change',e=>{if(e.target.name==='voice'){e.stopPropagation();store.voiceURI=e.target.dataset.uri||'';store.voiceName=e.target.value;save();pickVoice();renderVoices();tryVoice(e.target.value,store.voiceURI)}},true);
document.addEventListener('click',e=>{const b=e.target.closest('[data-tryvoice]');if(b&&b.dataset.uri){e.stopImmediatePropagation();tryVoice(b.dataset.tryvoice,b.dataset.uri)}},true);
if(TTS){try{speechSynthesis.addEventListener('voiceschanged',pickVoice)}catch(e){}pickVoice()}
/* aviso suave la primera vez que suena una voz básica */
let voiceTipShown=false;const _speak7=speak;
speak=function(t){_speak7(t);if(!voiceTipShown&&ttsVoice&&!vq(ttsVoice)&&!$('vQuiz').hidden){voiceTipShown=true;setTimeout(()=>toast('¿La voz suena robótica? En Perfil → «La voz de Lía» te explicamos cómo mejorarla.'),1500)}};
renderHome();
</script>
