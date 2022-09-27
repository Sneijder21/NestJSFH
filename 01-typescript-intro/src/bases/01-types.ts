
export let name = 'Sneijder';

export const age: number = 25;

export const isValid: boolean = true;

name = 'Messi';
// name = 123;
// name = true;

export const templateString: string = ` Esto es un template string
multilinea
que puede tener
" dobles
' simple
inyectar valores\$ ${ name }
expresiones ${ 1+1 }
numeros ${ age }
booleanos ${ isValid }
`;

console.log(templateString);