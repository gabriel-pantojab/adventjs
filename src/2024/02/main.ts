export function createFrame(names: string[]): string {
  let rowLength: number = 0;
  for (const name of names) {
    rowLength = Math.max(name.length + 4, rowLength);
  }

  let marco: string = `${'*'.repeat(rowLength)}\n`;

  for (const name of names) {
    let row: string = `* ${name}${' '.repeat(rowLength - name.length - 3)}*\n`;
    marco += row;
  }

  return marco + '*'.repeat(rowLength);
}
