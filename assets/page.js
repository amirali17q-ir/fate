/* ✏️ متن‌ها اینجان؛ هر چی خواستی عوض کن */
const CFG={
 sub:"این برگه فقط برای توئه؛ یه یادگاری کوچیک از طرف یه نقشه‌کش آماتور 😏\nآروم برو پایین ↓",
 letter:`سلام مهندس خانم، فاطی خانم 😌😂❤️

امیدوارم همیشه نقشه‌هایی که می‌کشی درست از آب دربیان، جوری نباشه خونه‌هایی که طراحی می‌کنی برن تو کون مشتری و بیاد یقه‌تو بگیره 🙂😂😭

خلاصه که امیدوارم تو این مسیر همیشه موفق باشی و یه روزی انقدر مهندس خفنی بشی که پول پارو کنی 😎💸 فقط مراقب باش خرپولای کلاست مختو نزنن، ما هنوز با شما کار داریم 😂🤝🏻

رشته‌تونم یه چیز تخمی و عجیب‌غریبیه، ولی خب وقتی یه خرخون تجربی که کنکورشو خراب کرده می‌تونه بشینه نقشه بکشه، تو هم حتماً می‌تونی این خونه‌ها رو طراحی کنی دیگه 😭😂😂

خلاصه، گفتم یه سایت برات بزنم که ببینی، کیف کنی و بدونی یکی به فکرت بوده و دلش خواسته یه یادگاری برات بسازه، کوچولو خانم 🙂💗 (درسته چهار سال ازم بزرگ‌تری، ولی خب تو ذهن من هنوز کوچولویی، اعتراضم وارد نیست 😔😂)

دوستار شما، علی ۱۴ ساله از شمال 😶‍🌫️🥹❤️`,
 reasons:["با وجود همه‌چی محکم ادامه می‌دی و جا نمی‌زنی 💪🏻","حتی وقتی خودت حال خوبی نداری، بلدی حال بقیه رو خوب کنی ❤️","مسیرت رو می‌شناسی و برای چیزی که می‌خوای قدم برمی‌داری 🧭","خودت بودن و خفن بودنت با هیچی عوض نمی‌شه 😎✨"],
 finalTitle:"پروژه تحویل شد ✔",
 finalMsg:"پروژه با موفقیت تحویل داده شد 😎\nیادت باشه: نقشه‌ی بدون خط شمال ناقصه 🧭 و این رفاقت بدون من هم 😂\nبرو عشق کن، فاطی خانم 💜",
 closing:"از طرف علی از شمال 😏🤝🏻",
 secret:"🤫 پیدا کردی! مهندسی دیگه، چشمت همه‌چی رو می‌بینه 😎📐"
};
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function typeEl(el,txt,sp){const my=Symbol();el._r=my;el.textContent='';if(rm){el.textContent=txt;return}const a=window.Intl&&Intl.Segmenter?[...new Intl.Segmenter().segment(txt)].map(s=>s.segment):[...txt];let i=0;(function s(){if(el._r!==my)return;el.textContent=a.slice(0,++i).join('');if(i<a.length)setTimeout(s,sp)})()}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3200)}
/* صدا (بدون فایل) */
let ac,soundOn=true;const pent=[523,587,659,784,880,988,1175];
function chime(n){if(!ac||!soundOn)return;const t=ac.currentTime,o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=pent[n%7];g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.12,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+1.4);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+1.5)}
function arp(){[0,2,4,6,5,4,2].forEach((n,i)=>setTimeout(()=>chime(n),i*110))}
$('#snd').onclick=e=>{soundOn=!soundOn;e.target.textContent=soundOn?'🔊':'🔇'};
/* ذرات (فقط وقتی لازمه رندر می‌شه) */
const fx=$('#fx'),fc=fx.getContext('2d'),COL=['#c4a8ff','#9b6cff','#6d3df0','#ff9de2','#ffd36e'];let W,H,P=[],run=false;
function rs(){const d=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;fx.width=Math.round(W*d);fx.height=Math.round(H*d);fx.style.width=W+'px';fx.style.height=H+'px';fc.setTransform(d,0,0,d,0,0)}rs();addEventListener('resize',rs,{passive:true});
const PARTICLE_LIMIT=420;function addParticles(items){const room=Math.max(0,PARTICLE_LIMIT-P.length);if(room)P.push(...items.slice(0,room));if(room)kick()}
function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
function spark(x,y,n,c){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=Math.random()*2.5+.5;P.push({k:'s',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,d:.03,c:c||COL[i%5],r:Math.random()*2+1})}if(P.length>PARTICLE_LIMIT)P.splice(0,P.length-PARTICLE_LIMIT);kick()}
function confetti(x,y,n=90){for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*2.4,v=Math.random()*12+4;P.push({k:'c',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,d:.006,c:COL[i%5],w:Math.random()*8+4,rot:Math.random()*6,vr:Math.random()*.3-.15})}if(P.length>PARTICLE_LIMIT)P.splice(0,P.length-PARTICLE_LIMIT);kick()}
function firework(x,y){const c=COL[Math.random()*5|0];for(let i=0;i<60;i++){const a=i/60*6.28,v=Math.random()*5+2;P.push({k:'f',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,d:.014,c,r:2})}if(P.length>PARTICLE_LIMIT)P.splice(0,P.length-PARTICLE_LIMIT);chime(Math.random()*7|0);kick()}
function heart(x,y,e){if(P.length<PARTICLE_LIMIT)P.push({k:'h',x,y,vx:(Math.random()-.5)*1.5,vy:-(Math.random()*2+1.5),l:1,d:.005,e,sz:Math.random()*18+16});kick()}
function rain(){for(let i=0;i<34;i++)setTimeout(()=>heart(Math.random()*W,H+20,['💜','📐','✨','📏'][i%4]),i*90)}
function loop(){fc.clearRect(0,0,W,H);P=P.filter(p=>p.l>0);for(const p of P){p.x+=p.vx;p.y+=p.vy;p.l-=p.d;fc.globalAlpha=Math.max(p.l,0);
 if(p.k==='c'){p.vy+=.28;p.vx*=.99;p.rot+=p.vr;fc.save();fc.translate(p.x,p.y);fc.rotate(p.rot);fc.fillStyle=p.c;fc.fillRect(-p.w/2,-p.w/4,p.w,p.w/2);fc.restore()}
 else if(p.k==='h'){p.x+=Math.sin(p.y/30);fc.font=p.sz+'px serif';fc.fillText(p.e,p.x,p.y)}
 else{if(p.k==='f')p.vy+=.06;fc.fillStyle=p.c;fc.beginPath();fc.arc(p.x,p.y,p.r,0,6.28);fc.fill()}}
 if(P.length)requestAnimationFrame(loop);else run=false}
