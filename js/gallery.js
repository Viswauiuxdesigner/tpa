(function(){
const {D,t,L,esc,ph,$,$$}=TPA;
const qs=new URLSearchParams(location.search);
let cat=qs.get("cat")||"all";if(cat!=="all"&&!D.galleryCats[cat])cat="all";
let cur=-1,list=[],opener=null;
const lb=$("#lb");
function filtered(){return D.gallery.filter(g=>cat==="all"||g.cat===cat)}
function draw(){
  const cats=["all",...Object.keys(D.galleryCats)];
  $("#filters").innerHTML=cats.map(c=>{const n=c==="all"?D.gallery.length:D.gallery.filter(g=>g.cat===c).length;return `<button type="button" data-c="${c}" aria-pressed="${c===cat}">${c==="all"?t("all","All"):esc(L(D.galleryCats[c]))}<span class="n">${n}</span></button>`}).join("");
  $$("#filters button").forEach(b=>b.onclick=()=>{cat=b.dataset.c;history.replaceState(null,"",(cat==="all"?location.pathname:"?cat="+cat)+location.hash);draw()});
  list=filtered();
  $("#empty").hidden=list.length>0;
  $("#count").textContent=list.length?`${list.length} ${t("gl_photos","photographs")}`:"";
  $("#grid").innerHTML=list.map((g,i)=>`<button type="button" class="tile zoom" data-i="${i}" aria-label="${esc(L(g.title))} — ${t("gl_open","open full screen")}">${ph({tone:g.tone,ratio:g.ratio,src:g.src,alt:L(g.title),label:L(g.title),rvi:false})}</button>`).join("");
  $$("#grid .tile").forEach(b=>b.onclick=()=>open(+b.dataset.i,b));
  if(lb.open)show(cur);
}
function show(i){
  if(!list.length)return;cur=(i+list.length)%list.length;const g=list[cur];
  $("#lb-img").innerHTML=ph({tone:g.tone,ratio:g.ratio,src:g.src,alt:L(g.title),label:L(g.title),rvi:false,style:"--ar:"+g.ratio+";--r:"+eval(g.ratio.replace("/","/"))});
  $("#lb-cat").textContent=L(D.galleryCats[g.cat]);$("#lb-title").textContent=L(g.title);$("#lb-cap").textContent=L(g.caption);
  $("#lb-ev").textContent=L(g.event);$("#lb-cr").textContent=L(g.credit);$("#lb-pos").textContent=`${cur+1} / ${list.length}`;
  history.replaceState(null,"",location.pathname+location.search+"#img-"+g.id);
}
function open(i,from){opener=from||opener;show(i);if(!lb.open)lb.showModal();$("#lb-x").focus()}
function close(){if(lb.open)lb.close()}
$("#lb-x").onclick=close;$("#lb-pv").onclick=()=>show(cur-1);$("#lb-nx").onclick=()=>show(cur+1);
lb.addEventListener("close",()=>{history.replaceState(null,"",location.pathname+location.search);if(opener&&document.contains(opener))opener.focus()});
lb.addEventListener("click",e=>{if(e.target===lb)close()});
lb.addEventListener("keydown",e=>{if(e.key==="ArrowLeft"){e.preventDefault();show(cur-1)}else if(e.key==="ArrowRight"){e.preventDefault();show(cur+1)}});
let sx=null;lb.addEventListener("pointerdown",e=>{sx=e.clientX});lb.addEventListener("pointerup",e=>{if(sx===null)return;const d=e.clientX-sx;sx=null;if(Math.abs(d)>70&&!e.target.closest("button,aside"))show(cur+(d<0?1:-1))});
$("#lb-copy").onclick=()=>{const u=location.href;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>TPA.toast(t("gl_copied","Link copied")),()=>TPA.toast(u))};
function fromHash(){const m=location.hash.match(/^#img-(\d+)$/);if(!m)return;const g=D.gallery.find(x=>x.id===+m[1]);if(!g)return;if(cat!=="all"&&g.cat!==cat){cat="all";draw()}const i=list.findIndex(x=>x.id===g.id);if(i>=0)open(i)}
let init=false;
window.TPA_PAGE=function(){TPA.onLang(()=>{draw();if(!init){init=true;fromHash()}})};
TPA.boot();
})();
