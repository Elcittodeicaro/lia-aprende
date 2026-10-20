/* ---------- añadir las preguntas nuevas a cada tema ---------- */
const MORE_ERR=[];
for(const c in MOREQ)for(const s in MOREQ[c])for(const title in MOREQ[c][s]){const t=DATA[c][s].find(x=>x.t===title);
 if(!t){MORE_ERR.push(`${c} ${s} ${title}`);continue}
 const key=r=>r[0]+'|'+(Array.isArray(r[1])?[...r[1]].sort().join('/'):r[1]);
 const have=new Set(t.q.map(key));MOREQ[c][s][title].forEach(r=>{if(have.has(key(r))){MORE_ERR.push(`dup ${c} ${s} ${title}: ${r[0]}`);return}have.add(key(r));t.q.push(r)})}
