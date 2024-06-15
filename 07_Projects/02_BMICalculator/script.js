const calc=document.querySelector("#calculate");
calc.addEventListener("click", (e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value)/100;
    const weight=parseInt(document.querySelector("#weight").value);
    const bmi=(weight/(height*height)).toFixed(1);
    const results=document.querySelector("#results");
    if(height<=0  || isNaN(height)) {
        results.innerHTML = "Invalid height";
    } else if(weight<=0 || isNaN(weight)){
        results.innerHTML = "Invalid weight";
    } else results.innerText=bmi;
    const message=document.querySelector("#message");
    if(bmi<18.6){
        message.innerHTML=`<span>You are under weight.</span>`
    } else if(bmi>=18.6 && bmi<=24.9){
        message.innerHTML=`<span>You BMI is in normal range.</span>`
    }if(bmi>24.9){
        message.innerHTML=`<span>You are over weight.</span>`
    }
})
