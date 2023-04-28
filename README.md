# Examenes-estructura-de-datos-ejercicios :3 
🔥 Estructura de datos y O(n) y Algoritmos Avanzados: Patrones de Arrays - Strings, excelentes ejercicios, conceptos, donde medimos la eficiencia de tus algoritmos programados en Javascript

---------

<!-- Copy and paste the converted output. -->

<!-- You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 20 -->


# 🎩 Estructura de datos y O(n)


## **¿Qué estructuras de datos y algoritmos aprender?**

Tipos:



* Patrones:
    * Dos apuntadores
    * Ventana deslizante
    * Apuntador rápido y lento
* Estructuras de datos: Nos sirven para almacenar y estructurar la información. Hay dos tipos, lineales y no lineales
    * **Arreglos**
    * **Strings**
    * **Listas encadenadas**
    * **Tablas de hash y conjuntos de hash**
    * **Pilas**
    * **Colas**
    * **Árboles**
    * **Grafos**
    * **Tries**
* Algoritmos:
    * Notación Big O
    * Algoritmos de ordenamiento
    * Algoritmos de búsqueda
    * DFS y BFS
    * Manipulación de bits
    * Recursión
    * Programación dinámica


# **Preparación para entrevistas**


## **¿Cómo es (comúnmente) una entrevista con problemas de programación?**

Puntos a tener en cuenta:


    Debes de preparar una introducción de antemano  de ti mismo o lo que quieres hacer en la empresa.


    Planea qué preguntas vas a hacer en la entrevista.


    El entrevistador te va a solucionar un problema, en pizarra o ordenador.



* Recomendación: Profundiza el tema o problema sobre tus dudas o aclaraciones con preguntas para que tengas más claro. 


## **Criterios de Evaluación Prueba Técnica y Entrevista:**


    Comunicación (si sabes pedir ayuda).


    Conocimiento técnico:



    * Conocimiento de estructuras de datos Algoritmos
    * Que tan bien las Aplicas
    * Que tan bien Programas
    * Que tan elegante es tu código
    * Cual es la calidad de solución

	Pruebas



* Como lo que programamos esta bien
* Lo planteamos en coherente y llega a la solución.

		Problema: no haces pruebas de escritorio, o solo finges correrlo.



* No muestras el paso a paso cómo corre el código.

	Capacidad de resolver los problemas



* Si haces las preguntas correctas.
* Si llegas de una solución sucia, no muy eficiente, a una mejor una solución  elegante, rápida, que no ocupe tanto espacio


## **5 pasos para resolver problemas de programación durante entrevistas**


### ¿Cómo resolver un problema de programación? 🚀💚

Antes de preguntarnos sobre cómo poder resolver el problema, que tecnología me gusta más.

Nuestra mejor forma de atacar retos de este tipo es, “**Entender lo que voy a hacer**” porque si lo sabemos podemos diseñar una mejor solución preguntando y escuchando a nuestros reclutadores. \



### **(1) Hacer preguntas 📑**

(Entendamos el “¿Qué vamos a hacer?”)



1. Hacer preguntas es la mejor forma de aclarar un problema
2. Hay problemas ambiguos y a veces solo conocemos la primera parte
    1. Preguntarnos siempre por cómo podemos interpretar las entradas y salidas nos otorga una mejor visión del problema
    2. Si vamos a asumir algo, hay que charlarlo con el equipo, explicando por qué podríamos partir de ello para que nuestra función opere.

Ejemplos:



* ¿Qué pasa si mi lista está vacía?
* ¿Podría haber elementos repetidos?
* ¿Qué pasa si el tipo de dato es erróneo?

.


### **(2) Identificar casos de uso 👽 (incluso los extraños)**



* ¿Qué pasó si salimos de un entorno controlado?
* Nuestro algoritmo solo con ciertas **entradas causa un error** y debemos identificarlo 🕵️.

