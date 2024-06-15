const body=document.querySelector('body');
const buttons=document.querySelectorAll('.button');


// buttons[0].addEventListener("click",(e)=>{
//     body.style.backgroundColor="grey";
// });
//
// buttons[1].addEventListener("click",(e)=>{
//     body.style.backgroundColor="white";
// });
//
// buttons[2].addEventListener("click",(e)=>{
//     body.style.backgroundColor="blue";
// });
//
// buttons[3].addEventListener("click",(e)=>{
//     body.style.backgroundColor="yellow";
// });

// all these can be done using a forEach loop:
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        body.style.backgroundColor=e.target.id;  // because id is name of the color
    })
})