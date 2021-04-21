//document.querySelector("#boton").addEventListener('click', traerdatos());
var btn_ver = document.getElementById("btn_ver");
btn_ver.addEventListener("click", traerdatos);

var btn_menor = document.getElementById("btn_menor");
btn_menor.addEventListener("click", datos_menor);

var btn_mayor = document.getElementById("btn_mayor");
btn_mayor.addEventListener("click", datos_mayor);

function traerdatos() {
    const planetas = new XMLHttpRequest();
    planetas.open('GET', 'data.json', true);
    planetas.send();

    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
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
    }
}


function ordenarAsc(p_array_json, p_key) {
    /*p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    });*/
    p_array_json.sort(function(a, b) {
        var textA = a.distanciaSol;
        var textB = b.distanciaSol;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(p_array_json)
}

function ordenarDesc(p_array_json, p_key) {
    ordenarAsc(p_array_json, p_key); p_array_json.reverse();
}

function datos_mayor() {

    const planetas = new XMLHttpRequest();
    planetas.open('GET', 'data.json', true);
    planetas.send();

    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            console.log(datos);
            ordenarAsc(datos, 'distanciaSol');
            for (let item of datos) {
                console.log(item);
            }
        }
    }
    traerdatos();
}

function datos_menor() {

    const planetas = new XMLHttpRequest();
    planetas.open('GET', 'data.json', true);
    planetas.send();

    planetas.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const datos = JSON.parse(this.responseText);
            console.log(datos);
            ordenarDesc(datos, 'distanciaSol');
            for (let item of datos) {
                console.log(item);
            }
        }
    }
    traerdatos();
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

function datos_menor() {

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
    traerdatos();
}

distancia_sol_planetas = new Array(13);
tamaño_planetas = new Array(13);
distancia_tierra_planetas = new Array(13);
nombre_planetas = new Array(13);

//let planetas = [
//    [],[],[],[]
//];

//planetas[0][0][0][0];

for (let i = 0; i < nombre_planetas.length; i++) {
    nombre_planetas[i]=prompt('Ingrese nombre del planeta:','');
    tamaño_planetas[i]=prompt('Ingrese tamaño del planeta:','');
    distancia_sol_planetas[i]=prompt('¿Cual es la distancia que tiene del sol?:','');
    distancia_tierra_planetas[i]=prompt('¿Cual es la distancia que tiene de la tierra?:','');
}

document.write('Mayor a menor ');

//nombre_planetas.forEach(item => {
//    item=prompt('Ingrese nombre del planeta:','');
//});

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
    document.write(nombre_planetas[i],'','-','');
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
    document.write(nombre_planetas[i],'','-','');
}

for (let i = 0; i < nombre_planetas.length; i++) {
    bandera = distancia_tierra_planetas[i].includes('33');
    if(bandera===true){
        document.write(nombre_planetas[i],'','tiene el número 33','');
    }
}

for (let i = 0; i < nombre_planetas.length; i++) {
    if(distancia_tierra_planetas[i]==="pluton"){
        document.write(nombre_planetas[i],'','es el planeta seleccionado','');
    }
}
*/
