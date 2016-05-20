'use strict';

(function () {

    //var myPromise = new Promise(function (resolve, reject) {
    //    (Math.random() < .5) ? resolve('success') : reject('failure');
    //});

    //myPromise.then(function (msg) {
    //    console.log(msg, 'The promise was resolved!');
    //    return true;
    //}, function (err) {
    //    console.log(err, 'The promise was rejected!');
    //    return false;
    //}).then(function (value) {
    //    console.log(value);
    //}, function (reason) {
    //});

    function getNumberFact(url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            request.onreadystatechange = function (e) {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject(this.statusText);
                    }
                }
            }

            request.open('GET', url, true);
            request.send();
        });
    }

    getNumberFact('http://numbersapi.com/random').then(
        response => console.log(response),
        error => console.log(error)
    );
})();
