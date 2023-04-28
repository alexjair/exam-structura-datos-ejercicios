const contenedor = [1, 8, 6, 2, 5, 4, 8, 3, 7]

funEncontrarIndexMaximos = function(contenedor){
    const valorMasAlto= Math.max(...contenedor)
    //console.log(valorMasAlto) 
    let indexMaximos = []

    for (i = 0; i < contenedor.length; i++) {
        console.log(`${contenedor[i]} --> ${i}`);
        if(contenedor[i] === valorMasAlto){
            indexMaximos.push(i);
        }
    } 
    //console.log(indexMaximos)
    return indexMaximos
}

funContainerWithMostWater = function(contenedor){
    let ArrayIndexMaximos = funEncontrarIndexMaximos(contenedor)   
    console.log(ArrayIndexMaximos)

    let ArrayAreas = []
    
    for (i = 0; i < ArrayIndexMaximos.length; i++) {
        
        console.log(`Index ----> ${ArrayIndexMaximos[i]}`);

        for (j = 0; j < contenedor.length; j++) {
            let area = contenedor[j]*(Math.abs(j-ArrayIndexMaximos[i]))
        
            console.log(`A > ${area}`);
            ArrayAreas.push(area);
        }
    } 

    return(Math.max(...ArrayAreas))
}

console.log(funContainerWithMostWater(contenedor));

//const valorMasAltoIndex = contenedor.findIndex((v) => v === valorMasAlto)
 
//console.log(`El valor mas alto es ${valorMasAlto} y se encuentra en la posición ${valorMasAltoIndex}`)

