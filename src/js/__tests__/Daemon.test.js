import Daemon from '../Daemon';

test('testing the Daemon class for correct data when instantiating', () => {
  const result = new Daemon('Dragon');  
  const expected = {
    name: 'Dragon',
    type: 'Daemon',
    health: 100,
    defaultAttack: 10,
    _attack: 0,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
