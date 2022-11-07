/*let pokemonList = [
    {name: 'Machamp', height: 1.6, type: 'fighting'},
    {name: 'Primeape', height: 1, type: 'fighting'},
    {name: 'Infernape', height: 1.2, type: ['fire', 'fighting']}
];*/

let pokemonRepository = (function (){
    let pokemonList = [
        {name: 'Machamp', height: 1.6, type: 'fighting'},
        {name: 'Primeape', height: 1, type: 'fighting'},
        {name: 'Infernape', height: 1.2, type: ['fire', 'fighting']}
    ];

    function add(pokemon){
        pokemonList.push(pokemon)
    }

    function getAll(pokemon){
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonListContainer = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonListButton');
        listItem.appendChild(button);
        pokemonListContainer.appendChild(listItem);
    }

    return {
        add,
        getAll,
        addListItem
    }
})();

/* OLD CODE
for (let i = 0; i < 3; i++) {
    document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')');
    


    if (pokemonList[i].height > 1.5) {
        document.write(' - Wow that\'s a big Pokemon!');
    }

    document.write('<br>');
};*/

function myPokemon (pokemon) {

    pokemonRepository.addListItem(pokemon);

   /* Cut from myPokemon function and added to IIFE

    let pokemonListContainer = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonListButton');
    listItem.appendChild(button);
    pokemonListContainer.appendChild(listItem);
    
    */
    

   /* OLD CODE
   document.write(pokemon.name + '(height:' + pokemon.height + ')')

    if (pokemon.height > 1.5) {
        document.write(' - Wow that\'s a big Pokemon!');
    }

    document.write('<br>'); */
}

pokemonRepository.getAll().forEach(myPokemon);



