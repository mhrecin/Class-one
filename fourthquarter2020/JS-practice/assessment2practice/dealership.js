function printTens(){
    for (let i = 10; i <= 100; i += 10){
    console.log(i);
    }
}
printTens(1);



function countUntilTens(step) {
    let i = step;
    while (true) {
        console.log(i);
        if (i % 10 === 0) {
            break;
        }
        i += step;
    }
}
countUntilTens(2);



function hasVowels(word){
    let hasVowel = false;
    for (let letter of word){
        console.log(letter);
        if(letter === "a"){
            hasVowel = true;
            break;
        } else if (letter === "i"){
            hasVowel = true;
            break;
        } else if (letter === "o"){
            hasVowel = true;
            break;
        } else if (letter === "u"){
            hasVowel = true;
            break;
        } else if (letter === "e"){
            hasVowel = true;
            break;
        }
    }
    return hasVowel;
}
hasVowels("apple");




function testTemperature(desiredTemp, actualTemp){
    if (actualTemp > desiredTemp){
        console.log("Run A/C");
    } else if (actualTemp < desiredTemp){
        console.log("Run Heat");
    } else {
        console.log("Stand By");
    }
}
testTemperature(75, 75)




const dealership = [
    {make: "Toyota", model: "Prius", year: 2020, hybrid: "true", cost: 20000},
    {make: "Toyota", model: "Prius", year: 2021, hybrid: "true", cost: 24000},
    {make: "Ford", model: "F-150", year: 2015, hybrid: "false", cost: 30000},
    {make: "Ferrari", model: "Enzo", year: 2004, hybrid: "false", cost: 150000},
];

function findCars(arrayOfCars, model){
    return arrayOfCars.filter((car) => car.model === model);
}
console.log(findCars(dealership, "Enzo"));

function addCar(arrayOfCars, make, model, hybrid, cost) {
    const newCar = { make: make, model: model, year: 2021, hybrid: hybrid, cost: cost };
    arrayOfCars.unshift(newCar);
}

console.log(dealership);
addCar(dealership, "Kia", "Sorento", false, 10000);
console.log(dealership);


function areThereAnyHybridsForSale(arrayOfCars){
    const hybridCar = arrayOfCars.filter(car => car.hybrid);
    if (hybridCar.length > 0){
        return true;
    }
    return false;
}
console.log(areThereAnyHybridsForSale(dealership));

function findCheapestCar(arrayOfCars){
    let cheapestCar = arrayOfCars[0];
    for(let car of arrayOfCars){
        if (car.cost < cheapestCar.cost){
            cheapestCar = car;
        }
    }
    return cheapestCar;
}

console.log(findCheapestCar(dealership));