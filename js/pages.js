/* Renders data-driven sections: home, about, committee, news, article, membership. */
(function(){
const {D,t,L,esc,ph,$,$$}=TPA;
const page=document.body.dataset.page;
const qs=new URLSearchParams(location.search);
let first=true;
const dateOf=n=>n.date||t("date_tbc","[Date to be confirmed]");
const arrow='<span class="ar" aria-hidden="true">→</span>';
function eventsList(){
  const box=$("#events-list");if(!box)return;
  box.innerHTML=D.events.length?D.events.map(e=>`<a class="ev" href="news.html?cat=${e.cat}"><div class="d">${esc(e.date||t("date_short","Date"))}<small>${esc(L(D.newsCats[e.cat]))}</small></div><div><h3>${esc(L(e.title))}</h3><span class="mid small">${esc(L(e.where))}</span></div><span class="tlink">${t("e_details","Details")} ${arrow}</span></a>`).join(""):
  `<div class="empty"><h3>${t("e_none","No upcoming events right now.")}</h3></div>`;
}
function collage(){
  const box=$("#collage");if(!box)return;
  const pick=[[1,"c1"],[4,"c2"],[6,"c3"],[9,"c4"],[13,"c5"]];
  box.innerHTML=pick.map(([i,c],k)=>{const g=D.gallery[i-1];
    return `<a class="${c} zoom" href="gallery.html#img-${g.id}" aria-label="${esc(L(g.title))}">${ph({tone:g.tone,ratio:g.ratio,src:g.src,alt:L(g.title),label:L(g.title),par:k%2?0.05:0.09,cls:"",style:""})}<p class="cap">${esc(L(D.galleryCats[g.cat]))} · ${esc(L(g.credit))}</p></a>`}).join("");
}
function newsHome(){
  const box=$("#latest-news");if(!box)return;
  const [f,...r]=D.news;
  box.innerHTML=`<a class="s-a2 feat zoom" href="article.html?id=${f.id}" style="display:block;text-decoration:none">${ph({tone:f.tone,ratio:"3/2",src:f.src,alt:L(f.title),label:L(f.title)})}<div style="margin-top:22px"><p class="meta">${esc(L(D.newsCats[f.cat]))} · ${esc(dateOf(f))}</p><h3 style="font-size:clamp(26px,3vw,40px)">${esc(L(f.title))}</h3><p class="mid">${esc(L(f.excerpt))}</p></div></a>
  <div class="s-b2">${r.slice(0,3).map(n=>`<a class="nrow zoom" style="grid-template-columns:120px 1fr" href="article.html?id=${n.id}">${ph({tone:n.tone,ratio:"4/3",src:n.src,alt:L(n.title),label:L(n.title)})}<div><p class="meta">${esc(L(D.newsCats[n.cat]))} · ${esc(dateOf(n))}</p><h3 style="font-size:19px">${esc(L(n.title))}</h3></div></a>`).join("")}</div>`;
}
function person(m,contact){
  const acts=!contact?"":((m.phone||m.whatsapp)?`<div class="acts">${m.phone?`<a href="tel:${esc(m.phone)}">${t("cm_call","Call")}</a>`:""}${m.whatsapp?`<a href="https://wa.me/${esc(m.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`:""}</div>`:`<div class="acts"><span>${t("cm_verified","Verified Member")}</span></div>`);
  return `<div class="person rv">${ph({tone:m.tone,ratio:"4/5",src:m.src,alt:L(m.name),label:t("cm_portrait","Portrait"),par:0.04})}<h3>${esc(L(m.name))}</h3><p class="role">${esc(L(m.role))}</p><p class="small mid" style="margin:2px 0 0">${esc(L(m.studio))}</p>${acts}</div>`;
}
function people(){
  const a=$("#people-preview"),b=$("#people");
  if(a)a.innerHTML=D.committee.slice(0,4).map(m=>person(m,false)).join("");
  if(b)b.innerHTML=D.committee.map(m=>person(m,true)).join("");
}
function ctaPlans(){
  const box=$("#cta-plans");if(!box)return;
  box.innerHTML=D.plans.map(p=>`<a href="join.html?plan=${p.id}" style="display:flex;justify-content:space-between;gap:16px;padding:18px 0;border-top:1px solid #3B434B;text-decoration:none"><span>${esc(L(p.name))}</span><span style="font:300 26px var(--f-display)">${TPA.money(p.price)} <small style="font:500 12px var(--f-body);color:#A9AEB3">${p.period==="life"?t("lifetime","lifetime"):t("per_year","per year")}</small></span></a>`).join("")+'<div style="border-top:1px solid #3B434B"></div>';
}
function plans(){
  const box=$("#plans");if(!box)return;
  box.innerHTML=D.plans.map(p=>`<div class="plan rv${p.rec?" rec":""}"><div class="badge">${p.rec?t("start_here","Start here"):""}</div><h3 style="margin-top:6px">${esc(L(p.name))}</h3><div class="price">${TPA.money(p.price)}</div><div class="small mid">${p.period==="life"?t("lifetime_p","one time · lifetime validity"):t("per_year","per year")}</div><p class="d">${esc(L(p.d))}</p><a class="btn ${p.rec?"solid":""}" href="join.html?plan=${p.id}" style="justify-content:center"><span>${t("choose","Choose this plan")}</span></a></div>`).join("");
}
function newsPage(){
  const f=$("#nfilters");if(!f)return;
  let cat=qs.get("cat")||"all";if(cat!=="all"&&!D.newsCats[cat])cat="all";
  const cats=["all",...Object.keys(D.newsCats)];
  const draw=()=>{
    f.innerHTML=cats.map(c=>{const n=c==="all"?D.news.length:D.news.filter(x=>x.cat===c).length;return `<button type="button" data-c="${c}" aria-pressed="${c===cat}">${c==="all"?t("all","All"):esc(L(D.newsCats[c]))}<span class="n">${n}</span></button>`}).join("");
    $$("button",f).forEach(b=>b.onclick=()=>{cat=b.dataset.c;history.replaceState(null,"",cat==="all"?location.pathname:"?cat="+cat);draw()});
    const list=D.news.filter(n=>cat==="all"||n.cat===cat);
    $("#nempty").hidden=list.length>0;
    const ft=list[0];
    $("#nfeat").innerHTML=ft?`<a class="feat zoom" href="article.html?id=${ft.id}">${ph({tone:ft.tone,ratio:"3/2",src:ft.src,label:L(ft.title),rvi:false})}<div class="t"><p class="meta">${t("featured","Featured")} · ${esc(L(D.newsCats[ft.cat]))} · ${esc(dateOf(ft))}</p><h2 style="font-size:clamp(30px,3.6vw,52px)">${esc(L(ft.title))}</h2><p class="mid">${esc(L(ft.excerpt))}</p><span class="tlink" style="margin-top:12px">${t("read_more","Read more")} ${arrow}</span></div></a>`:"";
    $("#nlist").innerHTML=list.slice(1).map(n=>`<a class="nrow zoom" href="article.html?id=${n.id}">${ph({tone:n.tone,ratio:"4/3",src:n.src,label:L(n.title),rvi:false})}<div><p class="meta">${esc(L(D.newsCats[n.cat]))} · ${esc(dateOf(n))}</p><h3>${esc(L(n.title))}</h3><p class="mid" style="margin:8px 0 0">${esc(L(n.excerpt))}</p></div></a>`).join("");
  };draw();
}
function article(){
  const box=$("#art");if(!box)return;
  const n=D.news.find(x=>String(x.id)===qs.get("id"));
  if(!n){box.innerHTML=`<div class="empty"><h2>${t("ar_nf","Article not found")}</h2><p class="mid">${t("ar_nf2","It may have been moved or removed.")}</p><a class="btn" href="news.html">${t("ar_back","All news & events")}</a></div>`;return}
  document.title=L(n.title)+" — "+t("brand_full","Tirupur Photography Association");
  const rel=D.news.filter(x=>x.id!==n.id).slice(0,3);
  box.innerHTML=`<p class="meta">${esc(L(D.newsCats[n.cat]))} · ${esc(dateOf(n))}</p><h1 style="font-size:clamp(36px,5.4vw,80px);max-width:16em">${esc(L(n.title))}</h1>
  <div style="margin:48px 0">${ph({tone:n.tone,ratio:"21/9",src:n.src,label:L(n.title),par:0.06})}<p class="cap">${t("ar_credit","[Photograph credit]")}</p></div>
  <div class="art-body">${(n.body[TPA.lang]||n.body.en).map(p=>`<p>${esc(p)}</p>`).join("")}</div>
  <hr class="rule" style="margin:64px 0 32px"><h3 style="margin-bottom:8px">${t("ar_more","More from the association")}</h3>${rel.map(r=>`<a class="nrow" href="article.html?id=${r.id}">${ph({tone:r.tone,ratio:"4/3",src:r.src,label:L(r.title),rvi:false})}<div><p class="meta">${esc(L(D.newsCats[r.cat]))}</p><h3>${esc(L(r.title))}</h3></div></a>`).join("")}`;
}
function render(){
  eventsList();collage();newsHome();people();ctaPlans();plans();newsPage();article();
  if(!first){$$(".rvi,.rv").forEach(e=>e.classList.add("in"));TPA.parallax()}else{TPA.observe()}
  first=false;
}
window.TPA_PAGE=function(){TPA.onLang(render)};
TPA.boot();
})();
