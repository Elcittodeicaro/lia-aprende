/* ---------- utilidades ---------- */
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const fmt=v=>Number(v).toLocaleString('es-ES',{maximumFractionDigits:3});
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const lcm=(a,b)=>a*b/gcd(a,b);
const simp=(p,q)=>{const g=gcd(p,q);return [p/g,q/g]};
const r2=v=>Math.round(v*1000)/1000;
const N=(q,v,e='')=>({q,num:v,e});
const F=(q,p,d,e='')=>({q,frac:[p,d],e});
const M=(q,o,a,e='')=>({q,o,a,e});
const $=id=>document.getElementById(id);

/* ---------- generadores de Matemáticas ---------- */
const G={
 m1num(){const t=R(0,2);
  if(t===0){const n=R(1,98);return N(`¿Qué número va después del ${n}?`,n+1)}
  if(t===1){const n=R(10,99);return N(`¿Cuántas decenas tiene el ${n}?`,Math.floor(n/10),`${n} = ${Math.floor(n/10)} decenas y ${n%10} unidades.`)}
  let a=R(10,99),b=R(10,99);while(b===a)b=R(10,99);return M('¿Qué número es mayor?',[String(a),String(b)],a>b?0:1,'Mira primero las decenas.')},
 m1sum(){const a=R(1,60),b=R(1,99-a);return N(`${a} + ${b} =`,a+b)},
 m1res(){const a=R(10,99),b=R(1,a);return N(`${a} − ${b} =`,a-b)},
 m1prob(){const a=R(3,15),b=R(2,9);const n=pick(['Lucía','Pablo','Aya','Hugo','Martina']);
  return R(0,1)?N(`${n} tiene ${a} cromos y le regalan ${b}. ¿Cuántos cromos tiene ahora?`,a+b,`Juntamos: ${a} + ${b} = ${a+b}.`)
   :N(`En el autobús van ${a+b} niños. Se bajan ${b}. ¿Cuántos niños quedan?`,a,`Quitamos: ${a+b} − ${b} = ${a}.`)},
 m2num(){const t=R(0,2),n=R(100,999);
  if(t===0)return N(`¿Cuántas centenas tiene el ${n}?`,Math.floor(n/100),`${n}: ${Math.floor(n/100)} centenas, ${Math.floor(n/10)%10} decenas y ${n%10} unidades.`);
  if(t===1){const c=R(1,9),d=R(0,9),u=R(0,9);return N(`Escribe el número: ${c} centenas, ${d} decenas y ${u} unidades.`,c*100+d*10+u)}
  return N(`¿Qué número va antes del ${n}?`,n-1)},
 m2sr(){if(R(0,1)){const a=R(100,899),b=R(15,999-a);return N(`${a} + ${b} =`,a+b,'Suma por columnas y no olvides lo que te llevas.')}
  const a=R(200,999),b=R(100,a);return N(`${a} − ${b} =`,a-b,'Resta por columnas empezando por las unidades.')},
 m2tab(){const a=pick([2,3,4,5,10]),b=R(1,10);return N(`${a} × ${b} =`,a*b,`Tabla del ${a}: ${a} × ${b} = ${a*b}.`)},
 m2med(){const t=R(0,3);
  if(t===0){const n=R(1,9);return N(`¿Cuántos centímetros hay en ${n} metro${n>1?'s':''}?`,n*100,'1 metro = 100 centímetros.')}
  if(t===1){const n=R(1,9);return N(`¿Cuántos céntimos son ${n} euro${n>1?'s':''}?`,n*100,'1 euro = 100 céntimos.')}
  if(t===2){const a=R(2,6);return N(`Tengo ${a} monedas de 50 céntimos. ¿Cuántos céntimos tengo?`,a*50,`${a} × 50 = ${a*50} céntimos.`)}
  return pick([N('¿Cuántos minutos tiene una hora?',60),N('¿Cuántos minutos tiene media hora?',30),N('¿Cuántos minutos tiene un cuarto de hora?',15)])},
 m3num(){const n=R(1000,99999);
  if(R(0,1)){const pl=[['unidades',0],['decenas',1],['centenas',2],['unidades de millar',3]];const [nm,k]=pick(pl);
   return N(`¿Qué cifra ocupa las ${nm} en el ${fmt(n)}?`,Math.floor(n/10**k)%10)}
  const um=R(1,9),c=R(0,9),d=R(0,9),u=R(0,9);return N(`Escribe el número: ${um} unidades de millar, ${c} centenas, ${d} decenas y ${u} unidades.`,um*1000+c*100+d*10+u)},
 m3mul(){const a=R(12,999),b=R(2,9);return N(`${a} × ${b} =`,a*b,'Multiplica empezando por las unidades y suma lo que te llevas.')},
 m3div(){const b=R(2,9),c=R(2,12);return N(`${b*c} : ${b} =`,c,`Piensa en la tabla del ${b}: ${b} × ${c} = ${b*c}.`)},
 m3frac(){const t=R(0,1);
  if(t===0){const [nm,d]=pick([['la mitad',2],['un tercio',3],['un cuarto',4]]);const n=d*R(2,12);return N(`¿Cuánto es ${nm} de ${n}?`,n/d,`Divide ${n} entre ${d}.`)}
  const n=pick([4,6,8,10]),k=R(1,n-1);return F(`Una pizza tiene ${n} trozos iguales y te comes ${k}. ¿Qué fracción te has comido? (escribe por ejemplo 2/5)`,k,n,`Numerador: trozos que comes (${k}). Denominador: trozos totales (${n}).`)},
 m4red(){const n=R(1000,99999);const [nm,s]=pick([['las decenas',10],['las centenas',100],['los millares',1000]]);
  return N(`Redondea ${fmt(n)} a ${nm}.`,Math.round(n/s)*s,'Mira la cifra de la derecha: si es 5 o más, se sube.')},
 m4mul(){const a=R(12,99),b=R(12,99);return N(`${a} × ${b} =`,a*b,'Multiplica por las unidades, luego por las decenas (dejando un hueco) y suma.')},
 m4div(){const b=R(2,9),a=R(100,999);
  return R(0,1)?N(`${a} : ${b}. ¿Cuál es el cociente?`,Math.floor(a/b),`${b} × ${Math.floor(a/b)} = ${b*Math.floor(a/b)}, resto ${a%b}.`)
   :N(`${a} : ${b}. ¿Cuál es el resto?`,a%b,`${a} = ${b} × ${Math.floor(a/b)} + ${a%b}.`)},
 m4dec(){const t=R(0,2);
  if(t===0){const [txt,v]=pick([['1/2',.5],['1/4',.25],['3/4',.75],...[1,3,7,9].map(a=>[a+'/10',a/10]),...[5,25,45].map(a=>[a+'/100',a/100])]);return N(`Escribe ${txt} como número decimal.`,v)}
  if(t===1){const x=R(11,99)/10,y=R(11,99)/10;return N(`${fmt(x)} + ${fmt(y)} =`,r2(x+y),'Coloca la coma debajo de la coma y suma.')}
  let a=R(1,9)/10,b=R(11,99)/100;if(a===b)b+=.01;return M('¿Qué número es mayor?',[fmt(a),fmt(b)],a>b?0:1,'Compara primero las décimas.')},
 m4per(){const t=R(0,2);
  if(t===0){const l=R(3,20),w=R(2,l);return N(`Un rectángulo mide ${l} cm de largo y ${w} cm de ancho. ¿Cuál es su perímetro en cm?`,2*(l+w),`Perímetro = ${l}+${w}+${l}+${w} = ${2*(l+w)} cm.`)}
  if(t===1){const s=R(2,25);return N(`Un cuadrado tiene ${s} cm de lado. ¿Cuál es su perímetro en cm?`,4*s,`4 lados iguales: 4 × ${s} = ${4*s} cm.`)}
  const a=R(3,15),b=R(3,15),c=R(3,15);return N(`Un triángulo tiene lados de ${a}, ${b} y ${c} cm. ¿Cuál es su perímetro en cm?`,a+b+c,'El perímetro es la suma de todos los lados.')},
 m5comb(){const t=R(0,3),a=R(2,20),b=R(2,9),c=R(2,9);
  if(t===0)return N(`${a} + ${b} × ${c} =`,a+b*c,`Primero la multiplicación: ${b} × ${c} = ${b*c}; luego ${a} + ${b*c}.`);
  if(t===1)return N(`(${a} + ${b}) × ${c} =`,(a+b)*c,'Primero lo que hay dentro del paréntesis.');
  if(t===2){const k=R(2,9);return N(`${a} + ${c*k} : ${c} =`,a+k,`Primero la división: ${c*k} : ${c} = ${k}.`)}
  const x=b*c+R(0,20);return N(`${x} − ${b} × ${c} =`,x-b*c,`Primero la multiplicación: ${b} × ${c} = ${b*c}.`)},
 m5frac(){const t=R(0,2);
  if(t===0){const d=R(2,6),a=R(1,d-1),k=R(2,5);return N(`Fracción equivalente: ${a}/${d} = ?/${d*k}. ¿Qué número falta?`,a*k,`Si el denominador se multiplica por ${k}, el numerador también: ${a} × ${k}.`)}
  if(t===1){const d=R(5,12),a=R(1,d-2),b=R(1,d-1-a);return F(`${a}/${d} + ${b}/${d} =`,a+b,d,'Con el mismo denominador, se suman los numeradores.')}
  const d=pick([2,3,4,5]),a=R(1,d-1),n=d*R(2,12);return N(`¿Cuánto es ${a}/${d} de ${n}?`,a*n/d,`${n} : ${d} = ${n/d}; y por ${a}: ${a*n/d}.`)},
 m5dec(){const t=R(0,2);
  if(t===0){const x=R(101,999)/100,y=R(101,999)/100;return R(0,1)?N(`${fmt(x)} + ${fmt(y)} =`,r2(x+y),'Coloca la coma debajo de la coma.')
   :N(`${fmt(Math.max(x,y))} − ${fmt(Math.min(x,y))} =`,r2(Math.abs(x-y)),'Coloca la coma debajo de la coma.')}
  if(t===1){const x=R(101,9999)/100,m=pick([10,100]);return N(`${fmt(x)} × ${m} =`,r2(x*m),`Por ${m}, la coma se mueve ${m===10?'un lugar':'dos lugares'} a la derecha.`)}
  const x=R(11,99)/10,n=R(2,9);return N(`${fmt(x)} × ${n} =`,r2(x*n),'Multiplica sin la coma y luego pon una cifra decimal.')},
 m5pct(){const p=pick([5,10,20,25,50,75]),n=20*R(1,20);return N(`¿Cuánto es el ${p} % de ${n}?`,n*p/100,`${p} % = ${p}/100. ${n} × ${p} : 100 = ${n*p/100}.`)},
 m5area(){const t=R(0,2);
  if(t===0){const a=R(2,15),b=R(2,15);return N(`Área de un rectángulo de ${a} cm × ${b} cm (en cm²):`,a*b,'Área = base × altura.')}
  if(t===1){const s=R(2,12);return N(`Área de un cuadrado de ${s} cm de lado (en cm²):`,s*s,'Área = lado × lado.')}
  const b=2*R(2,10),h=R(2,12);return N(`Área de un triángulo de base ${b} cm y altura ${h} cm (en cm²):`,b*h/2,'Área = base × altura : 2.')},
 m6pot(){const t=R(0,3);
  if(t===0){const a=R(2,12);return N(`${a}² =`,a*a,`${a} × ${a}.`)}
  if(t===1){const a=R(2,6);return N(`${a}³ =`,a**3,`${a} × ${a} × ${a}.`)}
  if(t===2){const n=R(2,6);return N(`10${'⁰¹²³⁴⁵⁶'[n]} =`,10**n,`Un 1 seguido de ${n} ceros.`)}
  const a=R(2,15);return N(`√${a*a} =`,a,`${a} × ${a} = ${a*a}.`)},
 m6mcm(){const t=R(0,2);
  if(t===0){let a=R(2,12),b=R(2,12);while(b===a)b=R(2,12);return N(`m.c.m. (${a}, ${b}) =`,lcm(a,b),'El menor número que es múltiplo de los dos.')}
  if(t===1){const g=R(2,9);let x=R(1,6),y=R(1,6);while(gcd(x,y)!==1||x===y){x=R(1,6);y=R(1,6)}return N(`m.c.d. (${g*x}, ${g*y}) =`,g,'El mayor número que divide a los dos.')}
  const k=R(3,9),n=R(20,99);return M(`¿Es ${n} múltiplo de ${k}?`,['Sí','No'],n%k===0?0:1,`${n} : ${k} da resto ${n%k}.`)},
 m6frac(){const b=R(2,6);let d=R(2,6);while(d===b)d=R(2,6);const a=R(1,b-1),c=R(1,d-1);
  return R(0,1)?F(`${a}/${b} + ${c}/${d} = (puedes simplificar)`,a*d+c*b,b*d,`Denominador común ${b*d}: ${a*d}/${b*d} + ${c*b}/${b*d}.`)
   :F(`${a}/${b} × ${c}/${d} =`,a*c,b*d,'Numerador por numerador y denominador por denominador.')},
 m6prop(){if(R(0,1)){const P=20*R(1,15),d=pick([10,20,25,50]);return N(`Una camiseta cuesta ${P} € y tiene un ${d} % de descuento. ¿Cuánto pagas (en €)?`,P-P*d/100,`Descuento: ${P*d/100} €. ${P} − ${P*d/100} = ${P-P*d/100} €.`)}
  const u=R(1,9),k=R(2,6),m=R(2,9);return N(`${k} cuadernos cuestan ${k*u} €. ¿Cuánto cuestan ${m} cuadernos (en €)?`,m*u,`Un cuaderno cuesta ${u} €; ${m} × ${u} = ${m*u} €.`)},
 m6media(){const m=R(4,10);let x=[R(m-3,m+3),R(m-3,m+3),R(m-3,m+3)];let last=4*m-x[0]-x[1]-x[2];if(last<0){x=[m,m,m];last=m}x.push(last);
  return N(`Calcula la media de: ${shuffle(x).join(', ')}`,m,`Suma: ${4*m}. Divide entre 4: ${m}.`)}
};

