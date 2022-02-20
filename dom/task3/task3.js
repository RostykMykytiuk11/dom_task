const btn = document.querySelector("#btn");
btn.addEventListener("click",buttonClick);
btn.addEventListener("mouseover",buttonMouseOn);
btn.addEventListener("mouseout",buttonMouseOut);
function buttonClick(){
    const myDiv = document.querySelector(".text");
    const onclickp = document.createElement("p");
    onclickp.innerHTML = "I was pressed";
    myDiv.appendChild(onclickp);
  
}
function buttonMouseOn(){
    const myDiv = document.querySelector(".text");
    const mouseoverp = document.createElement("p");
    mouseoverp.innerHTML = "Mouse on me!";
    myDiv.appendChild(mouseoverp);
}
function buttonMouseOut(){
    const myDiv = document.querySelector(".text");
    const mouseoutp = document.createElement("p");
    mouseoutp.innerHTML = "Mouse is not on me!";
    myDiv.appendChild(mouseoutp);
}