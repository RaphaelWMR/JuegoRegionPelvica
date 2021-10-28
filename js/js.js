//Atributos
var musculos = [[ /*01*/
        "músculo glúteo medio",
                 /*02*/
        "Músculo gluteo superficial",
                 /*03*/
        "Porción craneal del músculo bíceps femoral",
                 /*04*/
        "Porción caudal del músculo bíceps femoral",
                 /*05*/
        "Músculo tensor de la fascia lata",
                 /*06*/
        "Músculo vasto externo",
                 /*07*/
        "Músculo semimembranoso",
                 /*08*/
        "Músculo semitendinoso",
                 /*09*/
        "Músculo gracilis",
                 /*10*/
        "Cabeza interna del músculo gastroenemio",
                 /*11*/
        "Cabeza externa del músculo gastroenemio",
                 /*12*/
        "Tendón común del calcáneo",
                 /*13*/
        "Tendón del músculo triceps sural",
                 /*14*/
        "Músculo poplíteo",
                 /*15*/
        "Músculo flexor largo de los dedos",
                 /*16*/
        "Músculo flexor largo del primer dedo",
                 /*17*/
        "Músculo extensor externo de los dedos",
                 /*18*/
        "Músculo peroneo largo",
                 /*19*/
        "Músculos peroneo anterior o tertius y extensor largo de los dedos",
                 /*20*/
        "Músculo flexor profundo de los dedos",
                 /*21*/
        "Músculo interóseo",
                 /*22*/
        "Músculo coecígeo"],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]];
var musculo;
var numeroMusculo;
var imagen = document.getElementById("gif-cow");
function aleatorio() {
    var num = Math.floor((Math.random() * (22 - 0)) + 0);
    return num;
}

function pregunta() {
    document.getElementById('tf').innerHTML = "";
    imagen.style.backgroundImage = "none";
    var indice = aleatorio();
    musculo = musculos[0][indice];
    numeroMusculo = musculos[1][indice];
    document.getElementById('pregunta-m').innerHTML = musculo;
}

function responder(num) {
    
    if (numeroMusculo != null) {
        if (num == numeroMusculo) {
            document.getElementById('tf').innerHTML = "¡Correcto!";
            document.getElementById('tf').style.color = "green";
            imagen.style.backgroundImage = "url('./img/t.gif')";
        } else {
            document.getElementById('tf').innerHTML = "Incorrecto";
            document.getElementById('tf').style.color = "red";;
            imagen.style.backgroundImage = "url('./img/f.gif')";
        }
    }

}
