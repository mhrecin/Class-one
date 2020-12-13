function countDown(){
    for (let i = 5; i >= 1; i -= 1){
        console.log(i);
        }
    }
    countDown(1);



function countUp(start,end){
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
countUp (1,5);


function isLong (word) {
    if (word.length > 10) {
        return console.log(true);
    } else if (word.length < 10) {
        return console.log(false);
    }
 }
isLong("watermelononey");

function whatWaterState(temperature){
    if (temperature <= 32){
        console.log("solid");
    } else if (temperature >= 32 && temperature < 212){
        console.log("liquid");
    } else if (temperature >= 212){
        console.log("gas");
    }
}
whatWaterState(215);



const sandwiches = [
    {type: "italian", calories: 1000, cost: 7.69, isVegetarian: "false"},
    {type: "veggie", calories: 500, cost: 5.50, isVegetarian: "true"},
    {type: "meatball", calories: 900, cost: 8.25, isVegetarian: "false"},
    {type: "jackfruit", calories: 650, cost: 8.50, isVegetarian: "true"},
];

function makeSandwich(sandwichArray, type, calories, cost, isVegetarian){
    const newSandwich = {type: type, calories: calories, cost: cost, isVegetarian: isVegetarian};
    sandwichArray.unshift(newSandwich);
}
console.log(sandwiches);
makeSandwich(sandwiches, "turkey", 850, 7.00, "false");
console.log(sandwiches);


// function findVegetarianSandwich(sandwichArray){
//     let vegSandwich = sandwichArray[0];
//     for(let sandwich of sandwichArray){
//         if (sandwich.isVegetarian > vegSandwich.isVegetarian){
//             vegSandwich = sandwich;
//         }
//     }
//     return vegSandwich;
// }
// console.log(findVegetarianSandwich(sandwiches));

function findVegetarianSandwich(sandwichArray){
    return sandwichArray.find(sandwich => sandwich.isVegetarian)
}


function findCheapestSandwich(sandwichArray){
    let cheapestSandwich = sandwichArray[0];
    for(let sandwich of sandwichArray){
        if (sandwich.cost < cheapestSandwich.cost){
            cheapestSandwich = sandwich;
        }
    }
    return cheapestSandwich;
}
console.log(findCheapestSandwich(sandwiches));


