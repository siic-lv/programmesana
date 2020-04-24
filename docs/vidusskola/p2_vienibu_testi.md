# Programmēšana II - automātiskā testēšana

## :small_orange_diamond: Ievads vienību testēšana

### Fibonacci divos veidos

!!! question "Uzdevums"
    Aplūko dotās funkcijas un testu piemērus! Pieraksti papildus testus, atrodi kļūdu vienā no programmām un izlabo to!

??? example "Programmas un testu kods"

    === "fibonacci.py"

        ``` python
        --8<-- "src/python/vsk2/fibonacci.py"
        ```

    === "test_fib.py"

        ``` python
        --8<-- "src/python/vsk2/test_fibonacci_vienkarsi.py"
        ``` 

??? tip "Valodas sintakse"

    === "Python"

        - pytest lietošanas tl;dr: 
            - testiem *datnes nosaukumam* jāsākas ar `test_` vai jābeidzas ar `_test`
            - testu *funkciju nosaukumam* jāsākas ar `test`
            - testus palaiž ar komandu `python -m pytest`
            - papildus karogs `-v` (verbose), lai saņemtu vairāk informācijas
            - papildus karogs `--durations=N` parāda N lēnākos testus
        - [Oficiālā dokumentācija](https://docs.pytest.org/en/latest/)
        - [repl.it paraugs](https://repl.it/@GundegaDekena/SpiritedTechnicalApplicationsoftware) - ja nav iespējams Python uzinstalēt lokāli

### Parametrizēts Fibonacci tests

!!! question "Uzdevums"
    Salīdzini testu `test_fibonacci_parametrizets.py` ar `test_fibonacci_vienkarsi.py`.
    Pieraksti papildus parametrus testā `test_fibonacci_parametrizets.py`, reflektē kā tas atvieglo testu rakstīšanu!

??? example "Programmas un testu kods"

    === "fibonacci.py"

        ``` python
        --8<-- "src/python/vsk2/fibonacci.py"
        ```

    === "test_fib.py"

        ``` python
        --8<-- "src/python/vsk2/test_fibonacci_vienkarsi.py"
        ``` 

    === "test_fibonacci_parametrizets.py"

        ``` python
        --8<-- "src/python/vsk2/test_fibonacci_parametrizets.py"
        ``` 

## :small_orange_diamond: TDD pieeja

### Virsraksta formatētajs

!!! question "Uzdevums"
    Uzraksti funkciju, kas dotam tekstam pārveido visus vārdus "title case" - lai visi vārdi sākas ar lielo burtu. Testi, kas pārbauda dažādus ievades datus jau ir doti.

    Pabeidz funkcionalitāti, lai visi testi sekmīgi izpildītos.
    Izdomā vēl kādu ievades teksta piemēru, kas varētu nestrādāt. Uzraksti tam testu un, ja nepieciešams, izlabo funkcionalitāti.

??? example "Programmas un testu kods"

    === "titlecase.py"

        ``` python
        --8<-- "src/python/vsk2/titlecase.py"
        ```

    === "test_title_case.py"

        ``` python
        --8<-- "src/python/vsk2/test_title_case.py"
        ``` 

## Vienību testi gatavai programmai

### Lietotāju datu formatēšanas programma

!!! question "Uzdevums"
    Izlasi specifikāciju un programmas kodu. Uzraksti vienības testus dotajai programmai, kas pārbauda abilstību specifikācijai.

??? info "Specifikācija"

    Nepieciešama funkcija, kas pieņem un apstrādā divus argumentus: lietotāja datus (dictionary datu tips) un formātu (string) un atgriež attiecīgi noformatētu tekstu.

    Iespējamie formāta nosaukumi un sagaidāmais rezultāts:

    formāta nosaukums   | rezultāta formāts  | piemērs
    --------------------|--------------------|---------
    greeting            | "Title First Last" | "Dr Uga Dumpis" 
    short               | "Title Last"       | "Dr Dumpis"
    country             | "Nat"              | "LV"
    table               | "First \| Last \| Title \| Nat" | "Uga \| Dumpis \| Dr \| LV"

??? example "Programmas un testu kods"

    === "formatuser.py"

        ``` python
        --8<-- "src/python/vsk2/formatuser.py"
        ```

    === "test_formatuser.py"

        ``` python
        --8<-- "src/python/vsk2/test_formatuser.py"
        ``` 

## Izstrāde no specifikācijas

!!! question "Uzdevums"
    Uzrakstīt specifikācijai atbisltošu programmu un testus, kas pārbauda visu galveno funkcionalitāti (skat. happy path testing [^1]).

??? info "Specifikācija"

    === "Piemērs 1"

        Kaut kāds apraksts

    === "Piemērs 2"

        Cits apraksts

----

[^1]: [Happy path testing](https://en.wikipedia.org/wiki/Happy_path)
