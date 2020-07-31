const imprimir_resultado = (nota) => {
    switch (Math.floor(nota)){
        case 10: case 9:
          console.log('Quadro de honra');
          break;
        case 8: case 7:
          console.log('Aprovado!');
          break;
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
          console.log('Reprovado!');
          break;
        default: 
          console.log('Nota inválida!');
    }
}

imprimir_resultado(3);
imprimir_resultado(8);
imprimir_resultado(10);
imprimir_resultado(-2);