areaUl.addEventListener("click",function(ev){
  var e = window.event || ev ;
  cover.style.display = "block";
   popup.style.display = "block";
console.dir(e.target)
if(e.target.nodeName.toLowerCase() === "span"){
  if(flag&&e.target.dataset.monIng=="true"){
  popup.childNodes[1].childNodes[3].innerHTML = "您好，您是否确认领取";
  popup.childNodes[1].childNodes[5].innerHTML = "体验码只能领取一次";
  e.target.dataset.monIng = false;
 }else if(e.target.dataset.monIng=="false"){
  popup.childNodes[1].childNodes[3].innerHTML = "你好，你已成功领取过";
  popup.childNodes[1].childNodes[5].innerHTML = "请选择其他区域，或付费购买";
 }
}
},-0);
