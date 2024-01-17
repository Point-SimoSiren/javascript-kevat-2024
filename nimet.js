function erotaNimiSahkopostista(sahkoposti) {
    // Erottele nimi ja domain '@' merkin perusteella
    var osat = sahkoposti.split('@');
    
    // Tarkista, että sähköpostiosoite sisältää oikean määrän osia
    if (osat.length === 2) {
      var nimiOsat = osat[0].split('.');
      
      // Tarkista, että nimen osia on kaksi
      if (nimiOsat.length === 2) {
        var etunimi = nimiOsat[0];
        var sukunimi = nimiOsat[1];
        
        // Palauta tulos objektina
        return {
          etunimi: etunimi,
          sukunimi: sukunimi,
          domain: osat[1]
        };
      } else {
        console.log("Virheellinen nimi sähköpostiosoitteessa");
      }
    } else {
      console.log("Virheellinen sähköpostiosoite");
    }
  }
  
  // Testaa funktiota
  var sahkoposti = "pentti.setälä@yritys.fi";
  var tulos = erotaNimiSahkopostista(sahkoposti);
  
  // Tulosta tulos
  console.log("Etunimi: " + tulos.etunimi);
  console.log("Sukunimi: " + tulos.sukunimi);
  console.log("Domain: " + tulos.domain);