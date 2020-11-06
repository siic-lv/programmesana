## :small_orange_diamond: Stabili podesti

!!! question "Problēmsituācija"

    Pie jums ir vērsies uzņēmums SIA *Stabili podesti*, ar vēlmi atvieglot materiālu sagatavošanu finiera podestu ražošanai. Podestus ražo gan standarta izmēros, gan pēc pasūtītāja izmēriem. 
    
    Jūs uzaicina uz ražotni iepazīties ar produkciju, un var novērot, ka podesti principā ir taisnstūra paralēlskaldņi, kas izveidoti no sešām finiera plāksnēm, kas savā starpā sastiprināti ar divpadsmit leņķveida līstēm, un stūros nostiprināti ar astoņiem stūra savienojumiem. 
    
    Uzņēmums vēlas automatizēt izlietoto materiālu uzskaiti un jums tiek uzticēts uzrakstīt kodu funkcijai, kas nosaka materiālu veidu un daudzumu dotā izmēra podestam.

!!! quote "Ražošanas vadītājs"

    Šobrīd mēs skatāmies, kas mums noliktavā sāk pietrūkt, un tad pasūtām, bet gribētos jau rēķināt uz priekšu, lai varam bez kavēšanās izpildīt lielākus pasūtījumus.

??? tip "Specifikācijas"

    === "Slikti formulēta specifikācija"
        - Funkcijai jāaprēķina podesta ražošanai nepieciešamie materiāli: finieris, malu stiprinājuma līstes un stūra stiprinājumi. 
        - Dotie lielumi ir podesta izmēri un skaits. 
        - Aprēķinātos datus jānodod uzskaites programmai.
    
    === "Labi formulēta specifikācija"
        - Funkcijai “materialuAprekins” ir četri parametri, saskaņā ar šo formātu: materialuAprekins(garums, platums, augstums, skaits). Parametri “garums”, “platums” un “augstums” raksturo podesta izmēru cm, tiem var būt arī viena zīme aiz komata. Parametrs “skaits” ir vesels skaitlis, kas norāda nepieciešamo podestu skaitu.
        - Uzskaites programmai informācija tiek nodota ar funkcijas “materialaUzskaite” palīdzību. Šī funkcija vēl nav pagatavota, un to rakstīs citi programmētāji. Šai funkcijai ir četri parametri, saskaņā ar šo formātu: materialaUzskaite(tips, izmers1, izmers2, skaits). Parametrs “tips” ir simbolu virkne, kam atļautas trīs vērtības: “FINIERIS”, “LISTE” un “STURIS”. Ja tips ir “FINIERIS”, tad parametri “izmers1” un” izmers2” apraksta taisnstūrveida finiera plāksnes izmērus, secība nav svarīga. Ja tips ir “LISTE”, tad parametrs “izmers1” apraksta līstes detaļas garumu, savukārt parametra “izmers2” vērtība nav svarīga. Ja tips ir “STURIS”, tad parametru “izmers1” un “izmers2” vērtības nav svarīgas.
        - Funkcijas “materialuAprekins” izpildes laikā ir jāizsauc funkcija “materialaUzskaite” ar nepieciešamajiem parametriem katram atšķirīgajam materiālu tipam un izmēram. Ideāli būtu, ja šo izsaukumu skaits būtu pēc iespējas mazāks. 

??? example "Programmas kods"

    === "Python"

        ``` python
            def materialuAprekins(garums, platums, augstums, skaits):

                materialaUzskaite(tips, izmers1, izmers2, skaits)
                return
        ```

??? info "Rezultātu piemēri"

    ```
        ...
    ```
