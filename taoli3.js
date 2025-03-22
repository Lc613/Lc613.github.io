const grid=document.getElementById("grid");

for (let i=0; i<100;i++) {
    const div=document.createElement("div");
    div.className ="grid-item";

    if(i===93){
    div.textContent="门";
    div.addEventListener("click",function(){
      alert("门已经被我打开了，你可以直接出去……小心一点，别让他们注意到你。");
      alert("呼……还算顺利，看来这身衣服的确很有用。");
      alert("另外，见到光亮的感觉可真不错，不是吗？");
      window.location.href="taolijingshienyiyuan4.html"
    });
   }

   else {
     div.textContent="问";
   }

   grid.appendChild(div);
}
