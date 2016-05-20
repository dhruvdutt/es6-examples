'use strict';

(function () {

    var x = 'test',
        y = 42;

    let myObj = {
        x, y
    };

    console.log(myObj.x);
    console.log(myObj.y);

    let objectWithMethod = {
        someMethod (aParam) {
            console.log(aParam);
        }
    };

    objectWithMethod.someMethod('yay es6');

    let dynamicPropertyName = {
        [x +y]: 'some value'
    };
    console.log(dynamicPropertyName.test42);

    let composedObj = Object.assign({}, myObj, objectWithMethod, dynamicPropertyName);
    console.log(composedObj);
})();
