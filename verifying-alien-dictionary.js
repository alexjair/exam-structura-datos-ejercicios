const palabras = ["habito", "hacer", "lectura", "sonreir"];
const orden = "hlabcdfgijkmnopqrstuvwxyz";


function validarOrdenLetras(orden, letra_PA, letra_PB) {
  const index_pa = orden.indexOf(letra_PA);
  const index_pb = orden.indexOf(letra_PB);
  if (index_pa < index_pb) return 'ordenado';
  if (index_pa == index_pb) return 'igual';
  if (index_pa > index_pb) return 'desordenado';
}

function isAlienSorted_v2(palabras, orden) {
  let i;
  for (i = 0; i < palabras.length-1; i++) {
    const palabra_pA = palabras[i];
    const palabra_pb = palabras[i + 1];

    //Recorrer las palabras
    let j
    for (j = 0; j < palabra_pA.length; j++) {
      let result = validarOrdenLetras(orden, palabra_pA[j], palabra_pb[j])
      if (result == 'ordenado') j = palabra_pA.length;
      if (result == 'desordenado') return false;
    }
  }
  return true;
}

console.log(isAlienSorted_v2(palabras, orden))


/* Solucionde la profesora tierna*/
/*

var isAlienSorted = function (palabras, orden) {
	// Crear mapa del diccionario alienigena
	mapa_diccionario = new Map();
	for (let i = 0; i < orden.length; i++) {
		mapa_diccionario[orden[i]] = i;
	}

	// Revisar el orden de las palabras
	for (let i = 1; i < palabras.length; i++) { // T = 0(n)   S = 0(m)
		if (comparar(palabras[i - 1], palabras[i]) === false) {
			return false;
		}
	}
};

// O(longitud de la palabra mÃ¡s larga)
var comparar = function (palabra1, palabra2) {
	const longitud = Math.min(palabras1.length, palabras2.length);
	for (let i = 0; i < longitud; i++) {
		if (mapa_diccionario[palabra1[i]] < mapa_diccionario[palabra2[i]]) {
			return true;
		}
		if (mapa_diccionario[palabra1[i]] > mapa_diccionario[palabra2[i]]) {
			return false;
		}
	}
	return palabra1.length <= palabra2.length;
};

co nsole.log(isAlienSorted(palabras, orden))
*/