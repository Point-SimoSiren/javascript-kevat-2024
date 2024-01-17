
// Palvelut sivun näyttäminen
function palvelut() {
    let palvelut = `<h2>Palvelumme</h2>
            <p>Eläinlääkäri</p>
            <p>Päivähoito</p>
            <p>Yöhoito</p>
    `
    document.getElementById("sisältö").innerHTML = palvelut
}

// Yhteystiedot
function yhteystiedot() {

    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2")
    var teksti = document.createTextNode("Yhteystiedot")
    otsikko.appendChild(teksti)
    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(otsikko)

    var puhelin = document.createElement("h4")
    var puhTeksti = document.createTextNode("P. 05082380928")
    puhelin.appendChild(puhTeksti)
    sisältö.appendChild(puhelin)

}

function tumma() {
    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "silver"
    localStorage.setItem("teema", "tumma")
}

function vaalea() {
    document.getElementById("sivu").style.backgroundColor = "white"
    document.getElementById("sivu").style.color = "black"
    localStorage.setItem("teema", "vaalea")
}

// Suoritetaan aina alussa
if (localStorage.getItem("teema") == "tumma") {
    tumma()
}
else {
    vaalea()
}

//localStorage.clear()






