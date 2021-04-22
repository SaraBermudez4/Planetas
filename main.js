//var btn_ver = document.getElementById("btn_ver").addEventListener("click", traerdatos);
var btn_menor = document.getElementById("btn_menor").addEventListener("click", datos_menor);
var btn_mayor = document.getElementById("btn_mayor").addEventListener("click", datos_mayor);
var btn_33 = document.getElementById("btn_33").addEventListener("click", datos_33);
var btn_nombre = document.getElementById("btn_nombre").addEventListener("click", buscar_nombre);
var btn_orden_nombre = document.getElementById("btn_orden_nombre").addEventListener("click", datos_nombre);
crearJson()
traerdatos()

function crearJson() {
    const planetas = new XMLHttpRequest();
    planetas.open('GET', 'data.json', true);
    planetas.send();
    return planetas;
}

function verDatos(datos) {
    let res = document.getElementById("res");
    res.innerHTML = '';
    for (let item of datos) {
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

function traerdatos() {

    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            verDatos(datos);
        }
    }
}

function datos_nombre() {

    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            const ordenNombre = datos;
            ordenNombre.sort((a, b) => (a.nombre < b.nombre) ? -1 : 1);
            verDatos(ordenNombre);
        }
    }
}

function datos_mayor() {

    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            const planetaMayor = datos;
            planetaMayor.sort((a, b) => a.distanciaSol - b.distanciaSol)
            planetaMayor.reverse();
            verDatos(planetaMayor);
        }
    }
}

function datos_menor() {

    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            const planetaMenor = datos;
            planetaMenor.sort((a, b) => a.distanciaSol - b.distanciaSol)
            verDatos(planetaMenor);
        }
    }
}

function datos_33() {

    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            var distancia1 = datos.filter(({ distanciaTierra }) => distanciaTierra.includes(91))
            verDatos(distancia1)
        }
    }
}

function buscar_nombre() {

    var txt_name = document.getElementById("txt_name").value;
    txt_name = txt_name.toLocaleLowerCase();
    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            var name = datos.find(({ nombre }) => nombre.toLowerCase() == txt_name)
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
    }
}