
class App {}
    
    {
        function runApplication() {
            
            let headers = document.getElementsByTagName("h1");

            for (let i = 0; i < headers.length; i++) {
                console.log(headers[i]);
            }
        }
        
        
        runApplication();
    }



const headers = ["Header1", "Header2", "Header3"];

for (const header of headers) {
    console.log(header);
}


let app = new App(); 
app.runApplication();

let artist = ["artist1", "artist2", "artist3", "etc"];

console.log(artist);

for (let i = 0; i < length; i++) {
    const element = array[i];
    
}



let nummers = [2, 5, 7];

console.log(nummers);

for (let i = 0; i < nummers.length; i++) {
    nummers[i] += 1;
    console.log(nummers[i]); 
}

for (let i = 0; i < nummers.length; i++) {
    nummers[i] += i; 
    console.log(i + ": " + nummers[i]); 
}

let artists = ["artist1", "artist2", "artist3", "etc"];     


for (let i = 0; i < artists.length; i++) {
    console.log(artists[i]);
}

artists.push("The Cure", "Elton John");

for (let i = 0; i < artists.length; i++) {
    console.log(artists[i]);
}
