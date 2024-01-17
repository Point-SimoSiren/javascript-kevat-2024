 const email = "akseli.vonkumula@yritysoy.fi"
 // Erota etu- ja sukunimi
 var osoitteenOsat = email.split('@')
 var kokonimiPisteella = osoitteenOsat[0]
 var kokonimi = kokonimiPisteella.split('.')
 var etunimi = kokonimi[0]
 var sukunimi = kokonimi[1]

 console.log("Etunimi: " + etunimi)
 console.log("Sukunimi: " + sukunimi)

 if (sukunimi.indexOf("v") === 0) {
    console.log("Sukunimi alkaa v:lla")
 }

 // Tuloste:
 //Etunimi: akseli
 //Sukunimi: kumula