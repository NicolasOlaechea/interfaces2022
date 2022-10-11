document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    "use strict"

    let btnFavorito = document.querySelector("#favorito");
    btnFavorito.addEventListener("click", function(){
        if(this.classList.contains("seleccionado")==false){
            this.classList.add("seleccionado");
        }else if(this.classList.contains("seleccionado")==true){
            this.classList.remove("seleccionado");
        } 
    });

    
    let contenedorCompartir = document.querySelector("#contenedorCompartir");
    
    let compartir = document.querySelector("#compartir");
    compartir.addEventListener("click", function(){
        if(contenedorCompartir.classList.contains("ocultar")){
            contenedorCompartir.classList.remove("ocultar");
            contenedorCompartir.classList.add("contenedorCompartir");
            compartir.src="imagenes/cruz.png";
        }else if(contenedorCompartir.classList.contains("contenedorCompartir")){
            contenedorCompartir.classList.remove("contenedorCompartir");
            contenedorCompartir.classList.add("ocultar");
            compartir.src="imagenes/compartir.png";
        }
        
    });
    
}