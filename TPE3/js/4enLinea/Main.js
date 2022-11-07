document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    let dimension = 4;
    let tiempoJuego = 120;
    let fichasJ1 = [];
    let fichasJ2 = [];
    let ultimaFichaClickeada = null;
    let mouseApretado = false;
    let turno = 1;
    let fichasUbicadas = [];
    let imagenJ1 = "";
    let imagenJ2 = "";
    let huboGanador = false;
    let tablero = new Tablero(ctx, 200, 50, 600, 450, canvas.width, canvas.height);
    let tiempoOriginal = tiempoJuego;

    //Cambiar dimension
    let boton4EnLinea = document.getElementById("boton4EnLinea");
    boton4EnLinea.addEventListener("click", function(){
        dimension = 4;
    });
    let boton5EnLinea = document.getElementById("boton5EnLinea");
    boton5EnLinea.addEventListener("click", function(){
        dimension = 5;
    });
    let boton6EnLinea = document.getElementById("boton6EnLinea");
    boton6EnLinea.addEventListener("click", function(){
        dimension = 6;
    });
    let boton7EnLinea = document.getElementById("boton7EnLinea");
    boton7EnLinea.addEventListener("click", function(){
        dimension = 7;
    });

    //Cambiar imagen ficha1
    let fichaBoca1 = document.getElementById("fichaBoca1");
    fichaBoca1.addEventListener("click", function(){
        imagenJ1="boca1";
    });
    let fichaRiver1 = document.getElementById("fichaRiver1");
    fichaRiver1.addEventListener("click", function(){
        imagenJ1="river1";
    });
    let fichaMessi1 = document.getElementById("fichaMessi1");
    fichaMessi1.addEventListener("click", function(){
        console.log("click en messi");
        imagenJ1="messi1";
    });
    let fichaMaradona1 = document.getElementById("fichaMaradona1");
    fichaMaradona1.addEventListener("click", function(){
        imagenJ1="maradona1";
    });

    //Cambiar imagen ficha2
    let fichaBoca2 = document.getElementById("fichaBoca2");
    fichaBoca2.addEventListener("click", function(){
        imagenJ2="boca2";
    });
    let fichaRiver2 = document.getElementById("fichaRiver2");
    fichaRiver2.addEventListener("click", function(){
        imagenJ2="river2";
    });
    let fichaMessi2 = document.getElementById("fichaMessi2");
    fichaMessi2.addEventListener("click", function(){
        imagenJ2="messi2";
    });
    let fichaMaradona2 = document.getElementById("fichaMaradona2");
    fichaMaradona2.addEventListener("click", function(){
        console.log("click en maradona");
        imagenJ2="maradona2";
    });

    let botonIniciarPartida = document.getElementById("btnIniciarPartida")
    botonIniciarPartida.addEventListener("click", function(){ //Inicializo el juego
        tablero.llenarCeldasSoltarFichas(dimension);
        tablero.llenarMatrizCeldas(dimension);
        tablero.setHuboGanador(false);
        dibujarBotonReiniciar();
        agregarFichas();
        dibujarFichas();
        if(dimension == 5){
            tiempoJuego = 150;
            tiempoOriginal = tiempoJuego;
        }else if(dimension == 6){
            tiempoJuego = 180;
            tiempoOriginal = tiempoJuego;
        }else if(dimension == 7){
            tiempoJuego = 210;
            tiempoOriginal = tiempoJuego;
        }
        const tiempoOriginal_ = tiempoJuego;
        if(huboGanador==false){
            setInterval(function(){
                tiempoJuego--;
                dibujarTiempoJuego();
                if(tiempoJuego==0){
                    reiniciarJuego();
                    tiempoJuego=tiempoOriginal_;
                }
                if(huboGanador==true){
                    tiempoJuego=tiempoOriginal_;
                }

            }, 1000);
        }
    });

    window.onload = function(){
    }
    
    function dibujarTiempoJuego(){ //Dibujo el tiempo restante de la partida
        if(huboGanador==false){
            limpiarCanvas();
            tablero.llenarCeldasSoltarFichas(dimension);
            tablero.llenarMatrizCeldas(dimension);
            dibujarBotonReiniciar();
            //agregarFichas();
            dibujarFichas();
            //tiempoJuego--;
            let texto = tiempoJuego + " restantes";
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(texto, (1200/2)-100, 578);
        }
        dibujarBotonReiniciar();
    }

    function dibujarBotonReiniciar(){ //Dibujo el boton reiniciar
        ctx.fillStyle = "#E22F2F";
        ctx.fillRect((1200/2)+60, 555, 80, 30);

        let txt = "Reiniciar";
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(txt, (1200/2)+61, 578);
    }

    function reiniciarJuego(){ //Reinicio el juego, se llama cuando se hace click en el boton o cuando acaba el tiempo
        tablero.vaciarMatriz(dimension);
        fichasJ1.splice(0, fichasJ1.length);
        fichasJ2.splice(0, fichasJ2.length);
        fichasUbicadas.splice(0, fichasUbicadas.length);
        turno = 1;
        agregarFichas();
        dibujarFichas();
        dibujarBotonReiniciar();
        tablero.llenarCeldasSoltarFichas(dimension);
        tablero.llenarMatrizCeldas(dimension);
        tablero.setHuboGanador(false);
        tiempoJuego = tiempoOriginal;
        huboGanador=false;
    }

    function mostrarGanador(){ //Muestro que jugador gano la partida
        if(tablero.getHuboGanador()==true){
            limpiarCanvas();
            let txt = "El ganador es el jugador "+ ultimaFichaClickeada.getIdJugador();
            ctx.font = "50px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(txt, (300), 550/2);
            huboGanador=true;
            dibujarBotonReiniciar();
        }
    }
    function limpiarCanvas(){ //Vacio el canvas
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function agregarFicha(x, y, imagenFicha){ //Agrego una ficha al arreglo de fichas de uno de los jugadores
        if((imagenFicha == "boca1") || (imagenFicha == "river1") || (imagenFicha == "messi1") || (imagenFicha == "maradona1")){
            let fichaJ1 = new Ficha(ctx, x, y, 20, imagenJ1, 1);
            fichasJ1.push(fichaJ1);
        }else if((imagenFicha == "boca2") || (imagenFicha == "river2") || (imagenFicha == "messi2") || (imagenFicha == "maradona2")){
            let fichaJ2 = new Ficha(ctx, x, y, 20, imagenJ2, 2);
            fichasJ2.push(fichaJ2);
        }
    }

    function agregarFichas(){ //Agrego la misma cantidad de fichas para los jugadores, con distinta imagen
        let _x=50;
        let _y=100;
        for(let i=0; i<8; i++){
            for(let j=0; j<5; j++){
                agregarFicha(_x, _y, imagenJ1);
                _x=_x+50;
            }
            _x=50;
            _y=_y+50;
        }

        let __x= canvas.width - 50;
        let __y=100;
        for(let i=0; i<8; i++){
            for(let j=0; j<5; j++){
                agregarFicha(__x, __y, imagenJ2);
                __x=__x-50;
            }
            __x=canvas.width - 50;
            __y=__y+50;
        }
    }

    function dibujarFichas(){ //Dibujo las fichas de los jugadores en el canvas
        limpiarCanvas();
        if(turno==1){
            let txt = "JUGADOR 1";
            ctx.font = "30px Arial";
            ctx.lineWidth = 20;
            ctx.fillStyle = "black";
            ctx.fillText(txt, 60, 50);
            for(let i=0; i<fichasJ1.length; i++){
                fichasJ1[i].dibujar();
            }
        }else if(turno ==2){
            txt = "JUGADOR 2";
            ctx.font = "30px Arial";
            ctx.lineWidth = 20;
            ctx.fillStyle = "black";
            ctx.fillText(txt, 1200-240, 50);
            for(let j=0; j<fichasJ2.length; j++){
                fichasJ2[j].dibujar();
            }
        }

        for(let d=0; d<fichasUbicadas.length; d++){
            fichasUbicadas[d].dibujar();
        }

        tablero.llenarMatrizCeldas(dimension);
    }

    function onMouseDown(e){ //aprieto el mouse
        mouseApretado = true;
        let fichaClickeada = encontrarFichaClickeada(e.offsetX, e.offsetY);
        if(fichaClickeada!=null){
            if(fichaClickeada.getEstaUbicada()==false){
                ultimaFichaClickeada = fichaClickeada;
            }else{
                mouseApretado = false;
            }
        }
        if(fichaClickeada.getEstaUbicada()==false){
            dibujarFichas();
            dibujarBotonReiniciar();
            mostrarGanador()
        }else{
            mouseApretado = false;
        }
    }

    function onMouseMove(e){ //muevo el mouse
        if(mouseApretado == true && ultimaFichaClickeada!=null){
            ultimaFichaClickeada.cambiarPosicion(e.offsetX, e.offsetY);
            dibujarFichas();
            dibujarBotonReiniciar();
            mostrarGanador()
            dibujarTiempoJuego();
        }
        dibujarBotonReiniciar();
        dibujarFichas();
        dibujarBotonReiniciar();
        mostrarGanador()
        dibujarTiempoJuego();
    }

    function onMouseUp(){ //suelto el mouse
        mouseApretado = false;
        let posicionValida = true;
        
        if(ultimaFichaClickeada!=null){
            fichasUbicadas.push(ultimaFichaClickeada);
            if(dimension == 4){                        
                if(ultimaFichaClickeada.getPosX()<375 || ultimaFichaClickeada.getPosX()>canvas.width - 375 || ultimaFichaClickeada.getPosY()>100){    
                    ultimaFichaClickeada.cambiarPosicion(ultimaFichaClickeada.getPosXOriginal(), ultimaFichaClickeada.getPosYOriginal());
                    posicionValida=false;
                    if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 2){
                        turno=2;
                    }
                    if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 2){
                        turno=2;
                    }
                    dibujarFichas();    
                }                 
            }else if(dimension == 5){
                if(ultimaFichaClickeada.getPosX()<375-((450/7)/2) || ultimaFichaClickeada.getPosX()>canvas.width - 375+((450/7)/2) || ultimaFichaClickeada.getPosY()>100-((350/6)/2)){      
                        ultimaFichaClickeada.cambiarPosicion(ultimaFichaClickeada.getPosXOriginal(), ultimaFichaClickeada.getPosYOriginal());
                        posicionValida=false;
                        if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 1){
                            turno=1;
                        }else if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 2){
                            turno=2;
                        }
                        if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 1){
                            turno=1;
                        }else if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 2){
                            turno=2;
                        }
                        dibujarFichas();    
                }            
            }else if(dimension == 6){
                if(ultimaFichaClickeada.getPosX()<375-(450/7) || ultimaFichaClickeada.getPosX()>canvas.width - 375+(450/7) || ultimaFichaClickeada.getPosY()>100-(350/6)){      
                    ultimaFichaClickeada.cambiarPosicion(ultimaFichaClickeada.getPosXOriginal(), ultimaFichaClickeada.getPosYOriginal());
                    posicionValida=false;
                    if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 2){
                        turno=2;
                    }
                    if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 2){
                        turno=2;
                    }
                    dibujarFichas();    
                }            
            }else if(dimension == 7){
                if(ultimaFichaClickeada.getPosX()<375-(450/7+((450/7)/2)) || ultimaFichaClickeada.getPosX()>canvas.width - 375+(450/7+((450/7)/2)) || ultimaFichaClickeada.getPosY()>100-((350/6)+(350/6)/2)){      
                    ultimaFichaClickeada.cambiarPosicion(ultimaFichaClickeada.getPosXOriginal(), ultimaFichaClickeada.getPosYOriginal());
                    posicionValida=false;
                    if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==false && turno == 2){
                        turno=2;
                    }
                    if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 1){
                        turno=1;
                    }else if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 2){
                        turno=2;
                    }
                    dibujarFichas();    
                }            
            }
        }
        tablero.ubicarFicha(dimension, ultimaFichaClickeada, posicionValida);
        tablero.verificarHorizontal(dimension, ultimaFichaClickeada);
        tablero.verificarVertical(dimension, ultimaFichaClickeada);
        tablero.verificarDiagonalDerecha(dimension, ultimaFichaClickeada);
        tablero.verificarDiagonalIzquierda(dimension, ultimaFichaClickeada);
        console.log(tablero.getHuboGanador());
        if(tablero.getHuboGanador()==true){
            let txt = "El ganador es el jugador "+ ultimaFichaClickeada.getIdJugador();
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(txt, (1200/2), 500);
        }
        if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 1){
            turno = 2;
        }else if(ultimaFichaClickeada.getEstaUbicada()==true && turno == 2){
            turno = 1;
        }
    }

    function encontrarFichaClickeada(x, y){ //Retorno la ficha clickeada
        let fichaClickeada = null;
        for(let i=0; i<fichasJ1.length; i++){
            const ficha = fichasJ1[i];
            if(ficha.mouseDentro(x, y)){
                fichaClickeada = ficha;
            }
        }
        for(let j=0; j<fichasJ2.length; j++){
            const ficha_ = fichasJ2[j];
            if(ficha_.mouseDentro(x, y)){
                fichaClickeada = ficha_;
            }
        }
        console.log("La ficha clickeada esta ubicada? " + fichaClickeada.getEstaUbicada());
        return fichaClickeada;
    }

    canvas.addEventListener("mousedown", onMouseDown, "false");
    canvas.addEventListener("mouseup", onMouseUp, "false");
    canvas.addEventListener("mousemove", onMouseMove, "false");
    canvas.addEventListener("click", function(e){ //Evento para el boton reiniciar
        //console.log(e);
        if((e.offsetX > (1200/2)+60) && (e.offsetX < ((1200/2)+60)+80), (e.offsetY > 555) && (e.offsetY < 555+30)){ //(1200/2)-40, 500, 80, 30
            reiniciarJuego();
        }((1200/2)+60, 555, 80, 30);
    });
})