'use strict';

(function () {

    //console.log(block);

    if (true) {
        let block = 'block';

        let a = 1,
            b = 2,
            c = 3;

        console.log(a, b, c);

        for (let x = 0; x < 10; x += 1) {
            // do something with x
        }

        const PI = 3.14159;

        let obj = {
            test: 'test'
        };
        const referenceTest = obj;
        obj.test = 'changed';
        console.log(referenceTest);
    }
})();
