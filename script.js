import creatures from "./data.js"
const  {hero:{Garen,XinZhao,Vayne} ,monster:{Skeletons,KarthusTHEMinister,Mordkaiser} } = creatures
console.log(Garen.image)
document.querySelector(".hero-up").style.backgroundImage  = `url('${Garen.image}')`
document.querySelector(".monster-up").style.backgroundImage  = `url('${Mordkaiser.image}')`