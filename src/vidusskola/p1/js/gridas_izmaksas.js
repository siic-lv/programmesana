function gridas_izmaksas(cena, linoleja_platums, telpas_platums, telpas_garums) {
    var telpas_izmers = Math.ceil(telpas_garums) * Math.ceil(telpas_platums);
    var izmaksa = telpas_izmers / linoleja_platums;

    return izmaksa;
}

var cena1 = 2.25;
var linoleja_platums1 = 2.0;
var platums1 = 5.25;
var garums1 = 6.0;

console.log("izklājot garumā:");
console.log(gridas_izmaksas(cena1, linoleja_platums1, platums1, garums1));
console.log("izklājot platumā");
console.log(gridas_izmaksas(cena1, linoleja_platums1, garums1, platums1));
