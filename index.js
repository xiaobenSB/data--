var width = document.body.clientWidth || document.documentElement.clientWidth,
    btn1 = document.getElementsByClassName("popupbtncs")[0],
    btn2 = document.getElementsByClassName("popupbtncs1")[0],
    cover = document.getElementsByClassName("cover")[0],
    popup = document.getElementsByClassName("popup")[0],
    areaUl = document.getElementsByClassName("areaUl")[0],
     a = null ;
areaUl.addEventListener("click",function(ev){
  var e = window.event || ev ;
  cover.style.display = "block";
   popup.style.display = "block";
  a = mo.bind(e.target);
if(e.target.nodeName.toLowerCase() === "span"){
  if(e.target.dataset.monIng=="true"){
  popup.childNodes[1].childNodes[1].innerHTML = "确认提示";
  popup.childNodes[1].childNodes[3].innerHTML = "您好，您是否确认领取";//注意：这里执行一次页面内容就存在
  popup.childNodes[1].childNodes[5].innerHTML = "体验码只能领取一次";
 }else if(flag&&e.target.dataset.monIng=="false"){
 popup.childNodes[1].childNodes[1].innerHTML = "温馨提示";
  popup.childNodes[1].childNodes[3].innerHTML = "你好，你已成功领取过";
  popup.childNodes[1].childNodes[5].innerHTML = "请选择其他区域，或付费购买";
 }
}
},-0);
btn1.addEventListener("click",function(ev){
  var e = window.event || ev ;
  e.target.parentElement.style.display = "none";
  cover.style.display = "none";
},-0);
btn2.addEventListener("click",function(ev){
  a();
  var e = window.event || ev ;
  e.target.parentElement.style.display = "none";
  cover.style.display = "none";
},-0);
function mo(){
 this.dataset.monIng = false;
}
