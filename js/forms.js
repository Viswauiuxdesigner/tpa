/* Login, Join (registration wizard), Status lookup, Contact. */
(function(){
const {C,D,t,L,esc,$,$$,V,setErr}=TPA;
const page=document.body.dataset.page;
const json=async(url,body,isForm)=>{
  const r=await fetch(url,{method:"POST",body:isForm?body:new URLSearchParams(body),credentials:"same-origin",headers:{"Accept":"application/json"}});
  let d;try{d=await r.json()}catch(e){throw new Error("bad-response")}
  if(!r.ok&&d.ok!==false)throw new Error("http-"+r.status);return d;
};
const showAlert=(el,msg,kind)=>{el.className="alert show"+(kind?" "+kind:"");el.textContent=msg;el.focus&&el.focus?.()};
const hideAlert=el=>{el.className="alert";el.textContent=""};
const digits=v=>v.replace(/[\s-]/g,"");
const safeRedirect=u=>typeof u==="string"&&u.startsWith("/")&&!u.startsWith("//")?u:null;

/* ---------- LOGIN ---------- */
function login(){
  const f=$("#login"),al=$("#l-alert");
  if(!C.loginUrl)$("#l-demo").hidden=false;
  if(C.forgotPasswordUrl)$("#l-forgot").href=C.forgotPasswordUrl;
  $("#l-show").onclick=function(){const i=$("#l-pw"),s=i.type==="password";i.type=s?"text":"password";this.textContent=s?t("f_hide","Hide"):t("f_show","Show");this.setAttribute("aria-pressed",s)};
  f.addEventListener("submit",async e=>{
    e.preventDefault();hideAlert(al);
    const m=$("#l-mob"),p=$("#l-pw");let bad=null;
    if(!V.mobile(m.value)){setErr(m,t("e_mobile","Enter a valid 10-digit mobile number."));bad=bad||m}else setErr(m,"");
    if(!p.value){setErr(p,t("e_pw","Enter your password."));bad=bad||p}else setErr(p,"");
    if(bad){bad.focus();return}
    if(!C.loginUrl){showAlert(al,t("l_nosvc","Sign-in is not available in this preview. The login service has not been connected."),"info");return}
    const b=$("#l-btn");b.disabled=true;
    try{const d=await json(C.loginUrl,{mobile:digits(m.value),password:p.value});
      if(d.ok){const r=safeRedirect(d.redirect);if(r)location.href=r;else showAlert(al,t("l_ok","Signed in."),"ok")}
      else showAlert(al,d.message||t("l_bad","Incorrect mobile number or password."))}
    catch(err){showAlert(al,t("e_net","We could not reach the server. Please check your connection and try again."))}
    finally{b.disabled=false;p.value=""}
  });
}

/* ---------- JOIN ---------- */
function join(){
  const f=$("#join"),al=$("#j-alert"),secs=$$("section[data-step]",f);
  const labels=()=>[t("s1","Plan"),t("s2","Details"),t("s3","Documents"),t("s4","Payment"),t("s5","Review")];
  let step=1,sending=false;
  if(!C.registerUrl)$("#j-demo").hidden=false;
  const planId=()=>(f.elements.plan&&f.elements.plan.value)||"";
  const plan=()=>D.plans.find(p=>p.id===planId());
  function drawPlans(){
    const pre=planId()||new URLSearchParams(location.search).get("plan")||"";
    $("#plan-opts").innerHTML=D.plans.map(p=>`<label class="opt"><input type="radio" name="plan" value="${p.id}" ${p.id===pre?"checked":""}><span><b>${esc(L(p.name))}</b><span class="mid small">${esc(L(p.d))}</span></span><span class="p">${TPA.money(p.price)}<small style="font:500 12px var(--f-body);display:block;text-align:right;color:var(--mid)">${p.period==="life"?t("lifetime","lifetime"):t("per_year","per year")}</small></span></label>`).join("");
    $$("input[name=plan]",f).forEach(r=>r.onchange=()=>{setErr($("#f-plan"),"");pay()});pay();
  }
  function pay(){const p=plan();$("#pay-amt").textContent=p?TPA.money(p.price):"—"}
  function drawSteps(){
    $("#steps").innerHTML=labels().map((l,i)=>`<li${i+1===step?' aria-current="step"':""} class="${i+1<step?"done":""}"><span>${i+1<step?"✓":i+1}</span>${l}</li>`).join("");
    secs.forEach(s=>s.hidden=+s.dataset.step!==step);
    $("#j-back").hidden=step===1;
    $("#j-next-l").textContent=step===5?t("j_submit","Submit application"):t("j_next","Continue");
    if(step===5)review();
  }
  function fileCheck(inp,req){
    const fld=inp.closest(".fld"),fl=inp.files&&inp.files[0],nm=$(".nm",fld);
    nm.textContent=fl?`${fl.name} · ${(fl.size/1048576).toFixed(2)} MB`:"";
    if(!fl){if(req){setErr(inp,t("e_file_req","Please upload this document."));return false}setErr(inp,"");return true}
    if(!C.allowedUploads.includes(fl.type)){setErr(inp,t("e_file_type","Only PDF, JPG or PNG files are accepted."));return false}
    if(fl.size>C.maxUploadMB*1048576){setErr(inp,t("e_file_size","This file is larger than 2 MB. Please upload a smaller file."));return false}
    setErr(inp,"");return true;
  }
  $$("input[type=file]",f).forEach(i=>i.addEventListener("change",()=>fileCheck(i,i.id==="f-photo"||i.id==="f-id")));
  const el=n=>f.elements[n];
  function validate(s){
    const bad=[];const chk=(inp,ok,msg)=>{if(ok){setErr(inp,"")}else{setErr(inp,msg);bad.push(inp)}};
    if(s===1){const ok=!!plan();const fs=$("#f-plan");fs.classList.toggle("bad",!ok);$(".err",fs).textContent=ok?"":t("e_plan","Please choose a membership plan.");if(!ok)bad.push($("input[name=plan]",f))}
    if(s===2){
      chk(el("name"),el("name").value.trim().length>=3,t("e_name","Enter your full name."));
      chk(el("studio"),planId()!=="renewal"||el("studio").value.trim().length>=2,t("e_studio","Studio name is required for a studio renewal."));
      chk(el("work"),!!el("work").value,t("e_work","Select your area of work."));
      chk(el("mobile"),V.mobile(el("mobile").value),t("e_mobile","Enter a valid 10-digit mobile number."));
      chk(el("email"),!el("email").value.trim()||V.email(el("email").value.trim()),t("e_email","Enter a valid email address."));
      chk(el("address"),el("address").value.trim().length>=10,t("e_addr","Enter your full address."));
      chk(el("pin"),V.pin(el("pin").value.trim()),t("e_pin","Enter a 6-digit PIN code."));
    }
    if(s===3){[["f-photo",1],["f-id",1],["f-biz",0]].forEach(([id,r])=>{const i=$("#"+id);if(!fileCheck(i,r))bad.push(i)})}
    if(s===4){
      const r=el("payref").value.trim(),d=el("paydate").value;
      chk(el("payref"),/^[A-Za-z0-9]{8,30}$/.test(r),t("e_ref","Enter the payment reference (8–30 letters or numbers)."));
      const today=new Date().toISOString().slice(0,10);
      chk(el("paydate"),!!d&&d<=today&&d>="2020-01-01",t("e_pdate","Enter a valid payment date that is not in the future."));
      if(!fileCheck($("#f-pay"),false))bad.push($("#f-pay"));
    }
    if(s===5){const c=el("decl");const fl=$("#f-decl");fl.classList.toggle("bad",!c.checked);$(".err",fl).textContent=c.checked?"":t("e_decl","Please confirm the declaration to submit.");if(!c.checked)bad.push(c)}
    if(bad.length){bad[0].focus();return false}return true;
  }
  function review(){
    const p=plan(),w={photo:t("w_photo","Photography"),video:t("w_video","Videography"),both:t("w_both","Both")};
    const fn=id=>{const x=$("#"+id).files[0];return x?x.name:"—"};
    const rows=[[t("rv_plan","Plan"),p?`${L(p.name)} — ${TPA.money(p.price)}`:""],[t("f_name","Full name"),el("name").value],[t("f_studio","Studio / business name"),el("studio").value||"—"],[t("f_work","Area of work"),w[el("work").value]||""],[t("f_mobile","Mobile number"),el("mobile").value],[t("f_email","Email"),el("email").value||"—"],[t("f_addr","Address"),el("address").value+" — "+el("pin").value],[t("u_photo","Photograph"),fn("f-photo")],[t("u_id","Identity proof"),fn("f-id")],[t("u_biz","Business proof"),fn("f-biz")],[t("f_ref","Payment reference"),el("payref").value+" · "+el("paydate").value]];
    $("#review").innerHTML=rows.map(r=>`<div><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join("");
  }
  const moveTo=n=>{step=n;hideAlert(al);drawSteps();const h=$("h2",secs[n-1]);h&&h.focus();scrollTo({top:0,behavior:"smooth"})};
  $("#j-back").onclick=()=>moveTo(step-1);
  $("#j-next").onclick=()=>{if(!validate(step))return;if(step<5)moveTo(step+1);else submit()};
  f.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.tagName!=="TEXTAREA"&&e.target.type!=="checkbox"){e.preventDefault();$("#j-next").click()}});
  async function submit(){
    if(sending)return;sending=true;const btn=$("#j-next");btn.disabled=true;hideAlert(al);
    try{
      let ref,demo=false;
      if(C.registerUrl){
        const fd=new FormData(f);fd.append("lang",TPA.lang);
        const d=await json(C.registerUrl,fd,true);
        if(!d.ok){
          if(d.errors){const map={name:2,studio:2,work:2,mobile:2,email:2,address:2,pin:2,photo:3,idproof:3,bizproof:3,payref:4,paydate:4,payproof:4,plan:1};let go=99;Object.entries(d.errors).forEach(([k,m])=>{const i=f.elements[k];if(i&&i.length===undefined){setErr(i,m)}go=Math.min(go,map[k]||5)});moveTo(go===99?5:go)}
          showAlert(al,d.message||t("e_server","Some details need attention. Please review the highlighted fields."));return}
        ref=d.reference;
      }else{
        demo=true;ref="DEMO-"+Math.random().toString(36).slice(2,8).toUpperCase();
        try{localStorage.setItem("tpa-demo-app",JSON.stringify({ref,mobile:digits(el("mobile").value),plan:planId(),status:"submitted"}))}catch(e){}
      }
      f.hidden=true;$("#steps").hidden=true;const dn=$("#done");dn.hidden=false;
      dn.innerHTML=`<p class="eyebrow">${t("d_eyebrow","Application received")}</p><h2 tabindex="-1" style="font-size:clamp(32px,4vw,54px)">${t("d_h","Thank you. Your application is submitted.")}</h2><p class="lead" style="margin:20px 0">${t("d_p","Keep this reference. The association will verify your payment and documents before approving your membership.")}</p><div class="refbox" aria-label="${t("d_ref","Application reference")}">${esc(ref)}</div>
      <div class="status" aria-label="${t("d_prog","Progress")}"><div class="on">${t("d_s1","Submitted")}</div><div>${t("d_s2","Payment verification")}</div><div>${t("d_s3","Approval")}</div><div>${t("d_s4","Card issued")}</div></div>
      ${demo?`<p class="notice">${t("d_demo","Demo mode: nothing was sent to the association.")}</p>`:""}<p style="margin-top:28px"><a class="btn" href="index.html">${t("d_home","Back to home")}</a></p>`;
      $("h2",dn).focus();scrollTo({top:0})
    }catch(err){showAlert(al,t("e_net","We could not reach the server. Please check your connection and try again."))}
    finally{sending=false;btn.disabled=false}
  }
  /* status lookup */
  const sf=$("#status"),sa=$("#st-alert");
  sf.addEventListener("submit",async e=>{
    e.preventDefault();hideAlert(sa);const r=$("#s-ref"),m=$("#s-mob");let bad=null;
    if(r.value.trim().length<4){setErr(r,t("e_sref","Enter your application reference."));bad=bad||r}else setErr(r,"");
    if(!V.mobile(m.value)){setErr(m,t("e_mobile","Enter a valid 10-digit mobile number."));bad=bad||m}else setErr(m,"");
    if(bad){bad.focus();return}
    const names={submitted:t("sx_sub","Submitted — waiting for payment verification."),verifying:t("sx_ver","Payment verification in progress."),approved:t("sx_app","Approved. Your membership card is ready."),rejected:t("sx_rej","Needs attention. Please contact the association.")};
    try{
      let st;
      if(C.statusUrl){const d=await json(C.statusUrl,{reference:r.value.trim(),mobile:digits(m.value)});if(!d.ok)throw new Error("nf");st=d.status}
      else{const a=JSON.parse(localStorage.getItem("tpa-demo-app")||"null");if(!a||a.ref!==r.value.trim().toUpperCase()||a.mobile!==digits(m.value))throw new Error("nf");st=a.status}
      showAlert(sa,(names[st]||st)+(C.statusUrl?"":" ("+t("demo","demo")+")"),"ok");
    }catch(err){showAlert(sa,err.message==="nf"?t("sx_nf","No application found with these details."):t("e_net","We could not reach the server. Please check your connection and try again."))}
  });
  window.TPA_PAGE=function(){TPA.onLang(()=>{drawPlans();drawSteps()})};
}

/* ---------- CONTACT ---------- */
function contact(){
  const set=(id,val,href)=>{const e=$(id);e.innerHTML=val?(href?`<a href="${esc(href)}">${esc(val)}</a>`:esc(val)):`<span class="pending">${t("ph_tbs","[To be supplied]")}</span>`};
  const fill=()=>{set("#ct-addr",C.address);set("#ct-phone",C.phone,C.phone&&"tel:"+C.phone.replace(/\s/g,""));set("#ct-email",C.email,C.email&&"mailto:"+C.email);set("#ct-hours",C.officeHours)};
  const wa=$("#wa");
  if(C.whatsappNumber){wa.href="https://wa.me/"+C.whatsappNumber.replace(/\D/g,"")+"?text="+encodeURIComponent(t("ct_wa_msg","Hello, I have a question about the Tirupur Photography Association."));wa.removeAttribute("aria-disabled");$("#wa-n").hidden=true}
  if(C.mapEmbedUrl&&/^https:\/\/www\.google\.com\/maps\/embed/.test(C.mapEmbedUrl)){$("#map").innerHTML=`<iframe src="${esc(C.mapEmbedUrl)}" title="${t("ct_map_t","Map")}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
  if(!C.contactUrl)$("#c-demo").hidden=false;
  const f=$("#contact"),al=$("#c-alert");let sending=false;
  f.addEventListener("submit",async e=>{
    e.preventDefault();hideAlert(al);if(sending)return;
    const g=n=>f.elements[n],bad=[];const chk=(i,ok,m)=>{setErr(i,ok?"":m);if(!ok)bad.push(i)};
    const c=g("contact").value.trim();
    chk(g("name"),g("name").value.trim().length>=2,t("e_name","Enter your full name."));
    chk(g("contact"),V.mobile(c)||V.email(c),t("e_contact","Enter a valid mobile number or email address."));
    chk(g("subject"),!!g("subject").value,t("e_subject","Choose a subject."));
    chk(g("message"),g("message").value.trim().length>=10,t("e_msg","Write a message of at least 10 characters."));
    if(bad.length){bad[0].focus();return}
    if(g("website").value)return; // honeypot
    if(!C.contactUrl){showAlert(al,t("c_nosvc","Your message was not sent: the enquiry service is not connected in this preview."),"info");return}
    sending=true;
    try{const d=await json(C.contactUrl,{name:g("name").value.trim(),contact:c,subject:g("subject").value,message:g("message").value.trim()});
      if(d.ok){f.reset();showAlert(al,t("c_ok","Thank you. Your message has been sent. We will reply soon."),"ok")}else showAlert(al,d.message||t("e_server","Some details need attention. Please review the highlighted fields."))}
    catch(err){showAlert(al,t("e_net","We could not reach the server. Please check your connection and try again."))}
    finally{sending=false}
  });
  window.TPA_PAGE=function(){TPA.onLang(fill)};
}
({login,join,contact})[page]();
TPA.boot();
})();
