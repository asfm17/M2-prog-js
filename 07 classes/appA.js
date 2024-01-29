class Greet
{
       constructor(){
            this.greeting = "Greeting!"
       }
       showGreeting()
       {
        console.log("Greeting van buiten:" +this.greeting)
       }
}

class GoodBye
{
       constructor(){
       }
       showBye(){
        console.log("Bye Bye van buiten:"+ this.GoodBye)
       }

}


let greet = new Greet();
greet.showGreeting();
let bye = new GoodBye();
bye.showBye();
greet.showGreeting();
bye.showBye();
greet.showGreeting();
bye.showBye();
greet.showGreeting();
bye.showBye();
greet.showGreeting();
bye.showBye();

console.log("Greeting van buiten:" +greet.greeting)