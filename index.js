const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, personWeAreLookingFor) {
    return drivers.filter((el) => el.toLowerCase().includes(personWeAreLookingFor.toLowerCase()));
  }

function fuzzyMatch(drivers, firstTwoLetters) {
    return drivers.filter((el) => el.slice(0, 2)===firstTwoLetters);
}

function matchName(drivers, name) {
    console.log(drivers);
    console.log(name);
    return drivers.filter((el) => el.name.includes(name));
}