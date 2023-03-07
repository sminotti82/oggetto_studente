/**
 * 
 * - Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età.
 */


//esercizio 1 creare un oggetto studente e stampare tramite il for in tutte le proprietà

let studente = {
    'nome':'marco',
    'cognome':'rossi',
    'eta':16,
    'sesso':'m'
};

for (const key in studente) {
    
    console.log(`${key}: ${studente[key]}`);


    document.querySelector('#studente').innerHTML+=`<li>${key}: ${studente[key]}</li>`
}

/**
 * - Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
 */

let studenti =[
    {
       'nome':'elisa',
       'cognome':'curcio',
       'eta':69,
       'sesso':'f'
    },
    {
       'nome':'elisa',
       'cognome':'vercesi',
       'eta':34,
       'sesso':'f'
    },
    {
       'nome':'franco',
       'cognome':'barbarini',
       'eta':72,
       'sesso':'m'
    },
]

for(let i = 0; i < studenti.length; i++){
    let studente = studenti[i]
    console.log(studenti);

    document.querySelector('#studenti').innerHTML+=`<li>nome studente: ${studente.nome}, cognome studente: ${studente.cognome}</li>`
}
/**
 * esercizio 3
 * - Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età.
 */

 */
let newStudent = {
    'nome': prompt('inserisci nome studente'),
    'cognome':prompt('inserisci cognome studente'),
    'eta': Number(prompt('inserisci età studente')),
}

!studenti.includes(newStudent)?studenti.unshift(newStudent):alert('studente gia inclugo')

console.log(studenti);
let studentiOrdinati = studenti.sort()
for(let i = 0; i < studentiOrdinati.length; i++){

    let studente = studentiOrdinati[i];
    document.querySelector('#Newstudenti').innerHTML+=`<li>nome studente: ${studente.nome}, cognome studente: ${studente.cognome}</li>`



}
