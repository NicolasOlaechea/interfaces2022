
class Ficha{
    constructor(ctx, x, y, radio, imagenFicha, idJugador){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.posXOriginal = this.x;
        this.posYOriginal = this.y;
        this.ficha = new Image();
        this.ficha.style.zIndex = 100;
        this.ficha.src = "js/4enLinea/"+imagenFicha+".png";
        this.idJugador = idJugador;
        this.estaUbicada = false;
    }

    setEstaUbicada(valor){
        this.estaUbicada = valor;
    }

    getEstaUbicada(){
        return this.estaUbicada;
    }

    getIdJugador(){
        return this.idJugador;
    }
    
    getSRCCelda(){
        return this.ficha.src;
    }

    setImagenFicha(imagen, ctx){
        this.ficha.src = "js/4enLinea/"+imagen+".png";
    }

    dibujar(){ //Dibujo la ficha, un circulo de fondo y la imagen
        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radio, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
 
        let contexto = this.ctx;
        let x=this.x;
        let y=this.y;
        //ficha.onload = function() {
            contexto.drawImage(this.ficha, x-40/2, y-40/2, 40, 40);
    }

    estaEnElTablero(dimension){ //Controlo si esta en el tablero
        if(dimension == 4){
            if((this.x>375 && this.x<375+(450/7)*7)){
                return true;
            }else{
                return false;
            }
        }
    }

    cambiarPosicion(x, y){
        this.x = x;
        this.y = y;
    }

    getPosicion(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        }
    }

    getPosX(){
        return this.x;
    }
    
    getPosY(){
        return this.y;
    }

    getPosXOriginal(){
        return this.posXOriginal;
    }
    
    getPosYOriginal(){
        return this.posYOriginal;
    }

    setPosXOriginal(valor){
        this.posXOriginal = valor;
    }
    
    setPosYOriginal(valor){
        this.posYOriginal = valor;
    }

    mouseDentro(x, y){
        let _x = this.x - x;
        let _y = this.y - y;

        return Math.sqrt(_x * _x + _y * _y) < this.radio;

        /* CUADRADO */
        //(x < this.x || x > this.x + width || y - this.y || y > this.y + height);
    }
}