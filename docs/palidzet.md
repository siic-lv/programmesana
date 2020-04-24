# Materiālu uzlabošana un papildināšana

## Kļūdu labojumu iesniegšana

Vēlamais veids kļūdu labošanai - *pull request* uz materiālu bāzes repositoriju. Katrā lapā labajā augšējā stūrī ir "edit" poga, kas aizvedīs uz GitHub attiecīgo failu automātiski.

Ja nejūtaties pietiekami komfortabli, lai veiktu izmaiņas un iesniegtu pull request, varat atvērt *issue*, bet šajā gadījumā var paiet ilgāks laiks līdz labojuma iekļaušanai lapā.

*TODO: aprakstīt darbības pa soļiem.*

## Jaunu uzdevumu pievienošana

Vēlamais veids jaunu uzdevumu iesniegšanai - *pull request* uz materiālu bāzes repositoriju.

Ja uzdevumam **nav** nepieciešams koda paraugs, var iesniegt *issue* ar uzdevuma aprakstu.

Uzdevuma piemēram *nav* obligāti būt vairākās programmēšanas valodās.

Failu struktūra uzdevumu aprakstam un kodam:

??? info "Struktūra"

    ```
    /docs
        /pamatskola
            /N.klase.md - uzdevuma teksts
    /src
        /js
            /Nkl.uzdevuma-nosaukums.js
        /python
            /Nkl.uzdevuma-nosaukums.py
    ```

Zemāk redzams piemērs uzdevuma aprakstam. Vai arī izmantojiet par paraugu jau esošos uzdevumus attiecīgajā klašu grupā.

??? note "Uzdevuma apraksta piemērs Markdown sintaksē"

    ```markdown

    !!! question "Uzdevums"

    Uzraksti funkciju *kautkas*, kas aprēķina *kautko*.

    === "Python"

        ``` python
        --8<-- "src/python/7kl.burta-skaits.py" 
        ```

    === "Javascript"

        ``` js
        --8<-- "src/js/7kl.burta-skaits.js" 
        ```

    ??? info "Rezultātu piemēri"

        Arguments | Rezultāts
        --------- | ----
        "kaut kas" | 42

    ??? hint "Valodas sintakse"

        === "Python"
            Python specifiski linki vai informācija par noderīgām funkcijām

        === "Javascript"
            JS specifiski linki vai informācija par noderīgām funkcijām
    
    ```

!!! important "Koda ievietošanas sintakse"

    Lai koda ievietošanas sintakse strādātu korekti, pēc faila path nedrīkst būt atstarpe (piemērā augstāk tā nepieciešama, lai varētu rādīt markdown izejas kodu).

    Ievietojot kodu pieejama papildus funkcionalitāte - rindiņu numerācija un konkrētu rindiņu iekrāsošana:

    ??? example "Piemērs linenum un line highlight kodā"

        === "Rezultāts"

            ``` python linenums="1" hl_lines="2 4"
            --8<-- "src/python/7kl.burta-skaits.py"
            ```

        === "Markdown"

            ```markdown
                ``` python linenums="1" hl_lines="2 4"
                --8<-- "src/python/7kl.burta-skaits.py"
                ```
            ```

## Issues atrisināšana ar pull request

Ja vēlaties palīdzēt projektam, varat droši paņemt kādu no esošiem *issues*, uzrakstīt attiecīgo markdown kodu un veikt pull request, atsaucoties uz attiecīgo issue.
