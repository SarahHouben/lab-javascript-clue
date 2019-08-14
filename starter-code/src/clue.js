//Characters

const mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}

const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
}

const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}

const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}

const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
}

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
}

//Weapons
const weapon1 = {
    name: "rope",
    weight: 10
}

const weapon2 = {
    name: "knife",
    weight: 8
}

const weapon3 = {
    name: "candlestick",
    weight: 2
}

const weapon4 = {
    name: "dumbbell",
    weight: 30
}

const weapon5 = {
    name: "poison",
    weight: 2
}

const weapon6 = {
    name: "axe",
    weight: 15
}

const weapon7 = {
    name: "bat",
    weight: 13
}

const weapon8 = {
    name: "trophy",
    weight: 25
}

const weapon9 = {
    name: "pistol",
    weight: 20
}


//ARRAYS
// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];

// Rooms' Collection
var roomsArray = [{
    name: "Dining Room"
}, {
    name: "Conservatory"
}, {
    name: "Kitchen"
}, {
    name: "Study"
}, {
    name: "Library"
}, {
    name: "Billiard Room"
}, {
    name: "Lounge"
}, {
    name: "Ballroom"
}, {
    name: "Hall"
}, {
    name: "Spa"
}, {
    name: "Living Room"
}, {
    name: "Observatory"
}, {
    name: "Theater"
}, {
    name: "Guest House"
}, {
    name: "Patio"
}];


// FUNCTIONS


//Random Selector Function

//Longform
// function randomSelector(randomArr) {
//     let cardStack = randomArr;
//     let cardNum = cardStack.length;

//     let random = Math.random();
//     let randomIndex = Math.floor(random * cardNum);
//     let randomCardStack = cardStack[randomIndex];

//     return randomCardStack;
// }
// randomSelector(roomsArray);


//shorter form:
function randomSelector(randomArr) {
    let randomCard = randomArr[Math.floor(Math.random() * randomArr.length)];
    return randomCard;
}
randomSelector(roomsArray);



//Create the Mystery

function pickMistery() {

    let suspect = randomSelector(charactersArray);
    let weapon = randomSelector(weaponsArray);
    let room = randomSelector(roomsArray);

    const misteryEnvelope = {
        suspect: suspect,
        weapon: weapon,
        room: room
    };

    return misteryEnvelope;
}



//Reveal the mystery

function revealMistery(misteryEnvelope) {
    return misteryEnvelope.suspect.first_name + " " + misteryEnvelope.suspect.last_name + " killed Mr. Boddy using the " + misteryEnvelope.weapon.name + " in the " + misteryEnvelope.room.name + "!!!!";
}