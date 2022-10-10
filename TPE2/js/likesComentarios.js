document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"

    let botonesLike = document.querySelectorAll(".like");
    let botonesDislike = document.querySelectorAll(".dislike");

    botonesLike.forEach(element => {
        element.addEventListener("click", ()=>{
            const idClickeado = element.getAttribute("id");
                if(botonesLike[idClickeado-1].classList.contains("noClickeado") == true){
                    botonesLike[idClickeado-1].src="imagenes/like-clicked.png";
                    botonesLike[idClickeado-1].classList.remove("noClickeado");
                }else if(botonesLike[idClickeado-1].classList.contains("noClickeado") == false){
                    botonesLike[idClickeado-1].src="imagenes/like.png";
                    botonesLike[idClickeado-1].classList.add("noClickeado");
                }
        })
    });

    botonesDislike.forEach(element => {
        element.addEventListener("click", ()=>{
            const idClickeado = element.getAttribute("id");
                if(botonesDislike[idClickeado-1].classList.contains("noClickeado") == true){
                    botonesDislike[idClickeado-1].src="imagenes/dislike-clicked.png";
                    botonesDislike[idClickeado-1].classList.remove("noClickeado");
                }else if(botonesDislike[idClickeado-1].classList.contains("noClickeado") == false){
                    botonesDislike[idClickeado-1].src="imagenes/dislike.png";
                    botonesDislike[idClickeado-1].classList.add("noClickeado");
                }
        })
    });
}