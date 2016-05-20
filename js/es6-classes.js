'use strict';

(function () {

    var Employee = class Employee {
        constructor(name) {
            this.name = name;
        }

        shoutName() {
            return this.name.toUpperCase();
        }

        work() {
            console.log(this.name, 'is working');
        }

        static reverseName(employee) {
            employee.name = employee.name.split('').reverse().join('');
        }
    };

    let emp = new Employee('Fred');
    Employee.reverseName(emp);
    console.log(emp.shoutName());

    let Boss = class Boss extends Employee {
        work() {
            console.log(super.shoutName(), 'is working LIKE A BOSS');
        }
    }

    let emp2 = new Boss('Jane');

    emp.work();
    emp2.work();
})();
