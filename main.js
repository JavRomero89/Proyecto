const habilidades = {
    'health': 3,
    'boost': 2,
    'leech': 50,
    'fireBall': 24,
    'ironBody': 8
}
let nameClassMate =["Morales", "Otniel", "Oscar", "Santiago", "Javier"]
let nameTeacher = ["Ángel","Marcos","Pedro","Daniel","Millard"]

function startGame() {
    
    function createCharacter1() {
        let personaje = Math.ceil(Math.random() * nameClassMate.length)
       let character1 ={
        name: nameClassMate[personaje],
        HP:(prompt("Health Points","100")),
        STR:(prompt("Strength","20")),
        DEF:(prompt("Defense","8"))
       }
       console.log(character1);
    }
     createCharacter1() 

     function createCharacter2() {
        let personaje = Math.ceil(Math.random() * nameTeacher.length)
       let character2 ={
        name: nameTeacher[personaje],
        HP:(prompt("Health Points","100")),
        STR:(prompt("Strength","10")),
        DEF:(prompt("Defense","15"))
       }
       console.log(character2);
    }
     createCharacter2() 

     function Attack(character1,character2) {
        let Peleita= character1.HP - (character2.STR - character1-DEF)
        console.log("El enemigo atacó, Tu personaje tiene" + character1.HP);

     }Attack()
     function Attack(character1,character2) {
        let Peleita= character2.HP - (character1.STR - character2-DEF)
        console.log("El personaje atacó, El enemigo tiene" + character2.HP);

     }
     Attack()
}
startGame()