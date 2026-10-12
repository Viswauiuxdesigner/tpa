/* TPA core: language, shell (header/footer), reveal + parallax, helpers. No dependencies. */
(function(){
const C=window.TPA_CONFIG, D=window.TPA_DATA;
const TPA=window.TPA={C,D,lang:"en",hooks:[],TA:{}};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
TPA.$=$;TPA.$$=$$;
TPA.esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
TPA.t=(k,en)=>TPA.lang==="ta"&&TPA.TA[k]?TPA.TA[k]:en;
TPA.L=o=>o?(o[TPA.lang]||o.en):"";
TPA.money=n=>"₹"+n.toLocaleString("en-IN");
TPA.toast=m=>{const e=document.createElement("div");e.className="toast";e.setAttribute("role","status");e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),3200)};
TPA.onLang=f=>TPA.hooks.push(f);

/* ---- language ---- */
function apply(){
  document.documentElement.lang=TPA.lang;
  $$("[data-i18n]").forEach(el=>{
    if(el.dataset.en===undefined)el.dataset.en=el.innerHTML;
    const k=el.dataset.i18n;
    el.innerHTML=(TPA.lang==="ta"&&TPA.TA[k])?TPA.TA[k]:el.dataset.en;
  });
  $$("[data-i18n-attr]").forEach(el=>{
    el.dataset.i18nAttr.split(";").forEach(pair=>{
      const [attr,k]=pair.split(":");const key="_en_"+attr;
      if(el.dataset[key]===undefined)el.dataset[key]=el.getAttribute(attr)||"";
      el.setAttribute(attr,(TPA.lang==="ta"&&TPA.TA[k])?TPA.TA[k]:el.dataset[key]);
    });
  });
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===TPA.lang));
  const pt=document.body.dataset.titleKey;
  if(pt){const base=document.body.dataset.titleEn;document.title=(TPA.lang==="ta"&&TPA.TA[pt]?TPA.TA[pt]:base)+" — "+(TPA.lang==="ta"?"திருப்பூர் புகைப்படக் கலைஞர்கள் சங்கம்":"Tirupur Photography Association")}
  TPA.hooks.forEach(f=>f());
}
TPA.setLang=l=>{TPA.lang=l;try{localStorage.setItem("tpa-lang",l)}catch(e){}apply()};

/* ---- shared shell ---- */
const LOGO='<svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="1.5" y="7" width="37" height="27" rx="3" stroke="currentColor" stroke-width="2"/><path d="M13 7l2.5-4h9L27 7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="20.5" r="8" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20.5" r="3.2" fill="#C93A18"/></svg>';
const NAV=[["index.html","nav_home","Home"],["about.html","nav_about","About"],["committee.html","nav_committee","Committee"],["gallery.html","nav_gallery","Gallery"],["news.html","nav_news","News &amp; Events"],["membership.html","nav_membership","Membership"],["contact.html","nav_contact","Contact"]];
function shell(){
  const page=document.body.dataset.page;
  const cur=h=>h.replace(".html","")===page||(page==="home"&&h==="index.html")||(page==="article"&&h==="news.html")?' aria-current="page"':"";
  const links=NAV.map(n=>`<a href="${n[0]}"${cur(n[0])} data-i18n="${n[1]}">${n[2]}</a>`).join("");
  const dlinks=NAV.map(n=>`<a class="dl" href="${n[0]}" data-i18n="${n[1]}">${n[2]}</a>`).join("");
  const lang='<div class="lang" role="group" aria-label="Language"><button type="button" data-l="en" aria-pressed="true" lang="en">EN</button><button type="button" data-l="ta" aria-pressed="false" lang="ta">தமிழ்</button></div>';
  $("#site-header").outerHTML=`<a class="skip" href="#main" data-i18n="skip">Skip to content</a>
<header class="hdr"><div class="wrap hdr-in">
<a class="logo" href="index.html" aria-label="Tirupur Photography Association — Home">${LOGO}<span><b data-i18n="brand1">Tirupur Photography</b><small data-i18n="brand2">Association</small></span></a>
<nav class="nav" aria-label="Primary">${links}</nav>
<div class="hdr-tools">${lang}<a class="login" href="login.html" data-i18n="login">Member Login</a><a class="btn solid" href="join.html" data-i18n="join">Join the Association</a>
<button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button></div>
</div></header>
<div class="drawer" id="drawer" aria-label="Menu">${dlinks}<div class="row"><a class="btn solid" href="join.html" data-i18n="join">Join the Association</a><a class="btn" href="login.html" data-i18n="login">Member Login</a></div></div>`;
  const adm=C.adminUrl||"#";
  $("#site-footer").outerHTML=`<footer class="ftr"><div class="wrap">
<h2 style="font-size:clamp(30px,4vw,56px);max-width:16em" data-i18n="foot_head">Photography is our craft. <em>Community</em> is our strength.</h2>
<div class="ftr-grid">
<div><p class="small" style="color:#A9AEB3;max-width:28em" data-i18n="foot_intro">A professional association for photographers and videographers in Tirupur, Tamil Nadu.</p><p class="small"><b data-i18n="brand_full">Tirupur Photography Association</b></p></div>
<div><h4 data-i18n="f_explore">Explore</h4><ul><li><a href="about.html" data-i18n="nav_about">About</a></li><li><a href="committee.html" data-i18n="nav_committee">Committee</a></li><li><a href="gallery.html" data-i18n="nav_gallery">Gallery</a></li><li><a href="news.html" data-i18n="nav_news">News &amp; Events</a></li></ul></div>
<div><h4 data-i18n="f_member">Membership</h4><ul><li><a href="membership.html" data-i18n="f_plans">Plans &amp; fees</a></li><li><a href="join.html" data-i18n="join">Join the Association</a></li><li><a href="login.html" data-i18n="login">Member Login</a></li><li><a href="card.html" data-i18n="f_card">Membership card</a></li></ul></div>
<div><h4 data-i18n="nav_contact">Contact</h4><ul class="small"><li>${C.address?TPA.esc(C.address):'<span data-i18n="ph_addr">[Address — to be supplied]</span>'}</li><li>${C.phone?TPA.esc(C.phone):'<span data-i18n="ph_phone">[Phone — to be supplied]</span>'}</li><li>${C.email?TPA.esc(C.email):'<span data-i18n="ph_email">[Email — to be supplied]</span>'}</li><li><a href="contact.html" data-i18n="f_enquiry">Send an enquiry</a></li></ul></div>
</div>
<div class="bot"><span>© <span data-i18n="brand_full">Tirupur Photography Association</span></span><a href="${TPA.esc(adm)}" ${C.adminUrl?"":'aria-disabled="true"'} data-i18n="admin">Admin Portal</a></div>
</div></footer>`;
  $$(".lang button").forEach(b=>b.addEventListener("click",()=>TPA.setLang(b.dataset.l)));
  const bg=$(".burger"),dr=$("#drawer");
  bg.addEventListener("click",()=>{const o=dr.classList.toggle("open");bg.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""});
  dr.addEventListener("keydown",e=>{if(e.key==="Escape"){dr.classList.remove("open");bg.setAttribute("aria-expanded","false");document.body.style.overflow="";bg.focus()}});
}