. \
Ejemplo: \
Te imaginas trabajar sobre un sistema que maneje vacaciones de empleados en el cual solo se le permiten tomar 4 días de vacaciones de forma consecutiva y que justo en el mes de Febrero de ese año sea un año bisiesto. \
. \
Un empleado toma sus días a finales de mes, nuestro sistema programa su regreso a labores hasta el 1 de Marzo, todo pareciera okay hasta aquí. \
. \
Pero en realidad los días máximos permitidos no fueron 4, y se le otorgaron 5 😨 dando un día extra por este factor extraño. \
. \
¿Te imaginas otro caso que puedas suceder? Déjelo en este comentario para saber si te ha tocado un reto de este estilo y cómo lo resolviste 👇.

**En el momento de registrar las vacaciones se debe  verificar el año bisiesto(u otra contingencia como onomástico, feriado calendario…), para dar el cálculo correcto del rango de días vacacionales**.


### **(3) Diseñar la solución 🧩 (aún no implementarla)**

💡Diseñar es muy diferente a implementar

❌ **Jamás correr a programar de una sin haber entendido el problema**, esto es la receta perfecta para no pasar con excelencia nuestra entrevista.

. \
Al diseñar una solución como un software engineer nuestro trabajo es identificar los atributos de calidad que nos importa realmente para cada solución:



* Tiempo (Demora de proceso)
* Escalabilidad
* Velocidad 

. \
💡 La mejor forma de abordar los problemas es usar **fuerza bruta (1) **(una solución no tan óptima) pero que me empiece a encaminar al resultado, **una vez tengamos eso podemos refactorizar(2)** y **optimizar(3)** sobre los atributos que necesitamos.

. \
💡 Otra forma es **usando divide y conquista**, desglosa el problema grande en problemas más chicos, este nos ayuda a:



* Evitar la frustración de querer resolver un problema grande y complejo
* Nos enfoca en una pequeña pieza que si la solucionamos podemos integrarla con otras piezas para solucionar algo más grande.

. \
Nota: Los reclutadores son nuestros amigos y los mejores aliados 🤝



* Platica con ellos
* Haz preguntas
* Usa tus soft skills para combatir el problema
* Involúcralos en todo el proceso y usa ejemplos
* Piensa en voz alta y explica tus ideas sobre un posible camino a la solución.


### **(4) Implementar 🚀 (ahora sí)**

Ve la mejor forma en la que pueda pasar tu diseño a la implementación, añadiendo comunicación por bloques y **creando el código más limpio** posible.

. \
Es normal equivocarse, los nervios nos traicionan y hasta les comparto que una vez de los nervios recorrí un arreglo completo de números para sacar el máximo valor 🤣 en vez de usar la función **max()** ya existente y hacerlo en una línea.


### **(5) Probar el código** 🧪



* Las pruebas de escritorio son tus mejores aliadas (Paso a paso).
* Da ejemplos que recorren nuestro flujo de la solución y explicar cómo a lo largo del proceso nuestra entrada se va modificando hasta llegar a nuestra solución deseada.
* La **comunicación con ellos es constante**, es normal que salgan errores y que platiques con ellos qué opciones se te ocurren para solucionarlos, eso da muchos puntos 😁.
* A veces el tiempo no alcanza para solucionar todo los problemas, hay demostrar en cada código nuestra calidad.


## **Tips para entrevistas: preparación y ejecución**

**Preparación**

Plan de Estudios

20 minutos para resolver un problema. después de eso buscar la solución en google.

Recursos en internet, estudiar y prácticas.

Guías y patrones  en las entrevistas y problemas que te dan.

**Ejecución**

No empezar a programar de inmediato

No escribir un pseudocódigo, sino codigo real 

Escoger un lenguaje con el que se sientan cómodos.

Entender el problema, (Pregunta el entrevistador, Diagrama)

Escribir código elegante, limpio y bonito

Nombres de variables (no colocar, vCosita, vA, vB)

Prueben su código.


# **Mide la eficiencia de tus algoritmos**


## **Notación Big O**

**Constante - O(1)**

El tiempo de ejecución no depende del tamaño de entrada

Ejemplo: buscar el primer elemento

[1,2,5]

**Logarítmico - O(log(n))**

El tiempo de ejecución crece más lento que el tamaño de entrada

Ejemplo: búsqueda binaria

Buscar un elemento en una lista ordenada

Diccionario abierto por la mitad

Comprobar valor

