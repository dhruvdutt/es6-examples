'use strict';

(function () {

    var fn = param1 => ({ value: param1 * param1 });

    console.log(fn(3));

    let user = {
        name: 'someone'
    };

    let getUserName = () => this.name;

    console.log(getUserName.call(user));
})();
