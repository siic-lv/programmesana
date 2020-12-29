// pašreizejais laiks piemērotā formātā procesa pierakstam (log):
// "29/12/2020, 15:56:11"
let tagad = new Date(Date.now()).toLocaleString();
// tikai stundas:minūtes:sekundes:
let laiks = tagad.split(" ")[1]
// tikai datums
let datums = tagad.split(" ")[0]

// pašreizējais laiks pilnā formātā:
// Tue Dec 29 2020 15:58:29 GMT+0200 (Eastern European Standard Time)
let laiks = new Date(Date.now());

// nedēļas diena 0-6 (0 - svētdiena, 1 - pirmdiena utt.)
let nedelasDiena = laiks.getDay();
// mēnesis 0-11 (janvaris ir 0 mēnesis, decembris - 11)
let menesis = laiks.getMonth();
// mēneša diena (1-31)
let menesaDiena = laiks.getDate();
