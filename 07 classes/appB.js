class Plant{
    constructor(naam,leeft){
        this.naam = naam
        this.leeft = leeft
    }

    eatfood(foodToEat){
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een "+ this.naam)
        console.log("ik eet nu "+ foodToEat.naam)
        console.log("mijn honger: " + this.honger)
    }
}

class Dino
{

    constructor(naam ,vleeseter ,leeftijd ,honger ,leeft){
        this.naam = naam;
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
        this.honger = honger
        this.leeft = leeft
    }

    eatfood(foodToEat){
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een "+ this.naam)
        console.log("ik eet nu "+ foodToEat.naam)
        console.log("mijn honger: " + this.honger)
    }

}

class App
{

    runApplincation()
    {
        console.log("hello world");

        let dino = new Dino("t-rex","true", 30, true , true);
        let plantenEter = new Dino("Triceratops",false,20,true ,true)
        let plant1 = new Plant("gras", true)
        let plant2 = new Plant("struik", true)
        console.log(dino)
        console.log(plantenEter)

        plantenEter.eatfood(plant1);
        plantenEter.eatfood(plant2);
        dino.eatfood(plantenEter);
        console.log("leeft "+ plantenEter.naam + "? " + plantenEter.leeft)
        console.log("de leeftijd van deze " + dino.naam + " is: "+ dino.leeftijd)
        console.log("en deze " + dino.naam + " eet vlees: "+ dino.vleeseter)

    }
}
let app = new App();
app.runApplincation();