export default class Otherworldly { 
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;  
    this.defaultAttack = attack;  
    this.defence = defence;
    this.distance = 1; 
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
  get distance() {
    return this._distance;
  }
  set distance(value) {
    if (!value || value <= 0) {
      throw new Error('Некорректное значение - distance');
    }
    this._distance = value; 
  }

  get attack() {
    if (this.distance < 1 || this.distance > 5) {
      return this._attack = 0;
    }
    const powerLoss = this.defaultAttack  * (this.distance - 1) * 10 / 100;
    const stonedEffect = this.stoned ? Math.log2(this.distance) * 5 : 0
    return Math.round(this.defaultAttack - powerLoss - stonedEffect);
  }
  set attack(value) {
    if (!value || value <= 0) {
      throw new Error('Некорректное значение - attack');
    }
    this.defaultAttack = value;
  }
}
