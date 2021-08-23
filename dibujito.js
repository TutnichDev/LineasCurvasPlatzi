/* TESTER: para saber si anda bien todo
alert("holooolo"); */

// Enlazo Canvas de Html a Javascript a traves del DOM (getElementById), y le doy contexto 2d
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var bor = document.getElementById("boton_borrar");
bor.addEventListener("click", borrar_lineas);

// Le doy capacidad de escuchar al evento "click" con addEventListener al boton de html
var boton = document.getElementById("boton_linea");
boton.addEventListener("click",rayasPorClick);

//Obtengo ancho de canvas a traves de atributo o propiedad width de variable "d"
var anchoCanvas = d.width;

// FUNCIONES:
function rayasPorClick()
{   
    var cant_lineas = document.getElementById("texto_cant_linea");
    var lineas =cant_lineas.value;
    lineas++
    var i = 0   
    dibujarLinea ("red", 0, 0 , 0, anchoCanvas);
    while(i<lineas)
    {
        dibujarLinea ("red", 0, (i+1)*anchoCanvas/lineas , (i+1)*anchoCanvas/lineas, anchoCanvas);
        i++
    }
}

function borrar_lineas()
{
    d.width= d.width;
}

/* Llamo a funcion mandala, que llama a funcion dibujarLinea
mandala(0,anchoCanvas,10); */

function mandala(l,objetivo,inc)
{
    while(l < objetivo)
    {
        dibujarLinea("red",0,l,l,objetivo);
        dibujarLinea("blue",l,0,objetivo,l);
        dibujarLinea("yellow",0,objetivo-l,l,0);
        dibujarLinea("green",objetivo,0+l,objetivo-l,objetivo);
        l = l+inc;
    }
}

function dibujarLinea (color, x_inicial , y_inicial, x_final, y_final) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.stroke();
    lienzo.closePath();
}

