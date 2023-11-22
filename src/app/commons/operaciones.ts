
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