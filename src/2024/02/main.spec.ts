import { createFrame } from './main';

test('Should return a frame with the names', () => {
  const names: string[] = ['midu', 'madeval', 'educalvolpz'];
  const expected: string =
    '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************';

  expect(expected).toBe(createFrame(names));
});

test('Should return a frame with the names', () => {
  const names: string[] = ['midu'];
  const expected: string = '********\n* midu *\n********';

  expect(expected).toBe(createFrame(names));
});

test('Should return a frame with the names', () => {
  const names: string[] = ['a', 'bb', 'ccc'];
  const expected: string = '*******\n* a   *\n* bb  *\n* ccc *\n*******';

  expect(expected).toBe(createFrame(names));
});
