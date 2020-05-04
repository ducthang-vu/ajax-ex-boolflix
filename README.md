# ajax-ex-boolflix
Utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.  Iscriviamoci al sito https://www.themoviedb.org. E’ completamente gratuito.  Richiediamo la nostra API_KEY che verrà utilizzata in tutte le nostre chiamate. Servirà all’API a capire chi sta effettuando la chiamata. Per richiederla clicchiamo sul nostro user, poi impostazioni, API e clicchiamo su “Richiedi una nuova API key”. Una volta generato, in Impostazioni / API avremo la nostra chiave, indispensabile per tutte le nostre chiamate.  Qua https://developers.themoviedb.org/3 troveremo tutte le chiamate possibili all’API.

BoolFlix
(repo: ajax-ex-boolflix)

In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.
Per fare questo, come fanno siti molto più rinomati, utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.

Iscriviamoci al sito https://www.themoviedb.org. E’ completamente gratuito. 
Richiediamo la nostra API_KEY che verrà utilizzata in tutte le nostre chiamate. Servirà all’API a capire chi sta effettuando la chiamata.
Per richiederla clicchiamo sul nostro user, poi impostazioni, API e clicchiamo su “Richiedi una nuova API key”.
Una volta generato, in Impostazioni / API avremo la nostra chiave, indispensabile per tutte le nostre chiamate.

Qua https://developers.themoviedb.org/3 troveremo tutte le chiamate possibili all’API. Possiamo giocarci in un secondo momento, ma come prima cosa concentriamoci su Search / Movies. 
Con questa chiamata possiamo cercare tutti i film associati ad una ricerca (query). Passiamo come parametri query e api_key e vedremo i nostri risultati. Volendo possiamo passare anche language=it-IT per filtrare i risultati in lingua italiana.

Esempio chiamata: 
https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro

Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua Originale
Voto (media)
Utilizzare un template Handlebars per mostrare ogni singolo film trovato.

Consigli:
Andate in fila, seguendo le milestone, non pensate all’interfaccia grafica fino al punto 4
Non pensate all’interfaccia grafica fino al punto 4 (si, l’ho scritto due volte), tutto può essere risolto con una <ul> non stilizzata e con .append()
Ricordatevi quanto imparato finora con le diverse esercitazioni:
Affrontate sempre prima il caso base minimo, senza complicazioni (ad es. “Se il titolo originale è uguale al titolo, magari dovrei nasconderlo”, “Se faccio una ricerca che non ha nessun risultato dovrei scrivere qualcosa” sono domande da NON FARSI fino a quando non si è fatto completamente un caso base)
Se ti viene voglia di copiare/incollare codice, NON FARLO, fai una funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno leggibile ed ogni volta che dovrai intervenire su quella parte perderai molto più tempo
Prima di andare avanti, assicurati di aver risolto quella parte nel miglior modo possibile (codice non ripetuto, minimo codice possibile, funzioni chiare e riutilizzabili, pulizia di scrittura del codice). Risparmierai tantissimo tempo risolvendo gli esercizi successivi
Meglio risolvere una milestone in meno, ma con codice scritto bene
4. Per avere la lista delle lingue utilizzare: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
