let pokemonList = [
    {name: 'Machamp', height: 1.6, type: 'fighting'},
    {name: 'Primeape', height: 1, type: 'fighting'},
    {name: 'Infernape', height: 1.2, type: ['fire', 'fighting']}
];

/*for (let i = 0; i < 3; i++) {
    document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')');
    


    if (pokemonList[i].height > 1.5) {
        document.write(' - Wow that\'s a big Pokemon!');
    }

    document.write('<br>');
};*/

function myPokemon (pokemon) {
    document.write(pokemon.name + '(height:' + pokemon.height + ')')

    if (pokemon.height > 1.5) {
        document.write(' - Wow that\'s a big Pokemon!');
    }

    document.write('<br>');
}

pokemonList.forEach(myPokemon);



