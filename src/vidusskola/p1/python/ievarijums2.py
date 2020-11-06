def izmaksas_receptei(recepte, cena):
    summa = 0
    for sastavdala, daudzums in recepte:
        summa += daudzums * cena[sastavdala]
    return summa

def izmaksas_kopa(abolu_svars):
    recepte1 = {“cukurs”: 0.6, “kanelis”: 0.08, “aboli”: 2.0, “udens”: 0.2}
    cenas = {“cukurs”: 0.75, “kanelis”: 30.0, “aboli”: 0.0, “udens”: 0.0}
    izmaksas_kg = izmaksas_receptei(recepte1, cenas) / recepte[“aboli”]
    ievarijuma_izmaksas = svars * izmaksas_kg

    print(“Uz {} kg ābolu izmaksas būs {}”.format(abolu_svars, ievarijuma_izmaksas))