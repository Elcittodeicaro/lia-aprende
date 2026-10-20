/* ---------- Plan anual: tema → trimestre y bloque del currículo andaluz ---------- */
const OLD_TITLES={};for(const c in DATA)for(const s in DATA[c])OLD_TITLES[`${c}-${s}`]=DATA[c][s].map(t=>t.t);
const BYT={};for(const c in DATA)for(const s in DATA[c])DATA[c][s].forEach(t=>{BYT[`${c}|${s}|${t.t}`]=t});
const MB={num:'Sentido numérico',med:'Sentido de la medida',esp:'Sentido espacial',alg:'Sentido algebraico',est:'Sentido estocástico'};
const LB={com:'Comunicación',lit:'Educación literaria',ref:'Reflexión sobre la lengua',len:'Las lenguas y sus hablantes'};
const CB={A:'Cultura científica',B:'Tecnología y digitalización',C:'Sociedades y territorios'};
/* mates: [título, trimestre, bloque, generador, ficha] (si no hay ficha, se reutiliza la existente con ese título) */
const MPLAN={
1:[['Números hasta el 20',1,'num','m1n20',['Contamos de uno en uno.','10 unidades forman 1 decena: 14 = 1 decena y 4 unidades.','Para comparar, el número mayor es el que va después al contar.']],
   ['Sumas y restas hasta el 20',1,'num','m1sum20',['Sumar es juntar; restar es quitar.','Para sumar, empieza por el número mayor y cuenta hacia delante.','Para restar, cuenta hacia atrás.']],
   ['Formas y posiciones',1,'esp','m1geo',['Figuras planas: círculo, triángulo, cuadrado, rectángulo.','Cuerpos: esfera (balón), cubo (dado), cilindro (lata), cono (cucurucho).','Posiciones: arriba/abajo, delante/detrás, dentro/fuera, cerca/lejos.']],
   ['Números hasta el 99',2,'num','m1num'],['Sumas',2,'num','m1sum'],['Restas',2,'num','m1res'],
   ['Medimos: largo, peso, capacidad y tiempo',2,'med','m1med',['Largo con metros y reglas; peso con kilos y básculas; capacidad con litros.','Tiempo: horas, días, semanas, meses y años.','Una semana tiene 7 días y un año 12 meses.']],
   ['Problemas',3,'num','m1prob'],
   ['Series y patrones',3,'alg','m1ser',['Una serie sigue una regla: 2, 4, 6, 8… suma 2 cada vez.','Busca qué se repite o cuánto cambia.']],
   ['Monedas y billetes',3,'num','m1din',['Monedas de 1 € y 2 €. Billetes de 5, 10, 20 y 50 €.','Para pagar, suma lo que tienes. Si pagas de más, te devuelven el cambio.']],
   ['Gráficos sencillos',3,'est','m1graf',['Un pictograma usa dibujos o cuadraditos para contar.','Cuenta los cuadraditos de cada fila y compara.']]],
2:[['Números hasta el 199',1,'num','m2n199',['Los números de tres cifras tienen centenas, decenas y unidades: 145 = 1 C, 4 D y 5 U.','1 centena = 10 decenas = 100 unidades.']],
   ['Cálculo mental',1,'num','m2mental',['+10 sube una decena; −10 la baja.','El doble es sumar el número dos veces; la mitad es repartir en dos.','Truco: +9 es sumar 10 y quitar 1.']],
   ['Formas y cuerpos',1,'esp','m2geo',['Polígonos: triángulo (3 lados), cuadrado y rectángulo (4), pentágono (5), hexágono (6).','Cuerpos: cubo (6 caras), prisma, pirámide, cilindro, cono y esfera.']],
   ['Sumas y restas llevando',2,'num','m2sr199',['Coloca las cifras en columna.','Si al sumar pasas de 9, te llevas una a la columna de la izquierda.','En la resta, si arriba hay menos, pide prestada una decena.']],
   ['El número que falta',2,'alg','m2pat',['? + 5 = 12: piensa qué número sumado a 5 da 12 (12 − 5 = 7).','= significa «es igual a»; ≠ significa «no es igual a».']],
   ['Medidas, dinero y tiempo',2,'med','m2med'],
   ['Las horas y el calendario',2,'med','m2hora',['El reloj marca las horas en punto, y media, y cuarto.','Mañana es el día siguiente; pasado mañana, dos días después.','Una semana tiene 7 días.']],
   ['Euros: comprar y ahorrar',3,'num','m2din',['Suma lo que cuestan las cosas para saber el total.','El cambio es lo que pagas menos lo que cuesta.','Ahorrar es guardar un poco cada semana.']],
   ['Sumas repetidas',3,'num','m2rep',['3 + 3 + 3 + 3 son 4 veces 3: 12.','Agrupar ayuda a contar más rápido.','Así empezaremos a multiplicar en 3.º.']],
   ['Pictogramas',3,'est','m2graf',['Fíjate en cuánto vale cada símbolo.','Si cada ■ son 2 niños, 3 cuadraditos son 6 niños.']]],
3:[['Números hasta el 9.999',1,'num','m3n9999',['UM, C, D, U: 4.582 = 4 UM, 5 C, 8 D y 2 U.','1 UM = 1.000 unidades.','Para comparar, empieza por los millares.']],
   ['Sumas y restas grandes',1,'num','m3sr',['Coloca bien las columnas: unidades debajo de unidades.','Suma y resta de derecha a izquierda, llevando cuando haga falta.']],
   ['Las tablas de multiplicar',1,'num','m3tab',['Multiplicar es sumar varias veces lo mismo: 4 × 3 = 3 + 3 + 3 + 3.','El orden no cambia el resultado: 4 × 3 = 3 × 4.']],
   ['Multiplicar por una cifra',2,'num','m3mul'],['División exacta',2,'num','m3div'],
   ['Medidas: km, m, cm, mm, kg, g, l y ml',2,'med','m3med',['1 km = 1.000 m · 1 m = 100 cm · 1 cm = 10 mm.','1 kg = 1.000 g · 1 l = 1.000 ml.']],
   ['Rectas y polígonos',2,'esp','m3geo',['Paralelas: nunca se cortan. Perpendiculares: se cortan formando ángulos rectos.','Triángulos: equilátero (3 lados iguales), isósceles (2) y escaleno (ninguno).']],
   ['Fracciones sencillas',3,'num','m3frac'],
   ['Horas y minutos',3,'med','m3time',['1 hora = 60 minutos · 1 minuto = 60 segundos.','Para saber a qué hora termina algo, suma la duración a la hora de inicio.']],
   ['Datos y probabilidad',3,'est','m3est',['La moda es el dato que más se repite.','Un suceso puede ser seguro, posible o imposible.']]],
4:[['Números hasta el 9.999 y redondeo',1,'num','m4red2',['Para redondear, mira la cifra de la derecha del lugar que quieres.','Si es 5 o más, se sube; si es menor, se queda igual.']],
   ['Multiplicar por dos cifras',1,'num','m4mul'],['División con resto',1,'num','m4div'],
   ['Fracciones',2,'num','m4frac',['Con igual denominador, es mayor la fracción con mayor numerador.','Fracción de un número: 3/4 de 20 → 20 : 4 × 3 = 15.','1/2 un medio, 1/3 un tercio, 1/4 un cuarto…']],
   ['Cambio de unidades',2,'med','m4conv',['De una unidad mayor a una menor, se multiplica: 3 km = 3.000 m.','De menor a mayor, se divide: 5.000 g = 5 kg.']],
   ['Euros y céntimos',2,'num','m4din',['1 € = 100 céntimos. 3,50 € son 3 euros y 50 céntimos.','Para calcular el cambio, resta el precio de lo que pagas.']],
   ['Perímetros',3,'med','m4per'],
   ['Ángulos, traslaciones y simetrías',3,'esp','m4ang',['Ángulo recto: 90°. Agudo: menos de 90°. Obtuso: entre 90° y 180°. Llano: 180°.','Simetría: dos mitades iguales al doblar. Traslación: mover sin girar.']],
   ['Moda y frecuencias',3,'est','m4moda',['La frecuencia absoluta es cuántas veces aparece un dato.','La moda es el dato con más frecuencia.']],
   ['Seguro, posible o imposible',3,'est','m4prob',['Seguro: pasará siempre. Imposible: nunca. Posible: puede pasar.','Es más probable lo que tiene más casos.']]],
5:[['Números grandes y decimales',1,'num','m5num',['Millones: 3.456.789 → 3 millones.','Décimas, centésimas y milésimas: en 2,475 el 4 son décimas.','Redondear a las unidades: mira las décimas.']],
   ['Operaciones combinadas',1,'num','m5comb'],
   ['Cuadrados y cubos',1,'num','m5pot',['Cuadrado: un número por sí mismo, 5² = 25.','Cubo: tres veces, 3³ = 27.']],
   ['Fracciones',2,'num','m5frac'],['Números decimales',2,'num','m5dec'],['Porcentajes',2,'num','m5pct'],
   ['El Sistema Métrico Decimal',3,'med','m5conv',['km, hm, dam, m, dm, cm, mm: cada unidad es 10 veces la siguiente.','En superficies, cada unidad es 100 veces la siguiente: 1 m² = 100 dm².']],
   ['Ángulos en grados',3,'esp','m5ang',['Los ángulos de un triángulo suman 180°.','Complementarios: suman 90°. Suplementarios: suman 180°.']],
   ['Áreas',3,'med','m5area'],
   ['Media, moda y rango',3,'est','m5est',['Media: suma los datos y divide entre cuántos hay.','Moda: el dato más repetido. Rango: mayor − menor.']]],
6:[['Múltiplos y divisores',1,'num','m6mcm'],['Potencias y raíces',1,'num','m6pot'],['Operaciones con fracciones',1,'num','m6frac'],
   ['Decimales hasta las milésimas',2,'num','m6dec',['× 10, × 100, × 1.000: la coma va 1, 2 o 3 lugares a la derecha.','Para comparar, iguala el número de decimales con ceros: 2,5 = 2,500.']],
   ['Proporcionalidad',2,'num','m6prop'],
   ['Escalas y mapas',2,'med','m6esc',['Escala 1:100.000 significa que 1 cm del mapa son 100.000 cm reales (1 km).','Multiplica la medida del mapa por la escala.']],
   ['Ecuaciones sencillas',2,'alg','m6x',['La letra x es un número que no conocemos.','Haz la operación contraria: si x + 5 = 12, x = 12 − 5 = 7.']],
   ['Áreas y perímetros',3,'med','m6area',['Rombo: D × d : 2. Romboide: base × altura.','Una figura compuesta se divide en figuras sencillas.']],
   ['Estadística: la media',3,'est','m6media'],
   ['Probabilidad: regla de Laplace',3,'est','m6prob',['Probabilidad = casos favorables / casos posibles.','Con 3 bolas rojas de 10, la probabilidad de roja es 3/10.']]]
};
/* lengua y medio: [título, trimestre, bloque] en orden */
const SPLAN={
1:{lengua:[['Las vocales y el abecedario',1,'ref'],['Las sílabas',1,'ref'],['Leo y comprendo',1,'com'],['Mayúsculas y punto',2,'ref'],['La oración y el orden',2,'ref'],['Cuentos: personajes y lugares',2,'lit'],['Singular y plural',3,'ref'],['Preguntas y exclamaciones',3,'ref'],['Palabras que riman y familias',3,'ref']],
   medio:[['El cuerpo y los sentidos',1,'A'],['La familia, el cole y las normas',1,'C'],['Seres vivos y cosas inertes',1,'A'],['Animales y plantas',2,'A'],['Materiales y objetos',2,'A'],['Profesiones y servicios',2,'C'],['Días, meses y estaciones',3,'C'],['Educación vial',3,'C'],['Cuido el planeta',3,'C'],['Pantallas seguras',3,'B']]},
2:{lengua:[['Nombres y adjetivos',1,'ref'],['Leo y comprendo',1,'com'],['Masculino y femenino',1,'ref'],['Tipos de oraciones',2,'ref'],['Ortografía: c, qu, mp, mb',2,'ref'],['Primero, después, al final',2,'ref'],['Sinónimos y antónimos',3,'ref'],['Ortografía: ga, gue, gui, güe, güi',3,'ref'],['Palabras compuestas y familias',3,'ref']],
   medio:[['Hábitos saludables y emociones',1,'A'],['Plantas y animales',1,'A'],['El agua y el aire',1,'A'],['La luz y el sonido',2,'A'],['Máquinas sencillas',2,'A'],['El tiempo atmosférico y los paisajes',2,'C'],['Lucena y Andalucía',3,'C'],['El paso del tiempo y la historia',3,'C'],['Tradiciones andaluzas y flamenco',3,'C'],['Programar paso a paso',3,'B']]},
3:{lengua:[['El sustantivo',1,'ref'],['Narrar y describir',1,'com'],['Artículos y pronombres',1,'ref'],['El adjetivo y la concordancia',2,'ref'],['Agudas, llanas y esdrújulas',2,'ref'],['Poesía y cómic',2,'lit'],['El verbo y sus tiempos',3,'ref'],['Ortografía: r, rr, br, bl',3,'ref'],['Punto, coma y dos puntos',3,'ref']],
   medio:[['Huesos, músculos y salud',1,'A'],['Los sentidos y el sistema nervioso',1,'A'],['Las plantas',1,'A'],['Los ecosistemas',2,'A'],['El ciclo del agua y las rocas',2,'A'],['La Tierra y los mapas',2,'C'],['El relieve de Andalucía',3,'C'],['Mi localidad y mi provincia',3,'C'],['La Prehistoria',3,'C'],['Internet seguro',3,'B']]},
4:{lengua:[['Reglas de acentuación',1,'ref'],['Los determinantes',1,'ref'],['La noticia y el texto expositivo',1,'com'],['Sujeto y predicado',2,'ref'],['Conjugaciones y tiempos',2,'ref'],['Ortografía: b y v',2,'ref'],['Adverbios y preposiciones',3,'ref'],['Hechos y opiniones',3,'com'],['Prefijos, sufijos y familias',3,'ref'],['El teatro',3,'lit']],
   medio:[['Nutrición: digestión y respiración',1,'A'],['Los animales: clasificación y reproducción',1,'A'],['El calor y los estados de la materia',1,'A'],['Materia y energía',2,'A'],['Fuerzas y máquinas',2,'A'],['El clima y el relieve de España',2,'C'],['La población y el trabajo',3,'C'],['La Edad Antigua en Andalucía',3,'C'],['Instituciones y Estatuto de Andalucía',3,'C'],['Cambio climático y consumo responsable',3,'C']]},
5:{lengua:[['Categorías gramaticales',1,'ref'],['Leer entre líneas',1,'com'],['Diptongo e hiato',1,'ref'],['Pronombres y cohesión',2,'ref'],['Tipos de textos',2,'com'],['Polisemia, homónimos y campos semánticos',2,'ref'],['Ortografía: g, j, h, ll',3,'ref'],['La poesía: verso, estrofa y rima',3,'lit'],['Las lenguas de España y el habla andaluza',3,'len']],
   medio:[['La célula y los reinos',1,'A'],['Circulación y excreción',1,'A'],['Alimentación saludable',1,'A'],['Rocas, minerales y relieve',2,'A'],['Masa, volumen y densidad',2,'A'],['El sistema solar',2,'C'],['Europa: países y capitales',3,'C'],['Población y migraciones',3,'C'],['Al-Ándalus y la Edad Media',3,'C']]},
6:{lengua:[['Complementos del verbo',1,'ref'],['El texto argumentativo',1,'com'],['Modos verbales e irregulares',1,'ref'],['Signos de puntuación',2,'ref'],['Detectar bulos y manipulación',2,'com'],['Tilde diacrítica',2,'ref'],['Recursos literarios',3,'lit'],['Los géneros literarios',3,'lit'],['Sinónimos para no repetir',3,'ref']],
   medio:[['Sistema nervioso y salud',1,'A'],['Pubertad y adolescencia',1,'A'],['Primeros auxilios',1,'A'],['Electricidad y máquinas',2,'A'],['Las energías',2,'A'],['Flotar y volar',2,'A'],['Historia moderna y contemporánea',3,'C'],['La democracia y Blas Infante',3,'C'],['Instituciones',3,'C'],['Derechos humanos y de la infancia',3,'C'],['Economía, impuestos y consumo',3,'C'],['Igualdad entre mujeres y hombres',3,'C']]}
};
const PLAN_ERR=[];
for(const c in MPLAN)DATA[c].mates=MPLAN[c].map(([t,tri,b,g,f])=>{if(!G[g])PLAN_ERR.push(`gen ${g}`);let ficha=f;
 if(!ficha){for(const cc in DATA){const x=BYT[`${cc}|mates|${t}`];if(x){ficha=x.f;break}}}if(!ficha)PLAN_ERR.push(`ficha ${c} ${t}`);
 return {t,f:ficha||[],g:G[g],tri,ref:MB[b]}});
for(const c in SPLAN)for(const s in SPLAN[c])DATA[c][s]=SPLAN[c][s].map(([t,tri,b])=>{const x=BYT[`${c}|${s}|${t}`];if(!x){PLAN_ERR.push(`${c} ${s} ${t}`);return null}
 return Object.assign({},x,{tri,ref:s==='lengua'?LB[b]:CB[b]})}).filter(Boolean);
