// for (let i  = 0; i <= 10; i++) {
//     console.log('hello');
// }

//for(start;end;rate or step;)👆

// for(let i = 0; i < 6; i++) {
//     console.log('in shabi ke migan shab nist ya mese dishab nist');
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

//for(let i = 1 ; i<=20; i+=2){}


// for (let i = 1; i < 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 50; i > 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// for (let i = 25; i >= 0; i--) {
//     console.log(i++);
// }

// array loops
// const animals = [
//     "Aardvark",
//     "Aardwolf",
//     "African Elephant",
//     "African Tree Pangolin",
//     "Alligator",
//     "Alpaca",
//     "Anteater",
//     "Antelope",
//     "Ape(s)",
//     "Arabian Horse",
//     "Armadillo",
//     "Arthropod(s)",
//     "Asian Elephant",
//     "Aye-Aye",
//     "Baboon",
//     "Badger",
//     "Bandicoot",
//     "Bangle Tiger",
//     "Bat(s)",
//     "Bearded Dragon",
//     "Beaver",
//     "Beluga Whale",
//     "Bengal Tiger",
//     "Big-Horned Sheep",
//     "Billy Goat",
//     "Bird(s)",
//     "Bison",
//     "Black Bear",
//     "Black Footed Rhino",
//     "Black Howler Monkey",
//     "Black Rhino",
//     "Blacktip Reef Shark",
//     "Blue Shark",
//     "Blue Whale",
//     "Boar",
//     "Bob-Cat",
//     "Bonobo",
//     "Bottlenose Dolphin",
//     "Bottlenose Whale",
//     "Brown Bear",
//     "Buffalo",
//     "Bull",
//     "Bull frog",
//     "Caiman Lizard",
//     "Camel",
//     "Capuchin Monkey",
//     "Capybara",
//     "Caribou",
//     "Cat(s)",
//     "Cattle",
//     "Cheetah",
//     "Chimpanzee",
//     "Chinchilla",
//     "Chipmunk",
//     "Common Dolphin",
//     "Common Seal",
//     "Coral(s) and Anemone(s)",
//     "Cougar",
//     "Cow(s)",
//     "Coyote",
//     "Crocodile",
//     "Crustacean(s)",
//     "Dart Frog",
//     "Deer",
//     "Degus",
//     "Dik-Dik",
//     "Dingo",
//     "Dog(s)",
//     "Dogfish Shark",
//     "Dolphin",
//     "Donkey",
//     "Door Mouse",
//     "Dormouse",
//     "Draft Horse",
//     "Duckbill Platypus",
//     "Dugong",
//     "Dusky Shark",
//     "Elephant",
//     "Elephant Seal",
//     "Elk",
//     "Ermine",
//     "Eurasian Lynx",
//     "Ferret",
//     "Fish(es)",
//     "Florida Panther",
//     "Flying Fox",
//     "Fox",
//     "Fresh Water Crocodile",
//     "Frog",
//     "Fur Seal",
//     "Galapagos Land Iguana",
//     "Galapagos Shark",
//     "Galapagos Tortoise",
//     "Gazelle",
//     "Gecko",
//     "Giant Anteater",
//     "Giant Panda",
//     "Gibbon",
//     "Giraffe",
//     "Goat",
//     "Gopher",
//     "Gorilla",
//     "Gray Fox",
//     "Gray Nurse Shark",
//     "Gray Reef Shark",
//     "Gray Whale",
//     "Great White Shark",
//     "Green Poison Dart Frog",
//     "Green Sea Turtle",
//     "Grizzly Bear",
//     "Groundhog",
//     "Guinea Pig",
//     "Hairy-Nosed Wombat",
//     "Hammerhead Shark",
//     "Harbor Porpoise",
//     "Harbor Seal",
//     "Hare",
//     "Harp Seal",
//     "Hawaiian Monk Seal",
//     "Hedgehog",
//     "Hippopotamus",
//     "Horn Shark",
//     "Horse(s)",
//     "Howler Monkey",
//     "Humpback Whale",
//     "Hyena",
//     "Hyrax",
//     "Iguana",
//     "Iguanodon",
//     "Impala",
//     "Insect(s)",
//     "Irrawaddy Dolphin",
//     "Jackal",
//     "Jackrabbit",
//     "Jaguar",
//     "Jellyfish",
//     "Kangaroo",
//     "Kermode Bear",
//     "Killer Whale",
//     "Koala",
//     "Komodo Dragon",
//     "Kookaburra",
//     "Lama",
//     "Lamb",
//     "Lancelet",
//     "Least Weasel",
//     "Leatherback Sea Turtle",
//     "Lemming",
//     "Lemon Shark",
//     "Lemur",
//     "Leopard",
//     "Leopard Gecko",
//     "Leopard Seal",
//     "Leopard Shark",
//     "Lion",
//     "Llama",
//     "Loggerhead Turtles",
//     "Lynx",
//     "Mako Shark",
//     "Manatee",
//     "Manta Ray",
//     "Mantis",
//     "Marbled Salamander",
//     "Marmot",
//     "Marsupial(s)",
//     "Meerkat",
//     "Megamouth Shark",
//     "Melon-Headed Whale",
//     "Miniature Donkey",
//     "Mink",
//     "Minke Whale",
//     "Mole",
//     "Mole Salamander",
//     "Mollusk(s)",
//     "Mongoose",
//     "Monitor Lizard",
//     "Monk Seal",
//     "Monkey",
//     "Moose",
//     "Mountain Lion",
//     "Mouse",
//     "Mule",
//     "Muskox",
//     "Muskrat",
//     "Naked Mole Rat",
//     "Narwhal",
//     "Nautilus",
//     "Newt",
//     "Northern Right Whale",
//     "Nurse Shark",
//     "Nutria",
//     "Nyala",
//     "Ocelot",
//     "Octopus",
//     "Okapi",
//     "Opossum",
//     "Orangutan",
//     "Orca",
//     "Otter",
//     "Ox",
//     "Panda",
//     "Panther",
//     "Pig",
//     "Pilot Whale",
//     "Pine Marten",
//     "Platypus",
//     "Polar Bear",
//     "Porcupine",
//     "Porpoise",
//     "Possum",
//     "Potbellied Pig",
//     "Potto",
//     "Prairie Dog",
//     "Proboscis Monkey",
//     "Przewalski's Wild horse",
//     "Puma",
//     "Pygmy Hippopotamus",
//     "Pygmy Right Whale",
//     "Pygmy Sperm Whale",
//     "Quokkas",
//     "Quolls",
//     "Rabbit",
//     "Raccoon",
//     "Rat",
//     "Ray",
//     "Red Fox",
//     "Red Kangaroo",
//     "Red Panda",
//     "Red-Eyed Tree Frog",
//     "Reef Shark",
//     "Reindeer",
//     "Rhino",
//     "Rhinoceros",
//     "Right Whale",
//     "Ringed Seal",
//     "Risso's Dolphin",
//     "River Dolphin",
//     "Salamander",
//     "Sandbar Shark",
//     "Scalloped Hammerhead Shark",
//     "Sea Lion",
//     "Sea Turtles",
//     "Seal",
//     "Sei Whale",
//     "Shark",
//     "Sheep",
//     "Shortfin Mako Shark",
//     "Siberian Tiger",
//     "Silky Shark",
//     "Skink",
//     "Skunk",
//     "Slender Loris",
//     "Sloth",
//     "Sloth Bear",
//     "Snake(s)",
//     "Snow Fox",
//     "Snow Hare",
//     "Snow Leopard",
//     "Snow Monkey",
//     "Somali Wild Ass",
//     "Spectacled Bear",
//     "Sperm Whale",
//     "Spider Monkey",
//     "Spiny Dogfish Shark",
//     "Spotted Dolphin",
//     "Squirrel",
//     "Star-Nosed Mole",
//     "Stellar Sea Lion",
//     "Striped Dolphin",
//     "Sun Bear",
//     "Takin",
//     "Tamarin",
//     "Tapir",
//     "Tasmanian Devil",
//     "Tasmanian Tiger",
//     "Terrapin",
//     "Thresher Shark",
//     "Tiger",
//     "Tiger Salamander",
//     "Tiger Shark",
//     "Topi",
//     "Tortoise",
//     "Tree Frog",
//     "Turtle",
//     "Uakari",
//     "Vampire Bat",
//     "Vancouver Island Marmot",
//     "Vervet Monkey",
//     "Vicuna",
//     "Vole",
//     "Wallaby",
//     "Walrus",
//     "Warthog",
//     "Water Buffalo",
//     "Weasel",
//     "Whale Shark",
//     "Whale(s)",
//     "White Rhino",
//     "White Tailed Deer",
//     "White-Beaked Dolphin",
//     "Whitetip Reef Shark",
//     "Wildcat",
//     "Wildebeest",
//     "Wobbegong Shark",
//     "Wolf",
//     "Wolverine",
//     "Wombat",
//     "Woodchuck",
//     "Yak",
//     "Yellow-Bellied Marmot",
//     "Zebra",
//     "Zebu",
//     "Zorilla",
// ];

