
class Tablero{
    constructor(ctx, x, y, width, height, widtCanvas, heightcanvas){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.widtCanvas = widtCanvas;
        this.heightcanvas = heightcanvas;
        this.matrizCeldas = []; //Con esta matriz controlo si hubo un ganador
        this.celdasSoltarFichas = []; //Con esta matriz controlo en que celda va la ficha que suelta el jugador
        this.celda = new Image();
        this.celda.style.opacity = "0.2";
        this.celda.src = "js/4enLinea/celda2.png";
        this.huboGanador = false;
    }

    setHuboGanador(valor){
        this.huboGanador = valor;
    }

    getHuboGanador(){
        return this.huboGanador;
    }

    vaciarMatriz(dimension){ //Vacio la matriz "matrizCeldas" segun la dimension del juego
        let filas = 6;
        let columnas = 7;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        this.matrizCeldas.splice(0,filas);
    }

    mostrarGanador(ficha, x, y){ //Muestro quien fue el ganador de la partida
        let txt = "Gano el jugador: "+ ficha.getIdJugador();
        this.ctx.font = "20px Arial";
        this.ctx.fillText(txt, x, y);
    }

    verificarHorizontal(dimension, ficha){ //Verifico si un jugador hizo "dimension" en linea horizontal
        let filas = 6;
        let columnas = 7;
        let gano = false;
        let idJugador = ficha.getIdJugador();
        let contador = 0;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        for(let i=0; i<filas; i++){
            for(let j=0; j<columnas; j++){
                if((this.matrizCeldas[i][j] != null)&&gano == false){
                    if(this.matrizCeldas[i][j].getIdJugador() == idJugador){
                        contador = contador+1;
                        if(contador == dimension){
                            gano = true;
                            this.huboGanador = true;
                        }
                    }else{
                        contador = 0;
                    }
                }
            }
            contador = 0;
        }
        if(gano == true){
            this.mostrarGanador(ficha, 10, 10);
            console.log("Gano el jugador "+ ficha.getIdJugador());
        }
    }

    verificarVertical(dimension, ficha){ //Verifico si un jugador hizo "dimension" en linea vertical
        let filas = 6;
        let columnas = 7;
        let gano = false;
        let idJugador = ficha.getIdJugador();
        let contador = 0;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        for(let i=0; i<columnas; i++){
            for(let j=0; j<filas; j++){
                if((this.matrizCeldas[j][i] != null)&&gano == false){
                    if(this.matrizCeldas[j][i].getIdJugador() == idJugador){
                        contador = contador+1;
                        if(contador == dimension){
                            gano = true;
                            this.huboGanador = true;
                        }
                    }else{
                        contador = 0;
                    }
                }
            }
            contador = 0;
        }
        if(gano == true){
            console.log("Gano el jugador "+ ficha.getIdJugador());
        }
    }

    verificarDiagonalDerecha(dimension, ficha){ //Verifico si un jugador hizo "dimension" en linea diagonal derecha
        let filas = 6;
        let columnas = 7;
        let gano = false;
        let idJugador = ficha.getIdJugador();
        let contador = 0;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        for(let i=0; i<filas; i++){
            let _i = i;
            for(let j=0; j<columnas-1; j++){
                if(_i >=0){
                    if((this.matrizCeldas[_i][j] != null)&&gano == false){
                        if(this.matrizCeldas[_i][j].getIdJugador() == idJugador){
                            contador = contador+1;
                            if(contador == dimension){
                                gano = true;
                                this.huboGanador = true;
                            }
                        }else{
                            contador = 0;
                        }
                    }
                }
                _i = _i-1;
            }
            contador = 0;
        }
        for(let i=0; i<filas; i++){
            let _i = i;
            for(let j=columnas-1; j>0; j--){
                if(_i < filas){
                    if((this.matrizCeldas[_i][j] != null)&&gano == false){
                        if(this.matrizCeldas[_i][j].getIdJugador() == idJugador){
                            contador = contador+1;
                            if(contador == dimension){
                                gano = true;
                                this.huboGanador = true;
                            }
                        }else{
                            contador = 0;
                        }
                    }
                }
                _i = _i+1;
            }
            contador = 0;
        }
        if(gano == true){
            console.log("Gano el jugador "+ ficha.getIdJugador());
        }
    }

