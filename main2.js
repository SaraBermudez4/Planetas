//var btn_ver = document.getElementById("btn_ver").addEventListener("click", verDatos);
var btn_menor = document.getElementById("btn_menor").addEventListener("click", datos_menor);
var btn_mayor = document.getElementById("btn_mayor").addEventListener("click", datos_mayor);
var btn_33 = document.getElementById("btn_33").addEventListener("click", datos_33);
var btn_nombre = document.getElementById("btn_nombre").addEventListener("click", buscar_nombre);
var btn_orden_nombre = document.getElementById("btn_orden_nombre").addEventListener("click", datos_nombre);
var planetas = []

const planeta1 = {
    nombre: "mercurio",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg/105px-Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg",
    distanciaSol: 57909175,
    distanciaTierra: "91690000",
    superficie: "75000000",
    masa: "3,302×1023"
}

const planeta2 = {
    nombre: "venus",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/105px-Venus-real_color.jpg",
    distanciaSol: 108208930,
    distanciaTierra: "42000000",
    superficie: "460000000",
    masa: "4,8690×1024"
}
const planeta3 = {
    nombre: "elbicho",
    imagen: "https://yt3.ggpht.com/ytc/AAUvwngft30EJd_sVg4UzHUM6zHL8kT0uUVdPL1rZz1m=s900-c-k-c0x00ffffff-no-rj",
    distanciaSol: 3000000000,
    distanciaTierra: "31000000",
    superficie: "187",
    masa: "84"
}
const planeta4 = {
    nombre: "tierra",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/As08-16-2593.jpg/105px-As08-16-2593.jpg",
    distanciaSol: 149597870,
    distanciaTierra: "0",
    superficie: "510000000",
    masa: "5,9742×1024"
}
const planeta5 = {
    nombre: "marte",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/105px-OSIRIS_Mars_true_color.jpg",
    distanciaSol: 227936640,
    distanciaTierra: "69000000",
    superficie: "140,000,000",
    masa: "6,4191×1023"
}
const planeta6 = {
    nombre: "jupiter",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/953px-Jupiter_by_Cassini-Huygens.jpg",
    distanciaSol: 778412010,
    distanciaTierra: "591000000",
    superficie: "64,000,000,000",
    masa: "1,8987×1027"
}
const planeta7 = {
    nombre: "saturno",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/150px-Saturn_during_Equinox.jpg",
    distanciaSol: 1426725400,
    distanciaTierra: "1200000000",
    superficie: "43,800,000,000",
    masa: "5,6851×1026"
}
const planeta8 = {
    nombre: "urano",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Uranus.jpg/105px-Uranus.jpg",
    distanciaSol: 2870972200,
    distanciaTierra: "2543164000",
    superficie: "8,130,000,000",
    masa: "8,6849×1025"
}
const planeta9 = {
    nombre: "neptuno",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/105px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    distanciaSol: 4498252900,
    distanciaTierra: "4500000000",
    superficie: "7,700,000,000",
    masa: "1,0244×1026"
}
const planeta10 = {
    nombre: "pluton",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/250px-Pluto_in_True_Color_-_High-Res.jpg",
    distanciaSol: 5906400000,
    distanciaTierra: "6000000000",
    superficie: "17,000,000",
    masa: "1,25×1022"
}
const planeta11 = {
    nombre: "haumea",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Haumea%2C_Celestia.jpg/280px-Haumea%2C_Celestia.jpg",
    distanciaSol: 52360000000,
    distanciaTierra: "5108320000000",
    superficie: "1,952,160",
    masa: "4,2x1021"
}
const planeta12 = {
    nombre: "makemake",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg/280px-Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg",
    distanciaSol: 6850240000000,
    distanciaTierra: "5610000000",
    superficie: "1,450,000",
    masa: "4x1021"
}
const planeta13 = {
    nombre: "eris",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eris_and_dysnomia2.jpg/280px-Eris_and_dysnomia2.jpg",
    distanciaSol: 52360000000000,
    distanciaTierra: "14316000000",
    superficie: "2,372,000",
    masa: "3,75x1022"
}
const planeta14 = {
    nombre: "ceres",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg/245px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg",
    distanciaSol: 371446000000,
    distanciaTierra: "46000000000",
    superficie: "2,850,000",
    masa: "9,43×1020"
}
planetas.push(planeta1)
planetas.push(planeta2)
planetas.push(planeta3)
planetas.push(planeta4)
planetas.push(planeta5)
planetas.push(planeta6)
planetas.push(planeta7)
planetas.push(planeta8)
planetas.push(planeta9)
planetas.push(planeta10)
planetas.push(planeta11)
planetas.push(planeta12)
planetas.push(planeta13)
planetas.push(planeta14)
//console.log(planetas)

