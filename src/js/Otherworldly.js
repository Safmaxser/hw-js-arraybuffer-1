export default class Otherworldly { 
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;  
    this.defaultAttack = attack;  
    this.defence = defence;
    this.attack = {}; 
  } 
  get stoned() {
    return this._stoned;
  }
  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Некорректное значение - stoned');
    }
    this._stoned = value; 
  }
  get attack() {
    return this._attack;
  }
  set attack(parameters) {
    const distance = parameters['distance'];
    if (!distance || distance < 1 ||distance > 5) {
      this._attack = 0;
      return;
    }
    const powerLoss = this.defaultAttack  * (distance - 1) * 10 / 100;
    const stonedEffect = this.stoned ? Math.log2(distance) * 5 : 0
    this._attack = Math.round(this.defaultAttack - powerLoss - stonedEffect);
  }
}
