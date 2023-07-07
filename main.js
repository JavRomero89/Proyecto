const habilidades = {
    'health': 3,
    'boost': 2,
    'leech': 50,
    'fireBall': 24,
    'ironBody': 8
}
let nameClassMate = ["Morales", "Otniel", "Oscar", "Santiago", "Javier"]
let nameTeacher = ["Ángel", "Marcos", "Pedro", "Daniel", "Millard"]
let character1 = {}
let character2 = {}


// function startGame() {

function createCharacter1() {
    let personaje1 = Math.ceil(Math.random() * nameClassMate.length - 1)
    let hp = 100//prompt("Health Points","100")
    let str = 20//prompt("Strength","20")
    let def = 8//prompt("Defense","8")

    character1 = {
        name: nameClassMate[personaje1],
        hp: hp,
        str: str,
        def: def
    }
    console.log(character1);
}
createCharacter1()

function createCharacter2() {
    let personaje2 = Math.ceil(Math.random() * nameTeacher.length - 1)
    let hp = 100//prompt("Health Points","100")
    let str = 10//prompt("Strength","10")
    let def = 15//prompt("Defense","15")

    character2 = {
        name: nameTeacher[personaje2], 
        hp: hp,
        str: str,
        def: def
    }
    console.log(character2);
}
createCharacter2()

function attack1(character1, character2) {

    let peleita1 = character2.str - character1.def;
    character1.hp -= peleita1;
    console.log("El enemigo atacó, Tu personaje tiene " + character1.hp + " de vida");
    if (character1.hp > 0) {
        attack2(character1, character2)
    }
}
attack1(character1, character2)

function attack2(character2, character1) {

    let peleita2 = character1.str - character2.def;
    character2.hp -= peleita2;
    console.log("Tu Personaje atacó, el enemigo tiene " + character2.hp + " de vida");

    if (character2.hp > 0) {
        attack1(character2, character1)
        character2.hp*= 2;
        character2.str *= 1.75;
        console.log(character2);
    }
    else {
        alert("El enemigo ha entrado en su segunda fase");
        
    }
}
// attack2(character2, character1)

// character2.hp *= 2;
// character2.str *= 1.75;

let habilidad = habilidades.elegir;
let elegir = prompt("Elegir entre health o boost");
if (elegir === "health" || elegir === "boost") {
    character1.hp += habilidad * character1.hp;
    character1.str += habilidad * character1.str
    console.log("¡El personaje ha utilizado la habilidad " + elegir + "!");
    
} else {
    console.log(alert = "La habilidad escogida no existe!!");
    prompt("Elegir entre health o boost");
    
}



// }
// startGame()