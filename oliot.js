
var autot = [{id: 1, merkki: "Toyota", vuosimalli: 2006, hinta: 4500},
 {id: 2, merkki: "BMW", vuosimalli: 1986, hinta: 3500},
 {id: 3, merkki: "Lada", vuosimalli: 1991, hinta: 500}]

var hakusana = ""

 var standard_input = process.stdin
 standard_input.setEncoding('utf-8')
 console.log("JavaScript autohaku")
 console.log("Sovellus suljetaan kirjoittamalla 'exit'")
 process.stdout.write("Hae autoja merkin mukaan: ")
 standard_input.on('data', function (data) {
    // Sovellus suljetaan, kun käyttäjää antaa avainsanan "exit"

    if (data === 'exit\r\n'){
    console.log("Kiitos ja näkemiin.")
    process.exit()
    } 
    
    else {
        hakusana = data.trim()
        autot.forEach(a => {
        if (a.merkki.toLowerCase().indexOf(hakusana.toLowerCase()) > -1) {
        console.log("Merkki: " + a.merkki + "vm." + a.vuosimalli + "Hinta: " + a.hinta)
        }
        }
        )
    }}
 )

 






// autot.forEach(auto => {
//     // Black friday: poista kommentti
//     //auto.hinta = 100
//     console.log(auto.merkki + " vuodelta " + auto.vuosimalli)
//     console.log("Hinta: " + auto.hinta)
//     console.log("___________________________________________________")
// }
// )

// autot.forEach(auto => {
//     if (auto.id === 3) {
//     console.log("Auto id:llä " + auto.id + " on LUJAA LAATUA " + auto.merkki )
//     console.log("___________________________________________________")
//     }
// }

