// it should be OOP use class and methods 

import creatures from "./data.js"

class Charracter {
    constructor(data){
        Object.assign(this,data)
        this.maxhp = this.hp
    }
    
    getCharecterHTML(){
        const {hp,DiceCount,name,elementId,image} = this
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
    getDiceCount(Dicevalues){
        
        return Dicevalues.map((num)=> `<div class="dicerools">${num}</div>`)
    }
    setDice(){
        const diceArray = new Array(this.DiceCount).fill(0).map(()=> 
        {return Math.floor(Math.random()*6)+1})
        return diceArray
    }
    takeDamage(Dicevalues){
        const totaldmg = Dicevalues.reduce((prev ,current)=>  {return prev+current}) 
        this.hp -=totaldmg
        // console.log(totaldmg)
    }
    gethp(){
        document.querySelector(`.${this.elementId} .inside-bar`).style.width=`${this.hp *100/this.maxhp}%`
        document.querySelector(`.${this.elementId} .inside-bar`).textContent=this.hp
    }


}
// document.body.style.width
const garen = new Charracter(creatures.hero.Garen)
const skeleton = new Charracter(creatures.monster.Skeletons)
function render(){
    
    garen.setDice()
    skeleton.setDice()
    document.querySelector(".hero").outerHTML =garen.getCharecterHTML()
    document.querySelector(".monster").outerHTML =skeleton.getCharecterHTML()
    document.querySelector(".hero .down").innerHTML=  garen.getDiceCount(garen.setDice())
    document.querySelector(".monster .down").innerHTML=  skeleton.getDiceCount(skeleton.setDice())
    
}
document.querySelector(".btn-grad").addEventListener("click",attack)
function attack(){
    garen.setDice()
    skeleton.setDice()
    document.querySelector(".hero .down").innerHTML=  garen.getDiceCount(garen.setDice())
    document.querySelector(".monster .down").innerHTML=  skeleton.getDiceCount(skeleton.setDice())
    garen.takeDamage(skeleton.setDice())
    garen.gethp()
    skeleton.takeDamage(garen.setDice())
    skeleton.gethp()
}
render()



