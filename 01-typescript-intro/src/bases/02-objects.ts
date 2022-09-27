export const pokemonIds = [1, 24, 30, 34, 66 ];
pokemonIds.push(+'100');
console.log(pokemonIds);

interface Pokemon {
    id: number;
    name: string;
    // valor opcional, puede venir o no.
    age?: number;
    // valor necesario, que si acepta undefined
    // age: number | undefined;
}

export const bulbasur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
    age: 16
}


export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur, charmander);
console.log(pokemons);