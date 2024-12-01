export function prepareGifts(gifts: number[]): number[] {
  const uniqueGifts: Set<number> = new Set(gifts);
  const sortedGifts: number[] = [...uniqueGifts].sort(
    (a: number, b: number): number => a - b,
  );

  return sortedGifts;
}
