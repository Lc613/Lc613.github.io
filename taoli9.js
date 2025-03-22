const grid=document.getElementById("grid");

for (let i=0; i<400;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===200){
    div.textContent="大";
    div.addEventListener("click",function(){
      alert("……");
      alert("成功了吗？");
      alert("……");
      alert("……");
      alert("……");
      alert("看来没有。");
      window.location.href="taolijingshienyiyuan10.html"
    });
   }

   else {
     div.textContent="犬";
   }

   grid.appendChild(div);
}
