/* const alienHull = (min, max) => { //3,6
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const alienFirepower = (min, max) => { // 2,4
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const alienAccuracy = (min, max) => { // .6, 0.8
    return Math.random() * (max - min) + min;
} */

let USSHELLOWORLD = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
};

let alienArray = [
    {
    name: "Alien1",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6
    },
    {
    name: "Alien2",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6
    },    
    {
    name: "Alien3",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6 
    },    
    {
    name: "Alien4",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6 
    } ,   
    {
    name: "Alien5",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
    } ,   
    {
    name: "Alien6",
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (0.8 - 0.6) + 0.6
    },    
]

let i = 0;
while(i<alienArray.length){
    if(USSHELLOWORLD.accuracy > alienArray[i].accuracy){
        console.log("You win");
        i++;
    }
}

console.log(alienArray);
console.log(USSHELLOWORLD);

