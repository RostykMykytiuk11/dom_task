const btn = document.querySelector(".add_btn");
btn.addEventListener("click",postComent);
function postComent(){
    const coms = document.querySelector(".comments");
    const com = document.querySelector(".com");
    if(com.value!=''){
        const comment = document.createElement("p");
        comment.innerHTML = com.value;
        const comdate = new Date();
        const comtime = document.createElement("p");
        comment.classList.toggle("coment");
        comtime.classList.toggle("coment_date")
        let month = comdate.getUTCMonth()+1;
        let day = comdate.getDate();
        let minutes = comdate.getMinutes();
        if(month<10) month = "0"+month;
        if(day<10) day = "0"+day;
        if(minutes<10) minutes = "0"+minutes;
        comtime.innerHTML = comdate.getFullYear()+"."+ month +"."+ day +"  "+ comdate.getHours()+ ":" + minutes ;
        coms.appendChild(comment);
        coms.appendChild(comtime);
        com.value="";        
    }
}