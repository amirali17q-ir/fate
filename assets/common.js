const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
(()=>{const r=document.documentElement,b=$('#thm');if(b)b.onclick=()=>{const l=r.dataset.t==='l'?'d':'l';r.dataset.t=l;try{localStorage.setItem('fth',l)}catch(e){}}})();
window.planSVG=gate=>{let i=0;const P=(d,c='')=>`<path d="${d}" pathLength="1" class="d ${c}" style="--i:${i++}"/>`,T=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle">${s}</text>`;
return `<svg class="pl${gate?'':' an'}" viewBox="0 0 360 228" role="img" aria-label="پلان ساختمان">
<g class="w">${P('M110 200H290V30H20V200H70')}${P('M150 30V75M150 100V200')}${P('M20 115H45M75 115H150')}${P('M150 125H190M215 125H290')}</g>
<g class="t">${P('M70 200V160M70 160A40 40 0 0 1 110 200')}${P('M150 75H125M125 75A25 25 0 0 0 150 100')}${P('M45 115V90M45 90A30 30 0 0 1 75 115')}${P('M190 125V150M190 150A25 25 0 0 0 215 125')}${P('M55 26h45v8h-45zM55 30h45','win')}${P('M190 26h55v8h-55zM190 30h55','win')}${P('M286 65h8v45h-8zM290 65v45','win')}</g>
<g class="fu">${P('M28 40h50v55h-50zM28 52h50')}${P('M30 150h56v22h-56z')}${P('M158 38h124v14h-110v38h-14z')}${P('M221 95a14 14 0 1 0 28 0a14 14 0 1 0-28 0')}${P('M235 168h48v26h-48z')}${P('M163 180a9 12 0 1 0 18 0a9 12 0 1 0-18 0M164 164h16v7h-16z')}</g>
<g class="dm">${P('M20 16H290M20 11V21M150 11V21M290 11V21')}${P('M20 212H290M20 207V217M290 207V217')}</g>
<g class="lb">${T(85,10,'4.30')}${T(220,10,'4.70')}${T(155,226,'9.00')}${T(113,66,'اتاق خواب')}${T(85,138,'هال')}${T(225,72,'آشپزخانه')}${T(258,148,'حمام')}</g>
<g class="nh${gate?' hid':''}"><circle cx="325" cy="50" r="26" pathLength="1" class="d" style="--i:${i++}"/>${P('M325 26L335 62L325 55L315 62Z','af')}${T(325,20,'N')}</g>
${gate?'<g id="tg"><circle cx="325" cy="50" r="26" class="dash"/>'+T(325,57,'؟').replace('<text','<text class="q"')+'</g>':''}</svg>`};