/* ---- placeholder / photo frame ---- */
TPA.ph=(o)=>{
  const ratio=o.ratio?`aspect-ratio:${o.ratio};`:"";
  const label=o.label||TPA.t("ph_photo","Photograph");
  const alt=o.alt||label||"Photography";
  const img=o.src?`<img src="${TPA.esc(o.src)}" alt="${TPA.esc(alt)}" loading="${o.eager?"eager":"lazy"}" decoding="async" onload="this.closest('.ph').classList.remove('skel')" onerror="this.onerror=null;this.closest('.ph').classList.remove('skel');this.closest('.ph').classList.add('load-err')">`:"";
  const tag=o.src?"":`<span class="tag">${TPA.esc(label)}<i>${TPA.t("ph_note","Temporary placeholder")}</i></span>`;
  return `<figure class="ph ${o.rvi===false?"":"rvi"} ${o.src?"has-img":""} ${o.cls||""}" data-t="${o.tone||1}" style="${ratio}${o.style||""}"${o.src?"":' role="img" aria-label="'+TPA.esc(label)+'"'}><div class="in"${o.par?` data-par="${o.par}"`:""}>${img}</div>${tag}</figure>`;
};

/* ---- effects ---- */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
let io;
TPA.observe=(root=document)=>{
  if(reduce||!("IntersectionObserver" in window)){$$(".rv,.rvi",root).forEach(e=>e.classList.add("in"));return}
  io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
  $$(".rv,.rvi",root).forEach(e=>{if(!e.classList.contains("in"))io.observe(e)});
};
let pars=[],tick=false;
function parallax(){
  tick=false;const vh=innerHeight;
  pars.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;
    const k=parseFloat(el.dataset.par)||.08;const off=((r.top+r.height/2)-vh/2)*k*-1;el.style.transform=`translate3d(0,${off.toFixed(1)}px,0)`});
}
TPA.parallax=()=>{if(reduce)return;pars=$$("[data-par]");parallax()};
addEventListener("scroll",()=>{if(!tick&&!reduce&&pars.length){tick=true;requestAnimationFrame(parallax)}},{passive:true});
addEventListener("resize",()=>{if(!reduce)parallax()});

/* ---- boot ---- */
document.documentElement.classList.add("js");
TPA.boot=function(){
  try{TPA.lang=localStorage.getItem("tpa-lang")||"en"}catch(e){}
  shell();
  const ready=()=>{apply();TPA.observe();TPA.parallax()};
  (window.TPA_PAGE?Promise.resolve(window.TPA_PAGE()):Promise.resolve()).then(ready);
};
/* ---- form helpers ---- */
TPA.setErr=(fld,msg)=>{const f=fld.closest(".fld");if(!f)return;f.classList.toggle("bad",!!msg);const e=$(".err",f);if(e){e.textContent=msg||""}const i=$("input,select,textarea",f);if(i)i.setAttribute("aria-invalid",!!msg)};
TPA.V={
  mobile:v=>/^[6-9]\d{9}$/.test(v.replace(/[\s-]/g,"")),
  email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
  pin:v=>/^\d{6}$/.test(v)
};
})();
