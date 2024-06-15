const clock=document.querySelector("#clock");
setInterval(()=>{
    const today=new Date();
    const time=(today.toLocaleTimeString());
    clock.innerHTML=`${time}`;
},1000);

