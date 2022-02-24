const creatures = {
    hero:{
        Garen:{
            hp:300 ,
            DiceCount:1 ,
            name:"garen",
            elementId:"hero",
            image:"./img/Garen.jpg"

        },
        XinZhao:{
            hp:150 ,
            DiceCount: 3,
            name:"xin Zhao",
            elementId : "hero",
            image:"./img/XinZhao.jpg"
            
        },
        Vayne:{
            hp:100 ,
            DiceCount:8 ,
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
            image:"./img/skeleton.jpg"
        },
        KarthusTHEMinister:{
            hp:100 ,
            DiceCount: 2,
            name: "karthus",
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