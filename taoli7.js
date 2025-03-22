const grid=document.getElementById("grid");

for (let i=0; i<200;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===17){
    div.textContent="钥";
    div.addEventListener("click",function(){
      alert("这把钥匙可以打开出口的大门……趁着黑喑的混乱离开吧！");
      alert("我为什么一直通过这个弹窗和你交流？");
      alert("哈哈，这个问题真有趣。");
      alert("毕竟这里是■■世界……");
      window.location.href="taolijingshienyiyuan8.html"
    });
   }

   else {
     div.textContent="人";
   }

   grid.appendChild(div);
}
