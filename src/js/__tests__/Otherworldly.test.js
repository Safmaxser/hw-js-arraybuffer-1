import Otherworldly from '../Otherworldly';

test('testing the Otherworldly class getter and setter attack for correct operation', () => {
  const otherworldly = new Otherworldly('Thanos', 'Magician', 100, 10);
  otherworldly.distance = 4;
  expect(otherworldly.attack).toBe(70);
});

test('testing the Otherworldly class, attack getter, and stoned setter and getter for correct operation', () => {
  const otherworldly = new Otherworldly('Spider', 'Demon', 100, 100);
  otherworldly.stoned = true;
  otherworldly.distance = 2;
  expect(otherworldly.attack).toBe(85);
});

test('testing the Otherworldly class attack setter for correct operation', () => {
  const otherworldly = new Otherworldly('Spider', 'Demon', 100, 100);
  otherworldly.attack = 200;
  otherworldly.distance = 3;
  expect(otherworldly.attack).toBe(160);
});

test('testing the Otherworldly getter attack class when entering distance beyond the limit for correct operation', () => {
  const otherworldly = new Otherworldly('Thanos', 'Magician', 100, 10);
  otherworldly.distance = 7;
  expect(otherworldly.attack).toBe(0);
});

test('testing the Otherworldly class stoned setter for throwing an error when the value is entered incorrectly', () => {
  const otherworldly = new Otherworldly('Dgon', 'Demon', 100, 10);
  expect(() => otherworldly.stoned = 'true').toThrow(Error('Некорректное значение - stoned'));
});

test('testing the Otherworldly class distance setter for throwing an error when the value is entered incorrectly', () => {
  const otherworldly = new Otherworldly('Dgon', 'Demon', 100, 10);
  expect(() => otherworldly.distance = 0).toThrow(Error('Некорректное значение - distance'));
});

test('testing the Otherworldly class attack setter for throwing an error when the value is entered incorrectly', () => {
  const otherworldly = new Otherworldly('Dgon', 'Demon', 100, 10);
  expect(() => otherworldly.attack = -1).toThrow(Error('Некорректное значение - attack'));
});
