'use strict';

(function () {

    var testString = 'test string';

    console.log(testString.startsWith('test', 1));
    console.log(testString.endsWith('string', testString.length - 1));

    console.log(testString.includes('str', 9));

    console.log(testString.repeat(2));
})();
