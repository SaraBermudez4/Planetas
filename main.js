distancia_sol_planetas = new Array(13);
tamaño_planetas = new Array(13);
distancia_tierra_planetas = new Array(13);
nombre_planetas = new Array(13);

/*let planetas = [
    [],[],[],[]   
];*/

//planetas[0][0][0][0];

for (let i = 0; i < nombre_planetas.length; i++) {
    nombre_planetas[i]=prompt('Ingrese nombre del planeta:','');
    tamaño_planetas[i]=prompt('Ingrese tamaño del planeta:','');
    distancia_sol_planetas[i]=prompt('¿Cual es la distancia que tiene del sol?:','');
    distancia_tierra_planetas[i]=prompt('¿Cual es la distancia que tiene de la tierra?:','');
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
    if(distancia_tierra_planetas[i]==="33"){
        document.write(nombre_planetas[i],'','tiene el número 33','');
    }
}

for (let i = 0; i < nombre_planetas.length; i++) {
    if(distancia_tierra_planetas[i]==="pluton"){
        document.write(nombre_planetas[i],'','es el planeta seleccionado','');
    }
}