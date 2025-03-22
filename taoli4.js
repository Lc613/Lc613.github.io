const grid=document.getElementById("grid");

for (let i=0; i<200;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===185){
    div.textContent="入";
    div.addEventListener("click",function(){
      alert("太好了！你顺利进来了！");
      alert("为什么要进杂物间？");
      window.location.href="taolijingshienyiyuan5.html"
    });
   }

   else {
     div.textContent="人";
   }

   grid.appendChild(div);
}
