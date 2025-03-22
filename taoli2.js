const grid=document.getElementById("grid");

for (let i=0; i<100;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===53){
    div.textContent="衣";
    div.addEventListener("click",function(){
      alert("太好了，换好衣服！我们马上就可以离开这个房间了！");
      alert("为什么要换一身衣服？");
      alert("……");
      window.location.href="taolijingshienyiyuan3.html"
    });
   }

   else {
     div.textContent="夜";
   }

   grid.appendChild(div);
}
