(()=>{
$('#plan').innerHTML=planSVG(true);
const f=$('#f'),pw=$('#pw'),err=$('#err'),sheet=$('#sheet'),na=$('#na'),tg=$('#tg');
const entryScene=$('#entryScene');
const OK=['north','شمال','خطشمال','جهتشمال','northarrow','شمالنما'],norm=s=>s.normalize('NFC').toLowerCase().replace(/[\s\u200c\-_.]/g,'');
const HINTS=['رمز درست نیست 😅 سرنخ ۱: چیزی که هر نقشه‌ی درست باید داشته باشه و این یکی نداره.','هنوز نه 🧐 سرنخ ۲: جهت جغرافیایی رو نشون می‌ده؛ توی کادر TEMPLATES پیداش کن.','نزدیک شدی 😏 سرنخ ۳: اسمش با N شروع می‌شه. بکشش رو نقشه، دایره‌ی خط‌چین منتظرشه.'];
let m=0,busy=false,sx=0,sy=0;
function fix(){sheet.classList.add('ok');na.style.visibility='hidden';pw.value='NORTH';err.textContent='✔ نقشه رو درست کردی! رمز خودش وارد شد؛ ورود رو بزن.';try{navigator.vibrate&&navigator.vibrate(40)}catch(e){}}
na.onpointerdown=e=>{na.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;na.classList.add('drag')};
na.onpointermove=e=>{if(na.classList.contains('drag'))na.style.transform=`translate(${e.clientX-sx}px,${e.clientY-sy}px) scale(1.2)`};
na.onpointerup=e=>{na.classList.remove('drag');const r=tg.getBoundingClientRect(),d=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2));if(d<Math.max(60,r.width)){fix()}else na.style.transform=''};
na.onpointercancel=()=>{na.classList.remove('drag');na.style.transform=''};
f.onsubmit=e=>{e.preventDefault();if(busy)return;const k=norm(pw.value);
 if(!k){err.textContent='اول رمز رو بنویس (یا نقشه رو درست کن 😉)';return}
 if(OK.includes(k)){busy=true;err.textContent='رمز تأیید شد؛ مهمون ویژه داره میاد... ✦';
   entryScene.classList.add('show');entryScene.setAttribute('aria-hidden','false');
   document.body.style.overflow='hidden';
   const goNext=()=>{location.href='pages/fatemeh.html'};
   const sceneEnter=$('#sceneEnter');
   if(sceneEnter)sceneEnter.onclick=goNext;
   // اجازه می‌ده شخصیت وارد صحنه بشه و بعد خودش دکمه ورود رو لمس کنه.
   setTimeout(goNext,3900);
   return}
 pw.classList.remove('shake');void pw.offsetWidth;pw.classList.add('shake');err.textContent=HINTS[m++];pw.select();
 if(m>=3){m=0;setTimeout(showV,1500)}};
const vm=$('#vm'),vd=$('#vd'),zm=$('#zm');
function showV(){vm.classList.add('show');vd.load();vd.play().catch(()=>{})}
function hideV(){vm.classList.remove('show');vd.pause();vd.currentTime=0}
$('#vx').onclick=hideV;vm.onclick=e=>{if(e.target===vm)hideV()};
$('#qr').onclick=()=>zm.classList.add('show');zm.onclick=()=>zm.classList.remove('show');
addEventListener('keydown',e=>{if(e.key==='Escape'){hideV();zm.classList.remove('show')}});
})();
