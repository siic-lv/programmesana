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
        --8<-- "src/vidusskola/p1/python/gridas_izmaksas.py"
        ```

    === "Javascript"

        ``` js
        --8<-- "src/vidusskola/p1/js/gridas_izmaksas.js"
        ```

??? info "Rezultātu piemēri"

    ```

        izklājot garumā:
        13.43
        izklājot platumā:
        23.45

    ```
