class App
{
    runApplication()
    {
        this.greeting = "Starting up";
let boolean = false
let string = "test"
let number = 8000.99
        let appNaam = "Akira's app"
        let appVersie = "2.4"
        let appDatum = "20/11/2023" 
        let appAutheur = "Akira"
        let appCopyright = "Akira copyright"
        let appDistributeur = "Ik"
        let appDarkmode = false 
        
        console.log (boolean)
        console.log (string)
        console.log (number)
        console.log(" App naam: " + appNaam);
        console.log(" App versie: " + appVersie);
        console.log(" App datum: " + appDatum);
        console.log(" App autheur: " + appAutheur);
        console.log(" App copyright: " + appCopyright);
        console.log(" App Distributeur: " + appDistributeur);
        console.log(" darkmode: " + appDarkmode);
        this.greeting = "Opgestart!";



    }
}

let app = new App();
app.runApplication();
console.log(app.greeting);
console.log(" appNaam: " + app.appNaam);
console.log(" versienummer: " + app.versienummer);