

function anotherFunctionWithArguments()
{
    console.log("hello world in de nieuwClassFunction");
}

function heeftEenResultaat()
{
    let resultaat=1;
    return resultaat
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y
  
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function coolerekenFunctie(u,h,l,logY)
{
    Math.log(1) + h + Math.pow(u,2);
    console.log(logY);
    return logY
}
let u = 9;
let h = 8;
let l = 15;


function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout");
    console.log(shoutout);
    
}
argumentsAreHandy("Super Shout Out")

class App
{
    anotherFunctionWithArguments()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
        console.log("MARIO!")
        console.log("BHWAHAHA!!!")
        let result = (4 + 5) * 2;
        console.log(result); 
        
    }
}
function aArgument()
{
    console.log("kom maar met je argument");
    console.log("hier:");
    console.log(aArgument);
}

let app = new App();
app.anotherFunctionWithArguments();
console.log(app.greeting);

function superMooieGlobalFunction()
{
    
    console.log("ik ben globaal");
    console.log("dus je mag mij overal aanroepen");

}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();
