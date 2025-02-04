import Otherworldly from '../Otherworldly';

test('testing the Otherworldly class getter and setter attack for correct operation', () => {
  const otherworldly = new Otherworldly('Thanos', 'Magician', 100, 10);
  otherworldly.attack = {
    distance: 4
  };  
  expect(otherworldly.attack).toBe(70);
});

test('testing the Otherworldly class, attack getter and setter, and stoned setter for correct operation', () => {
  const otherworldly = new Otherworldly('Spider', 'Demon', 100, 100);
  otherworldly.stoned = true;
  otherworldly.attack = {
    distance: 2
  };  
  expect(otherworldly.attack).toBe(85);
});

test('testing the Otherworldly class setter stoned for throwing an error when the value is not correct', () => {
  const otherworldly = new Otherworldly('Dgon', 'Demon', 100, 10);
  expect(() => otherworldly.stoned = 'true').toThrow(Error('Некорректное значение - stoned'));
});