// for (let i = animals.length - 1; i >= 0; i--) { // NOTE for (let i = animals.length - 1; i >= 0; i--)
//     console.log(animals[i]);
// }

// let students = ["Sirvan", "Pourya", "Alireza", "saba", "Khorzoor"];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].toLowerCase());
// }

// const airplane = [
//     ["niloofar", "kosar", "Fatemeh"],
//     ["ali", "mohsen", "Shirin"],
//     ["atena", "mahdi", "benyamin"],
//     ["bani", "mohammad", "sina"],
//     ["Amir", "Beti", "Pourya"],
// ];

// for (let i = 0; i < airplane.length; i++) {
//     console.log(airplane[i]);
//     for (let j = 0; j < airplane[i].length; j++) {
//         console.log(`            ${airplane[i][j]}`);
//     }
// }

// let i = 0; //start outside
// while (i <= 10) { //declare end
//     //we decalre rate or step inside the while loop
//     console.log(i);
// }

// let i = 0;
// while (i < 30) {
//     i++;
//     if (i === 20) { break; }
//     console.log(i);
    
// }

// let maximum = parseInt(prompt('enter your maximum number: '));
// let randomNumber = Math.floor(Math.random() * maximum)
// console.log(randomNumber);

// let geuss = 

// if (maximum )

