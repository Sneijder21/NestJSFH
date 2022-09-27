import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {

    // public readonly id: number;
    // public name: string;

    // constructor(id: number, name: string ){
    //     this.id = id;
    //     this.name = name;
    //     console.log("constructor llamado");
    // }
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ){}

    public scream(){
        console.log(`${this.name.toUpperCase() } !!!`);
        // metodo private
        this.speak();
    }

    private speak(){
        console.log(`${this.name}, I'm a ${this.id}`);
    }
    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(data.moves)
        return data.moves;
    }
}

export const charmander = new Pokemon(4, "Charmander");
// is not editable when is readonly
// charmander.id = 20;
// console.log(charmander);
charmander.name = "Charmander edit";
charmander.scream();
// charmander.speak();
charmander.getMoves().then(moves => console.log(moves.length));