/* ---------- contenidos ---------- */
const S={lengua:{n:'Lengua Castellana',c:'var(--lengua)'},mates:{n:'Matemáticas',c:'var(--mates)'},medio:{n:'Conocimiento del Medio',c:'var(--medio)'}};
const T=(t,f,q)=>({t,f,q});
const TG=(t,f,g)=>({t,f,g});
const ab=["aguda","llana","esdrújula"];
const DATA={
1:{lengua:[
 T('Las vocales y el abecedario',['Las vocales son cinco: a, e, i, o, u.','Las demás letras son consonantes.','El abecedario tiene 27 letras. Después de la n viene la ñ.'],[
  ['¿Cuántas vocales hay?',['5','3','7'],0,'Las vocales son a, e, i, o, u.'],['¿Cuál de estas letras es una vocal?',['o','m','t'],0],
  ['¿Qué letra va después de la n?',['ñ','o','m'],0,'En español, después de la n viene la ñ.'],['Escribe la vocal que falta: c_sa (donde vives)','a','Se escribe casa.'],
  ['Escribe la vocal que falta: l_na (sale de noche)','u','Se escribe luna.'],['¿Qué letra va antes de la c?',['b','d','a'],0,'a, b, c…'],['¿Con qué letra empieza «sol»?','s']]),
 T('Mayúsculas y punto',['Los nombres propios empiezan con mayúscula: Lucía, Lucena, Andalucía.','Al empezar a escribir y después de un punto, ponemos mayúscula.','Al terminar una frase ponemos un punto.'],[
  ['¿Cuál está bien escrita?',['Lucena','lucena','LUcena'],0,'Lucena es un nombre de ciudad.'],['¿Cuál está bien escrita?',['Mi perro se llama Toby.','mi perro se llama toby.','Mi perro se llama toby.'],0],
  ['¿Qué palabra lleva siempre mayúscula?',['Andalucía','mesa','casa'],0,'Es un nombre propio.'],['Después de un punto, la siguiente palabra empieza con…',['mayúscula','minúscula','un número'],0],
  ['¿Cuál es un nombre propio?',['María','niña','colegio'],0]]),
 T('Singular y plural',['Singular: uno (gato). Plural: varios (gatos).','Si la palabra acaba en vocal, añadimos -s: mesa → mesas.','Si acaba en consonante, añadimos -es: flor → flores.'],[
  ['Escribe el plural de «gato»','gatos','Acaba en vocal: añadimos -s.'],['Escribe el plural de «flor»','flores','Acaba en consonante: añadimos -es.'],
  ['Escribe el plural de «mesa»','mesas'],['Escribe el plural de «árbol»','árboles','Acaba en l: añadimos -es.'],['¿Cuál está en plural?',['casas','perro','lápiz'],0],['Escribe el singular de «coches»','coche']]),
 T('Las sílabas',['Las palabras se dividen en sílabas: ma-ri-po-sa.','Da una palmada por cada sílaba para contarlas.'],[
  ['¿Cuántas sílabas tiene «mesa»?',['2','1','3'],0,'me-sa'],['¿Cuántas sílabas tiene «sol»?',['1','2','3'],0],['¿Cuántas sílabas tiene «mariposa»?',['4','3','5'],0,'ma-ri-po-sa'],
  ['¿Cuántas sílabas tiene «pelota»?',['3','2','4'],0,'pe-lo-ta'],['Une las sílabas: ca + ma','cama'],['Une las sílabas: pa + to','pato']])],
 mates:[
 TG('Números hasta el 99',['Los números de dos cifras tienen decenas y unidades: 47 = 4 decenas y 7 unidades.','10 unidades forman 1 decena.','Para comparar, mira primero las decenas.'],G.m1num),
 TG('Sumas',['Sumar es juntar.','Suma primero las unidades y luego las decenas.','Puedes ayudarte con los dedos o dibujando palitos.'],G.m1sum),
 TG('Restas',['Restar es quitar.','El número grande va arriba.','Resta primero las unidades y luego las decenas.'],G.m1res),
 TG('Problemas',['Lee el problema despacio.','«Me dan», «juntamos», «en total» → suma.','«Se van», «quedan», «pierdo» → resta.'],G.m1prob)],
 medio:[
 T('El cuerpo y los sentidos',['Tenemos cinco sentidos: vista (ojos), oído (orejas), olfato (nariz), gusto (lengua) y tacto (piel).','El cuerpo tiene cabeza, tronco y extremidades.'],[
  ['¿Cuántos sentidos tenemos?',['5','3','10'],0],['¿Con qué olemos?',['Con la nariz','Con los ojos','Con las manos'],0],['¿Qué sentido usamos para oír música?',['El oído','La vista','El gusto'],0],
  ['Notamos si algo está frío o caliente con…',['el tacto','el olfato','el gusto'],0,'El tacto está en la piel.'],['Los brazos y las piernas son las…',['extremidades','cabezas','troncos'],0],['¿Con qué sentido sabemos que un limón es ácido?',['Gusto','Oído','Vista'],0]]),
 T('Animales y plantas',['Los seres vivos nacen, crecen, se reproducen y mueren.','Vivíparos: nacen del vientre de su madre (perro). Ovíparos: nacen de un huevo (gallina).','Las plantas necesitan agua, luz y aire.'],[
  ['La gallina nace de un huevo. Es un animal…',['ovíparo','vivíparo'],0],['El perro nace del vientre de su madre. Es…',['vivíparo','ovíparo'],0],['¿Qué necesita una planta para vivir?',['Agua, luz y aire','Solo tierra','Nada'],0],
  ['¿Cuál es un ser vivo?',['Un árbol','Una piedra','Una silla'],0],['¿Qué animal nos da leche?',['La vaca','La gallina','El pez'],0],['Los animales que solo comen plantas se llaman…',['herbívoros','carnívoros'],0]]),
 T('Días, meses y estaciones',['Una semana tiene 7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.','Un año tiene 12 meses.','Hay cuatro estaciones: primavera, verano, otoño e invierno.'],[
  ['¿Cuántos días tiene una semana?',['7','5','12'],0],['¿Qué día va después del lunes?',['Martes','Domingo','Jueves'],0],['¿Cuántos meses tiene un año?','12'],
  ['¿En qué estación hace más calor?',['Verano','Invierno','Otoño'],0],['¿Qué mes va después de enero?',['Febrero','Marzo','Diciembre'],0],['¿En qué estación se caen las hojas de muchos árboles?',['Otoño','Primavera'],0]])]},
2:{lengua:[
 T('Nombres y adjetivos',['El nombre (sustantivo) nombra personas, animales, cosas o lugares: niña, gato, mesa, parque.','El adjetivo dice cómo es el nombre: alto, rojo, simpático.'],[
  ['¿Qué palabra es un nombre?',['perro','bonito','correr'],0],['¿Qué palabra es un adjetivo?',['azul','libro','saltar'],0],['En «la casa grande», ¿cuál es el adjetivo?',['grande','la','casa'],0],
  ['En «un gato negro», ¿cuál es el nombre?',['gato','un','negro'],0],['¿Cuál es un nombre de lugar?',['parque','feliz','comer'],0]]),
 T('Masculino y femenino',['Masculino: el niño, el león. Femenino: la niña, la leona.','Muchas palabras cambian la -o por la -a.','Algunas cambian del todo: caballo → yegua.'],[
  ['Escribe el femenino de «niño»','niña'],['Escribe el femenino de «león»','leona'],['Escribe el femenino de «profesor»','profesora'],['Escribe el masculino de «gata»','gato'],
  ['¿Cuál es femenina?',['la mesa','el coche','el sol'],0],['¿Cuál es el femenino de «caballo»?',['yegua','caballa','vaca'],0]]),
 T('Ortografía: c, qu, mp, mb',['Con c: ca, co, cu (casa, cometa, cuna). Con qu: que, qui (queso, quince).','La u de que y qui no suena.','Antes de p y b se escribe m: campo, hombre.'],[
  ['¿Cuál está bien escrita?',['queso','qeso','keso'],0],['¿Cuál está bien escrita?',['cuna','quna'],0],['¿Cuál está bien escrita?',['campo','canpo'],0],
  ['¿Cuál está bien escrita?',['hombro','honbro'],0],['¿Cuál está bien escrita?',['también','tanbién'],0],['Escribe el número 15 en letras','quince']]),
 T('Sinónimos y antónimos',['Sinónimos: significan lo mismo (contento = alegre).','Antónimos: significan lo contrario (alto ↔ bajo).'],[
  ['Escribe el antónimo de «alto»','bajo'],['Escribe el antónimo de «día»','noche'],['¿Qué palabra es sinónimo de «contento»?',['alegre','triste','cansado'],0],
  ['¿Qué palabra es sinónimo de «bonito»?',['precioso','feo','pequeño'],0],['Escribe el antónimo de «abrir»','cerrar'],['¿Cuál es el antónimo de «grande»?',['pequeño','enorme','largo'],0]])],
 mates:[
 TG('Números hasta el 999',['Los números de tres cifras tienen centenas, decenas y unidades.','1 centena = 10 decenas = 100 unidades.','Ejemplo: 342 = 3 C, 4 D y 2 U.'],G.m2num),
 TG('Sumas y restas llevando',['Coloca las cifras en columna: unidades debajo de unidades.','Si al sumar pasas de 9, te llevas una a la columna de la izquierda.','En la resta, si arriba hay menos, pide prestada una decena.'],G.m2sr),
 TG('Tablas del 2, 3, 4, 5 y 10',['Multiplicar es sumar varias veces lo mismo: 3 × 4 = 4 + 4 + 4.','La tabla del 10 añade un cero: 10 × 7 = 70.','La tabla del 5 acaba siempre en 0 o en 5.'],G.m2tab),
 TG('Medidas, dinero y tiempo',['1 metro = 100 centímetros.','1 euro = 100 céntimos.','1 hora = 60 minutos. Media hora = 30 minutos. Un cuarto de hora = 15 minutos.'],G.m2med)],
 medio:[
 T('Plantas y animales',['Partes de la planta: raíz (toma el agua), tallo (la sostiene), hojas y flor.','Vertebrados: tienen columna vertebral (mamíferos, aves, peces, reptiles y anfibios).','Invertebrados: no tienen huesos (caracol, araña).'],[
  ['¿Qué parte de la planta toma el agua de la tierra?',['La raíz','La flor','Las hojas'],0],['¿Cuál es un invertebrado?',['El caracol','El perro','El pez'],0],['Las aves tienen…',['plumas','pelo','escamas'],0],
  ['La rana es un…',['anfibio','ave','mamífero'],0],['Los peces tienen…',['escamas','plumas'],0],['¿Qué parte sostiene la planta?',['El tallo','La raíz','La flor'],0]]),
 T('El agua y el aire',['El agua puede ser sólida (hielo), líquida o gas (vapor).','El aire no se ve, pero lo necesitamos para respirar.','Hay que ahorrar agua: cierra el grifo mientras te lavas los dientes.'],[
  ['El hielo es agua en estado…',['sólido','líquido','gaseoso'],0],['Cuando el agua hierve se convierte en…',['vapor','hielo'],0],['¿Qué ayuda a ahorrar agua?',['Cerrar el grifo al lavarse los dientes','Dejar el grifo abierto'],0],
  ['El agua de los ríos llega al…',['mar','cielo'],0],['Necesitamos el aire para…',['respirar','ver'],0]]),
 T('Lucena y Andalucía',['Lucena es un municipio de la provincia de Córdoba.','Andalucía tiene 8 provincias: Almería, Cádiz, Córdoba, Granada, Huelva, Jaén, Málaga y Sevilla. Su capital es Sevilla.','El Ayuntamiento gobierna el municipio; lo dirige el alcalde o la alcaldesa.','El Día de Andalucía es el 28 de febrero. La bandera es verde y blanca.'],[
  ['Lucena está en la provincia de…',['Córdoba','Málaga','Jaén'],0],['¿Cuántas provincias tiene Andalucía?','8'],['¿Cuál es la capital de Andalucía?',['Sevilla','Córdoba','Granada'],0],
  ['¿Qué día es el Día de Andalucía?',['28 de febrero','6 de enero','12 de octubre'],0],['¿Quién dirige el Ayuntamiento?',['El alcalde o la alcaldesa','El rey','El director del colegio'],0],['¿De qué colores es la bandera de Andalucía?',['Verde y blanco','Rojo y amarillo','Azul y blanco'],0]])]},
3:{lengua:[
 T('Agudas, llanas y esdrújulas',['La sílaba tónica es la que suena más fuerte.','Aguda: la última sílaba (can-CIÓN).','Llana: la penúltima (ME-sa, ÁR-bol).','Esdrújula: la antepenúltima (PÁ-ja-ro).'],[
  ['«canción» es una palabra…',ab,0],['«mesa» es una palabra…',ab,1],['«pájaro» es una palabra…',ab,2],['«reloj» es una palabra…',ab,0],['«lápiz» es una palabra…',ab,1],['«música» es una palabra…',ab,2]]),
 T('El verbo y sus tiempos',['El verbo dice lo que hacemos: correr, leer, cantar.','Presente: ahora (como). Pasado: ayer (comí). Futuro: mañana (comeré).'],[
  ['«Ayer jugué en el parque» está en…',['pasado','presente','futuro'],0],['«Mañana iremos a Córdoba» está en…',['futuro','pasado','presente'],0],['«Ahora leo un cuento» está en…',['presente','pasado','futuro'],0],
  ['¿Cuál es un verbo?',['saltar','mesa','verde'],0],['En «Lucía canta», ¿cuál es el verbo?','canta'],['«comeré» está en…',['futuro','pasado','presente'],0]]),
 T('Artículos y pronombres',['Artículos: el, la, los, las, un, una, unos, unas.','Pronombres personales: yo, tú, él, ella, nosotros, vosotros, ellos.','El pronombre sustituye al nombre: María canta → Ella canta.'],[
  ['¿Cuál es un artículo?',['la','mesa','correr'],0],['¿Qué artículo va con «flores»?',['las','el','un'],0],['Cambia «María» por un pronombre: «María canta» → «___ canta»','ella'],
  ['¿Cuál es un pronombre personal?',['nosotros','casa','rápido'],0],['¿Qué pronombre usas para hablar de ti?',['yo','tú','ellos'],0]]),
 T('Ortografía: r, rr, br, bl',['Entre vocales, el sonido fuerte se escribe rr: perro, carro.','Al principio de palabra y después de n, l, s se escribe una r: ratón, Enrique.','Antes de r y de l siempre se escribe b: brazo, blanco.'],[
  ['Animal que ladra:',['perro','pero'],0],['¿Cuál está bien escrita?',['ratón','rratón'],0],['¿Cuál está bien escrita?',['Enrique','Enrrique'],0],
  ['¿Cuál está bien escrita?',['brazo','vrazo'],0],['¿Cuál está bien escrita?',['blanco','vlanco'],0],['¿Cuál está bien escrita?',['tierra','tiera'],0]])],
 mates:[
 TG('Números hasta el 99.999',['Unidades (U), decenas (D), centenas (C), unidades de millar (UM) y decenas de millar (DM).','1 UM = 1.000 U.','Ejemplo: 47.382 → la cifra de las centenas es 3.'],G.m3num),
 TG('Multiplicar por una cifra',['Multiplica empezando por las unidades.','Si el resultado pasa de 9, escribe las unidades y llévate las decenas.','Comprueba con la tabla.'],G.m3mul),
 TG('División exacta',['Dividir es repartir en partes iguales.','En Primaria se escribe 24 : 6.','Usa la tabla: 6 × 4 = 24, así que 24 : 6 = 4.'],G.m3div),
 TG('Fracciones sencillas',['Una fracción tiene numerador (partes que tomas) y denominador (partes iguales en total): 3/8.','La mitad de 10 es 5 (10 : 2).','Un tercio de 12 es 4 (12 : 3). Un cuarto de 20 es 5 (20 : 4).'],G.m3frac)],
 medio:[
 T('Huesos, músculos y salud',['Las funciones vitales son tres: nutrición, relación y reproducción.','El aparato locomotor está formado por huesos y músculos.','El cráneo protege el cerebro; las costillas, el corazón y los pulmones.'],[
  ['¿Cuántas son las funciones vitales?',['3','2','5'],0],['El cráneo protege…',['el cerebro','el corazón','el estómago'],0],['Los músculos sirven para…',['movernos','respirar solo','ver'],0],
  ['¿Qué hábito es saludable?',['Dormir unas 10 horas','Comer bollos cada día','No hacer deporte'],0],['Las costillas protegen…',['el corazón y los pulmones','los pies'],0],['El aparato locomotor lo forman…',['huesos y músculos','ojos y oídos'],0]]),
 T('Los ecosistemas',['Un ecosistema es un lugar y los seres vivos que viven en él.','Cadena alimentaria: plantas (productores) → herbívoros → carnívoros.','Doñana es un gran espacio natural de Andalucía. El lince ibérico vive en Andalucía.'],[
  ['En la cadena alimentaria, los productores son…',['las plantas','los leones','los conejos'],0],['El conejo come hierba. Es…',['herbívoro','carnívoro'],0],['Doñana está en…',['Andalucía','Galicia','Cataluña'],0],
  ['Un ecosistema está formado por…',['los seres vivos y el lugar donde viven','solo los animales'],0],['¿Cuál es carnívoro?',['El lince','El conejo','La vaca'],0],['¿Qué cuida la naturaleza?',['Reciclar y no tirar basura','Arrancar plantas'],0]]),
 T('El relieve de Andalucía',['El río más importante de Andalucía es el Guadalquivir; pasa por Córdoba y Sevilla.','El Mulhacén, en Sierra Nevada (Granada), es el pico más alto de la Península Ibérica.','Andalucía tiene costa en el mar Mediterráneo y en el océano Atlántico.','Lucena está en la comarca de la Subbética cordobesa.'],[
  ['¿Cuál es el río más importante de Andalucía?',['Guadalquivir','Ebro','Tajo'],0],['¿Cuál es el pico más alto de la Península?',['Mulhacén','Aneto','Veleta'],0],['Andalucía tiene costa en…',['el Mediterráneo y el Atlántico','solo el Cantábrico'],0],
  ['Sierra Nevada está en…',['Granada','Huelva','Cádiz'],0],['El Guadalquivir pasa por…',['Córdoba y Sevilla','Málaga y Almería'],0],['Lucena está en la comarca de…',['la Subbética','la Alpujarra'],0]])]},
4:{lengua:[
 T('Reglas de acentuación',['Agudas: llevan tilde si acaban en n, s o vocal (camión, compás, sofá).','Llanas: llevan tilde si NO acaban en n, s o vocal (árbol, lápiz).','Esdrújulas: llevan tilde siempre (pájaro, música).'],[
  ['¿Cuál está bien escrita?',['camión','camion'],0],['¿Cuál está bien escrita?',['árbol','arbol'],0],['¿Cuál está bien escrita?',['reloj','relój'],0],['¿Cuál está bien escrita?',['pájaro','pajaro'],0],
  ['Las esdrújulas llevan tilde…',['siempre','nunca','a veces'],0],['Las agudas llevan tilde cuando acaban en…',['n, s o vocal','r, l o z'],0]]),
 T('Conjugaciones y tiempos',['1.ª conjugación: -ar (cantar). 2.ª: -er (comer). 3.ª: -ir (vivir).','Personas: yo, tú, él/ella, nosotros, vosotros, ellos.','Tiempos: presente (canto), pasado (canté), futuro (cantaré).'],[
  ['«temer» es de la…',['2.ª conjugación','1.ª conjugación','3.ª conjugación'],0],['«vivir» es de la…',['3.ª conjugación','1.ª conjugación','2.ª conjugación'],0],['«saltar» es de la…',['1.ª conjugación','2.ª conjugación','3.ª conjugación'],0],
  ['Conjuga «cantar» en presente: nosotros…','cantamos'],['Pasa al pasado: «yo como» → «yo…»','comí|comía'],['«Ellos corrieron» está en…',['pasado','presente','futuro'],0]]),
 T('Sujeto y predicado',['El sujeto es de quién se habla. Pregunta al verbo «¿quién?».','El predicado es lo que se dice del sujeto. Su núcleo es el verbo.'],[
  ['En «El perro ladra mucho», el sujeto es…',['El perro','ladra mucho'],0],['En «Mi hermana estudia en Lucena», el predicado es…',['estudia en Lucena','Mi hermana'],0],['En «Los niños juegan», ¿cuál es el verbo?','juegan'],
  ['En «Lucía y Pablo leen cuentos», el sujeto es…',['Lucía y Pablo','leen cuentos'],0],['El núcleo del sujeto suele ser un…',['sustantivo','verbo','adverbio'],0]]),
 T('Prefijos, sufijos y familias',['Prefijo: va delante (des-hacer, re-leer, im-posible).','Sufijo: va detrás (cas-ita, zapat-ero).','Familia de palabras: pan, panadero, panadería.'],[
  ['En «deshacer», el prefijo es…',['des-','-hacer'],0],['¿Qué significa «releer»?',['Volver a leer','No leer'],0],['Escribe el diminutivo de «casa» con -ita','casita'],
  ['¿Cuál es de la familia de «mar»?',['marinero','mesa','madre'],0],['Escribe lo contrario de «posible» con un prefijo','imposible'],['En «zapatero», el sufijo -ero indica…',['un oficio','un tamaño'],0]])],
 mates:[
 TG('Redondeo',['Para redondear a las centenas, mira la cifra de las decenas.','Si es 5 o más, sube; si es menor que 5, se queda.','Ejemplo: 3.468 a las centenas → 3.500.'],G.m4red),
 TG('Multiplicar por dos cifras',['Multiplica por las unidades.','Multiplica por las decenas y escribe el resultado un lugar a la izquierda.','Suma los dos resultados.'],G.m4mul),
 TG('División con resto',['Dividendo = divisor × cociente + resto.','El resto siempre es menor que el divisor.','Ejemplo: 23 : 5 → cociente 4, resto 3.'],G.m4div),
 TG('Decimales y fracciones',['1/10 = 0,1 (una décima). 1/100 = 0,01 (una centésima).','1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75.','Para sumar decimales, pon la coma debajo de la coma.'],G.m4dec),
 TG('Perímetros',['El perímetro es la suma de todos los lados.','Rectángulo: largo + ancho + largo + ancho.','Cuadrado: 4 × lado.'],G.m4per)],
 medio:[
 T('Nutrición: digestión y respiración',['Aparato digestivo: boca, esófago, estómago e intestinos.','Aparato respiratorio: nariz, tráquea, bronquios y pulmones. Tomamos oxígeno y expulsamos dióxido de carbono.','El corazón bombea la sangre por todo el cuerpo.'],[
  ['¿Dónde empieza la digestión?',['En la boca','En el estómago'],0],['El aire llega a los…',['pulmones','intestinos'],0],['Al respirar tomamos…',['oxígeno','dióxido de carbono'],0],
  ['El corazón bombea…',['sangre','aire'],0],['El tubo que une la boca con el estómago es el…',['esófago','tráquea'],0],['Una dieta sana es…',['variada, con fruta y verdura','solo dulces'],0]]),
 T('Materia y energía',['La materia tiene masa (se mide en kilos) y volumen.','Energías renovables, que no se agotan: solar, eólica (viento), hidráulica (agua).','No renovables: petróleo, carbón y gas.','Los imanes atraen el hierro.'],[
  ['¿Cuál es renovable?',['Solar','Petróleo','Carbón'],0],['La energía eólica viene del…',['viento','sol'],0],['¿Cuál NO es renovable?',['Carbón','Viento','Sol'],0],
  ['Un imán atrae…',['el hierro','la madera','el plástico'],0],['La masa se mide en…',['kilogramos','litros','metros'],0],['La capacidad se mide en…',['litros','metros','kilos'],0]]),
 T('Prehistoria y Edad Antigua',['Paleolítico: cazadores nómadas y pinturas rupestres.','Neolítico: agricultura, ganadería y primeros poblados.','La Prehistoria termina con la invención de la escritura.','En Andalucía: Tartessos, los fenicios fundaron Gadir (Cádiz) y los romanos llamaron Bética a esta zona (ciudad de Itálica).'],[
  ['Los primeros agricultores vivieron en el…',['Neolítico','Paleolítico'],0],['La Prehistoria termina con…',['la escritura','la rueda'],0],['¿Qué ciudad fundaron los fenicios?',['Cádiz (Gadir)','Jaén','Lucena'],0],
  ['Los romanos llamaron a Andalucía…',['Bética','Galia'],0],['Itálica es una ciudad…',['romana','prehistórica'],0],['En el Paleolítico las personas eran…',['nómadas','agricultoras'],0]])]},
5:{lengua:[
 T('Categorías gramaticales',['Sustantivo (casa), adjetivo (verde), verbo (correr), adverbio (rápidamente, ayer).','Pronombre (nosotros), preposición (a, de, en, sobre), conjunción (y, o, pero).'],[
  ['«rápidamente» es un…',['adverbio','adjetivo','verbo'],0],['«sobre» es una…',['preposición','conjunción','sustantivo'],0],['«nosotros» es un…',['pronombre','adverbio','verbo'],0],
  ['«felicidad» es un…',['sustantivo','adjetivo','verbo'],0],['«verde» es un…',['adjetivo','verbo','adverbio'],0],['«pero» es una…',['conjunción','preposición','sustantivo'],0]]),
 T('Diptongo e hiato',['Diptongo: dos vocales juntas en la misma sílaba (ciu-dad, ai-re).','Hiato: dos vocales juntas en sílabas distintas (dí-a, le-ón, po-e-ta).'],[
  ['«ciudad» tiene…',['diptongo','hiato'],0],['«día» tiene…',['hiato','diptongo'],0],['«león» tiene…',['hiato','diptongo'],0],['«aire» tiene…',['diptongo','hiato'],0],['«cuento» tiene…',['diptongo','hiato'],0],['«baúl» tiene…',['hiato','diptongo'],0]]),
 T('Tipos de textos',['Narrativo: cuenta una historia (planteamiento, nudo y desenlace).','Descriptivo: cuenta cómo es algo o alguien.','Instructivo: explica cómo hacer algo (una receta).','Expositivo: informa sobre un tema. Poético: en verso.'],[
  ['Una receta de salmorejo es un texto…',['instructivo','narrativo','poético'],0],['Un cuento es un texto…',['narrativo','instructivo'],0],['«Mi abuela es alta y tiene el pelo blanco» es…',['descriptivo','instructivo'],0],
  ['Un poema es un texto…',['poético','expositivo'],0],['Un texto que explica cómo son los volcanes es…',['expositivo','narrativo'],0],['Las partes de una narración son…',['planteamiento, nudo y desenlace','título y firma'],0]]),
 T('Ortografía: g, j, h, ll',['Verbos en -ger y -gir se escriben con g (coger, elegir), salvo tejer y crujir.','Palabras en -aje se escriben con j (viaje, garaje).','Empiezan con h las palabras con hue- y hie- (huevo, hielo).','Terminaciones -illo, -illa con ll (bombilla).'],[
  ['¿Cuál está bien escrita?',['coger','cojer'],0],['¿Cuál está bien escrita?',['viaje','viage'],0],['¿Cuál está bien escrita?',['huevo','uevo'],0],
  ['¿Cuál está bien escrita?',['hielo','ielo'],0],['¿Cuál está bien escrita?',['bombilla','bombiya'],0],['¿Cuál está bien escrita?',['elegir','elejir'],0]])],
 mates:[
 TG('Operaciones combinadas',['Primero lo que hay entre paréntesis.','Después multiplicaciones y divisiones.','Al final sumas y restas.','Ejemplo: 3 + 4 × 2 = 3 + 8 = 11.'],G.m5comb),
 TG('Fracciones',['Fracciones equivalentes: multiplica numerador y denominador por el mismo número (1/2 = 2/4).','Con igual denominador, se suman los numeradores: 2/7 + 3/7 = 5/7.','Fracción de un número: 2/3 de 12 → 12 : 3 × 2 = 8.'],G.m5frac),
 TG('Números decimales',['Pon la coma debajo de la coma para sumar y restar.','× 10: la coma se mueve un lugar a la derecha. × 100: dos lugares.','Para multiplicar, hazlo sin coma y cuenta las cifras decimales.'],G.m5dec),
 TG('Porcentajes',['El 25 % de algo es 25 de cada 100.','Para calcularlo: número × porcentaje : 100.','Trucos: 50 % = la mitad; 25 % = la cuarta parte; 10 % = dividir entre 10.'],G.m5pct),
 TG('Áreas',['Rectángulo: base × altura.','Cuadrado: lado × lado.','Triángulo: base × altura : 2.','El área se mide en unidades cuadradas: cm², m².'],G.m5area)],
 medio:[
 T('La célula y los reinos',['Todos los seres vivos están formados por células.','Hay cinco reinos: animales, plantas, hongos, protoctistas y moneras (bacterias).','Las plantas fabrican su alimento con la fotosíntesis y desprenden oxígeno.'],[
  ['¿Cuántos reinos de seres vivos hay?',['5','3','8'],0],['Las setas pertenecen al reino de los…',['hongos','plantas','animales'],0],['Las bacterias pertenecen a las…',['moneras','plantas'],0],
  ['¿Quién hace la fotosíntesis?',['Las plantas','Los animales'],0],['La unidad más pequeña de un ser vivo es la…',['célula','molécula de agua','piel'],0],['Con la fotosíntesis las plantas producen…',['alimento y oxígeno','dióxido de carbono'],0]]),
 T('El sistema solar',['El Sol es una estrella. Ocho planetas giran a su alrededor.','La Tierra es el tercer planeta. La Luna es su satélite.','Rotación (24 horas): el día y la noche. Traslación (365 días): el año.'],[
  ['¿Cuántos planetas tiene el sistema solar?','8'],['La rotación de la Tierra produce…',['el día y la noche','el año'],0],['¿Cuál es el planeta más cercano al Sol?',['Mercurio','Marte','Venus'],0],
  ['El Sol es…',['una estrella','un planeta'],0],['La Luna es…',['un satélite','una estrella'],0],['¿Cuánto tarda la Tierra en dar una vuelta al Sol?',['365 días','24 horas','un mes'],0]]),
 T('Al-Ándalus y la Edad Media',['En el año 711 los musulmanes llegan a la Península: comienza Al-Ándalus.','Córdoba fue la capital del Califato (929, Abderramán III) y una de las mayores ciudades de Europa. Allí está la Mezquita.','Lucena (Eliossana o Al-Yussana) tuvo una importante comunidad judía.','En 1492 los Reyes Católicos conquistan el reino nazarí de Granada, el de la Alhambra.'],[
  ['¿En qué año llegan los musulmanes a la Península?',['711','1492','1978'],0],['¿Qué ciudad fue capital del Califato?',['Córdoba','Toledo','Cádiz'],0],['La Alhambra está en…',['Granada','Sevilla','Jaén'],0],
  ['¿Qué ocurrió en 1492?',['Los Reyes Católicos conquistaron Granada','Llegaron los romanos'],0],['La Mezquita más famosa de Al-Ándalus está en…',['Córdoba','Huelva'],0],['El avance de los reinos cristianos hacia el sur se llama…',['Reconquista','Prehistoria'],0]])]},
6:{lengua:[
 T('Complementos del verbo',['Complemento directo (CD): se sustituye por lo, la, los, las (Leo el libro → Lo leo).','Complemento indirecto (CI): se sustituye por le, les.','Complementos circunstanciales (CC): lugar, tiempo, modo…'],[
  ['En «Ana come una manzana», el CD es…',['una manzana','Ana','come'],0],['En «Jugamos en el parque», «en el parque» es…',['CC de lugar','CD','sujeto'],0],['En «Ayer llovió», «ayer» es…',['CC de tiempo','CD'],0],
  ['En «Pedro escribe una carta a su abuela», «a su abuela» es…',['CI','CD','CC de lugar'],0],['Sustituye el CD: «Leo el libro» →','lo leo'],['En «Vamos al cine», el sujeto es…',['nosotros (omitido)','al cine'],0]]),
 T('Modos verbales e irregulares',['Indicativo: hechos reales (canto).','Subjuntivo: deseos y dudas (ojalá cante).','Imperativo: órdenes (¡canta!).','Los verbos irregulares cambian la raíz: ir → fui; hacer → hago.'],[
  ['«Ojalá llueva» está en modo…',['subjuntivo','indicativo','imperativo'],0],['«Cierra la puerta» está en modo…',['imperativo','subjuntivo','indicativo'],0],['«Mañana viajaré» está en modo…',['indicativo','imperativo'],0],
  ['¿Cuál es un verbo irregular?',['tener','cantar','comer'],0],['Pasado de «ir»: yo…','fui'],['Presente de «hacer»: yo…','hago']]),
 T('Recursos literarios',['Comparación: une dos cosas con «como» (blanco como la nieve).','Metáfora: identifica una cosa con otra (tus ojos son luceros).','Personificación: da cualidades humanas a cosas (el viento canta).','Hipérbole: exageración (te lo he dicho mil veces).'],[
  ['«Blanco como la nieve» es una…',['comparación','hipérbole','personificación'],0],['«El viento canta en la sierra» es una…',['personificación','comparación'],0],['«Te lo he dicho un millón de veces» es una…',['hipérbole','metáfora'],0],
  ['«Tus ojos son dos luceros» es una…',['metáfora','comparación'],0],['«Los árboles bailan» es una…',['personificación','hipérbole'],0]]),
 T('Signos de puntuación',['En español, las preguntas y exclamaciones se abren y se cierran: ¿…? ¡…!','Coma: en enumeraciones y para llamar a alguien (María, ven).','Dos puntos: antes de una enumeración anunciada y de lo que dice alguien.','Punto y aparte: para cambiar de párrafo.'],[
  ['¿Cuál está bien escrita?',['¿Cómo te llamas?','Cómo te llamas?'],0],['¿Cuál está bien escrita?',['María, ven aquí.','María ven aquí.'],0],['Antes de una enumeración anunciada se usan…',['los dos puntos','las comillas'],0],
  ['¿Cuál está bien escrita?',['¡Qué bien!','Qué bien!'],0],['El punto y aparte se usa para…',['cambiar de párrafo','hacer una pregunta'],0]])],
 mates:[
 TG('Potencias y raíces',['Una potencia es una multiplicación repetida: 2³ = 2 × 2 × 2 = 8.','10ⁿ es un 1 seguido de n ceros.','La raíz cuadrada es lo contrario del cuadrado: √49 = 7 porque 7² = 49.'],G.m6pot),
 TG('Múltiplos y divisores',['Múltiplos de 3: 3, 6, 9, 12…','m.c.m.: el menor múltiplo común. m.c.m. (4, 6) = 12.','m.c.d.: el mayor divisor común. m.c.d. (12, 18) = 6.'],G.m6mcm),
 TG('Operaciones con fracciones',['Para sumar con distinto denominador, busca un denominador común.','Para multiplicar: numerador × numerador y denominador × denominador.','Simplifica dividiendo arriba y abajo por el mismo número.'],G.m6frac),
 TG('Proporcionalidad',['Si 1 cuesta 3 €, 5 cuestan 5 × 3 = 15 € (regla de tres).','Un descuento del 20 % de 50 € son 10 €: pagas 40 €.'],G.m6prop),
 TG('Estadística: la media',['La media es el valor promedio.','Suma todos los datos y divide entre cuántos hay.','Ejemplo: 4, 6, 8 → 18 : 3 = 6.'],G.m6media)],
 medio:[
 T('Sistema nervioso y salud',['El sistema nervioso coordina el cuerpo: encéfalo, médula espinal y nervios.','Los nervios llevan información de los sentidos al encéfalo y órdenes a los músculos.','Un acto reflejo es rápido e involuntario (retirar la mano del fuego).'],[
  ['¿Qué órgano dirige el cuerpo?',['El encéfalo','El estómago','El hígado'],0],['Retirar la mano de algo caliente es un acto…',['reflejo','voluntario'],0],['La médula espinal está dentro de…',['la columna vertebral','el cráneo'],0],
  ['Los nervios transmiten…',['información','sangre'],0],['¿Qué hábito ayuda al sistema nervioso?',['Dormir bien','Usar pantallas hasta tarde'],0]]),
 T('Electricidad y máquinas',['Conductores: dejan pasar la corriente (metales como el cobre).','Aislantes: no la dejan pasar (plástico, madera, goma).','Un circuito tiene generador (pila), cables, interruptor y receptor (bombilla).','Máquinas simples: palanca, polea, rueda y plano inclinado.'],[
  ['¿Cuál es buen conductor?',['El cobre','El plástico','La madera'],0],['¿Cuál es aislante?',['La goma','El hierro','El cobre'],0],['¿Qué elemento abre y cierra el circuito?',['El interruptor','La bombilla'],0],
  ['En un circuito, la pila es el…',['generador','receptor'],0],['¿Cuál es una máquina simple?',['La palanca','El ordenador'],0],['El balancín del parque es una…',['palanca','polea'],0]]),
 T('Historia moderna y contemporánea',['1492: Colón llega a América.','1812: Constitución de Cádiz («La Pepa»).','1978: Constitución española actual.','28 de febrero de 1980: referéndum de autonomía de Andalucía. 1981: Estatuto de Autonomía.','1986: España entra en la Comunidad Europea.'],[
  ['¿En qué año llegó Colón a América?',['1492','1812','1978'],0],['La Constitución de 1812 se aprobó en…',['Cádiz','Madrid'],0],['¿En qué año se aprobó la Constitución actual?',['1978','1931','2000'],0],
  ['¿Qué se votó el 28 de febrero de 1980?',['La autonomía de Andalucía','La entrada en Europa'],0],['España entró en la Comunidad Europea en…',['1986','1492'],0]]),
 T('Instituciones',['España es una monarquía parlamentaria.','Las Cortes Generales son el Congreso de los Diputados y el Senado.','Andalucía se gobierna por la Junta de Andalucía; el Parlamento de Andalucía está en Sevilla.','La Unión Europea tiene 27 países.'],[
  ['España es una…',['monarquía parlamentaria','república'],0],['Las Cortes Generales las forman…',['el Congreso y el Senado','los ayuntamientos'],0],['El Parlamento de Andalucía está en…',['Sevilla','Córdoba','Granada'],0],
  ['El gobierno de Andalucía se llama…',['Junta de Andalucía','Generalitat'],0],['¿Cuántos países tiene la Unión Europea?',['27','12','50'],0]])]}
};