// const airplane = [
//     ["amir", "mina", "yousof"],
//     ["niloofar", "mahya", "haniyeh"],
//     ["vajihe0_0", "motahare", "anahid"],
//     ["Romina", "Benyamin", "saba"],
//     ["sajjad", "atena", "manoochehr"],
// ];

// for (let air of airplane) {
//     console.log(air);
//     for(let newPassenger of air){
//         console.log(newPassenger);
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myArray = []

// for (let number of numbers) {
//     // console.log(number ** 2);
//     myArray.push(number ** 2)
//     return console.log(myArray);
// }
// console.log(myArray);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let number = numbers.map(function(num) {
//     return num * 2
// })

// console.log(number);

// const airplane = [
//     ["motahare", "anahid", "amirmostafa"],
//     ["maryam", "amir", "mina"],
//     ["fatemeh", "fereshte", "kian"],
//     ["kosar", "mohammad", "yousof"],
//     ["mohsen", "hoseyn ", "shaden"],
// ];

// airplane.forEach(function(air) {
//     console.log(air);
// })

// function valueType() {
//     const myArray = ['jasem', 40, true, null, undefined, []]
    // return myArray.map((type) => typeof type)
// //    console.log(myArray.map(function(type) {return typeof type}))
// }


// console.log(valueType());

// function valuesType(dataType) {

//     dataType.map(type => {
//         return typeof type
//     })
// }
// console.log(valuesType(['jasem' , 40, true, null, undefined]));



//  const airplanePassengers = [
//      "      Sirvan     ",
//      "      Zahra   ",
//      "   Fatemeh   ",
//      "Mohsen      ",
//      "     Azam      ",
//      "     Shirin      ",
//  ];

// let khashayar = airplanePassengers.map(function (passengers){return passengers.trim()})

// console.log(khashayar)



// const airplane = [
//     ["motahare", "anahid", "amirmostafa"],
//     ["maryam", "amir", "mina"],
//     ["fatemeh", "fereshte", "kian"],
//     ["kosar", "mohammad", "yousof"],
//     ["mohsen", "hoseyn ", "shaden"],
// ];

// const myArray = ["mohsen", "hoseyn ", "shaden", 'al', 'abd'];

// let airfilter = myArray.filter(string => string.length > 3)
// console.log(airfilter);

// let results = airplane.map(() => {
//     let result = airplane.map(s => typeof s)
//     return result
// })

// console.log(results);

// const passengerList = airplane.map(row => {
//   let rowOfPassengers = row.map(passenger => {
//     console.log(passenger);
//     return `oo   ${passenger}`;
    
//   });
//   return rowOfPassengers;
// });
// console.log(passengerList);

// function test() {
//     console.log('hello');
// }
// test()

// const test = (name) => {
//     return `hello ${name}`
// }

// console.log(test("harry"));
// console.log(test("ayda"));

// setTimeout(() => {
//     console.log('hello');
// }, 3000);

// console.log('good morning');

// let s = 0
// let timer = setInterval(() => {
//     s++;
//     if (s === 5) {
//         clearInterval(timer);
//     }
//     console.log('hello');
    
// }, 1000);
// console.log(timer);


// let myTimerHours = 1;
// let myTimerMinutes = 2;
// let myTimerSecond = 60;

// let myTimer = setInterval(function () {
//     console.log(myTimerHours + " : " + myTimerMinutes + " : " + myTimerSecond);
//     if (myTimerSecond == 0) {
//         myTimerSecond = 60;
//         myTimerMinutes--;
//     }
//     if (myTimerMinutes < 0) {
//         myTimerMinutes = 59;
//         myTimerHours--;
//     }
//     if (myTimerHours < 0) {
//         clearInterval(myTimer);
//         console.log("The End");
//     }
//     myTimerSecond--;
// }, 1000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// let reduser = numbers.reduce((num1, num2) => num1 + num2);
// console.log(reduser);
// console.log(numbers.reduce((num1, num2) => num1 + num2));



// let filtered = numbers.filter(fill => fill > 10)
// console.log(filtered);

// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]; 

// let filltered = words.filter(word => word.length > 6)
// console.log(filltered);

// let everyes = words.every(word => word.length > 2)
// console.log(everyes);

// let somes = words.some(word => word.length > 10)
// console.log(somes);

// const numbers = [1, 4, 6, 8];

// let everyes = numbers.some(num => num % 2 === 0);
// console.log(everyes);