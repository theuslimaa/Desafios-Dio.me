class Heroi {
    constructor(name, age, type){
      this.name = name;
      this.age = age;
      this.type = type;
    }
    attack() {
      if (this.type == 'Mago'){
        this.ataque == 'Magia'
      } else if (this.type == 'Guerreiro'){
        this.ataque == 'Espada'
      } else if (this.type == 'Monge') {
        this.ataque == 'Artes Marciais'
      } else if (this.type == 'Ninja') {
        this.ataque == 'Shuriken'
      }
  
      console.log('O', this.type, 'atacou usando', this.ataque)
    }
  
  }
