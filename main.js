class Animal {
    constructor(name) {
        this.name = name
    }


    dizHeloo() {
        console.log('Olá, Eu sou '+this.name)
    }
}

class Dog extends Animal {
    constructor(name,raca) {
        super(name)
        this.raca=raca
    }

    latir() {
        console.log("Wooof Wooof!")
    }

}
let bicho = new Dog('Tobby','Lhasa apso')
bicho.dizHeloo();
bicho.latir();
