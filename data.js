const creatures = {
    hero:{
        Garen:{
            hp:200 ,
            DiceCount:1 ,
            name:"garen",
            elementId:"hero",
            image:"./img/Garen.jpg"

        },
        XinZhao:{
            hp:100 ,
            DiceCount: 2,
            name:"xin Zhao",
            elementId : "hero",
            image:"./img/XinZhao.jpg"
            
        },
        Vayne:{
            hp:50 ,
            DiceCount:4 ,
            name:"vayne",
            elementId:"hero",
            image:"./img/Vayne.jpg"
        }
    },
    monster:{
        Skeletons:{
            hp:50 ,
            DiceCount:1 ,
            name:"skeleton",
            elementId:"monster",
            image:"./img/skeletonTroop.png"
        },
        KarthusTHEMinister:{
            hp:100 ,
            DiceCount: 2,
            name: "karthusTheMinister",
            elementId: "monster",
            image:"./img/KarthusTHEMinister.jpg"
        },
        Mordkaiser:{
            hp:400 ,
            DiceCount:1 ,
            name:"mordkaiser",
            elementId:"monster",
            image:"./img/Mordekaiser.jpg"
        }
    }
}
export default creatures