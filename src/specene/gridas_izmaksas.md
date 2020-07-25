## :small_orange_diamond: Grīdas maiņas izmaksu aprēķinu programma

!!! question "Problēmsituācija"

    Pasūtītājs Andris Ziediņš, remontē dzīvokļus un sagatavo tāmes. Andra draugs, kas ir programmētājs, izveidoja specifikāciju pēc Andra prasībām.
    Jūsu uzdevums ir uzrakstīt funkciju, kas no dotiem argumentiem aprēķina un atgriež Andrim derīgu rezultātu.

!!! quote "Andra formulējums"

    Gribu zināt cik izmaksās ieklāt linoleju. Apnicis katru reizi uz papīra rēķināt.

??? tip "Specifikācijas"

    === "Slikti formulēta specifikācija"
        - ievadīt linoleja cenu
        - ievadīt telpas izmēru
        - izvadīt izmaksas
    
    === "Labi formulēta specifikācija"
        - ievadīt linoleja cenu $EUR/m^2$
        - ievadīt linoleja ruļļa platumu $m$
        - ievadīt telpas platumu un garumu $m$
        - aprēķināt izmaksas, noapaļojot telpas garumu un platumu uz augšu
        - izvadīt izmaksas $EUR$

??? example "Programmas kods"

    === "Python"

        ``` python
            import math

            def gridas_izmaksa(cena, linoleja_platums, telpas_platums, telpas_garums):
                telpas_izmers = math.ceil(telpas_garums) * math.ceil(telpas_platums)
                izmaksa = telpas_izmers / linoleja_platums

                return izmaksa

            cena1 = 2.25
            linoleja_platums1 = 2.0
            platums1 = 5.25
            garums1 = 6.0

            print("izklājot garumā:")
            print(gridas_izmaksas(cena1, linoleja_platums1, platums1, garums1))
            print("izklājot platumā")
            print(gridas_izmaksas(cena1, linoleja_platums1, garums1, platums1))
        ```

??? info "Rezultātu piemēri"

    ```

        izklājot garumā:
        13.43
        izklājot platumā:
        23.45

    ```
