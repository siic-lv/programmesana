function izmaksas_receptei(recepte, cenas) {
    let summa = 0
    for (const [sastavdala, daudzums] of Object.entries(recepte)) {
        summa = summa + (cenas[sastavdala] || 0) * daudzums
    }
    return Math.round(summa * 100) / 100
}

function izmaksas_kopa(abolu_svars) {
    const recepte = {"cukurs": 0.6, "kanelis": 0.08, "aboli": 2.0, "udens": 0.2}
    const cenas = {"cukurs": 0.75, "kanelis": 30.0, "aboli": 0.0, "udens": 0.0}
    const izmaksas_kg = izmaksas_receptei(recepte, cenas) / recepte["aboli"]
    return Math.round(izmaksas_kg * abolu_svars * 100) / 100
}

let aboli = 1.5
console.log(`Uz ${aboli} kg ābolu izmaksas būs ${izmaksas_kopa(aboli)} EUR`)

aboli = 5
console.log(`Uz ${aboli} kg ābolu izmaksas būs ${izmaksas_kopa(aboli)} EUR`)
