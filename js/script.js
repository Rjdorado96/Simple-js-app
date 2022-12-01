let pokemonRepository = (function (){
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    function add(pokemon){
        pokemonList.push(pokemon)
    }

    function getAll(){
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonListContainer = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonListButton');
        button.classList.add('btn');
        button.classList.add('btn-light');
        button.dataset.target('modal-container');
        button.dataset.toggle('modal');
        listItem.classList.add('group-list-item');
        listItem.appendChild(button);
        pokemonListContainer.appendChild(listItem);
        button.addEventListener('click', function(){
            showDetails(pokemon);
        })
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
        showModal(pokemon);
        });
    }

    function loadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function (json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function(e){
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
            return response.json();
        }).then(function (details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e){
            console.error(e);
        });
    }

    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails
    }
})();



//let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.src = pokemon.imageUrl;
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let typesElement = $('<p>' + 'Type: ' + pokemon.types + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
}
    /*
modalContainer.innerHTML = '';
let modal = document.createElement('div');
modal.classList.add('modal');

let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
closeButtonElement.addEventListener('click', hideModal);

let titleElement = document.createElement('h1');
titleElement.innerText = pokemon.name;

let contentElement = document.createElement('p');
contentElement.innerText = `Height: ${pokemon.height}`;

let imageElement = document.createElement('img')
imageElement.src = pokemon.imageUrl;

modal.appendChild(closeButtonElement);
modal.appendChild(titleElement);
modal.appendChild(contentElement);
modal.appendChild(imageElement);
modalContainer.appendChild(modal);

modalContainer.classList.add('is-visible');
}

function hideModal() {
modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
}
}); */

modalContainer.addEventListener('click', (e) => {
// Since this is also triggered when clicking INSIDE the modal
// We only want to close if the user clicks directly on the overlay
let target = e.target;
if (target === modalContainer) {
    hideModal();
}
});





function myPokemon (pokemon) {

    pokemonRepository.addListItem(pokemon);


}

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(myPokemon);
});