    verificarDiagonalIzquierda(dimension, ficha){ //Verifico si un jugador hizo "dimension" en linea diagonal izquierda
        let filas = 6;
        let columnas = 7;
        let gano = false;
        let idJugador = ficha.getIdJugador();
        let contador = 0;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        for(let i=0; i<filas; i++){
            let _i = i;
            for(let j=columnas-1; j>=0; j--){
                if(_i>=0){
                    if((this.matrizCeldas[_i][j] != null)&&gano == false){
                        if(this.matrizCeldas[_i][j].getIdJugador() == idJugador){
                            contador = contador+1;
                            if(contador == dimension){
                                gano = true;
                                this.huboGanador = true;
                            }
                        }else{
                            contador = 0;
                        }
                    }
                }
                _i = _i-1;
            }
            contador = 0;
        }
        for(let i=0; i<filas; i++){
            let _i = i;
            for(let j=0; j<columnas; j++){
                if(_i<filas){
                    if((this.matrizCeldas[_i][j] != null)&&gano == false){
                        if(this.matrizCeldas[_i][j].getIdJugador() == idJugador){
                            contador = contador+1;
                            if(contador == dimension){
                                gano = true;
                                this.huboGanador = true;
                            }
                        }else{
                            contador = 0;
                        }
                    }
                }
                _i = _i+1;
            }
            contador = 0;
        }
        if(gano == true){
            console.log("Gano el jugador "+ ficha.getIdJugador());
        }
    }

    inicializarMatrizCeldas(dimension){ //Inicializo la matriz "matrizCeldas" con valores null
        let filas = 6;
        let columnas = 7;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }

        for(let i=0; i<filas; i++){
            let fila = [];
            for(let j=0; j<columnas; j++){
                fila.push(null);
            }
            this.matrizCeldas.push(fila);
        }
        console.log(this.matrizCeldas);
    }

    ubicarFicha(dimension, ficha, posicionValida){ //Ubico una ficha en el tablero
        let filas = 6;
        let columnas = 7;
        if(dimension == 5){
            filas = 7;
            columnas = 8;
        }else if(dimension == 6){
            filas = 8;
            columnas = 9;
        }else if(dimension == 7){
            filas = 9;
            columnas = 10;
        }
        let columnaCorrespondiente = 0;
        let filaCorrespondiente = 0;
        if(posicionValida==true){
            if(dimension == 4){
                let x_tablero = 375;
                let y_tablero = 100;
                let widthCelda = 450/7;
                let heightCelda = 100;
                let x = x_tablero;
                for(let i=1; i<8; i++){
                    if(i<=7){
                        if((ficha.getPosX()>x_tablero && ficha.getPosX()<x_tablero+widthCelda) && ficha.getPosY()<y_tablero){
                            columnaCorrespondiente = i;
                        }
                        x_tablero = x_tablero+widthCelda;
                    }
                }
                this.inicializarMatrizCeldas(dimension);
                let encontrado = false;
                for(let i=filas-1; i>=0; i--){
                    if(encontrado == false){
                        if(this.matrizCeldas[i][columnaCorrespondiente-1]==null){
                            filaCorrespondiente = i+1;
                            encontrado=true;
                        }
                    }
                }
                this.matrizCeldas[filaCorrespondiente-1][columnaCorrespondiente-1] = ficha;
                ficha.cambiarPosicion(375+((450/7)*columnaCorrespondiente-((450/7)/2)), 100+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setPosXOriginal(375+((450/7)*columnaCorrespondiente-((450/7)/2)));
                ficha.setPosYOriginal(100+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setEstaUbicada(true);
                console.log("La ficha se ubico? "+ ficha.getEstaUbicada());
            }else if(dimension == 5){
                let widthCelda = 450/7;
                let heightCelda = 350/6;
                let x_tablero = 375-(widthCelda/2);
                let y_tablero = 100-(heightCelda/2);
                let x = x_tablero;
                for(let i=1; i<9; i++){
                    if(i<=8){
                        if((ficha.getPosX()>x_tablero && ficha.getPosX()<x_tablero+widthCelda) && ficha.getPosY()<y_tablero){
                            columnaCorrespondiente = i;
                        }
                        x_tablero = x_tablero+widthCelda;
                    }
                }
                this.inicializarMatrizCeldas(dimension);
                let encontrado = false;
                for(let i=filas-1; i>=0; i--){
                    if(encontrado == false){
                        if(this.matrizCeldas[i][columnaCorrespondiente-1]==null){
                            filaCorrespondiente = i+1;
                            console.log("COLUMNA: "+columnaCorrespondiente);
                            console.log("FILA: "+filaCorrespondiente);
                            encontrado=true;
                        }
                    }
                }
                this.matrizCeldas[filaCorrespondiente-1][columnaCorrespondiente-1] = ficha;
                ficha.cambiarPosicion((375-(widthCelda/2))+((450/7)*columnaCorrespondiente-((450/7)/2)), (100-(heightCelda/2))+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setPosXOriginal(375+((450/7)*columnaCorrespondiente-((450/7)/2)));
                ficha.setPosYOriginal((100-(heightCelda/2))+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setEstaUbicada(true);
            }else if(dimension == 6){
                let widthCelda = 450/7;
                let heightCelda = 350/6;
                let x_tablero = 375-(widthCelda);
                let y_tablero = 100-(heightCelda);
                let x = x_tablero;
                for(let i=1; i<10; i++){
                    if(i<=9){
                        if((ficha.getPosX()>x_tablero && ficha.getPosX()<x_tablero+widthCelda) && ficha.getPosY()<y_tablero){
                            columnaCorrespondiente = i;
                        }
                        x_tablero = x_tablero+widthCelda;
                    }
                }
                this.inicializarMatrizCeldas(dimension);
                let encontrado = false;
                for(let i=filas-1; i>=0; i--){
                    if(encontrado == false){
                        if(this.matrizCeldas[i][columnaCorrespondiente-1]==null){
                            filaCorrespondiente = i+1;
                            console.log("COLUMNA: "+columnaCorrespondiente);
                            console.log("FILA: "+filaCorrespondiente);
                            encontrado=true;
                        }
                    }
                }
                this.matrizCeldas[filaCorrespondiente-1][columnaCorrespondiente-1] = ficha;
                ficha.cambiarPosicion((375-widthCelda)+((450/7)*columnaCorrespondiente-((450/7)/2)), (100-heightCelda)+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setPosXOriginal((375-widthCelda)+((450/7)*columnaCorrespondiente-((450/7)/2)));
                ficha.setPosYOriginal((100-heightCelda)+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setEstaUbicada(true);
            }else if(dimension == 7){
                let widthCelda = 450/7;
                let heightCelda = 350/6;
                let x_tablero = 375-(widthCelda+(widthCelda/2));
                let y_tablero = 100-(heightCelda+(heightCelda/2));
                let x = x_tablero;
                for(let i=1; i<11; i++){
                    if(i<=10){
                        if((ficha.getPosX()>x_tablero && ficha.getPosX()<x_tablero+widthCelda) && ficha.getPosY()<y_tablero){
                            columnaCorrespondiente = i;
                        }
                        x_tablero = x_tablero+widthCelda;
                    }
                }
                this.inicializarMatrizCeldas(dimension);
                let encontrado = false;
                for(let i=filas-1; i>=0; i--){
                    if(encontrado == false){
                        if(this.matrizCeldas[i][columnaCorrespondiente-1]==null){
                            filaCorrespondiente = i+1;
                            console.log("COLUMNA: "+columnaCorrespondiente);
                            console.log("FILA: "+filaCorrespondiente);
                            encontrado=true;
                        }
                    }
                }
                this.matrizCeldas[filaCorrespondiente-1][columnaCorrespondiente-1] = ficha;
                ficha.cambiarPosicion((375-(widthCelda+(widthCelda/2)))+((450/7)*columnaCorrespondiente-((450/7)/2)), (100-(heightCelda+(heightCelda/2)))+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setPosXOriginal((375-(widthCelda+(widthCelda/2)))+((450/7)*columnaCorrespondiente-((450/7)/2)));
                ficha.setPosYOriginal((100-(heightCelda+(heightCelda/2)))+(((350/6)*filaCorrespondiente)-((350/6)/2)));
                ficha.setEstaUbicada(true);
            }      
        }
    }

    llenarCeldasSoltarFichas(dimension){ //Dibujo las celdas que van arriba del tablero, para soltar las fichas
        let widthCelda = 0;
        let heightCelda = 0;

        if(dimension == 4){
            widthCelda = 450/7;
            heightCelda = 100;
            let x = 375;
            let y = 0;
            for(let j=0; j<7; j++){
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                this.ctx.fillRect(x, y, widthCelda, heightCelda);
                x = x + widthCelda;
            }
        }else if(dimension == 5){
            widthCelda = 450/7;
            heightCelda = 100-(heightCelda/2);
            let x = 375-(widthCelda/2);
            let y = 0;
            for(let j=0; j<8; j++){
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                this.ctx.fillRect(x, y, widthCelda, heightCelda);
                x = x + widthCelda;
            }
        }else if(dimension == 6){
            widthCelda = 450/7;
            heightCelda = 100-heightCelda;
            let x = 375-widthCelda;
            let y = 0;
            for(let j=0; j<9; j++){
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                this.ctx.fillRect(x, y, widthCelda, heightCelda);
                x = x + widthCelda;
            }
        }else if(dimension == 7){
            widthCelda = 450/7;
            heightCelda = 100-heightCelda-(heightCelda/2);
            let x = 375-widthCelda-(widthCelda/2);
            let y = 0;
            for(let j=0; j<10; j++){
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                this.ctx.fillRect(x, y, widthCelda, heightCelda);
                x = x + widthCelda;
            }
        }
    }

    llenarMatrizCeldas(dimension){ //Lleno el tablero con celdas
        this.llenarCeldasSoltarFichas(dimension);
        let widthCelda = 0;
        let heightCelda = 0;
        
        if(dimension == 4){
            widthCelda = 450/7;
            heightCelda = 350/6;
            let x = 375;
            let y = 100;
            for(let i=0; i<6; i++){
                for(let j=0; j<7; j++){
                    this.ctx.drawImage(this.celda, x, y, widthCelda, heightCelda);
                    x = x + widthCelda;
                }
                x = 375;
                y = y + heightCelda;
            }
        }else if(dimension == 5){
            widthCelda = 450/7;
            heightCelda = 350/6;
            let x = 375-(widthCelda/2);
            let y = 100-(heightCelda/2);
            for(let i=0; i<7; i++){
                for(let j=0; j<8; j++){
                    this.ctx.drawImage(this.celda, x, y, widthCelda, heightCelda);
                    x = x + widthCelda;
                }
                x = 375-(widthCelda/2);
                y = y + heightCelda;
            }
        }else if(dimension == 6){
            widthCelda = 450/7;
            heightCelda = 350/6;
            let x = 375-widthCelda;
            let y = 100-heightCelda;
            for(let i=0; i<8; i++){
                for(let j=0; j<9; j++){
                    this.ctx.drawImage(this.celda, x, y, widthCelda, heightCelda);
                    x = x + widthCelda;
                }
                x = 375-widthCelda;
                y = y + heightCelda;
            }
        }else if(dimension == 7){
            widthCelda = 450/7;
            heightCelda = 350/6;
            let x = 375-widthCelda-(widthCelda/2);
            let y = 100-heightCelda-(heightCelda/2);
            for(let i=0; i<9; i++){
                for(let j=0; j<10; j++){
                    this.ctx.drawImage(this.celda, x, y, widthCelda, heightCelda);
                    x = x + widthCelda;
                }
                x = 375-widthCelda-(widthCelda/2);
                y = y + heightCelda;
            }
        }

    }

    dibujar(){ //Dibujar el tablero
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    dibujarFondo(ctx){
        //ctx.fillStyle = "black";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        let fondo = new Image();
        fondo.src = "js/4enLinea/fondoCanvas.png";
        fondo.onload = function(){
            fondo.style.opacity = "0.2";
            ctx.filter = 'blur(6px)';
            ctx.drawImage(fondo, this.x, this.y, this.width, this.height);
            ctx.filter = "none";
            /*fondo.style.zIndex=1;
            tablero.llenarCeldasSoltarFichas(dimension);
            tablero.llenarMatrizCeldas(dimension);
            tablero.setHuboGanador(false);
            dibujarBotonReiniciar();
            dibujarFichas();
            dibujarTiempoJuego()*/
          }
    }
}