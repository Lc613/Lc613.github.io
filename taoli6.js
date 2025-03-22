const grid=document.getElementById("grid");

for (let i=0; i<100;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===47){
    div.textContent="开";
    div.addEventListener("click",function(){
      alert("你找到了！准备好……");
      alert("3、2、1——");
      alert("按！");
      window.location.href="taolijingshienyiyuan7.html"
    });
   }

   else {
     div.textContent="并";
   }

   grid.appendChild(div);
}