verDatos(planetas);
function verDatos(d) {
    let res = document.getElementById("res");
    res.innerHTML = '';
    for (let item of d) {
        res.innerHTML += `
        <tr>
        <td>${item.nombre}</td>
        <td><img src=${item.imagen}></td>
        <td>${item.distanciaSol}</td>
        <td>${item.distanciaTierra}</td>
        <td>${item.superficie}</td>
        <td>${item.masa}</td>
    </tr>
    `
    }
}
function datos_nombre() {
    const ordenNombre = planetas;
    ordenNombre.sort((a, b) => (a.nombre < b.nombre) ? -1 : 1);
    verDatos(ordenNombre);
}

function datos_menor() {
    const planetaMenor = planetas;
    planetaMenor.sort((a, b) => a.distanciaSol - b.distanciaSol)
    verDatos(planetaMenor);
}
function datos_mayor() {
    const planetaMayor = planetas;
    planetaMayor.sort((a, b) => a.distanciaSol - b.distanciaSol)
    planetaMayor.reverse();
    verDatos(planetaMayor);
}

function buscar_nombre() {
    var txt_name = document.getElementById("txt_name").value;
    txt_name = txt_name.toLocaleLowerCase();
    var name = planetas.find(({ nombre }) => nombre.toLowerCase() == txt_name)
    res.innerHTML = '';
    res.innerHTML += `
    <tr>
        <td>${name.nombre}</td>
        <td><img src=${name.imagen}></td>
        <td>${name.distanciaSol}</td>
        <td>${name.distanciaTierra}</td>
        <td>${name.superficie}</td>
        <td>${name.masa}</td>
    </tr>
    `
}
function datos_33() {
    var distancia1 = planetas.filter(({ distanciaTierra }) => distanciaTierra.includes(91))
    verDatos(distancia1)
}




//For in
for (const key in planetas) {
    console.log(planetas[key]);
}

//For of
for (const planeta of planetas) {
    console.log(planeta);
}

//Funcion anonima
const it = (planeta) => console.log("El planeta es " + planeta.nombre)
//For each
planetas.forEach(it)

planetas.forEach(function (planeta) {
    console.log("La superficie es " + planeta.superficie)
})

//Funcion anonima dentro de un arrow dentro de un foreach
planetas.forEach((planeta) => console.log("La masa es" + planeta.masa))

//.map
let resultado = planetas.map((planeta, index) => "La superficie del planeta " + planeta.nombre + " es " + planeta.superficie[index])
console.log(resultado)

//.filter para todos los valores
let distanciaSol_filter = planetas.filter((t) => t.distanciaSol % 2 == 0)
console.log(distanciaSol_filter)

//.find para valor especifico
let distanciaTierra_find = planetas.find((valor) => valor.distanciaTierra % 2 == 0)
console.log(distanciaTierra_find)

//find index - si no lo encuentra -1, si lo encuentra muestra el index
let nombre_findindex = planetas.findIndex((nombre) => nombre.nombre.toLocaleLowerCase() == "tierra")
console.log(nombre_findindex)

//includes
let resultado_includes = planetas.includes("tierra")
console.log(resultado_includes)