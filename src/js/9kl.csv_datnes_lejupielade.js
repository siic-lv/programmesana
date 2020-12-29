function lejupielade() {
    // nepieciešams savienojamībai ar MS Excel
    const universalBOM = "\uFEFF"
    // iegūstam datus no kaut kurienes,
    // piemēram localStorage, html elementa utml
    // šeit tie ir vienkārši mainīgajā dati divdimensiju masīvā
    const dati = [  ["laiks","teksts"],
                    ["10:00","labrīt"],
                    ["12:00","ejam ēst!"]
                 ];

    const datnesNosaukums = "nosaukums.csv";

    // pārveidojam datus csv formātā
    let csvDati = '';
    for (let rinda of dati) {   
        csvDati += rinda.join(".") + '\n';
    }

    // izveidojam elementu
    let datne = document.createElement("a");
    // elementam pievienojam datus
    datne.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(universalBOM+csvDati));
    // elementam pievienojam nepieciešamās īpašības
    datne.innerText = "Lejupielādēt datus"
    datne.setAttribute('download', datnesNosaukums);
    datne.style.display = 'none';
    // pievienojam elementu html lapai
    document.body.appendChild(datne);
    // simulējam noklišķināšanu uz linka
    datne.click();
    // novācam vairs nevajadzīgo elementu
    document.body.removeChild(datne);
  }
