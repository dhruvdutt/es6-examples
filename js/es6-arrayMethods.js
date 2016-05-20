'use strict';

(function () {

    console.log(Array.of('test', [1, 2], { foo: 'bar' }));

    function arrayFromArgs() {
        return Array.from(arguments);
    }

    console.log(arrayFromArgs('something', 'else'));

    let superheros = [{
        name: 'Peter Parker',
        superheroName: 'Spiderman'
    }, {
        name: 'Bruce Wayne',
        superheroName: 'Batman'
    }];

    function findByHeroName(name) {
        return superheros.find(function (item) {
            return item.superheroName === name;
        });
    }
    console.log(findByHeroName('Batman'));

    function findHeroIndex(name) {
        return superheros.findIndex(function (item) {
            return item.superheroName === name;
        });
    }

    console.log(findHeroIndex('Spiderman'));

    console.log(superheros.copyWithin(1, 0));
})();