/* ---------- preguntas ---------- */
function mkStatic(raw){
  if(Array.isArray(raw[1]))return {q:raw[0],o:raw[1],a:raw[2],e:raw[3]||''};
  if(/^\d+$/.test(raw[1]))return {q:raw[0],num:Number(raw[1]),e:raw[2]||''};
  return {q:raw[0],txt:raw[1].split('|'),e:raw[2]||''};
}
function prepMC(it){if(!it.o)return it;const idx=shuffle(it.o.map((_,i)=>i));return {...it,o:idx.map(i=>it.o[i]),a:idx.indexOf(it.a)}}
function buildSession(topic){
  let items;
  if(topic.g){items=[];const seen=new Set();let guard=0;while(items.length<8&&guard++<60){const it=topic.g();if(seen.has(it.q))continue;seen.add(it.q);items.push(it)}}
  else items=shuffle(topic.q.map(mkStatic)).slice(0,8);
  return items.map(prepMC);
}
const norm=s=>s.trim().toLowerCase().replace(/\s+/g,' ').replace(/[.]$/,'');
function parseNum(s,intExpected){s=s.replace(/\s/g,'');if(!s)return NaN;
  if(s.includes(','))s=s.replace(/\./g,'').replace(',','.');else if(intExpected)s=s.replace(/\./g,'');
  return /^-?\d*\.?\d+$/.test(s)?Number(s):NaN}
function check(it,v){
  if(it.o)return v===it.a;
  if('num' in it){const n=parseNum(v,Number.isInteger(it.num));return Math.abs(n-it.num)<1e-9}
  if(it.frac){const s=v.replace(/\s/g,'');let p,q;
    if(/^\d+\/\d+$/.test(s)){[p,q]=s.split('/').map(Number)}else if(/^\d+$/.test(s)){p=+s;q=1}else return false;
    return q>0&&p*it.frac[1]===q*it.frac[0]}
  return it.txt.map(norm).includes(norm(v));
}
function shown(it){
  if(it.o)return it.o[it.a];
  if('num' in it)return fmt(it.num);
  if(it.frac){const [p,q]=simp(...it.frac);return q===1?String(p):`${p}/${q}`}
  return it.txt[0];
}

