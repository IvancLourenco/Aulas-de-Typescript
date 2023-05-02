//let idades: number[] = [12,24,7];
let nomes: string[] = ["Ivan", "Kamila", "Fabiana"];

let idades :Array<number> = [12,24,7];

let obj: any = {x:0};

function imprimirCoordenadas ( pt: { x: number, y: number }){
    console.log("The coordinate' s x value is " + pt.x);
    console.log("The coordinate' s y value is " + pt.y);
}

imprimirCoordenadas( {x:8, y: 7} );