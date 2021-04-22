/*var btn_ver = document.getElementById("btn_ver").addEventListener("click", traerdatos);

var btn_menor = document.getElementById("btn_menor").addEventListener("click", datos_menor);

var btn_mayor = document.getElementById("btn_mayor").addEventListener("click", datos_mayor);

var btn_33 = document.getElementById("btn_33").addEventListener("click", datos_33);

var btn_nombre = document.getElementById("btn_nombre").addEventListener("click", buscar_nombre);

var btn_orden_nombre = document.getElementById("btn_orden_nombre").addEventListener("click", datos_nombre);


var nombre_planetas = new Array("Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urando", 
                                "Neptuno, Pluton","Haumea", "Makemake", "Eris", "Ceres");
var distanciasSol=[57909175,108208930,149597870,227936640,778412010,1426725400,2870972200,
                    4498252900,5906400000,52360000000,6850240000000,52360000000000,371446000000];
var distanciaTierra = ["91,690,000","42,000,000","510,000,000","140,000,000","591,000,000",
                        "1,200,000,000","2,543,164,000","4,500,000,000","6,000,000,000","5,108,320,000,000",
                        "5,610,000,000","14,316,000,000","46,000,000,000"];
var superficie = ["75,000,000","460,000,000","510,000,000","140,000,000","64,000,000,000","43,800,000,000",
                    "8,130,000,000","7,700,000,000","17,000,000","1,952,160","1,450,000","2,372,000","2,850,000"]

var masa = ["3,302×1023","4,8690×1024","5,9742×1024","6,4191×1023","1,8987×1027","5,6851×1026","8,6849×1025",
"1,0244×1026","1,25×1022","4,2x1021","4x1021","3,75x1022","9,43×1020"]

*/
const planetas = []
const planeta = {
    nombre : "tierra",
    tamano : 300000,
    distanciaSol : 10000000,
    distanciasTierra : 0
}
const planeta1 = {
    nombre : "marte",
    tamano : 100000,
    distanciaSol : 3232000,
    distanciasTierra : 1212121000
}
planetas.push(planeta)
planetas.push(planeta1)
console.log(planetas)

let resultado_find1 = planetas.find(({nombre, distanciaSol})=> nombre.toLowerCase() == "marte")
console.log(resultado_find1)

/*
//While
let i=0;
while(i<=2){
    console.log(nombre_planetas[i])
    i+=1;
}

//For
for(let j=0; j<=4; j++){
    console.log(distancias[j])
}

//For in
for (const key in nombre_planetas) {
    console.log(nombre_planetas[key]);
}

//For of
for (const planeta of nombre_planetas) {
    console.log(planeta);
}
*/

//Funcion iteradora
function iterador(planeta, index, arreglo){
    console.log("El planeta es" + planeta, index, arreglo)

}

//Funcion anonima
const it = (planeta) => console.log("El planeta es" + planeta + "xd")

//For each
nombre_planetas.forEach(it)

nombre_planetas.forEach(function (planeta){
    console.log("El planeta es" + planeta)

})

//Funcion anonima dentro de un arrow dentro de un foreach
nombre_planetas.forEach((planeta) => console.log("El planeta es" + planeta + "xd"))


/*
//Funcion arrow
let resta = () =>{
    console.log(9-3);
}
resta()

let sum = () => 4+3
console.log(sum())
*/
//.map
let resultado = nombre_planetas.map((planeta, index) => "El tamaño del planeta" + planeta + " es " + tamano[index]
)
console.log(resultado)

//.filter para todos los valores //numero 33
let tamano_filter = tamano.filter((t)=>{
    return t % 2 == 0
})
console.log(tamano_filter)

//.find para valor especifico //Nombre planeta
let resultado_find = tamano.find((valor)=> valor % 2 == 0)
console.log(resultado_find)

//find index - si no lo encuentra -1, si lo encuentra muestra el index
let resultado_findindex = nombre_planetas.findIndex((nombre)=> nombre.toLocaleLowerCase() == "tierra")
console.log(resultado_findindex)

//includes
let resultado_includes = nombre_planetas.includes("Tierra")
console.log(resultado_includes)