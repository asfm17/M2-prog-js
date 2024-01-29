class App {
    runApplication() { 
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d"); 

        this.teken200Cirkels(g);
        let q = Math.floor(Math.random() * 2);
        console.log(canvas);  
    }

    teken200Cirkels(g) {
        let q = Math.floor(Math.random() * 4);

        for (let i = 0; i < 201; i++) {
            let x = Math.floor(Math.random() * 2001);
            let y = Math.floor(Math.random() * 2001);
            let e = Math.floor(Math.random() * 20);

            g.fillStyle = "red"; 
            g.beginPath();
            g.arc(x, y, e, 0, Math.PI * 2);
            g.stroke();
            g.fill(); 
            g.closePath();
        }
    }
}

let app = new App();
app.runApplication();

