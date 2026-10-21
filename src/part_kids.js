/* ---------- preguntas más claras para niños ---------- */
/* reemplazos de opciones con doble género: una sola palabra, alternando chico y chica */
const KID_OPT={'el autor o la autora':'la autora','el director o la directora':'la directora','el médico o la médica':'la médica','el agricultor o la agricultora':'el agricultor',
 'el cartero o la cartera':'el cartero','el maestro o la maestra':'la maestra','el panadero o la panadera':'el panadero','el mecánico o la mecánica':'la mecánica',
 'el carpintero o la carpintera':'el carpintero','el veterinario o la veterinaria':'la veterinaria','el conductor o la conductora':'el conductor',
 'El alcalde o la alcaldesa':'La alcaldesa','el alcalde o la alcaldesa':'la alcaldesa','a la playa o la piscina':'a la playa'};
/* reescrituras por enunciado (enunciado original → [nuevo enunciado, nuevas opciones (la buena primero), explicación opcional]) */
const KID_Q={
 '¿Cómo suelen terminar los cuentos?':['¿Cómo terminan muchos cuentos?',['Y colorín colorado…','Un saludo.','Fin de la receta.']],
 'Reciclar es…':['¿Qué es reciclar?',['separar la basura','tirarlo todo junto','quemar la basura']],
 'Una contraseña…':['¿A quién le cuentas tu contraseña?',['solo a mi familia','a todo el mundo','a desconocidos']],
 'Después de usar la tablet un rato…':['Después de usar la tablet un rato, ¿qué hacemos?',['descansar y jugar fuera','seguir toda la tarde','no dormir']],
 'En internet, las personas que no conocemos…':['Alguien que no conoces te habla en internet. ¿Es tu amigo?',['No, es un desconocido','Sí, es mi amigo']],
 'Si un amigo está triste, podemos…':['Si un amigo está triste, ¿qué haces?',['le pregunto y le acompaño','me río','no le hago caso']],
 '¿Qué ayuda a ahorrar agua?':['¿Qué ayuda a ahorrar agua?',['cerrar el grifo','dejar el grifo abierto']],
 '¿Para qué sirven las máquinas?':['¿Para qué sirven las máquinas?',['para trabajar con menos esfuerzo','para nada','solo para jugar']],
 'Los paisajes cambiados por las personas (pueblos, campos) son paisajes…':['Un paisaje con casas y campos que hizo la gente es…',['humanizado','natural']],
 'En el parte del tiempo, un dibujo de nube con gotas significa…':['En el mapa del tiempo, una nube con gotas significa…',['lluvia','sol','viento']],
 '¿Cómo podemos saber cómo era el pueblo antes?':['¿Cómo sabemos cómo era el pueblo antes?',['preguntando a los abuelos','viendo dibujos animados','no se puede saber']],
 'Una línea del tiempo sirve para…':['Una línea del tiempo sirve para…',['ordenar lo que pasó','medir distancias','pesar cosas']],
 'Una romería es…':['Una romería es…',['una fiesta en el campo','una carrera de coches','un mercado de peces']],
 'Si un robot gira a la derecha dos veces seguidas, mira hacia…':['Un robot gira a la derecha dos veces. ¿Hacia dónde mira ahora?',['hacia atrás','hacia delante','hacia arriba']],
 '«No me gustan las espinacas» es una oración…':['«No me gustan las espinacas». ¿Qué tipo de frase es?',['dice que no (negativa)','dice que sí (afirmativa)','pregunta (interrogativa)']],
 '«¿Vienes al cine?» es una oración…':['«¿Vienes al cine?». ¿Qué tipo de frase es?',['pregunta (interrogativa)','emoción (exclamativa)','dice que no (negativa)']],
 '«¡Qué susto!» es una oración…':['«¡Qué susto!». ¿Qué tipo de frase es?',['emoción (exclamativa)','dice que sí (afirmativa)','dice que no (negativa)']],
 '«Mi casa es grande» es una oración…':['«Mi casa es grande». ¿Qué tipo de frase es?',['dice que sí (afirmativa)','dice que no (negativa)','pregunta (interrogativa)']],
 '«¡Qué bonito es el mar!» es una oración…':['«¡Qué bonito es el mar!». ¿Qué tipo de frase es?',['emoción (exclamativa)','dice que no (negativa)','pregunta (interrogativa)']],
 '«Nunca como pescado» es una oración…':['«Nunca como pescado». ¿Qué tipo de frase es?',['dice que no (negativa)','dice que sí (afirmativa)','emoción (exclamativa)']],
 '«¿Cuántos años tienes?» es una oración…':['«¿Cuántos años tienes?». ¿Qué tipo de frase es?',['pregunta (interrogativa)','dice que sí (afirmativa)','dice que no (negativa)']],
 '«Hoy es lunes» es una oración…':['«Hoy es lunes». ¿Qué tipo de frase es?',['dice que sí (afirmativa)','dice que no (negativa)','emoción (exclamativa)']],
 '«Nadie vino a la fiesta» es una oración…':['«Nadie vino a la fiesta». ¿Qué tipo de frase es?',['dice que no (negativa)','dice que sí (afirmativa)','pregunta (interrogativa)']],
 'Las oraciones interrogativas llevan…':['Las preguntas se escriben con…',['¿ ?','¡ !','« »']],
 'Pasa a afirmativa: «No me gusta el frío» →':['Quita el «no»: «No me gusta el frío» →',['Me gusta el frío.','¿Me gusta el frío?','¡No el frío!']],
 'Pasa a exclamativa: «Es muy alto» →':['Dilo con emoción: «Es muy alto» →',['¡Qué alto es!','No es alto.','¿Es alto?']],
 '«Lucena» es un sustantivo…':['«Lucena» es un nombre…',['propio','común'],'Nombre propio: el de una persona, ciudad o río concreto. Va con mayúscula.'],
 '«ciudad» es un sustantivo…':['«ciudad» es un nombre…',['común','propio'],'Nombre común: nombra cosas en general.'],
 '«Guadalquivir» es un sustantivo…':['«Guadalquivir» es un nombre…',['propio','común']],
 '«orquesta» es un sustantivo…':['«orquesta» nombra a…',['un grupo de músicos (colectivo)','un solo músico (individual)']],
 '«Andalucía» es un sustantivo…':['«Andalucía» es un nombre…',['propio','común']],
 '«mesa» es un sustantivo…':['«mesa» es un nombre…',['común','propio']],
 '¿Qué sustantivo es individual?':['¿Qué palabra nombra a UNA sola persona?',['músico','orquesta','coro']],
 '¿Cuál es un artículo indeterminado?':['¿Qué palabrita habla de algo que no conocemos todavía? («un perro», no «el perro»)',['una','la','el']],
 '¿Qué artículo indeterminado va con «niños»?':['¿Qué palabra va bien? «___ niños jugaban»',['unos','unas','la']],
 'Las adivinanzas y los trabalenguas son…':['Las adivinanzas y los trabalenguas son…',['juegos con palabras','noticias','recetas']],
 'Después de los dos puntos de una carta escribimos…':['En una carta, después de «Querida abuela:» escribimos…',['en la línea de abajo, con mayúscula','en la misma línea, con números','nada']],
 'Un ecosistema está formado por…':['Un ecosistema es…',['un lugar y los seres vivos que viven allí','solo los animales']],
 'Los descomponedores (hongos, bacterias)…':['Los hongos y las bacterias que comen restos de seres vivos se llaman…',['descomponedores','productores','carnívoros']],
 'La escala de un mapa indica…':['La escala de un mapa dice…',['cuánto se ha hecho pequeño el lugar','los colores','el título']],
 'La persona que dirige el Ayuntamiento es…':['¿Quién dirige el Ayuntamiento?',['la alcaldesa','el rey','el director del colegio']],
 'El Ayuntamiento se encarga de…':['¿De qué se encarga el Ayuntamiento?',['de los parques y la limpieza del pueblo','de la moneda del país','de las leyes de Europa']],
 'Una contraseña segura…':['¿Cómo es una contraseña segura?',['mezcla letras y números','es tu nombre','es 1234']],
 'Si alguien te hace sentir mal en internet…':['Si alguien te hace sentir mal en internet, ¿qué haces?',['se lo cuento a un adulto','lo guardo en secreto']],
 'La persona que dirige una obra de teatro es…':['¿Quién dirige una obra de teatro?',['la directora','el lector','el cartero']]
};
/* opciones más claras para todo 1.er ciclo: «Sí»/«No» al principio de frase sin cambios; quitamos «el/la» dobles */
for(const c in DATA)for(const s of ['lengua','medio'])DATA[c][s].forEach(t=>{
 t.q=t.q.map(r=>{const k=KID_Q[r[0]];
  if(k===null)return r;
  if(k){const nr=[k[0],k[1],0,k[2]||r[3]||''];return nr}
  if(Array.isArray(r[1])){const o=r[1].map(x=>KID_OPT[x]||x);if(new Set(o).size===o.length)return [r[0],o,r[2],r[3]]}
  return r})});
