# Reto #2: 🖼️ Enmarcando nombres

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

## Entrada

La entrada es un arreglo de nombres.

## Salida

La salida es un cadena de texto que representa el marco con los nombres.

## Ejemplos

```ts
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

<details>
  <summary><b>Pistas</b></summary>

- <details>
      <summary>Pista 1</summary>
      Encontrar el nombre más largo en el arreglo de nombres.
    </details>
  </details>

<details>
<summary><b>Ver Solución</b></summary>

Para resolver este problema, debes encontrar el nombre más largo en el arreglo de nombres, este sera la longitud de cada fila.

Luego, se va construyengo cada fila del marco con cada nombre y agregando espacios en blanco para completar la longitud de la fila.

Complejidad: `O(n * m)`, donde `n` es la cantidad de nombres y `m` es la longitud del nombre más largo.

```ts
function createFrame(names: string[]): string {
  let rowLength : number = 0;
  for(const name of names) {
    rowLength = Math.max(name.length + 4, rowLength);
  }

  let marco : string = `${"*".repeat(rowLength)}\n`;
  
  for(const name of names) {
    let row : string = `* ${name}${" ".repeat(rowLength - name.length - 3)}*\n`;
    marco += row;
  }
  
  return marco + "*".repeat(rowLength);
}
```

</details>
