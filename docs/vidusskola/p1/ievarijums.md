## :small_orange_diamond: Ziemas krājumu veidošana

!!! question "Problēmsituācija"

    Šogad bijusi ļoti laba ābolu raža. Vecvecāki gatavojas vārīt ievārījumu, bet viņi gribētu aprēķināt un izplānot ievārījuma izmaksas.

!!! quote "Omes formulējums"

    Tik daudz ābolu un ogu! Un visādas jaunas receptes atradu! Naudas cukuram gan ir tik, cik ir. Palīdzi, lūdzu, sarēķināt cik mēs varam savārīt.

??? tip "Specifikācija"

    === "Slikti formulēta specifikācija"
        Funkcijai jāaprēķina cik izmaksās ābolu ievārījums
    === "Labi formulēta specifikācija"
        - Nepieciešama iespēja definēt recepti un tās sastāvdaļas 
        - Nepieciešama iespēja definēt, cik maksā katra sastāvdaļa
        - Sistēmai jāaprēķina kopējās ievārījuma izmaksas, balstoties uz ievadīto ābolu apjomu

??? example "Programmas kods"

    === "Variants 1 (Python)"

        ``` python
        --8<-- "src/vidusskola/p1/python/ievarijums1.py"
        ```

    === "Variants 2 (Python)"

        ``` python
        --8<-- "src/vidusskola/p1/python/ievarijums2.py"
        ```

    === "Variants 3 (JS)"

        ``` python
        --8<-- "src/vidusskola/p1/js/ievarijums2.js"
        ```

??? info "Komentāri"

    Problēma ir aprakstīta pārāk vispārīgi, specifikācija nav pietiekosi detalizēta, bet var kalpot par pamatu diskusijai par nepieciešamo informāciju.
    
    Lai varētu to atrisināt, būtu jānoskaidro daudz dažādas detaļas, piemēram:

    - kādas receptes ome lietos - kādā proporcijā tiek lietoti augļi un cukurs, kāds ir galarezultāts
    - kādas mērvienības ir minētas receptē, kā tas pārvērst SI mērvienībās, piemēram, ja minēti 6 vidēja izmēra āboli uz 100g cukura, kā to pārvērst gramos
    - ko tieši ome grib zināt, piemēram, kuru recepti ņemt, cik izmaksās cukurs noteiktam augļu daudzumam, cik ievārījuma iznāks izmantojot noteiktu daudzumu cukura
