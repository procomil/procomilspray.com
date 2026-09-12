const PRICE=1250;
const waNumber="8801931613491";
const money=n=>new Intl.NumberFormat("bn-BD",{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+"৳";
const qty=document.getElementById("qty"), minus=document.getElementById("minus"), plus=document.getElementById("plus");
function update(){
  const q=Math.max(1,parseInt(qty.value||1));
  const total=PRICE*q;
  qty.value=q;
  document.getElementById("itemTotal").textContent=money(total);
  document.getElementById("sumQty").textContent=q;
  document.getElementById("sum").textContent=money(total);
  document.getElementById("subtotal").textContent=money(total);
  document.getElementById("grand").textContent=money(total);
  document.getElementById("buttonTotal").textContent=money(total);
}
minus.onclick=()=>{qty.value=Math.max(1,parseInt(qty.value)-1);update()};
plus.onclick=()=>{qty.value=parseInt(qty.value)+1;update()};
document.getElementById("orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const address=document.getElementById("address").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const q=parseInt(qty.value);
  const total=PRICE*q;
  const text=`নতুন অর্ডার%0A%0Aপণ্য: Procomil Longtime Power Spray%0Aপরিমাণ: ${q}%0Aমোট: ${money(total)}%0A%0Aনাম: ${encodeURIComponent(name)}%0Aঠিকানা: ${encodeURIComponent(address)}%0Aফোন: ${encodeURIComponent(phone)}%0A%0Aপেমেন্ট: Cash on Delivery`;
  window.open(`https://wa.me/${waNumber}?text=${text}`,"_blank");
});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
update();
