// it should be OOP use class and methods 

import creatures from "./data.js"

let choosenChampion = ""
document.querySelector(".garen").addEventListener("click", choose1)
document.querySelector(".xin").addEventListener("click", choose2)
document.querySelector(".vayne").addEventListener("click", choose3)
document.querySelector(".btn-grad").classList.add("hidden")
let monsterArray =[ ...Object.keys(creatures.monster)]
function setNextMonster(){ 
    monsterArray.shift()
    return monsterArray[0]
}

function choose1() {
    console.log(choosenChampion)
    choosenChampion = "garen"
    document.querySelector(".garen").classList.add("hidden")
    document.querySelector(".xin").classList.add("hidden")
    document.querySelector(".vayne").classList.add("hidden")
    document.querySelector(".choose-champion h1").classList.add("hidden")
    document.querySelector(".btn-grad").classList.remove("hidden")

    getChampion()

} function choose2() {
    console.log(choosenChampion)
    choosenChampion = "xin"
    document.querySelector(".garen").classList.add("hidden")
    document.querySelector(".xin").classList.add("hidden")
    document.querySelector(".vayne").classList.add("hidden")
    document.querySelector(".choose-champion h1").classList.add("hidden")
    document.querySelector(".btn-grad").classList.remove("hidden")
    getChampion()

}
function choose3() {
    console.log(choosenChampion)
    choosenChampion = "vayne"
    document.querySelector(".garen").classList.add("hidden")
    document.querySelector(".xin").classList.add("hidden")
    document.querySelector(".vayne").classList.add("hidden")
    document.querySelector(".choose-champion h1").classList.add("hidden")
    document.querySelector(".btn-grad").classList.remove("hidden")
    getChampion()

}
class Charracter {
    constructor(data) {
        Object.assign(this, data)
        this.maxhp = this.hp
        this.dead = false
    }

    getCharecterHTML() {
        const { hp, DiceCount, name, elementId, image } = this
        return `
        <div class="${elementId}">
            <div class="up" style=" background-image:url('${image}');background-repeat: no-repeat;
            background-size: cover;">
                <h2>${name}</h2>
                <div class="outside-bar">
                    <div class="inside-bar">${hp}</div>
                </div> 
            </div>
            <div class="down">
                <div class="dicerools">${DiceCount}</div>
            </div> 
        </div>
        `
    }
    getDiceCount(Dicevalues) {

        return Dicevalues.map((num) => `<div class="dicerools">${num}</div>`)
    }
    setDice() {
        const diceArray = new Array(this.DiceCount).fill(0).map(() => { return Math.floor(Math.random() * 6) + 1 })
        return diceArray
    }
    takeDamage(Dicevalues) {
        const totaldmg = Dicevalues.reduce((prev, current) => { return prev + current })
        this.hp -= totaldmg
        if (this.hp <= 0) {
            this.hp = 0
            this.dead = true
        }
        // console.log(totaldmg)
    }
    gethp() {
        document.querySelector(`.${this.elementId} .inside-bar`).style.width = `${this.hp * 100 / this.maxhp}%`
        document.querySelector(`.${this.elementId} .inside-bar`).textContent = this.hp
    }


}

let hero
let  skeleton = new Charracter(creatures.monster.Skeletons)
let  KarthusTHEMinister = new Charracter(creatures.monster.KarthusTHEMinister)
let  Mordkaiser = new Charracter(creatures.monster.Mordkaiser)

function getChampion() {
    if (choosenChampion === "garen") {
        hero = new Charracter(creatures.hero.Garen)
        render(hero,skeleton)
    } else if (choosenChampion === "xin") {
        hero = new Charracter(creatures.hero.XinZhao)
        render(hero,skeleton)
    } else if (choosenChampion === "vayne") {
        hero = new Charracter(creatures.hero.Vayne)
        render(hero,skeleton)
    }


}


function render(hero,monster) {

    hero.setDice()
    monster.setDice()
    document.querySelector(".hero").outerHTML = hero.getCharecterHTML()
    document.querySelector(".monster").outerHTML = monster.getCharecterHTML()
    document.querySelector(".hero .down").innerHTML = hero.getDiceCount(hero.setDice())
    document.querySelector(".monster .down").innerHTML = monster.getDiceCount(monster.setDice())
    

}
document.querySelector(".btn-grad").addEventListener("click", attack)
function attack() {
    if(!skeleton.dead){
    hero.setDice()
    skeleton.setDice()
    document.querySelector(".hero .down").innerHTML = hero.getDiceCount(hero.setDice())
    document.querySelector(".monster .down").innerHTML = skeleton.getDiceCount(skeleton.setDice())
    hero.takeDamage(skeleton.setDice())
    hero.gethp()
    skeleton.takeDamage(hero.setDice())
    skeleton.gethp()

    }
    
    if(skeleton.dead){
        render(hero,KarthusTHEMinister)
        hero.setDice()
        KarthusTHEMinister.setDice()
        document.querySelector(".hero .down").innerHTML = hero.getDiceCount(hero.setDice())
        document.querySelector(".monster .down").innerHTML = KarthusTHEMinister.getDiceCount(KarthusTHEMinister.setDice())
        hero.takeDamage(KarthusTHEMinister.setDice())
        hero.gethp()
        KarthusTHEMinister.takeDamage(hero.setDice())
        KarthusTHEMinister.gethp()
        
        

    }if(KarthusTHEMinister.dead){
        render(hero,Mordkaiser)
        hero.setDice()
        Mordkaiser.setDice()
        document.querySelector(".hero .down").innerHTML = hero.getDiceCount(hero.setDice())
        document.querySelector(".monster .down").innerHTML = Mordkaiser.getDiceCount(Mordkaiser.setDice())
        hero.takeDamage(Mordkaiser.setDice())
        hero.gethp()
        Mordkaiser.takeDamage(hero.setDice())
        Mordkaiser.gethp()
    

    }if(Mordkaiser.dead){
        
        endgame()

    }
    endgame()
}
function endgame() {
    if (skeleton.dead && KarthusTHEMinister.dead && Mordkaiser.dead ) {
        document.querySelector(".container").classList.add("hidden")
        document.querySelector(".endgame").style.color ="blue"
        document.querySelector(".endgame").classList.remove("hidden")
        document.querySelector(".endmassege").textContent = "you won 😎 but dont try again"    
    } else if (hero.dead) {
        document.querySelector(".endgame").classList.remove("hidden")
        document.querySelector(".container").classList.add("hidden")
        document.querySelector(".endmassege").textContent = "you died 😂 dont try again"
    }

}




