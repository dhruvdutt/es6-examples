'use strict';

(function () {

    var mySet = new Set();

    let anArray = [1, 1, 1, 2, 3, 4, 4, 5];
    let myOtherSet = new Set(anArray);

    console.log(myOtherSet);
    console.log(myOtherSet.size);

    mySet.add('something').add('else');
    mySet.delete('else');
    mySet.clear();

    console.log(mySet.has('something'));

    myOtherSet.forEach(function (value1, value2, set) {
        console.log(value1);
    });

    console.log(myOtherSet[0]);
})();
