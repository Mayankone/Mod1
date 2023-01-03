

class Ship{
    constructor(name, hull, firepower, accuracy){
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
}
}

let USSHELLOWORLD2 = new Ship("USSHELLOWORLD", 20, 5, 0.7);

class Fleet{
    constructor(){
        this.ships = [];
    }
    addShip(name){
        let hull = Math.floor(Math.random() * (6 - 3 + 1) + 8);
        let firepower =  Math.floor(Math.random() * (4 - 2 + 1) + 2);
        let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        const alienShip = new Ship(name, hull, firepower, accuracy);
        this.ships.push(alienShip);
    }
}
let alienFleet = new Fleet();
alienFleet.addShip("Ship1");
alienFleet.addShip("Ship2");
alienFleet.addShip("Ship3");
alienFleet.addShip("Ship4");
alienFleet.addShip("Ship5");
alienFleet.addShip("Ship6");

const loseAlert = document.getElementById("Float");
const myHull = document.getElementById("USHULL");
const myFirePower = document.getElementById("USFIREPOWER");
const myAccuracy = document.getElementById("USACCURACY");
myHull.innerText = "Hull: " + USSHELLOWORLD2.hull;
myFirePower.innerText = "Firepower: " + USSHELLOWORLD2.firepower;
myAccuracy.innerText = "Accuracy: " + USSHELLOWORLD2.accuracy;
const alienShipHulls = document.querySelectorAll(".Ahull");
const imageArray = document.querySelectorAll('.image-container img'); //Creates array of images


const startButton = document.getElementById("Down");
const retreatButton = document.getElementById("END");

alienFleet.ships.forEach((element, index) => {                               // Add the variable amounts for the alien ships
    if(element.name == "Ship1"){
        let shiphull1 = document.querySelector(".spantag1 .Ahull");
        let firepower1 = document.querySelector(".spantag1 .Firepower");
        let accuracy1 = document.querySelector(".spantag1 .Accuracy");
        accuracy1.innerHTML = "Accuracy: " + element.accuracy;
        shiphull1.innerHTML = "Hull: " + element.hull;
        firepower1.innerHTML = "Firepower: " + element.firepower;
    }
    if(element.name == "Ship2"){
        let shiphull2 = document.querySelector(".spantag2 .Ahull");
        let firepower2 = document.querySelector(".spantag2 .Firepower");
        let accuracy2 = document.querySelector(".spantag2 .Accuracy");
        accuracy2.innerHTML = "Accuracy: " + element.accuracy;
        firepower2.innerHTML = "Firepower: " + element.firepower;
        shiphull2.innerHTML = "Hull: " + element.hull;
    }
    if(element.name == "Ship3"){
        let shiphull3 = document.querySelector(".spantag3 .Ahull");
        let firepower3 = document.querySelector(".spantag3 .Firepower");
        let accuracy3 = document.querySelector(".spantag3 .Accuracy");
        accuracy3.innerHTML = "Accuracy: " + element.accuracy;
        firepower3.innerHTML = "Firepower: " + element.firepower;
        shiphull3.innerHTML = "Hull: " + element.hull;
    }
    if(element.name == "Ship4"){
        let shiphull4 = document.querySelector(".spantag4 .Ahull");
        let firepower4 = document.querySelector(".spantag4 .Firepower");
        let accuracy4 = document.querySelector(".spantag4 .Accuracy");
        accuracy4.innerHTML = "Accuracy: " + element.accuracy;
        firepower4.innerHTML = "Firepower: " + element.firepower;
        shiphull4.innerHTML = "Hull: " + element.hull;
    }
    if(element.name == "Ship5"){
        let shiphull5 = document.querySelector(".spantag5 .Ahull");
        let firepower5 = document.querySelector(".spantag5 .Firepower");
        let accuracy5 = document.querySelector(".spantag5 .Accuracy");
        accuracy5.innerHTML = "Accuracy: " + element.accuracy;
        firepower5.innerHTML = "Firepower: " + element.firepower;
        shiphull5.innerHTML = "Hull: " + element.hull;
    }
    if(element.name == "Ship6"){
        let shiphull6 = document.querySelector(".spantag6 .Ahull");
        let firepower6 = document.querySelector(".spantag6 .Firepower");
        let accuracy6 = document.querySelector(".spantag6 .Accuracy");
        accuracy6.innerHTML = "Accuracy: " + element.accuracy;
        firepower6.innerHTML = "Firepower: " + element.firepower;
        shiphull6.innerHTML = "Hull: " + element.hull;
    }
})

const loss = () => {
    alert("USS WORLD SHIP HAS NO HULL REMAINING! Game over.");
    loseAlert.innerHTML = "YOU LOSE";
}

const win =() => {
    alert("ALIEN SHIPS ALL DEFEATED! YOU WIN!");
    loseAlert.innerHTML = "YOU WIN";
}


const loopFunction = () => {
let defeated = false;
for(let i = 0; i<alienFleet.ships.length;i++){
    if(defeated == true){
        console.log("USS ship has lost");
        break;
    }
    while(defeated != true){
        if(USSHELLOWORLD2.accuracy > Math.random()){ // US SHIP ATTACKS FIRST
            alienFleet.ships[i].hull = alienFleet.ships[i].hull - USSHELLOWORLD2.firepower;
            console.log("Alien ship has been hit!");
            alienShipHulls.forEach((element) => {
                if(element.id == i){
                    element.innerText = "Hull: " + alienFleet.ships[i].hull;  
                }   
            })
        }
        else if(USSHELLOWORLD2.accuracy < Math.random()){
            console.log("Missed Alien ship!");
        }   
            if(alienFleet.ships[i].hull <= 0){ // if alien fleet has no hull, delete ship and move onto the next element
                imageArray.forEach((element, index) => {
                    if(index == i){
                        element.src = "./enemy_ship_dead.png"
                    }
                })
                console.log(alienFleet.ships[i].name + " has lost");
                if(alienFleet.ships[5].hull <= 0){
                    console.log("YOU WIN!");
                    win();
                }
                break;
            }
            else if(alienFleet.ships[i].hull > 0 && alienFleet.ships[i].accuracy > Math.random()){ // If alien fleet has hull, have it counter attack
                USSHELLOWORLD2.hull = USSHELLOWORLD2.hull - alienFleet.ships[i].firepower;
                console.log("US Ship has been hit!");
                myHull.innerText = "Hull: " + USSHELLOWORLD2.hull;
            }
            else if(alienFleet.ships[i].hull > 0 && alienFleet.ships[i].accuracy < Math.random()){
                console.log("Alien ship missed!");
            }
             if(USSHELLOWORLD2.hull <= 0){
                loss();
                defeated = true;
            }
        }
        
    }
}


const showAlert = () => {
    alert("You lose because of a swift retreat! Battle over.");
}

startButton.addEventListener("click", loopFunction);
retreatButton.addEventListener("click", showAlert);