Mira si está en la primera mitad o en la segunda mitad del diccionario

**Lineal - O(n)**

El tiempo de ejecución crece al mismo ritmo que la entrada.

Ejemplo: lista desordenada

**Log-Lineal - O(n log(n))**

Una operación de complejidad log(n) para cada valor de entrada

Ejemplo: clasificación eficiente

**Cuadrático - O(n^2)**

Para cada entrada se realiza una operación de complejidad O(n)

Ejemplo: comprobar todos los pares de valores de entrada (doble bucle for)

**Polinomio - O(n^3)…**

Cálculos con otros exponentes (n^4, n^5, etc.)

Ejemplo: Comprobar todos los tripletes de valores de entrada (Triple for loop)

**Exponencial - O(2^n)…**

La complejidad se multiplica (duplica, triplica, etc.) con cada valor de entrada adicional

Ejemplo: Algoritmos recursivos - Problema del viajante de comercio

**Peor-O(n!)**

Los tiempos de ejecución pueden ser peores que exponenciales

Ejemplos: permutaciones


![alt_text](images/image1.png "image_tooltip")



## Calculando la complejidad de algoritmos


![alt_text](images/image2.png "image_tooltip")



![alt_text](images/image3.png "image_tooltip")


Los números con constantes y para nada significativos, se consideran lineales. **O(n)**


![alt_text](images/image4.png "image_tooltip")


Las constantes se desprecian, y es lineal. **O(n)**


![alt_text](images/image5.png "image_tooltip")


Las interacciones se dividen en 2, como se muestra. “**O(nLog(n))**”


![alt_text](images/image6.png "image_tooltip")


**Es O(n Log(n))**


![alt_text](images/image7.png "image_tooltip")



![alt_text](images/image8.png "image_tooltip")


Cuando el ingreso de datos es muy grande, desprecia las demas complejidades y se queda con el mas grande. en este caso **O(n^2)**


![alt_text](images/image9.png "image_tooltip")



# **👣 Algoritmos Avanzados: Patrones de Arrays y Strings**


### **Arrays**

A continuación se describen las operaciones estándar de un array y sus correspondientes complejidades temporales.



* Acceso a un valor en un índice determinado: 0(1)
* Actualización de un valor en un índice dado: 0(1)
* Inserción de un valor
    * O(n) cuando se trata de un array dinámico
    * O(1) cuando se trata de una matriz estática
* Eliminación de un valor al principio: O(n)
* Eliminación de un valor en el medio: O(n)
* Eliminación de un valor al final: 0(1)
* Copiar el array: O(n)


### **Strings**


![alt_text](images/image10.jpg "image_tooltip")


La operación anterior tiene una complejidad de tiempo de O(n2), donde n es la longitud de la cadena. Porque cada adición de un carácter a nuevaString crea una cadena completamente nueva y es en sí misma una operación O(n). Por lo tanto, se realizan n operaciones O(n), entonces la complejidad es **O(n*n)**.


# **Dos Apuntadores**


## **Patrón de Dos Apuntadores**

Se usan dos apuntadores, uno al comienzo y otro al final. 



* Para búsqueda, para revisión e comparacion.

    
![alt_text](images/image11.png "image_tooltip")




# Verifying Alien Dictionary: análisis del problema


![alt_text](images/image12.png "image_tooltip")



## **Solución de Verifying Alien Dictionary**

const palabras = ["habito", "hacer", "lectura", "sonreir"];

const orden = "hlabcdfgijkmnopqrstuvwxyz";

**function validarOrdenLetras**(orden, letra_PA, letra_PB) {

  const index_pa = orden.indexOf(letra_PA);

  const index_pb = orden.indexOf(letra_PB);

  if (index_pa &lt; index_pb) return 'ordenado';

  if (index_pa == index_pb) return 'igual';

  if (index_pa > index_pb) return 'desordenado';

}

