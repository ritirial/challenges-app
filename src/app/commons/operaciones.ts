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


// Funciones de challenge 5
export function calculateSimpson(x0: number, x1: number, num_seg: number, mError_number: number, fun: any, dof: number) {
	let multiplier = 1;
	let iter1 = 0;
	let iter2 = 0;
	let curError = mError_number + 1;

	do {
		iter1 = simpson(x0, x1, num_seg, multiplier, fun, dof);

		multiplier = multiplier * 2;

		iter2 = simpson(x0, x1, num_seg, multiplier, fun, dof);

		curError = Math.abs(iter1 - iter2);
	} while (curError > mError_number);

	return iter2;
}

export function simpson(x0: number, x1: number, num_seg: number, multiplier: number, fun: any, dof: number) {
	var total_seg = num_seg * multiplier;
	var w = (x1 - x0) / total_seg;
	var sumatoria = 0;

	for (var i = 0; i <= total_seg; i++) {
		const result = dof > 0 ? t(x0 + (w * i), dof) : fun(x0 + (w * i));
		if (i == 0 || i == total_seg) {
			sumatoria += result;
		} else if (i % 2 != 0) { //impar
			sumatoria += result * 4;
		} else { //par
			sumatoria += result * 2;
		}
	}
	var total = (w / 3) * (sumatoria);
	return total;
}

export function fx2(x: number) {
	return x * x;
}

export function f2x(x: number) {
	return 2.0 * x;
}

export function f1_x(x: number) {
	return 1.0 / x;
}

function t(x: number, dof: number) {
	var part1 = gamma((dof + 1) / 2.0) / (Math.pow((dof * Math.PI), 1 / 2.0) * gamma(dof / 2.0));
	var part2 = Math.pow(1 + (x * x / dof), -(dof + 1) / 2.0);
	return part1 * part2;
}

function gamma(value: number): number {
	if (value == 1) {
		return 1.0;
	} else if (value == 1 / 2.0) {
		return Math.sqrt(Math.PI);
	} else {
		return (value - 1) * gamma(value - 1);
	}
}