class App {
    runApplincation() {
        let uibutton3 = document.getElementById("show-image-button")
        let uibutton2 = document.getElementById("myButton2")
        let uibutton = document.getElementById("myButton")
        let uibutton4 = document.getElementById("kleuren")
        let uibutton5 = document.getElementById("show")

        let localeFunction = function (e) {
            console.log("click");
        };
        uibutton.addEventListener("click", localeFunction);
        uibutton.addEventListener("click", function (e) {
            console.log("click!")
        });


        uibutton.addEventListener("click", (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });


        uibutton2.addEventListener("click", (e) => {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });


        uibutton3.addEventListener("click", (e) => {
            const showImageButton = document.getElementById("show-image-button");
            const myImage = document.getElementById("myimg");
            showImageButton.addEventListener("click", () => {
                const para = document.createElement("p");
                const node2 = document.createTextNode("ITS A ME");
                para.appendChild(node2);
                document.body.appendChild(para);
                myImage.hidden = !myImage.hidden;

            });
        });


        function displayText() {
            var text = document.getElementById("textField");
            text.style.display = "block";

        }

        uibutton4.addEventListener("click", (e) => {
            let random = Math.floor(Math.random() * 2);

            if (random < 0.2) {
                uibutton5.style.backgroundColor = "#FF0000"
            } else if (random < 0.75) {
                uibutton5.style.backgroundColor = "#800080"
            } else if (random > 0.75) {
                uibutton5.style.backgroundColor = "#FF0000"
            }
            show.hidden = !show.hidden;
        });
    }
}
let app = new App();
app.runApplincation();
