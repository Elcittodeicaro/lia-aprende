/* ---------- más generadores de Matemáticas (currículo por ciclos) ---------- */
const MCx=(q,right,wrong,e='')=>M(q,[right,...wrong],0,e);
const distinct=(a,n,lo,hi)=>{const s=new Set([a]);let g=0;while(s.size<n&&g++<200)s.add(R(lo,hi));return [...s].slice(1)};
const DAYS=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
const NAMES=['Lucía','Pablo','Aya','Hugo','Martina','Daniel','Carmen','Omar','Sofía','Álvaro'];
const bar=n=>'■'.repeat(n);
Object.assign(G,{
 /* ===== 1.er ciclo ===== */
 m1n20(){const t=R(0,4);
  if(t===0){const n=R(3,15);return N(`Cuenta los puntos: ${'●'.repeat(n)}`,n,'Cuenta despacio, de uno en uno.')}
  if(t===1){const n=R(2,20);return N(`¿Qué número va antes del ${n}?`,n-1)}
  if(t===2){const n=R(0,19);return N(`¿Qué número va después del ${n}?`,n+1)}
  if(t===3){const u=R(0,9);return N(`1 decena y ${u} unidades. ¿Qué número es?`,10+u,`10 + ${u} = ${10+u}.`)}
  let a=R(1,20),b=R(1,20);while(b===a)b=R(1,20);return M('¿Qué número es menor?',[String(a),String(b)],a<b?0:1)},
 m1sum20(){if(R(0,1)){const a=R(1,10),b=R(1,10);return N(`${a} + ${b} =`,a+b,'Empieza por el número mayor y cuenta hacia delante.')}
  const a=R(5,20),b=R(1,Math.min(10,a));return N(`${a} − ${b} =`,a-b,'Cuenta hacia atrás desde el número mayor.')},
 m1geo(){return pick([
  ()=>N('¿Cuántos lados tiene un triángulo?',3),()=>N('¿Cuántos lados tiene un cuadrado?',4),()=>N('¿Cuántos lados tiene un rectángulo?',4),
  ()=>MCx('Un balón tiene forma de…','esfera',['cubo','cono'],'La esfera es redonda por todas partes.'),
  ()=>MCx('Un dado tiene forma de…','cubo',['esfera','cilindro'],'El cubo tiene 6 caras cuadradas.'),
  ()=>MCx('Una lata de refresco tiene forma de…','cilindro',['cubo','cono']),
  ()=>MCx('Un cucurucho de helado tiene forma de…','cono',['esfera','cubo']),
  ()=>MCx('¿Qué figura no tiene lados rectos?','el círculo',['el cuadrado','el triángulo']),
  ()=>MCx('Lo contrario de «arriba» es…','abajo',['dentro','cerca']),
  ()=>MCx('Lo contrario de «cerca» es…','lejos',['encima','delante']),
  ()=>MCx('Lo contrario de «delante» es…','detrás',['debajo','lejos']),
  ()=>MCx('Lo contrario de «dentro» es…','fuera',['arriba','cerca'])])()},
 m1med(){return pick([
  ()=>MCx('¿Qué pesa más?','una sandía',['una uva','una pluma']),
  ()=>MCx('¿Qué es más largo?','un autobús',['un lápiz','una cuchara']),
  ()=>MCx('¿Qué cabe más agua?','una bañera',['un vaso','una taza']),
  ()=>MCx('Para saber cuánto pesa una persona usamos…','una báscula',['un reloj','una regla']),
  ()=>MCx('Para medir lo largo que es un libro usamos…','una regla',['una báscula','un calendario']),
  ()=>MCx('Para saber qué día es hoy miramos…','el calendario',['la regla','la báscula']),
  ()=>MCx('La leche de un cartón se mide en…','litros',['metros','kilos']),
  ()=>MCx('Lo alto que es un árbol se mide en…','metros',['litros','kilos']),
  ()=>MCx('El peso de las patatas se mide en…','kilos',['litros','metros']),
  ()=>N('¿Cuántos días tiene una semana?',7),()=>N('¿Cuántos meses tiene un año?',12),()=>N('¿Cuántas horas tiene un día?',24)])()},
 m1ser(){if(R(0,2)){const s=pick([1,2,5,10,2,10]),down=R(0,3)===0,a=down?R(4*s+1,4*s+30):R(0,40);const st=down?-s:s;
   const seq=[0,1,2,3].map(k=>a+k*st);return N(`Completa la serie: ${seq.join(', ')}, …`,a+4*st,`Cada número va ${down?'restando':'sumando'} ${s}.`)}
  const sets=[['●','▲'],['★','■','●'],['rojo','azul'],['sol','luna','luna']];const p=pick(sets);const L=p.length;const n=R(L+2,L*2+1);
  const shown=Array.from({length:n},(_,k)=>p[k%L]).join(' ');const ans=p[n%L];const opts=[...new Set(p)];
  return M(`¿Qué va después? ${shown} …`,opts,opts.indexOf(ans),'Busca el trozo que se repite.')},
 m1din(){const t=R(0,3);
  if(t===0){const a=pick([1,2]),b=pick([1,2]),c=pick([1,2]);return N(`Tengo monedas de ${a} €, ${b} € y ${c} €. ¿Cuántos euros tengo?`,a+b+c)}
  if(t===1){const p=R(1,4),bill=5;return N(`Un cuaderno cuesta ${p} € y pago con un billete de ${bill} €. ¿Cuántos euros me devuelven?`,bill-p,`${bill} − ${p} = ${bill-p}.`)}
  if(t===2){const b=pick([5,10,20]);return N(`¿Cuántas monedas de 1 € valen lo mismo que un billete de ${b} €?`,b)}
  const x=pick([5,10,20]),y=pick([5,10,20,50]);return N(`Tengo un billete de ${x} € y otro de ${y} €. ¿Cuántos euros tengo?`,x+y)},
 m1graf(){const fr=shuffle(['manzana','plátano','fresa','naranja']).slice(0,3),v=fr.map(()=>R(1,8));
  while(new Set(v).size<3)v[R(0,2)]=R(1,8);
  const g=`Fruta favorita de la clase: ${fr.map((f,i)=>`${f} ${bar(v[i])}`).join(' · ')} (cada ■ es un niño). `;const t=R(0,2),i=R(0,2);
  if(t===0)return N(g+`¿Cuántos niños eligieron ${fr[i]}?`,v[i]);
  if(t===1){const mx=v.indexOf(Math.max(...v));return M(g+'¿Qué fruta eligieron más niños?',fr,mx)}
  return N(g+'¿Cuántos niños votaron en total?',v[0]+v[1]+v[2],'Suma todos los cuadraditos.')},
 /* 2º: hasta 199 */
 m2n199(){const t=R(0,3),n=R(100,199);
  if(t===0){const [nm,k]=pick([['unidades',0],['decenas',1],['centenas',2]]);return N(`¿Qué cifra ocupa las ${nm} en el ${n}?`,Math.floor(n/10**k)%10,`${n}: ${Math.floor(n/100)} centena, ${Math.floor(n/10)%10} decenas y ${n%10} unidades.`)}
  if(t===1){const d=R(0,9),u=R(0,9);return N(`1 centena, ${d} decenas y ${u} unidades. ¿Qué número es?`,100+10*d+u)}
  if(t===2)return R(0,1)?N(`¿Qué número va después del ${n-1}?`,n):N(`¿Qué número va antes del ${n}?`,n-1);
  let a=R(60,199),b=R(60,199);while(b===a)b=R(60,199);return M('¿Qué número es mayor?',[String(a),String(b)],a>b?0:1,'Compara primero las centenas, luego las decenas.')},
 m2sr199(){if(R(0,1)){const a=R(15,120),b=R(15,199-a);return N(`${a} + ${b} =`,a+b,'Suma las unidades; si pasan de 9, te llevas una decena.')}
  const a=R(40,199),b=R(12,a-1);return N(`${a} − ${b} =`,a-b,'Si arriba hay menos unidades, pide prestada una decena.')},
 m2mental(){const t=R(0,4);
  if(t===0){const a=R(10,180);return N(`${a} + 10 =`,a+10,'Sumar 10 es subir una decena.')}
  if(t===1){const a=R(20,199);return N(`${a} − 10 =`,a-10,'Restar 10 es bajar una decena.')}
  if(t===2){const a=R(5,50);return N(`El doble de ${a} es…`,2*a,`${a} + ${a}.`)}
  if(t===3){const a=2*R(2,40);return N(`La mitad de ${a} es…`,a/2,`Reparte ${a} en dos partes iguales.`)}
  const a=R(20,150);return N(`${a} + 9 =`,a+9,`Truco: suma 10 y quita 1.`)},
 m2din(){const t=R(0,3);
  if(t===0){const p=R(3,18),b=pick([20,50].filter(x=>x>p));return N(`Un libro cuesta ${p} € y pago con ${b} €. ¿Cuánto me devuelven?`,b-p)}
  if(t===1){const x=pick([5,10,20]),y=pick([1,2,5]),z=pick([1,2]);return N(`Tengo un billete de ${x} €, uno de ${y} € y una moneda de ${z} €. ¿Cuántos euros tengo?`,x+y+z)}
  if(t===2){const a=R(5,30),b=R(5,30);const has=R(10,40);return M(`Tengo ${has} €. ¿Puedo comprar un balón de ${a} € y una gorra de ${b} €?`,['Sí','No'],has>=a+b?0:1,`El total es ${a+b} €.`)}
  const s=R(2,5),w=R(3,8);return N(`Ahorro ${s} € cada semana. ¿Cuántos euros tendré en ${w} semanas?`,s*w,`${w} veces ${s} €.`)},
 m2hora(){const t=R(0,3);
  if(t===0){const h=R(1,9),k=R(1,3);return N(`Son las ${h} en punto. ¿Qué hora será dentro de ${k} hora${k>1?'s':''}?`,h+k)}
  if(t===1){const d=R(0,6),k=pick([1,2]);return MCx(`Si hoy es ${DAYS[d]}, ¿qué día será ${k===1?'mañana':'pasado mañana'}?`,DAYS[(d+k)%7],[DAYS[(d+k+1)%7],DAYS[(d+6)%7]])}
  if(t===2)return pick([N('¿Cuántos días tienen dos semanas?',14),N('¿Cuántos minutos tiene media hora?',30),N('¿Cuántos meses tiene medio año?',6),N('¿Cuántas estaciones tiene un año?',4)]);
  return MCx('¿Qué dura más?','una semana',['un día','una hora'])},
 m2geo(){return pick([
  ()=>N('¿Cuántos lados tiene un pentágono?',5),()=>N('¿Cuántos lados tiene un hexágono?',6),()=>N('¿Cuántos vértices (esquinas) tiene un triángulo?',3),
  ()=>N('¿Cuántas caras tiene un cubo?',6),()=>MCx('¿Qué cuerpo puede rodar?','el cilindro',['el cubo','la pirámide']),
  ()=>MCx('Una caja de zapatos tiene forma de…','prisma',['esfera','cono']),
  ()=>MCx('Una figura con 4 lados iguales y 4 esquinas iguales es un…','cuadrado',['triángulo','pentágono']),
  ()=>MCx('Las líneas de una puerta que van de arriba abajo son líneas…','rectas',['curvas','redondas']),
  ()=>MCx('¿Qué figura es plana?','el triángulo',['el cubo','la esfera'])])()},
 m2pat(){const t=R(0,3);
  if(t===0){const a=R(2,15),b=R(2,15);return N(`? + ${b} = ${a+b}. ¿Qué número falta?`,a,`Piensa: ${a+b} − ${b}.`)}
  if(t===1){const a=R(15,40),b=R(2,12);return N(`${a} − ? = ${a-b}. ¿Qué número falta?`,b)}
  if(t===2){const a=R(2,10),b=R(2,10),c=R(2,10),d=a+b-c;const ok=R(0,1)&&d>0;const dd=ok?d:a+b-c+R(1,3);return M(`${a} + ${b} ___ ${c} + ${dd}. ¿Qué signo va?`,['=','≠'],a+b===c+dd?0:1,`${a} + ${b} = ${a+b} y ${c} + ${dd} = ${c+dd}.`)}
  const a=R(3,9),b=R(3,9),wrong=R(0,1);const r=a+b+(wrong?R(1,2):0);return M(`¿Es verdad que ${a} + ${b} = ${r}?`,['Sí','No'],wrong?1:0,`${a} + ${b} = ${a+b}.`)},
 m2rep(){const t=R(0,1),a=R(2,5),n=R(2,5);
  if(t===0)return N(`${Array(n).fill(a).join(' + ')} =`,a*n,`Sumamos ${n} veces el ${a}.`);
  return N(`Hay ${n} platos con ${a} galletas en cada uno. ¿Cuántas galletas hay en total?`,a*n,`${Array(n).fill(a).join(' + ')} = ${a*n}.`)},
 m2graf(){const kinds=shuffle(['perro','gato','pez','pájaro']).slice(0,3),v=kinds.map(()=>2*R(1,5));
  const g=`Mascotas de la clase: ${kinds.map((k,i)=>`${k} ${bar(v[i]/2)}`).join(' · ')} (cada ■ son 2 niños). `;const i=R(0,2),j=(i+1)%3;
  return R(0,1)?N(g+`¿Cuántos niños tienen ${kinds[i]}?`,v[i],`Cada cuadradito vale 2: ${v[i]/2} × 2.`)
   :(v[i]===v[j]?N(g+`¿Cuántos niños hay entre ${kinds[i]} y ${kinds[j]}?`,v[i]+v[j]):N(g+`¿Cuántos niños más tienen ${v[i]>v[j]?kinds[i]:kinds[j]} que ${v[i]>v[j]?kinds[j]:kinds[i]}?`,Math.abs(v[i]-v[j])))},
 /* ===== 2.º ciclo ===== */
 m3n9999(){const n=R(1000,9999),t=R(0,3);
  if(t===0){const [nm,k]=pick([['unidades',0],['decenas',1],['centenas',2],['unidades de millar',3]]);return N(`¿Qué cifra ocupa las ${nm} en el ${fmt(n)}?`,Math.floor(n/10**k)%10)}
  if(t===1){const um=R(1,9),c=R(0,9),d=R(0,9),u=R(0,9);return N(`${um} unidades de millar, ${c} centenas, ${d} decenas y ${u} unidades. ¿Qué número es?`,um*1000+c*100+d*10+u)}
  if(t===2){const s=pick([1,10,100]);return N(`¿Qué número es ${s} más que ${fmt(n)}?`,n+s)}
  let b=R(1000,9999);while(b===n)b=R(1000,9999);return M('¿Qué número es mayor?',[fmt(n),fmt(b)],n>b?0:1,'Compara primero los millares.')},
 m3sr(){if(R(0,1)){const a=R(1000,6000),b=R(100,9999-a);return N(`${fmt(a)} + ${fmt(b)} =`,a+b,'Suma por columnas, de derecha a izquierda.')}
  const a=R(2000,9999),b=R(100,a-1);return N(`${fmt(a)} − ${fmt(b)} =`,a-b,'Resta por columnas empezando por las unidades.')},
 m3tab(){const a=R(2,10),b=R(1,10);return R(0,4)?N(`${a} × ${b} =`,a*b,`Tabla del ${a}.`):N(`${a} × ? = ${a*b}. ¿Qué número falta?`,b,`Busca en la tabla del ${a}.`)},
 m3med(){return pick([
  ()=>{const n=R(1,9);return N(`¿Cuántos metros son ${n} km?`,n*1000,'1 km = 1.000 m.')},
  ()=>{const n=R(1,9);return N(`¿Cuántos centímetros son ${n} m?`,n*100,'1 m = 100 cm.')},
  ()=>{const n=R(1,9);return N(`¿Cuántos milímetros son ${n} cm?`,n*10,'1 cm = 10 mm.')},
  ()=>{const n=R(1,9);return N(`¿Cuántos gramos son ${n} kg?`,n*1000,'1 kg = 1.000 g.')},
  ()=>{const n=R(1,5);return N(`¿Cuántos mililitros son ${n} l?`,n*1000,'1 l = 1.000 ml.')},
  ()=>MCx('¿Qué unidad usarías para medir una hormiga?','milímetros',['kilómetros','metros']),
  ()=>MCx('¿Qué unidad usarías para la distancia de Lucena a Córdoba?','kilómetros',['centímetros','milímetros']),
  ()=>MCx('¿Qué pesa más?','1 kg de paja',['500 g de hierro','300 g de arena'],'1 kg son 1.000 g, sea de lo que sea.'),
  ()=>{const a=R(1,4);return N(`Una botella tiene ${a} l. ¿Cuántos vasos de 250 ml se pueden llenar?`,a*4,'1 l = 1.000 ml = 4 vasos de 250 ml.')}])()},
 m3time(){const t=R(0,3);
  if(t===0){const h=R(1,4);return N(`¿Cuántos minutos hay en ${h} hora${h>1?'s':''}?`,h*60,'1 hora = 60 minutos.')}
  if(t===1){const h=R(9,18),d=pick([15,30,45,90,120]);const end=h*60+d;const hh=Math.floor(end/60),mm=end%60;const s=`${hh}:${String(mm).padStart(2,'0')}`;
   return {q:`Una actividad empieza a las ${h}:00 y dura ${d} minutos. ¿A qué hora termina? (escribe por ejemplo 10:30)`,txt:[s,s.replace(':','.'),`${hh}h${String(mm).padStart(2,'0')}`],e:`${h}:00 + ${d} min = ${s}.`}}
  if(t===2){const m=pick([120,180,240]);return N(`¿Cuántas horas son ${m} minutos?`,m/60)}
  return pick([N('¿Cuántos segundos tiene un minuto?',60),N('¿Cuántos días tiene un año normal?',365),N('¿Cuántos días tiene el mes de abril?',30)])},
 m3geo(){return pick([
  ()=>MCx('Dos rectas que nunca se cortan son…','paralelas',['perpendiculares','curvas']),
  ()=>MCx('Dos rectas que se cortan formando una esquina como la de un folio son…','perpendiculares',['paralelas','curvas']),
  ()=>MCx('Las vías del tren son un ejemplo de rectas…','paralelas',['perpendiculares','secantes curvas']),
  ()=>MCx('Un triángulo con los tres lados iguales es…','equilátero',['escaleno','isósceles']),
  ()=>MCx('Un polígono de 8 lados es un…','octógono',['hexágono','pentágono']),
  ()=>N('¿Cuántos lados tiene un octógono?',8),()=>N('¿Cuántas caras tiene una pirámide de base cuadrada?',5),
  ()=>MCx('Un rectángulo tiene…','4 ángulos rectos',['3 ángulos rectos','ningún ángulo recto'])])()},
 m3est(){if(R(0,1)){const c=shuffle(['rojo','azul','verde','amarillo']).slice(0,3),v=c.map(()=>R(1,9));while(new Set(v).size<3)v[R(0,2)]=R(1,9);
   const mx=v.indexOf(Math.max(...v));return M(`Colores favoritos: ${c.map((x,i)=>`${x} ${v[i]}`).join(', ')}. ¿Cuál es la moda (el más repetido)?`,c,mx,'La moda es el dato que más se repite.')}
  return pick([
   ()=>MCx('En una bolsa solo hay bolas rojas. Sacar una bola roja es…','seguro',['posible','imposible']),
   ()=>MCx('En una bolsa solo hay bolas rojas. Sacar una bola verde es…','imposible',['seguro','posible']),
   ()=>MCx('Al tirar un dado, sacar un 4 es…','posible',['seguro','imposible']),
   ()=>MCx('Al tirar un dado, sacar un 7 es…','imposible',['posible','seguro']),
   ()=>MCx('Que mañana salga el sol por el este es…','seguro',['imposible','posible'])])()},
 m4red2(){const n=R(1000,9999),[nm,s]=pick([['las decenas',10],['las centenas',100],['los millares',1000]]);return N(`Redondea ${fmt(n)} a ${nm}.`,Math.round(n/s)*s,'Mira la cifra de la derecha: si es 5 o más, se sube.')},
 m4frac(){const t=R(0,3);
  if(t===0){const d=R(3,10);let a=R(1,d-1),b=R(1,d-1);while(b===a)b=R(1,d-1);return M('¿Qué fracción es mayor?',[`${a}/${d}`,`${b}/${d}`],a>b?0:1,'Con el mismo denominador, es mayor la que tiene el numerador mayor.')}
  if(t===1){const d=pick([2,3,4,5,10]),a=R(1,d-1),n=d*R(2,10);return N(`¿Cuánto es ${a}/${d} de ${n}?`,a*n/d,`${n} : ${d} = ${n/d}; × ${a} = ${a*n/d}.`)}
  if(t===2){const d=R(3,10),a=R(1,d-2),b=R(1,d-1-a);return F(`${a}/${d} + ${b}/${d} =`,a+b,d,'Mismo denominador: suma los numeradores.')}
  const NM=['','','un medio','un tercio','un cuarto','un quinto','un sexto','un séptimo','un octavo','un noveno','un décimo'];const d=R(2,10);
  return MCx(`¿Cómo se lee 1/${d}?`,NM[d],[NM[d===10?9:d+1],NM[d===2?3:d-1]].filter((x,i,a)=>a.indexOf(x)===i))},
 m4conv(){return pick([
  ()=>{const a=R(1,5),b=R(1,9)*100;return N(`${a} km y ${b} m. ¿Cuántos metros son en total?`,a*1000+b)},
  ()=>{const a=R(1,9),b=R(1,99);return N(`${a} m y ${b} cm. ¿Cuántos centímetros son?`,a*100+b)},
  ()=>{const a=R(1,4),b=R(1,9)*100;return N(`${a} kg y ${b} g. ¿Cuántos gramos son?`,a*1000+b)},
  ()=>{const n=R(2,9)*1000;return N(`¿Cuántos kilos son ${fmt(n)} g?`,n/1000)},
  ()=>{const h=R(1,3),m=R(5,55);return N(`${h} h y ${m} min. ¿Cuántos minutos son?`,h*60+m)},
  ()=>{const n=R(2,9)*1000;return N(`¿Cuántos litros son ${fmt(n)} ml?`,n/1000)}])()},
 m4din(){const t=R(0,3);
  if(t===0){const c=R(1,19)*5,e=R(1,9);const p=e*100+c;const pay=pick([10,20].filter(x=>x*100>p));const ch=(pay*100-p)/100;
   return N(`Algo cuesta ${fmt(p/100)} € y pago con ${pay} €. ¿Cuánto me devuelven (en €)?`,ch,`${pay} − ${fmt(p/100)} = ${fmt(ch)} €.`)}
  if(t===1){const n=R(2,8);return N(`¿Cuántos céntimos son ${n},50 €?`,n*100+50,'1 € = 100 céntimos.')}
  if(t===2){const s=R(2,6),w=R(4,12);return N(`Ahorro ${s} € a la semana. ¿Cuánto tendré en ${w} semanas?`,s*w)}
  const a=R(2,9),b=R(2,9);return N(`Compro ${a} cuadernos a ${b} € cada uno. ¿Cuánto pago?`,a*b)},
 m4ang(){return pick([
  ()=>N('¿Cuántos grados mide un ángulo recto?',90),()=>N('¿Cuántos grados mide un ángulo llano?',180),
  ()=>MCx('Un ángulo de 45° es…','agudo',['recto','obtuso'],'Agudo: menor que 90°.'),
  ()=>MCx('Un ángulo de 120° es…','obtuso',['agudo','recto'],'Obtuso: mayor que 90° y menor que 180°.'),
  ()=>MCx('La esquina de una hoja de papel es un ángulo…','recto',['agudo','obtuso']),
  ()=>MCx('Si doblo un dibujo y las dos mitades coinciden, tiene…','simetría',['traslación','giro']),
  ()=>MCx('Mover una figura sin girarla ni darle la vuelta es una…','traslación',['simetría','ampliación']),
  ()=>MCx('¿Qué letra tiene un eje de simetría vertical?','A',['F','G'])])()},
 m4moda(){const v=Array.from({length:7},()=>R(1,6));const cnt={};v.forEach(x=>cnt[x]=(cnt[x]||0)+1);const mx=Math.max(...Object.values(cnt));const modes=Object.keys(cnt).filter(k=>cnt[k]===mx);
  if(modes.length===1&&R(0,1))return N(`Puntos de un dado en 7 tiradas: ${v.join(', ')}. ¿Cuál es la moda?`,+modes[0],'Es el número que más veces sale.');
  const k=v[R(0,6)];return N(`Puntos de un dado en 7 tiradas: ${v.join(', ')}. ¿Cuántas veces salió el ${k}?`,cnt[k],'Eso es la frecuencia absoluta.')},
 m4prob(){const r=R(1,8),a=R(1,8);if(r===a)return MCx(`En una bolsa hay ${r} bolas rojas y ${a} azules. ¿Qué es más probable?`,'las dos igual',['roja','azul']);
  return M(`En una bolsa hay ${r} bolas rojas y ${a} azules. Si saco una sin mirar, ¿qué es más probable?`,['roja','azul','las dos igual'],r>a?0:1,'Es más probable el color del que hay más bolas.')},
 /* ===== 3.er ciclo ===== */
 m5num(){const t=R(0,3);
  if(t===0){const n=R(1000000,99999999);const [nm,k]=pick([['millones',6],['centenas de millar',5],['unidades de millar',3]]);return N(`¿Qué cifra ocupa las ${nm} en el ${fmt(n)}?`,Math.floor(n/10**k)%10)}
  if(t===1){const x=R(1001,99999)/1000;const [nm,k]=pick([['décimas',1],['centésimas',2],['milésimas',3]]);return N(`En ${fmt(x)}, ¿qué cifra ocupa las ${nm}?`,Math.floor(Math.round(x*1000)/10**(3-k))%10)}
  if(t===2){const x=R(101,9999)/100;return N(`Redondea ${fmt(x)} a las unidades.`,Math.round(x),'Mira las décimas: si es 5 o más, se sube.')}
  const m=R(2,9);return N(`Escribe con cifras: ${['','','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'][m]} millones.`,m*1e6)},
 m5pot(){const a=R(2,12);return R(0,2)?N(`${a}² =`,a*a,`${a} × ${a}.`):(a<=6?N(`${a}³ =`,a**3,`${a} × ${a} × ${a}.`):N(`${a}² =`,a*a))},
 m5conv(){return pick([
  ()=>{const x=R(11,99)/10;return N(`¿Cuántos metros son ${fmt(x)} km?`,r2(x*1000),'1 km = 1.000 m: la coma se mueve 3 lugares.')},
  ()=>{const n=R(15,95)*10;return N(`¿Cuántos litros son ${n} cl?`,r2(n/100),'1 l = 100 cl.')},
  ()=>{const x=R(11,99)/10;return N(`¿Cuántos gramos son ${fmt(x)} kg?`,r2(x*1000))},
  ()=>{const n=R(12,98)*10;return N(`¿Cuántos metros son ${n} cm?`,r2(n/100))},
  ()=>{const n=R(2,9);return N(`¿Cuántos m² son ${n} dam²?`,n*100,'1 dam² = 100 m².')},
  ()=>{const n=R(2,9);return N(`¿Cuántos cm² son ${n} dm²?`,n*100,'1 dm² = 100 cm².')}])()},
 m5ang(){const t=R(0,2);
  if(t===0){const a=R(30,80),b=R(30,150-a);return N(`Dos ángulos de un triángulo miden ${a}° y ${b}°. ¿Cuánto mide el tercero?`,180-a-b,'Los ángulos de un triángulo suman 180°.')}
  if(t===1){const a=R(10,80);return N(`¿Cuánto le falta a un ángulo de ${a}° para ser recto?`,90-a,'Un recto mide 90°: son ángulos complementarios.')}
  const a=R(20,160);return N(`¿Cuánto le falta a un ángulo de ${a}° para ser llano?`,180-a,'Un llano mide 180°: son ángulos suplementarios.')},
 m5est(){const v=Array.from({length:5},()=>R(2,10));const s=v.reduce((a,b)=>a+b,0);
  if(s%5===0&&R(0,1))return N(`Calcula la media de: ${v.join(', ')}`,s/5,`Suma: ${s}. Entre 5: ${s/5}.`);
  if(R(0,1))return N(`¿Cuál es el rango de: ${v.join(', ')}?`,Math.max(...v)-Math.min(...v),'Rango = dato mayor − dato menor.');
  const w=[...v,v[0]];const c={};w.forEach(x=>c[x]=(c[x]||0)+1);const mx=Math.max(...Object.values(c));const md=Object.keys(c).filter(k=>c[k]===mx);
  return md.length===1?N(`¿Cuál es la moda de: ${shuffle(w).join(', ')}?`,+md[0]):N(`¿Cuál es el dato mayor de: ${v.join(', ')}?`,Math.max(...v))},
 m6dec(){const t=R(0,3);
  if(t===0){let a=R(1001,9999)/1000,b=R(1001,9999)/1000;if(a===b)b=r2(b+.001);return M('¿Qué número es mayor?',[fmt(a),fmt(b)],a>b?0:1,'Compara unidades, décimas, centésimas y milésimas, por orden.')}
  if(t===1){const x=R(101,9999)/100,m=pick([10,100,1000]);return N(`${fmt(x)} × ${fmt(m)} =`,r2(x*m),`× ${fmt(m)}: la coma se mueve ${String(m).length-1} lugar${m>10?'es':''} a la derecha.`)}
  if(t===2){const x=R(11,999)/10,m=pick([10,100]);return N(`${fmt(x)} : ${m} =`,r2(x/m),`: ${m}: la coma se mueve ${m===10?'un lugar':'dos lugares'} a la izquierda.`)}
  const a=R(1001,5000)/1000,b=R(101,999)/100;return N(`${fmt(a)} + ${fmt(b)} =`,r2(a+b),'Coloca la coma debajo de la coma y completa con ceros.')},
 m6esc(){const k=pick([1000,10000,100000]),c=R(2,9);
  return k===100000?N(`En un mapa a escala 1:100.000, ${c} cm representan… ¿cuántos km?`,c,'1 cm del mapa = 100.000 cm reales = 1 km.')
   :k===10000?N(`En un plano a escala 1:10.000, ${c} cm son… ¿cuántos metros?`,c*100,'1 cm = 10.000 cm = 100 m.')
   :N(`En un plano a escala 1:1.000, ${c} cm son… ¿cuántos metros?`,c*10,'1 cm = 1.000 cm = 10 m.')},
 m6area(){const t=R(0,3);
  if(t===0){const a=R(4,12),b=R(3,10),c=R(1,a-2),d=R(1,b-1);return N(`Una figura en forma de L es un rectángulo de ${a} × ${b} m al que le falta un rectángulo de ${c} × ${d} m. ¿Cuál es su área en m²?`,a*b-c*d,`${a*b} − ${c*d} = ${a*b-c*d} m².`)}
  if(t===1){const D=2*R(2,10),d=2*R(2,8);return N(`Área de un rombo con diagonales de ${D} cm y ${d} cm (en cm²):`,D*d/2,'Área del rombo = D × d : 2.')}
  if(t===2){const b=R(3,15),h=R(2,10);return N(`Área de un romboide de base ${b} m y altura ${h} m (en m²):`,b*h,'Área = base × altura.')}
  const l=R(3,12);return N(`Perímetro de un hexágono regular de ${l} cm de lado (en cm):`,6*l)},
 m6prob(){const r=R(1,6),a=R(1,6),v=R(0,5);const T=r+a+v;const [nm,k]=pick([['roja',r],['azul',a],...(v?[['verde',v]]:[])]);
  const pl=(n,w)=>`${n} ${n===1?w.replace(/s(\b)/g,'$1').replace('bolas','bola'):w}`;
  return F(`En una bolsa hay ${pl(r,'bolas rojas')}, ${pl(a,'azules').replace(/^1 azule$/,'1 azul')}${v?` y ${pl(v,'verdes').replace(/^1 verde$/,'1 verde')}`:''}. ¿Cuál es la probabilidad de sacar una ${nm}? (escribe una fracción)`,k,T,`Casos favorables entre casos posibles: ${k}/${T}.`)},
 m6x(){const t=R(0,3),x=R(2,15);
  if(t===0){const a=R(3,30);return N(`x + ${a} = ${x+a}. ¿Cuánto vale x?`,x)}
  if(t===1){const a=R(2,9);return N(`${a} × x = ${a*x}. ¿Cuánto vale x?`,x)}
  if(t===2){const a=R(2,9);return N(`x : ${a} = ${x}. ¿Cuánto vale x?`,a*x)}
  const a=R(1,x-1);return N(`x − ${a} = ${x-a}. ¿Cuánto vale x?`,x)}
});
