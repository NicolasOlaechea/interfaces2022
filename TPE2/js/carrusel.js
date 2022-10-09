document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"

    /*let flechaIzquierda = document.querySelector(".flechaIzquierda");
    let flechaDerecha = document.querySelector(".flechaDerecha");
    let slider = document.querySelector(".slider");

    flechaIzquierda.addEventListener("click", ()=>{
        slider.scrollLeft -= 200;
    })

    flechaDerecha.addEventListener("click", ()=>{
        slider.scrollLeft += 200;
    })*/

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
        })
    });
    /*
    flechasDerechas.forEach(element => {
        element.addEventListener("click", ()=>{
            sliders.forEach(slider => {
                slider.scrollLeft += 200;
            })
        })
    });*/

    /*for(let i=0; i<flechasIzquierdas.length; i++){
        let flechaClickeada;
        flechasIzquierdas[i].addEventListener("click", ()=>{
            flechaClickeada = i;
        })
        sliders[flechaClickeada].scrollLeft -= 200;
    }

    for(let i=0; i<flechasDerechas.length; i++){
        let flechaClickeada;
        flechasDerechas[i].addEventListener("click", ()=>{
            flechaClickeada = i;
        })
        sliders[flechaClickeada].scrollLeft += 200;
    }*/


}