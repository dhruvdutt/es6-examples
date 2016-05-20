'use strict';

(function () {

    var template = `this is a template
string!`;

    let a = '5',
        b = 'something';

    console.log(`a is ${a}, while b is ${b} else`);

    function reverseString(string) {
        return string.split('').reverse().join('');
    }

    console.log(`a is ${a}, while b is ${b} else, and ${reverseString(b)} is reversed`);

    function str(literals, ...values) {
        return values[3] + literals[3] + literals[1] + values[2] + literals[0] + values[1];
    }

    console.log(str`a is ${a}, while b is ${b} else, and ${reverseString(b)} is reversed`);
})();
