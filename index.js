function somarNumeros (n1, n2) {
  let soma = n1+n2
  return soma 

}

let resultado=somarNumeros(1,1)
console.log(resultado)






function transformaArray (vetor) {
    let array2 = []
    array2 = push(vetor[0])
    array2.push(vetor[vetor.lenght-1])
    return array2
  
  }
  
 let array = [1,2,3,4,5]
 let novoArray = transformaArray(array)
