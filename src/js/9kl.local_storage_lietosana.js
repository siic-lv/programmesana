function skaititajs() {
    if (localStorage.skaititajs) {
        localStorage.skaititajs = Number(localStorage.skaititajs) + 1
    } else {
        localStorage.skaititajs = 1;
    }

    document.getElementById("rezultats").innerText = "Tu esi nospiedis pogu " + localStorage.skaititajs + " reizes";
  }