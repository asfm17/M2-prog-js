class App
{
    runApplication()
    {
        console.log("hello world!");

        let title = document.getElementById("newstitle");
        console.log(title);

        let title2 = document.getElementsByClassName("gamenews")[0];
        let title3 = document.getElementsByClassName("gamenews")[1];
        console.log(title2)

        let random = Math.random();
        console.log(random);
        if(random < 0.5)
        {
            
            title.style.backgroundColor = "red";
            title2.style.backgroundColor = "green";
            title3.style.backgroundColor = "orange";


        }
        else(random < 0.9)
        {
            title.style.backgroundColor = "blue";
            title2.style.backgroundColor = "yellow";

        }
    }
}

let app = new App();
app.runApplication();