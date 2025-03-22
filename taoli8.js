const grid=document.getElementById("grid");

for (let i=0; i<200;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===80){
    div.textContent="面";
    div.addEventListener("click",function(){
      alert("… ■■… ■■ / …■…■ ■■■■ ■■… / …■…… ……… ■■… / …■■… ■■");
      window.location.href="taolijingshienyiyuan9.html"
    });
   }

   else {
     div.textContent="西";
   }

   grid.appendChild(div);
}
