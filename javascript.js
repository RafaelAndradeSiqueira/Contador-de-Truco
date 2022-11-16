let TimeA = document.getElementById("pontos1");
let TimeB = document.getElementById("pontos2");
let pontoA = document.getElementById("A1");
let pontoB = document.getElementById("B1");
let pontoC = document.getElementById("A2");
let pontoD = document.getElementById("B2");
let ganhador = document.getElementById("ganhador");
let Zerar = document.getElementById("zerar");

let contA = 0;
let contB = 0;


pontoA.addEventListener("click", () => {
    contA = contA + 1;
    pontoA = contA;
    TimeA.innerHTML = contA;
    if(contA >= 12) {
        ganhador.innerHTML=("O TIME A VENCEU!");
    }
    if(contA < 12) {
        ganhador.innerHTML=("");
    }
    if(contA == 13){
        location.reload();  
    }
})

pontoB.addEventListener("click", () => {
    contB = contB + 1;
    pontoB = contB;
    TimeB.innerHTML = contB;
    if(contB >= 12) {
        ganhador.innerHTML=("O TIME B VENCEU!");
    }
    if(contB <  12) {
        ganhador.innerHTML=("");
    }
    if(contB == 13){
        location.reload();  
    }
})

pontoC.addEventListener("click", () => {
    if(contA >= 1){
        contA = contA - 1;
        TimeA.innerHTML = contA;   
    }
    if(contA <12){
        ganhador.innerHTML=("");
    }
    
    
})

pontoD.addEventListener("click", () => {
    if(contB >= 1){
    contB = contB - 1;
    TimeB.innerHTML = contB;
    }
    if(contB <12){
        ganhador.innerHTML=("");
    }
})

Zerar.addEventListener("click", () => {
    location.reload();
})






