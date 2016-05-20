'use strict';

(function () {

    for (let val of['a', 'b', 'c']) {
        console.log(val);
    }

    let mySet = new Set();
    mySet.add('x');
    mySet.add('y');
    mySet.add('z');

    for (let val of mySet) {
        console.log(val);
    }

    let myMap = new Map();
    myMap.set(1, '1');
    myMap.set(2, '2');
    myMap.set(3, '3');

    for (let val of myMap) {
        console.log(val);
    }
})();
