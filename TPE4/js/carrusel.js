document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"
    let flechasIzquierdas = document.querySelectorAll(".flechaIzquierda");
    let flechasDerechas = document.querySelectorAll(".flechaDerecha");
    let sliders = document.querySelectorAll(".slider");

    flechasIzquierdas.forEach(element => {
        element.addEventListener("click", ()=>{
            const idClickeado = element.getAttribute("id");
                sliders[idClickeado-1].scrollLeft -=200;
                let items = sliders[idClickeado-1].getElementsByTagName("li");
                for(let i=0; i<items.length; i++){
                    items[i].animate([
                        {transform: "translateX(0px)"}
                    ],
                    {
                        duration: 10000,
                    });
                }
        })
    });

    flechasDerechas.forEach(element => {
        element.addEventListener("click", ()=>{
            const idClickeado = element.getAttribute("id");
                sliders[idClickeado-1].scrollLeft +=200;
                let items = sliders[idClickeado-1].getElementsByTagName("li");
                for(let i=0; i<items.length; i++){
                    items[i].animate([
                        {transform: "translateX(-100px)"}
                    ],
                    {
                        duration: 1000,
                    });
                }
        });
    });

}