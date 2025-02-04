import Magician from '../Magician';

test('testing the Magician class for correct data when instantiating', () => {
  const result = new Magician('Dragon');  
  const expected = {
    name: 'Dragon',
    type: 'Magician',
    health: 100,   
    defaultAttack: 100,
    _attack: 0,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
