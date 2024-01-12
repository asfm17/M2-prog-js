class App
{
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();
console.log(app.greeting);

function superMooieGlobalFunction()
{
    
    console.log("ik ben globaal");
    console.log("dus je mag mij overal aanroepen");

}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();
//hier maak ik de function (definitie)
function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();//hier gebruikt ik de function