**function isAlienSorted_v2**(palabras, orden) {

  let i;

  for (i = 0; i &lt; palabras.length-1; i++) {

    const palabra_pA = palabras[i];

    const palabra_pb = palabras[i + 1];

    //Recorrer las palabras

    let j

    for (j = 0; j &lt; palabra_pA.length; j++) {

      let result = **validarOrdenLetras**(orden, palabra_pA[j], palabra_pb[j])

      if (result == 'ordenado') j = palabra_pA.length;

      if (result == 'desordenado') return false;

    }

  }

  return true;

}

**console**.log(**isAlienSorted_v2**(palabras, orden))


## **Programando Verifying Alien Dictionary con JavaScript**

var **isAlienSorted **= function (palabras, orden) {

    // Crear mapa del diccionario alienigena

    mapa_diccionario = new Map();

    for (let i = 0; i &lt; orden.length; i++) {

        mapa_diccionario[orden[i]] = i;

    }

    // Revisar el orden de las palabras

    for (let i = 1; i &lt; palabras.length; i++) { // T = 0(n)   S = 0(m)

        if (**comparar**(palabras[i - 1], palabras[i]) === false) {

            return false;

        }

    }

};

// O(longitud de la palabra mÃ¡s larga)

var **comparar **= function (palabra1, palabra2) {

    const longitud = Math.min(palabras1.length, palabras2.length);

    for (let i = 0; i &lt; longitud; i++) {

        if (mapa_diccionario[palabra1[i]] &lt; mapa_diccionario[palabra2[i]]) {

            return true;

        }

        if (mapa_diccionario[palabra1[i]] > mapa_diccionario[palabra2[i]]) {

            return false;

        }

    }

    return palabra1.length &lt;= palabra2.length;

};

**console**.log(isAlienSorted(palabras, orden))


# Merge Two Sorted Lists: análisis del problema


## 
![alt_text](images/image13.png "image_tooltip")



![alt_text](images/image14.png "image_tooltip")



![alt_text](images/image15.png "image_tooltip")



## **Solución de Merge Two Sorted Lists (JavaScript)**

let nums1 = [1,2,3,0,0,0,0]

let nums2 = [-4,2,5,6];

let n = 3

let m = 4

**funEliminarElementosSobrantesLista **= function(nums1,n,m){

    return nums1.slice(0, n)

}

**funMergeTwoSortedList **= function(nums1,nums2,n,m){

    let nums1_corregido =  **funEliminarElementosSobrantesLista**(nums1,n,m);

    //console.log(nums1_corregido)

    let nums3_resultado = nums1_corregido.concat(nums2);

    //console.log(nums3_resultado)

    nums3_resultado.sort(function(a,b){return a - b;});

    return nums3_resultado;

}

console.log(**funMergeTwoSortedList**(nums1,nums2,n,m))

nums1 = [1,2,3,0,0,0]

n = 3

nums2 = [2,5,6]

m = 3

console.log(**funMergeTwoSortedList**(nums1,nums2,n,m))

nums1 = [1,2,3,0,0,0,0]

n = 3

nums2 = [-4,2,3,9]

m = 4

console.log(**funMergeTwoSortedList**(nums1,nums2,n,m))


## **Programando Merge Two Sorted Lists con (Python)**

def **merge_lists**(**nums1**, n, **nums2**, m):

  p1 = n - 1

  p2 = m - 1

  p = len(**nums1**) - 1

  while 0 &lt;= p1 and 0 &lt;= p2:

    if **nums1**[p1] &lt; **nums2**[p2]:

      **nums1**[p] = **nums2**[p2]

      p2 -= 1

    else:

      **nums1**[p] = **nums1**[p1]

      p1 -= 1

    p -= 1

  # T = O( n + m ) = O( n )

  # S = O( 1 )

  if n != m:

    **nums1**[ : p2 + 1] = nums2[ : p2 + 1]

  **return nums1**


## **Container With Most Water: análisis del problema**


## 
![alt_text](images/image16.png "image_tooltip")



![alt_text](images/image17.png "image_tooltip")



![alt_text](images/image18.png "image_tooltip")



![alt_text](images/image19.png "image_tooltip")



## **Solución de Container With Most Water**

const contenedor = [1, 8, 6, 2, 5, 4, 8, 3, 7]

