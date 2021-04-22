var btn_ver = document.getElementById("btn_ver").addEventListener("click", traerdatos);

var btn_menor = document.getElementById("btn_menor").addEventListener("click", datos_menor);

var btn_mayor = document.getElementById("btn_mayor").addEventListener("click", datos_mayor);

var btn_33 = document.getElementById("btn_33").addEventListener("click", datos_33);

var btn_nombre = document.getElementById("btn_nombre").addEventListener("click", buscar_nombre);

var btn_orden_nombre = document.getElementById("btn_orden_nombre").addEventListener("click", datos_nombre);

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
            let res = document.getElementById("res");
            res.innerHTML = '';
            for (let item of datos) {
                const distancia = item.distanciaTierra;
                for (i = 0; i < distancia.length; i++) {
                    if (distancia[i] == "9") {
                        if (distancia[i + 1] == "1") {
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
                }
            }

        }
    }
}

function buscar_nombre() {

    var nombre = document.getElementById("txt_name").value;
    nombre = nombre.toLocaleLowerCase();
    planetas = crearJson();
    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            let res = document.getElementById("res");
            res.innerHTML = '';
            for (let item of datos) {
                if (item.nombre === nombre) {
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
        }
    }
}

/*
for (i = 1; i < datos.length; i++) {
    for (j = 0; j < (datos.length - i); j++) {
        if (datos.distanciaSol[j] < datos.distanciaSol[j + 1]) {
            aux = datos.distanciaSol[j];
            datos.distanciaSol[j] = datos.distanciaSol[j + 1];
            datos.distanciaSol[j + 1] = aux;

            aux1 = nombre_planetas[j];
            nombre_planetas[j] = nombre_planetas[j + 1];
            nombre_planetas[j + 1] = aux1;

            aux2 = tamaño_planetas[j];
            tamaño_planetas[j] = tamaño_planetas[j + 1];
            tamaño_planetas[j + 1] = aux2;

            aux3 = distancia_tierra_planetas[j];
            distancia_tierra_planetas[j] = distancia_tierra_planetas[j + 1];
            distancia_tierra_planetas[j + 1] = aux3;
        }
    }
}

distancia_sol_planetas = new Array(13);
tamaño_planetas = new Array(13);
distancia_tierra_planetas = new Array(13);
nombre_planetas = new Array(13);

for (let i = 0; i < nombre_planetas.length; i++) {
    nombre_planetas[i] = prompt('Ingrese nombre del planeta:', '');
    tamaño_planetas[i] = prompt('Ingrese tamaño del planeta:', '');
    distancia_sol_planetas[i] = prompt('¿Cual es la distancia que tiene del sol?:', '');
    distancia_tierra_planetas[i] = prompt('¿Cual es la distancia que tiene de la tierra?:', '');
}

document.write('Mayor a menor ');

for (i = 1; i < nombre_planetas.length; i++) {
    for (j = 0; j < (nombre_planetas.length - i); j++) {
        if (distancia_sol_planetas[j] < distancia_sol_planetas[j + 1]) {
            aux = distancia_sol_planetas[j];
            distancia_sol_planetas[j] = distancia_sol_planetas[j + 1];
            distancia_sol_planetas[j + 1] = aux;

            aux1 = nombre_planetas[j];
            nombre_planetas[j] = nombre_planetas[j + 1];
            nombre_planetas[j + 1] = aux1;

            aux2 = tamaño_planetas[j];
            tamaño_planetas[j] = tamaño_planetas[j + 1];
            tamaño_planetas[j + 1] = aux2;

            aux3 = distancia_tierra_planetas[j];
            distancia_tierra_planetas[j] = distancia_tierra_planetas[j + 1];
            distancia_tierra_planetas[j + 1] = aux3;
        }
    }
}
for (let i = 0; i < nombre_planetas.length; i++) {
    document.write(nombre_planetas[i], '', '-', '');
}
document.write('Menor a mayor ');

for (i = 1; i < nombre_planetas.length; i++) {
    for (j = 0; j < (nombre_planetas.length - i); j++) {
        if (distancia_sol_planetas[j] > distancia_sol_planetas[j + 1]) {
            aux = distancia_sol_planetas[j];
            distancia_sol_planetas[j] = distancia_sol_planetas[j + 1];
            distancia_sol_planetas[j + 1] = aux;

            aux1 = nombre_planetas[j];
            nombre_planetas[j] = nombre_planetas[j + 1];
            nombre_planetas[j + 1] = aux1;

            aux2 = tamaño_planetas[j];
            tamaño_planetas[j] = tamaño_planetas[j + 1];
            tamaño_planetas[j + 1] = aux2;

            aux3 = distancia_tierra_planetas[j];
            distancia_tierra_planetas[j] = distancia_tierra_planetas[j + 1];
            distancia_tierra_planetas[j + 1] = aux3;
        }
    }
}
for (let i = 0; i < nombre_planetas.length; i++) {
    document.write(nombre_planetas[i], '', '-', '');
}

for (let i = 0; i < nombre_planetas.length; i++) {
    bandera = distancia_tierra_planetas[i].includes('33');
    if (bandera === true) {
        document.write(nombre_planetas[i], '', 'tiene el número 33', '');
    }
}

for (let i = 0; i < nombre_planetas.length; i++) {
    if (distancia_tierra_planetas[i] === "pluton") {
        document.write(nombre_planetas[i], '', 'es el planeta seleccionado', '');
    }
}
*/