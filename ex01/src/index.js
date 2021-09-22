var myPet = {
    species: "bulldog",
    name: "boba fett",
    legs: 4,
    friends: ["luke", "han solo"]
};

function myFunction(myObj) {
    return myObj;
}

console.log (myFunction(myPet));
module.exports = { myPet, myFunction };