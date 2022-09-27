
class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`i dont wanna, that ${this.name} to scream`);
    }

    speak(){
        console.log(` i dont wanna, that ${this.name} is speaking`);
    }
}

const MyDecorator = () => {
    return ( target: Function ) => {
        return NewPokemon;
    }
}


@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()} is screaming`);
    }

    speak(){
        console.log(`${this.name} is speaking`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();