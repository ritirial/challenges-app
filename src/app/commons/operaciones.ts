//Funciones de Challenge 1
export function media(lista: number[]) {
    let sumatoria = 0;
    
    lista.forEach(num => sumatoria = sumatoria + num);
    
    const resultado = sumatoria / lista.length;
    return resultado;
}

export function stddev(lista: number[]) {
    const med = media(lista);
    let sumatoria = 0;

    lista.forEach(num => sumatoria = sumatoria + (Math.pow(num - med, 2)));
    
    const desv = Math.sqrt(sumatoria / (lista.length - 1));
    return desv;
}


//Funciones de challenge 3
export function sumX(lista: number[]) {
    var sumatoria = 0;
    lista.forEach(num => sumatoria = sumatoria + num);

    return sumatoria;
}

export function sumXX(lista: number[]) {
    var sumatoria = 0;
    lista.forEach(num => sumatoria = sumatoria + num * num);

    return sumatoria;
}

export function sumXY(listaX: number[], listaY: number[]) {
    var sumatoria = 0;
    var index = 0;
    listaX.forEach(numX => {
        sumatoria = sumatoria + numX * listaY[index];
        index++;
    });

    return sumatoria;
}

export function calculateB1(listaX: number[], listaY: number[]) {
    return (sumXY(listaX, listaY) - listaX.length * media(listaX) * media(listaY)) / (sumXX(listaX) - listaX.length * Math.pow(media(listaX), 2));
}

export function calculateB0(listaX: number[], listaY: number[]) {
    return (media(listaY) - calculateB1(listaX, listaY) * media(listaX));
}

export function calculateYk(listaX: number[], listaY: number[], Xk: number) {
    return (calculateB0(listaX, listaY) + calculateB1(listaX, listaY) * Xk);
}

export function calculateR(listaX: number[], listaY: number[]) {
    const dividendo = (listaX.length * sumXY(listaX, listaY) - sumX(listaX) * sumX(listaY));
    const divisor1 = (listaX.length * sumXX(listaX) - Math.pow(sumX(listaX), 2)) * (listaX.length * sumXX(listaY) - Math.pow(sumX(listaY), 2)); 
    const divisorRaiz = Math.sqrt(divisor1);

    return dividendo / divisorRaiz;
}

export function calculateRR(listaX: number[], listaY: number[]) {
    return Math.pow(calculateR(listaX, listaY), 2);
}