let contenedor = [0,1,0, 2,1,0, 1,3,2, 1,2,1]

function funTotalSinAgua(contenedor){
    let totalSinAgua = 0;
    let i
    for(i = 0; i < contenedor.length; i++) {
        totalSinAgua = totalSinAgua + contenedor[i];
    }
    //console.log(totalSinAgua);
    return totalSinAgua
}

function funRetoTrappingRainWater(contenedor){

    const valorMasAlto= Math.max(...contenedor)
    const indexMxValor = contenedor.indexOf(valorMasAlto);

    let totalConAgua_derecha = 0
    let totalConAgua_izquerda = 0

    let max_derecha = 0
    let max_izquerda = 0

    let i
    for (i = 0; i <= indexMxValor; i++) {
        if(max_izquerda < contenedor[i]){
            max_izquerda = contenedor[i]
        }
        console.log(`MAxIzq > ${max_izquerda}`);
        totalConAgua_izquerda = totalConAgua_izquerda + max_izquerda
    }
    console.log(totalConAgua_izquerda);    
    
    let j
    for (j = contenedor.length - 1; indexMxValor < j; j--) {
        if(max_derecha < contenedor[j]){
            max_derecha = contenedor[j]
        }
        console.log(`MAxDer > ${max_derecha}`);
        totalConAgua_derecha = totalConAgua_derecha + max_derecha
    }
    console.log(totalConAgua_derecha);    
    return (totalConAgua_izquerda + totalConAgua_derecha - funTotalSinAgua(contenedor))
}

console.log(funRetoTrappingRainWater(contenedor))