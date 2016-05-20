'use strict';

(function () {

    console.log(Number.EPSILON);

    console.log(Number.isFinite(1));
    console.log(Number.isFinite(Infinity));

    console.log(Number.isInteger(1));
    console.log(Number.isInteger(1.1));

    console.log(Number.isSafeInteger(1));
    console.log(Number.isSafeInteger(Math.pow(2, 53)));

    console.log(isNaN('NaN'));
    console.log(Number.isNaN('NaN'));
})();
