def ievarijums(aboli_svars, cukurs_uz_kg):
    cukura_cena = 0.75
    izmaksa_kg = cukura_cena * cukurs_uz_kg
    return izmaksa_kg * aboli_svars

aboli = 1.5
cukurs = 0.7
print("Uz {} kg ābolu izmaksas būs {} EUR".format(aboli, ievarijums(aboli, cukurs)))
