document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"
    let flechasIzquierda = document.querySelector(".flechaIzquierda");
    let flechasDerecha = document.querySelector(".flechaDerecha");

    let lista1 = document.getElementById("lista1");
    let lista2 = document.getElementById("lista2");
    
    lista2.style.display = "none";

    flechasIzquierda.addEventListener("click", function(){
        if(lista1.classList.contains("desplazarDerechaLista1")){
            lista1.animate([
                {transform: "translateX(0px)"},
                {transform: "translateX(100px)"},
                {transform: "translateX(0px)"}
            ],
            {
                duration: 800,
                timing: "ease-in-out"
            });
            lista2.animate([
                {transform: "translateX(0px)"},
                {transform: "translateX(100px)"},
                {transform: "translateX(0px)"}
            ],
            {
                duration: 800,
                timing: "ease-in-out"
            });
        }
        lista1.classList.remove("desplazarIzquierdaLista1");
        lista2.style.display = "none";
        lista2.classList.remove("desplazarIzquierdaLista2");

        lista1.classList.add("desplazarDerechaLista1");
        lista2.style.display = "flex";
        lista2.classList.add("desplazarDerechaLista2");
    });

    flechasDerecha.addEventListener("click", function(){
        if(lista1.classList.contains("desplazarIzquierdaLista1")){
            lista1.animate([
                {transform: "translateX(0px)"},
                {transform: "translateX(-100px)"},
                {transform: "translateX(0px)"}
            ],
            {
                duration: 800,
                timing: "ease-in-out"
            });
            lista2.animate([
                {transform: "translateX(0px)"},
                {transform: "translateX(-100px)"},
                {transform: "translateX(0px)"}
            ],
            {
                duration: 800,
                timing: "ease-in-out"
            });
        }
        lista1.classList.remove("desplazarDerechaLista1");
        lista2.classList.remove("desplazarDerechaLista2");

        lista1.classList.add("desplazarIzquierdaLista1");
        lista2.style.display = "flex";
        lista2.classList.add("desplazarIzquierdaLista2");
    });

    let imgsPersonaje = document.querySelectorAll(".imgPersonaje");
    let titulosCards = document.querySelectorAll(".titulo_personaje");
    //let subtitulosCards = document.querySelectorAll(".subtitulo_personaje");
    imgsPersonaje.forEach(element => {
        element.addEventListener("mouseenter", ()=>{
            const idClickeado = element.getAttribute("id");
                if(titulosCards[idClickeado-1].classList.contains("subirTitulos")){
                    titulosCards[idClickeado-1].classList.remove("subirTitulos");
                    //subtitulosCards[idClickeado-1].classList.remove("bajarSubtitulos");
                    titulosCards[idClickeado-1].classList.add("_titulo");
                    //subtitulosCards[idClickeado-1].classList.add("_subtitulo");
                }
                imgsPersonaje[idClickeado-1].src="imagenes/personajesCars/p"+idClickeado+".png";
                imgsPersonaje[idClickeado-1].classList.add("estirar");

                titulosCards[idClickeado-1].classList.add("ocultar");
                //subtitulosCards[idClickeado-1].classList.add("ocultar");

        })
    });

    imgsPersonaje.forEach(element => {
        element.addEventListener("mouseleave", ()=>{
            const idClickeado = element.getAttribute("id");
            if(titulosCards[idClickeado-1].classList.contains("subirTitulos")){
                titulosCards[idClickeado-1].classList.remove("subirTitulos");
                //subtitulosCards[idClickeado-1].classList.remove("bajarSubtitulos");
            }
                imgsPersonaje[idClickeado-1].classList.remove("estirar");
                titulosCards[idClickeado-1].classList.remove("ocultar");
                //subtitulosCards[idClickeado-1].classList.remove("ocultar");

                imgsPersonaje[idClickeado-1].src="imagenes/personajesCars/auto"+idClickeado+".png";
        })
    });
}