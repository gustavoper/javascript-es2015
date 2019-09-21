const hello = {
    name: "world",
    printHello() {
        console.log(`hello, ${this.name} !!`)
    }
};

hello.printHello();


//on ES2015+ you can write your methods like this
var helloW = {
    name: 'world',
    printHello: function printHello() {
        console.log(`hello, ${this.name} !!`)
    }
}

helloW.printHello();