class App
{
    runApplication()
    { 
        console.log("hello world!");
        let canvas =document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);


    }
}

let app = new App();
app.runApplication();



