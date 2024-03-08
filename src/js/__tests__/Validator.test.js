import Validator from '../Validator';

test.each([
  ['SERG'],
  ['serg'],
  ['serg-777a'],
  ['s7-77-77a'],
])
  ('Валидация пройдена', (userName) => {
    const validator = new Validator();
    const received = validator.validateUsername(userName);
    expect(received).toBe(true);
});

test.each([
  ['777SERG'],
  ['SERG777'],
  ['0000-0O'],
  ['-77-77a'],
  ['serg77-'],
  ['Серж'],
])
  ('Валидация не пройдена', (userName) => {
    const validator = new Validator();
    const received = validator.validateUsername(userName);
    expect(received).toBe(false);
});



// test("Начинается с цифры", () => {
//   const validator = new Validator();
//   const received = validator.validateUsername("777SERG");
//   expect(received).toBe(false);
// });

// test("Заканчивается цифрой", () => {
//   const validator = new Validator();
//   const received = validator.validateUsername("SERG777");
//   expect(received).toBe(false);
// });

// test("Более трех цифр подряд", () => {
//   const validator = new Validator();
//   const received = validator.validateUsername("O000-0O");
//   expect(received).toBe(true);
// });

// test("Кириллица", () => {
//   const validator = new Validator();
//   const received = validator.validateUsername("Серж");
//   expect(received).toBe(false);
// });
