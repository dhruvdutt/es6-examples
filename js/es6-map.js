'use strict';

(function () {

    var myMap = new Map();

    let myOtherMap = new Map([['a', 'b'], [1, 1]]);
    console.log(myOtherMap);

    myMap.set('test', { e: 'f' });
    console.log(myMap.get('test'));
    console.log(myMap.has('oops'));
})();
