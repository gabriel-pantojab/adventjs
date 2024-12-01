import { prepareGifts } from "./main";

test("Should return the unique gifts in ascending order", () => {
  const gifts: number[] = [3, 1, 2, 3, 4, 2, 5];
  expect([1, 2, 3, 4, 5]).toStrictEqual(prepareGifts(gifts));
});

test("Should return the unique gifts in ascending order", () => {
  const gifts: number[] = [6, 5, 5, 5, 5];
  expect([5, 6]).toStrictEqual(prepareGifts(gifts));
});

test("Should return empty array with empty input", () => {
  const gifts: number[] = [];
  expect([]).toStrictEqual(prepareGifts(gifts));
});
