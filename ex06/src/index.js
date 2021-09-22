var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};

function myFunction(roar, _roar2) {
    lion[roar] = "roar-roar";
    return lion;
}

myFunction("roar");
console.log (myFunction("roar"));
module.exports = myFunction;