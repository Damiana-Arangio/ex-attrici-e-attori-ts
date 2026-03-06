<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – Attrici e Attori (TypeScript)</h1>

Esercitazione sviluppata in **TypeScript** per lavorare con **tipizzazione dei dati, chiamate API e validazione delle strutture ricevute**.

L’obiettivo è consolidare alcuni concetti fondamentali del linguaggio come:

* Creazione di **type alias**
* Estensione dei tipi con **intersection types (`&`)**
* Utilizzo di **union types**
* Creazione di **tuple**
* Validazione dei dati con **type guard**
* Gestione di dati provenienti da API con tipo `unknown`
* Esecuzione di richieste asincrone con **fetch**
* Gestione di più chiamate API in parallelo con **Promise.all**

Per le chiamate API viene utilizzato un **server locale** con base URL:

`http://localhost:3333`

---

## SNACK IMPLEMENTATI

### 🏆 Milestone 1 – Type Alias Person

Creazione di un **type alias** `Person` per rappresentare una persona generica.

Il tipo include:

* `id` → numero identificativo **readonly**
* `name` → nome completo **readonly**
* `birth_year` → anno di nascita
* `death_year` → anno di morte **opzionale**
* `biography` → breve biografia
* `image` → URL dell’immagine

---

### 🏆 Milestone 2 – Type Alias Actress

Estensione del tipo `Person` tramite **intersection type (`&`)** per creare il tipo `Actress`.

Proprietà aggiuntive:

* `most_famous_movies` → **tuple di 3 stringhe**
* `awards` → stringa
* `nationality` → valore tra una lista predefinita di nazionalità tramite **union type**

Nazionalità accettate:

`American | British | Australian | Israeli-American | South African | French | Indian | Israeli | Spanish | South Korean | Chinese`

---

### 🏆 Milestone 3 – Recupero Attrice

Creazione della funzione:

`getActress(id: number)`

La funzione:

* effettua una richiesta `GET /actresses/:id`
* restituisce:

  * un oggetto `Actress`
  * oppure `null` se non trovato

Per garantire la correttezza dei dati ricevuti viene utilizzato un **type guard** chiamato:

`isActress`

---

### 🏆 Milestone 4 – Recupero Lista Attrici

Creazione della funzione:

`getAllActresses()`

La funzione:

* effettua una richiesta `GET /actresses`
* restituisce un array di oggetti `Actress`
* in caso di errore restituisce **un array vuoto**

---

### 🏆 Milestone 5 – Recupero Attrici in Parallelo

Creazione della funzione:

`getActresses(ids: number[])`

La funzione:

* riceve un array di **id**
* per ogni id utilizza la funzione `getActress`
* esegue tutte le richieste **in parallelo** utilizzando **Promise.all**

Il risultato è un array contenente:

* `Actress`
* oppure `null` se l’attrice non è stata trovata.

---

## 🛠 Tecnologie Utilizzate

* TypeScript
* Node.js
