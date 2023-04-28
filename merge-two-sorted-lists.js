let nums1 = [1,2,3,0,0,0,0]
let nums2 = [-4,2,5,6];
let n = 3
let m = 4

funEliminarElementosSobrantesLista = function(nums1,n,m){
    return nums1.slice(0, n) 
}

funMergeTwoSortedList = function(nums1,nums2,n,m){
    let nums1_corregido =  funEliminarElementosSobrantesLista(nums1,n,m);
    //console.log(nums1_corregido)
    let nums3_resultado = nums1_corregido.concat(nums2);
    //console.log(nums3_resultado)
    nums3_resultado.sort(function(a,b){return a - b;});

    return nums3_resultado;
}

console.log(funMergeTwoSortedList(nums1,nums2,n,m))

nums1 = [1,2,3,0,0,0]
n = 3
nums2 = [2,5,6]
m = 3
console.log(funMergeTwoSortedList(nums1,nums2,n,m))

nums1 = [1,2,3,0,0,0,0]
n = 3
nums2 = [-4,2,3,9]
m = 4
console.log(funMergeTwoSortedList(nums1,nums2,n,m))