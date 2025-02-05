import Magician from '../Magician';

test('testing the Magician class for correct data when instantiating', () => {
  const result = new Magician('Dragon');  
  const expected = {
    name: 'Dragon',
    type: 'Magician',
    health: 100,   
    defaultAttack: 100,
    defence: 40,
    _distance: 1,
  };
  expect(result).toEqual(expected);
});