$('#hearts').onclick=()=>{rain();chime(3)};
addEventListener('click',e=>{if(!e.target.closest('input,textarea'))spark(e.clientX,e.clientY,8)});
addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&Math.random()<.35)spark(e.clientX,e.clientY,1)});
/* شروع */
const h=new Date().getHours();$('#hello').textContent=(h<5?'شب بخیر':h<11?'صبح بخیر':h<16?'ظهر بخیر':h<19?'عصر بخیر':'شب بخیر')+' ✦ GOOD DAY, ENGINEER';
$('#curtain').onclick=()=>{try{ac=new(window.AudioContext||window.webkitAudioContext)();ac.resume()}catch(_){}$('#curtain').classList.add('gone');arp();setTimeout(()=>{confetti(W/2,H*.6,60);typeEl($('#sub'),CFG.sub,34)},900)};
let tap=0;$('#title').onclick=()=>{if(++tap>=5){tap=0;rain();toast(CFG.secret);arp()}};
/* ریوییل + خطکش */
const chs=$$('.ch'),mk=$('#mk');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.querySelector('.reveal').classList.add('in');if(chs.indexOf(e.target)===1&&!e.target._d){e.target._d=1;typeEl($('#lt'),CFG.letter,16)}}),{threshold:.4});chs.forEach(c=>io.observe(c));
addEventListener('scroll',()=>{mk.style.top=(scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*(innerHeight-14))+'px'},{passive:true});
$('#skip').onclick=()=>{const l=$('#lt');l._r=null;l.textContent=CFG.letter};
/* پلان + شابلون‌ها */
$('#plan').innerHTML=planSVG(false);
const LG=[['درب','<path d="M4 28V6M4 6A22 22 0 0 1 26 28"/>','درب: مسیر فرار از مشتری‌های سخت‌گیر 😂'],['پنجره','<path d="M3 10h26v12H3zM3 16h26"/>','پنجره: تنها جایی که مشتری نمی‌تونه ایراد بگیره (فعلاً) 🪟'],['پله','<path d="M3 28h26V4h-5v6h-7v6h-7v6H3z"/>','پله: مسیر ترقی مهندس فاطی 🪜📈'],['توالت','<path d="M10 3h12v7H10z"/><ellipse cx="16" cy="20" rx="8" ry="10"/>','توالت: جایی که همه‌ی ایده‌های بزرگ شروع می‌شن 🚽😂']];
$('#lg').innerHTML=LG.map((l,i)=>`<button data-i="${i}"><svg viewBox="0 0 32 32">${l[1]}</svg>${l[0]}</button>`).join('');
$$('#lg button').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;chime(i*2);toast(LG[i][2])});
/* کارت‌ها */
const SP=[['مقاومت','💪'],['ضریب حال‌خوبی','❤️'],['جهت‌یابی','🧭'],['گارانتی','😎']];
$('#cards').innerHTML=CFG.reasons.map((r,i)=>`<div class="fl" tabindex="0"><div><b><i>${SP[i%4][1]}</i><small>SPEC 0${i+1}</small>${SP[i%4][0]}</b><span></span></div></div>`).join('');
$$('.fl').forEach((c,i)=>{c.querySelector('span').textContent=CFG.reasons[i];c.onclick=()=>{c.classList.toggle('on');chime(i);const r=c.getBoundingClientRect();spark(r.left+r.width/2,r.top+r.height/2,16,'#ff9de2')}});
/* درخواست تغییر */
let wish='';try{wish=localStorage.getItem('fth_wish')||''}catch(_){}
if(wish)$('#wishOut').textContent='درخواست قبلیت هنوز توی بررسیه: «'+wish+'»';
$('#wishBtn').onclick=()=>{const v=$('#wishTxt').value.trim();if(!v){toast('اول یه درخواست بنویس ✍️');return}
 try{localStorage.setItem('fth_wish',v)}catch(_){}
 $('#wishBox').classList.add('stamped');setTimeout(()=>{firework(W/2,H*.25);firework(W*.25,H*.35);firework(W*.75,H*.3)},700);arp();
 $('#wishOut').textContent='درخواستت ثبت شد؛ بررسی‌ش با واحد آرزوها 😌 (احتمال تأییدش بالاست)';$('#wishTxt').value=''};
