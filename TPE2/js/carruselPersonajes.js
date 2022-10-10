document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"
    let flechasIzquierda = document.querySelector(".flechaIzquierda");
    let flechasDerecha = document.querySelector(".flechaDerecha");
    let slider = document.querySelector(".slider");

    flechasIzquierda.addEventListener("click", ()=>{
        slider.scrollLeft -=200;
    });


    flechasDerecha.addEventListener("click", ()=>{
        slider.scrollLeft +=200;
    });

    let imgsPersonaje = document.querySelectorAll(".imgPersonaje");
    imgsPersonaje.forEach(element => {
        element.addEventListener("mouseenter", ()=>{
            const idClickeado = element.getAttribute("id");

                    imgsPersonaje[idClickeado-1].src="imagenes/personajesCars/p"+idClickeado+".png";
                    imgsPersonaje[idClickeado-1].classList.add("estirar");

        })
    });

    imgsPersonaje.forEach(element => {
        element.addEventListener("mouseleave", ()=>{
            const idClickeado = element.getAttribute("id");
                imgsPersonaje[idClickeado-1].src="imagenes/personajesCars/auto"+idClickeado+".png";
                imgsPersonaje[idClickeado-1].classList.remove("estirar");
        })
    });
}