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
        })
    });

    flechasDerechas.forEach(element => {
        element.addEventListener("click", ()=>{
            const idClickeado = element.getAttribute("id");
                sliders[idClickeado-1].scrollLeft +=200;
        });
    });

}