/* تحویل پروژه */
const box=$('#box'),gf=$('.gift');let op=false;
function openBox(){if(op)return;op=true;gf.classList.add('open');arp();const r=box.getBoundingClientRect();
 setTimeout(()=>{confetti(r.left+r.width/2,r.bottom,120);[.25,.5,.75].forEach((f,i)=>setTimeout(()=>firework(W*f,H*(.2+i*.05)),i*350))},900);
 setTimeout(()=>{$('#mt').textContent=CFG.finalTitle;$('#modal').classList.add('show');typeEl($('#mm'),CFG.finalMsg,40);setTimeout(()=>{$('#mc').textContent=CFG.closing;confetti(W/2,H*.7,80);rain()},CFG.finalMsg.length*40+300)},2400)}
box.onclick=openBox;box.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBox()}};
$('#mclose').onclick=()=>{$('#modal').classList.remove('show');gf.classList.remove('open');op=false;$('#mc').textContent=''};

/* سه در مخفی؛ انتخاب‌ها فقط روی همین دستگاه نگه داشته می‌شوند */
const doorMessages=[
'گاهی لازم نیست همیشه قوی باشی؛ حق داری خسته بشی، استراحت کنی و دوباره با انرژی برگردی. امیدوارم آرامش همیشه مهمون دلت باشه. 💜',
'امیدوارم هر چیزی که ته دلت آرزوش رو داری، یه روز از چیزی که تصور می‌کنی قشنگ‌تر به واقعیت تبدیل بشه. ⭐',
'قرار نیست همه‌ی مسیر از اول معلوم باشه؛ همین که قدم بعدی رو برمی‌داری یعنی هنوز داری پیش می‌ری. به خودت افتخار کن. 🧭'
];
const doorButtons=$$('#doors .door'),doorResult=$('#doorResult');
doorButtons.forEach((b,i)=>b.addEventListener('click',()=>{
 doorButtons.forEach(x=>x.classList.remove('selected'));b.classList.add('selected');
 doorResult.classList.add('unlocked');doorResult.innerHTML='<span>🔓 '+['🌙','⭐','🧭'][i]+'</span><p></p>';
 typeEl(doorResult.querySelector('p'),doorMessages[i],24);chime(i+2);
 const r=b.getBoundingClientRect();spark(r.left+r.width/2,r.top+r.height/2,22,'#ffd36e');
 try{localStorage.setItem('fth_door',String(i))}catch(_){}
}));
try{const savedDoor=localStorage.getItem('fth_door');if(savedDoor!==null&&doorButtons[+savedDoor])doorButtons[+savedDoor].classList.add('selected')}catch(_){}
/* بستن پنجره‌ی پایانی با کلید گریز و کلیک روی فضای بیرون */
addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal').classList.contains('show'))$('#mclose').click()});
$('#modal').addEventListener('click',e=>{if(e.target===$('#modal'))$('#mclose').click()});
/* هنگام رفتن صفحه به پس‌زمینه، انیمیشن اضافه اجرا نشود */
document.addEventListener('visibilitychange',()=>{if(document.hidden){P.length=0;fc.clearRect(0,0,W,H);run=false}});
