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
    
    let btnJugar = document.getElementById("btnJugar");
    btnJugar.addEventListener("click", function(){
        //let canvas = document.getElementById("canvas");
        //canvas.classList.remove("ocultar");
        let divConfiguracionJuego = document.getElementById("divConfiguracionJuego");
        divConfiguracionJuego.classList.remove("ocultar");

        let divImagenJuego = document.getElementById("divImagenJuego");
        divImagenJuego.classList.remove("imagenJuego");
        divImagenJuego.classList.add("ocultar");

        let botones4enLinea = document.getElementById("botones4enLinea");
        botones4enLinea.classList.remove("botones4enLinea");
        botones4enLinea.classList.add("ocultar");

        let botonIniciarPartida = document.getElementById("btnIniciarPartida");
        botonIniciarPartida.addEventListener("click", function(){
            divConfiguracionJuego.classList.add("ocultar");
            let canvas = document.getElementById("canvas");
            canvas.classList.remove("ocultar");
        })
    })

    let boton4EnLinea = document.getElementById("boton4EnLinea");
    let boton5EnLinea = document.getElementById("boton5EnLinea");
    let boton6EnLinea = document.getElementById("boton6EnLinea");
    let boton7EnLinea = document.getElementById("boton7EnLinea");

    boton4EnLinea.addEventListener("click", function(){
        this.classList.add("agrandarBotonDimension");
        if(boton5EnLinea.classList.contains("agrandarBotonDimension")){
            boton5EnLinea.classList.remove("agrandarBotonDimension");
        }      
        if(boton6EnLinea.classList.contains("agrandarBotonDimension")){
            boton6EnLinea.classList.remove("agrandarBotonDimension");
        }
        if(boton7EnLinea.classList.contains("agrandarBotonDimension")){
            boton7EnLinea.classList.remove("agrandarBotonDimension");
        } 
    })

    boton5EnLinea.addEventListener("click", function(){
        this.classList.add("agrandarBotonDimension");
        if(boton4EnLinea.classList.contains("agrandarBotonDimension")){
            boton4EnLinea.classList.remove("agrandarBotonDimension");
        }      
        if(boton6EnLinea.classList.contains("agrandarBotonDimension")){
            boton6EnLinea.classList.remove("agrandarBotonDimension");
        }
        if(boton7EnLinea.classList.contains("agrandarBotonDimension")){
            boton7EnLinea.classList.remove("agrandarBotonDimension");
        } 
    })

    boton6EnLinea.addEventListener("click", function(){
        this.classList.add("agrandarBotonDimension");
        if(boton4EnLinea.classList.contains("agrandarBotonDimension")){
            boton4EnLinea.classList.remove("agrandarBotonDimension");
        }      
        if(boton5EnLinea.classList.contains("agrandarBotonDimension")){
            boton5EnLinea.classList.remove("agrandarBotonDimension");
        }
        if(boton7EnLinea.classList.contains("agrandarBotonDimension")){
            boton7EnLinea.classList.remove("agrandarBotonDimension");
        } 
    })

    boton7EnLinea.addEventListener("click", function(){
        this.classList.add("agrandarBotonDimension");
        if(boton4EnLinea.classList.contains("agrandarBotonDimension")){
            boton4EnLinea.classList.remove("agrandarBotonDimension");
        }      
        if(boton5EnLinea.classList.contains("agrandarBotonDimension")){
            boton5EnLinea.classList.remove("agrandarBotonDimension");
        }
        if(boton6EnLinea.classList.contains("agrandarBotonDimension")){
            boton6EnLinea.classList.remove("agrandarBotonDimension");
        } 
    })


    //Marcar ficha seleccionada
    let fichaBoca1 = document.getElementById("fichaBoca1");
    let fichaRiver1 = document.getElementById("fichaRiver1");
    let fichaMessi1 = document.getElementById("fichaMessi1");
    let fichaMaradona1 = document.getElementById("fichaMaradona1");

    fichaBoca1.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaRiver1.classList.contains("agrandarFicha")){
            fichaRiver1.classList.remove("agrandarFicha");
        }
        if(fichaMessi1.classList.contains("agrandarFicha")){
            fichaMessi1.classList.remove("agrandarFicha");
        }
        if(fichaMaradona1.classList.contains("agrandarFicha")){
            fichaMaradona1.classList.remove("agrandarFicha");
        }
    });

    fichaRiver1.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca1.classList.contains("agrandarFicha")){
            fichaBoca1.classList.remove("agrandarFicha");
        }
        if(fichaMessi1.classList.contains("agrandarFicha")){
            fichaMessi1.classList.remove("agrandarFicha");
        }
        if(fichaMaradona1.classList.contains("agrandarFicha")){
            fichaMaradona1.classList.remove("agrandarFicha");
        }
    });

    fichaMessi1.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca1.classList.contains("agrandarFicha")){
            fichaBoca1.classList.remove("agrandarFicha");
        }
        if(fichaRiver1.classList.contains("agrandarFicha")){
            fichaRiver1.classList.remove("agrandarFicha");
        }
        if(fichaMaradona1.classList.contains("agrandarFicha")){
            fichaMaradona1.classList.remove("agrandarFicha");
        }
    });

    fichaMaradona1.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca1.classList.contains("agrandarFicha")){
            fichaBocar1.classList.remove("agrandarFicha");
        }
        if(fichaRiver1.classList.contains("agrandarFicha")){
            fichaRiver1.classList.remove("agrandarFicha");
        }
        if(fichaMessi1.classList.contains("agrandarFicha")){
            fichaMessi1.classList.remove("agrandarFicha");
        }
    });

    //Marcar ficha seleccionada
    let fichaBoca2 = document.getElementById("fichaBoca2");
    let fichaRiver2 = document.getElementById("fichaRiver2");
    let fichaMessi2 = document.getElementById("fichaMessi2");
    let fichaMaradona2 = document.getElementById("fichaMaradona2");

    fichaBoca2.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaRiver2.classList.contains("agrandarFicha")){
            fichaRiver2.classList.remove("agrandarFicha");
        }
        if(fichaMessi2.classList.contains("agrandarFicha")){
            fichaMessi2.classList.remove("agrandarFicha");
        }
        if(fichaMaradona2.classList.contains("agrandarFicha")){
            fichaMaradona2.classList.remove("agrandarFicha");
        }
    });

    fichaRiver2.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca2.classList.contains("agrandarFicha")){
            fichaBoca2.classList.remove("agrandarFicha");
        }
        if(fichaMessi2.classList.contains("agrandarFicha")){
            fichaMessi2.classList.remove("agrandarFicha");
        }
        if(fichaMaradona2.classList.contains("agrandarFicha")){
            fichaMaradona2.classList.remove("agrandarFicha");
        }
    });

    fichaMessi2.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca2.classList.contains("agrandarFicha")){
            fichaBoca2.classList.remove("agrandarFicha");
        }
        if(fichaRiver2.classList.contains("agrandarFicha")){
            fichaRiver2.classList.remove("agrandarFicha");
        }
        if(fichaMaradona2.classList.contains("agrandarFicha")){
            fichaMaradona2.classList.remove("agrandarFicha");
        }
    });

    fichaMaradona2.addEventListener("click", function(){
        this.classList.add("agrandarFicha");
        if(fichaBoca2.classList.contains("agrandarFicha")){
            fichaBocar2.classList.remove("agrandarFicha");
        }
        if(fichaRiver2.classList.contains("agrandarFicha")){
            fichaRiver2.classList.remove("agrandarFicha");
        }
        if(fichaMessi2.classList.contains("agrandarFicha")){
            fichaMessi2.classList.remove("agrandarFicha");
        }
    });
}