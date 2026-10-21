<script>
/* ---------- v8: sonidos de acierto y fallo que se oyen también en iPhone ----------
   Los sonidos se fabrican aquí mismo (WAV) y suenan con <audio>, que en iPhone se oye
   aunque el interruptor de silencio esté puesto (Web Audio no). */
const SFX=(()=>{const SR=22050;
 function wav(parts,target){/* parts: [frecuencia, inicio s, duración s, volumen, timbre] */
  const len=Math.ceil(SR*Math.max(...parts.map(p=>p[1]+p[2]))+SR*.03),d=new Float32Array(len);
  for(const [f,st,du,vol,tim] of parts){const s0=Math.floor(st*SR),n=Math.floor(du*SR);
   for(let i=0;i<n&&s0+i<len;i++){const t=i/SR,att=Math.min(1,t/.006),env=att*Math.exp(-t*(tim==='bonk'?9:5.5)/du*.6);
    const ph=2*Math.PI*f*t;let v;
    if(tim==='bell')v=Math.sin(ph)+.35*Math.sin(2*ph)+.12*Math.sin(3*ph);
    else{const fb=f*(1-.18*t/du);const p2=2*Math.PI*fb*t;v=Math.sin(p2)+.3*Math.sin(3*p2)+.15*Math.sin(5*p2)}
    d[s0+i]+=v*env*vol}}
  let pk=0;for(let i=0;i<len;i++)pk=Math.max(pk,Math.abs(d[i]));const g=pk?target/pk:1;for(let i=0;i<len;i++)d[i]*=g;
  const buf=new ArrayBuffer(44+len*2),dv=new DataView(buf),w=(o,s)=>[...s].forEach((c,i)=>dv.setUint8(o+i,c.charCodeAt(0)));
  w(0,'RIFF');dv.setUint32(4,36+len*2,true);w(8,'WAVEfmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);
  dv.setUint32(24,SR,true);dv.setUint32(28,SR*2,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);w(36,'data');dv.setUint32(40,len*2,true);
  for(let i=0;i<len;i++){const fade=i>len-200?(len-i)/200:1;dv.setInt16(44+i*2,Math.max(-1,Math.min(1,d[i]*fade))*32767,true)}
  return URL.createObjectURL(new Blob([buf],{type:'audio/wav'}))}
 const defs={
  ok:[[1046.5,0,.16,.42,'bell'],[1568,.09,.34,.42,'bell']],                       /* ¡ding-ding! alegre */
  ko:[[330,0,.16,.38,'bonk'],[247,.13,.3,.38,'bonk']],                             /* «uh-oh» suave */
  win:[[523,0,.14,.36,'bell'],[659,.12,.14,.36,'bell'],[784,.24,.14,.36,'bell'],[1047,.36,.45,.4,'bell']],
  coin:[[1319,0,.08,.32,'bell'],[1976,.06,.25,.32,'bell']]};
 const el={};let ready=false;
 function init(){if(ready)return;ready=true;try{for(const k in defs){const a=new Audio(wav(defs[k],{ok:.85,ko:.7,win:.85,coin:.7}[k]));a.preload='auto';el[k]=a}}catch(e){}}
 function play(k){init();const a=el[k];if(!a)return false;try{a._real=true;a.muted=false;a.pause();a.currentTime=0;const p=a.play();if(p&&p.catch)p.catch(()=>{});return true}catch(e){return false}}
 /* iPhone solo deja sonar audio tras un toque: lo «despertamos» con el primer toque, en silencio */
 function unlock(){init();for(const k in el){const a=el[k];a.muted=true;const p=a.play();a._real=false;const back=()=>{if(a._real)return;a.pause();a.currentTime=0;a.muted=false};if(p&&p.then)p.then(back,back);else back()}
  removeEventListener('touchend',unlock,true);removeEventListener('click',unlock,true)}
 addEventListener('touchend',unlock,true);addEventListener('click',unlock,true);
 return {play}})();
const _beep8=beep;
beep=function(kind){if(!store.sound)return;if(!SFX.play(kind))_beep8(kind);
 if(navigator.vibrate&&kind==='ko')try{navigator.vibrate(120)}catch(e){}};
</script>