**funEncontrarIndexMaximos **= function(**contenedor**){

    const valorMasAlto= Math.max(...**contenedor**)

    //console.log(valorMasAlto)

    let indexMaximos = []

    for (i = 0; i &lt; **contenedor**.length; i++) {

        console.log(`${**contenedor**[i]} --> ${i}`);

        if(contenedor[i] === valorMasAlto){

            indexMaximos.push(i);

        }

    }

    //console.log(indexMaximos)

    return indexMaximos

}

**funContainerWithMostWater **= function(**contenedor**){

    let ArrayIndexMaximos = **funEncontrarIndexMaximos**(**contenedor**)  

    console.log(ArrayIndexMaximos)

    let ArrayAreas = []

   

    for (i = 0; i &lt; ArrayIndexMaximos.length; i++) {

       

        console.log(`Index ----> ${ArrayIndexMaximos[i]}`);

        for (j = 0; j &lt; **contenedor**.length; j++) {

            let area = **contenedor**[j]*(Math.abs(j-ArrayIndexMaximos[i]))

       

            console.log(`A > ${area}`);

            ArrayAreas.push(area);

        }

    }

    return(Math.max(...ArrayAreas))

}

console.log(**funContainerWithMostWater**(contenedor));


## **Programando Container With Most Water con (Java)**

public class Main {

  public int **maxArea**(int[] alturas){

    int izquierda = 0;

    int derecha = alturas.length - 1;

    int areaMaxima = 0;

    while ( izquierda &lt; derecha ){

      int areaActual = (derecha - izquierda) * Math.min(alturas[izquierda], alturas[derecha]);

      areaMaxima = Math.max( areaMaxima, areaActual );

      if( alturas[izquierda] &lt; alturas[derecha] ){

        izquierda += 1;

      } else {

        derecha -= 1;

      }

    }

    return areaMaxima;

  }

}


# **Reto: Trapping Rain Water**


## 
![alt_text](images/image20.png "image_tooltip")


let contenedor = [0,1,0, 2,1,0, 1,3,2, 1,2,1]

function **funTotalSinAgua**(contenedor){

    let totalSinAgua = 0;

    let i

    for(i = 0; i &lt; contenedor.length; i++) {

        totalSinAgua = totalSinAgua + contenedor[i];

    }

    return totalSinAgua

}

function **funRetoTrappingRainWater**(contenedor){

    const valorMasAlto= Math.**max**(...contenedor)

    const **indexMxValor **= contenedor.indexOf(valorMasAlto);

    let totalConAgua_derecha = 0

    let totalConAgua_izquerda = 0

    let max_derecha = 0

    let max_izquerda = 0

    let i

    **for **(i = 0; i &lt;= indexMxValor; i++) {

        if(max_izquerda &lt; contenedor[i]){

            max_izquerda = contenedor[i]

        }

        totalConAgua_izquerda = totalConAgua_izquerda + max_izquerda

    }

   

    let j

    **for **(j = contenedor.length - 1; **indexMxValor **&lt; j; j--) {

        if(max_derecha &lt; contenedor[j]){

            max_derecha = contenedor[j]

        }

        totalConAgua_derecha = totalConAgua_derecha + max_derecha

    }

   

    return (totalConAgua_izquerda + totalConAgua_derecha - **funTotalSinAgua**(contenedor))

}

console.log(**funRetoTrappingRainWater**(contenedor))


## **Ejercicios recomendados de Dos Apuntadores**


## **Ejercicios resueltos de Dos Apuntadores**


# **Ventana Deslizante**


## **Patrón de Ventana Deslizante**


## **Longest Substring Without Repeating Characters: análisis del problema**


## **Solución de Longest Substring Without Repeating Characters**


## **Programando Longest Substring Without Repeating Characters con Python**


## **Ejercicios recomendados de Ventana Deslizante**


## **Ejercicios resueltos de Ventana Deslizante**


# **Búsqueda Binaria**


## **Algoritmo de Búsqueda Binaria**


## **Search in Rotated Arrays: análisis del problema**


## **Solución de Search in Rotated Arrays**


## **Programando Search in Rotated Arrays**


## **Search 2D Array Matrix: análisis del problema**


## **Solución de Search 2D Array Matrix**


## **Programando Search 2D Array Matrix**
