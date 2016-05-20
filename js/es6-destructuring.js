'use strict';

(function () {

    var [x, y] = ['a', 'b'];
    console.log(x, y);

    let {a, b} = {a: 'c', b: 'd'};
    console.log(a, b);

    function returnMultipleArrays() {
        return [
            ['a', 'b', 'c'],
            [1, 2, 3]
        ];
    }

    let [arr1, arr2] = returnMultipleArrays();
    let arr = returnMultipleArrays();

    console.log(arr1, arr2);
    console.log(arr);

    let [, c] = ['ignored', 'not ignored'];
    console.log(c);

    let {firstname, lastname, employment: { status }} = {
        firstname: 'John',
        lastname: 'Doe',
        employment: {
            status: 'is coding'
        }
    };

        console.log(firstname, lastname, status);
})();
