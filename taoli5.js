const grid=document.getElementById("grid");

for (let i=0; i<100;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===34){
    div.textContent="视";
    div.addEventListener("click",function(){
      alert("有了它，黑暗对于我们来说就是优势了！寻找一下，这里有一个配电箱，我们要切断电源。");
      alert("我怎么知道这里有夜视仪这种东西？");
      alert("唔……解释起来太麻烦了，还是先看看怎么切断电源吧");
      window.location.href="taolijingshienyiyuan6.html"
    });
   }

   else {
     div.textContent="观";
   }

   grid.appendChild(div);
}
