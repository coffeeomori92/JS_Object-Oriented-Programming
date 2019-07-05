class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : ' + (this.first + this.second);
    }
}
let kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : ' + (this.first + this.second);
}
let lee = new Person('lee', 10, 10);
console.log('kim', kim);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());