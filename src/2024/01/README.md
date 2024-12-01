# Reto #1: 🎁 ¡Primer regalo repetido!

Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

## Entrada

La entrada es un arreglo de números enteros `gifts` que representa los regalos que Santa Claus debe entregar.

## Salida

La salida es un arreglo de números enteros que representa los regalos que Santa Claus debe entregar, sin duplicados y ordenados en orden ascendente.

## Ejemplos

```ts
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
```

## Solución

El problema nos pide eliminar los regalos duplicados y ordenar la lista de regalos en orden ascendente. Para ello, podemos utilizar un conjunto (`Set`) para almacenar los regalos únicos y luego convertirlo a un arreglo y ordenarlo.

Complejidad: `O(n log n)` debido a que se realiza una operación de ordenamiento en el arreglo de regalos únicos.

> **Nota:** (`Set`) es una estructura de datos que no permite elementos duplicados.

```ts
function prepareGifts(gifts: number[]): number[] {
  const uniqueGifts: Set<number> = new Set(gifts);
  const sortedGifts: number[] = [...uniqueGifts].sort(
    (a: number, b: number): number => a - b
  );
  return sortedGifts;
}
```
