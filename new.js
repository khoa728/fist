let btn = document.getElementById("dung")
btn.addEventListener("mouseover",()=>{
    document.getElementById("dung").innerText = "dung r nhan di";
});
btn.addEventListener("mouseout",()=>{
    document.getElementById("dung").innerText = "nhan vao";
});
btn.addEventListener("mousedown",()=>{
    document.getElementById("dung").innerText = "ok";
});
btn.addEventListener("mouseup",()=>{
    document.getElementById("dung").innerText = "bye";
});