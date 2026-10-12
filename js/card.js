/* Membership card: SAMPLE data only. Real cards must come from verified member records on the server. */
(function(){
const {C,t,$}=TPA;
const M={id:"TPA-2026-00428",name:"R. Karthikeyan",plan:"New Member Registration",valid:"31 Dec 2027"};
function qr(){
  const url=C.verifyBase?C.verifyBase+encodeURIComponent(M.id):"";
  const text=url||(M.id+" — sample, not verifiable");
  try{const q=qrcode(0,"M");q.addData(text);q.make();$("#qr").innerHTML=q.createSvgTag({cellSize:4,margin:0,scalable:true});}
  catch(e){$("#qr").textContent="QR"}
  $("#qr-cap").textContent=url?t("cd_cap1","QR code links to: ")+url:t("cd_cap2","This sample QR code does not link to a verification page. Set verifyBase in js/config.js.");
}
function fill(){$("#mc-name").textContent=M.name;$("#mc-id").textContent=M.id;$("#mc-plan").textContent=M.plan;$("#mc-valid").textContent=M.valid}
window.TPA_PAGE=function(){fill();qr();TPA.onLang(()=>{})};
$("#cd-print").onclick=()=>window.print();
$("#cd-png").onclick=async()=>{
  const b=$("#cd-png");b.disabled=true;
  try{const c=await html2canvas($("#mcard"),{scale:3,backgroundColor:null,useCORS:true});
    const a=document.createElement("a");a.download="tpa-membership-card.png";a.href=c.toDataURL("image/png");document.body.appendChild(a);a.click();a.remove();
  }catch(e){TPA.toast(t("cd_fail","Could not create the image. Use Print and choose Save as PDF."))}
  finally{b.disabled=false}
};
TPA.boot();
})();
