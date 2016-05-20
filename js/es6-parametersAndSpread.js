'use strict';

(function () {

    function logSomething(something = 'default message', somethingElse = something + 'with concatenation') {
        console.log(something, somethingElse);
    }

        logSomething();
        logSomething(undefined, 'and overriding');

        function sum(a, b, c) {
            return a + b + c;
        }
        let nums = [1, 2, 3];

        console.log(sum(...nums));

        let arr = [...nums, 4, 5, 6];

        console.log(arr);

        function joinStuff(...stuffs) {
            console.log(stuffs.join(' '));
        }

        joinStuff('Stuffs', 'to', 'join');
})();
