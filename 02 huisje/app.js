class App
{
    runApplication()
    { 
        console.log("hello world!");
        let canvas =document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.fillStyle = "red";
       // g.fillRect(0,0,300,300)
       
        

        g.beginPath()         
        g.moveTo(20,30)         
        g.lineTo(20,50)         
        g.closePath()         
        g.stroke();
                 
        g.beginPath()         
        g.moveTo(20,30)         
        g.lineTo(60,40)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(20,50)        
        g.lineTo(60,60)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(60,40)         
        g.lineTo(60,60)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(60,40)         
        g.lineTo(80,30)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(80,30)         
        g.lineTo(80,50)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(60,60)         
        g.lineTo(80,50)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(80,30)         
        g.lineTo(70,20)         
        g.closePath()         
        g.stroke();

        g.beginPath()         
        g.moveTo(70,20)         
        g.lineTo(60,40)         
        g.closePath()         
        g.stroke();
        
        g.beginPath()
        g.moveTo(70,20)
        g.lineTo(30,10)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(30,10)
        g.lineTo(20,30)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(30,10)
        g.lineTo(20,30)
        g.lineTo(60,40);
        g.lineTo(70,20)
        g.closePath()
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(30,41)
        g.lineTo(30,50)
        g.closePath()
        g.stroke();


        g.beginPath()
        g.moveTo(40,50)
        g.lineTo(30,50)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(40,41)
        g.lineTo(40,50)
        g.closePath()
        g.stroke();

        g.beginPath()
        g.moveTo(40,41)
        g.lineTo(30,41)
        g.closePath()
        g.stroke();


    }
}

let app = new App();
app.runApplication();





