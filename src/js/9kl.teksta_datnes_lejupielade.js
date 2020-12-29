function lejupielade() {
    let datnesNosaukums = "nosaukums.txt";
    let teksts = "Mans teksts!";
    let datne = document.createElement("a");
    datne.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(teksts));
    datne.innerText = "Lejupielādēt datus"
    datne.setAttribute('download', datnesNosaukums);

    datne.style.display = 'none';
    document.body.appendChild(datne);

    datne.click();

    document.body.removeChild(datne);
}