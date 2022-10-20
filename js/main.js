// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

"use strict";
let sconto20 = ("E' stato applicato uno sconto del 20% !!!!!!");
let sconto40 = ("E' stato applicato uno sconto del 40% !!!!!!");


const km = Number(prompt("Inserisci i chilometri da percorrere"));
if( km <= 0 || km > 2000) {
    alert("I chilometri percorsi devono essere compresi tra 1 e 2000, reinserire i dati corretti");
    window.location.reload();
}
const eta = Number (prompt("Inserisci l'età del passeggero"));
if( eta <= 0 || eta > 120) {
    alert("L'età deve essere compresa tra 0 e 120, reinserire i dati corretti");
    window.location.reload();
}
const tariffaPerKm = 0.21;
if ( eta >= 18 && eta < 65 ) {
   const costoBiglietto = (km * tariffaPerKm).toFixed(2);
   document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto ;

} else {
    if (eta < 18) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 20) / 100)).toFixed(2);
        document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto;
        document.getElementById('messaggio-sconto').innerHTML = sconto20;

    } 
    if (eta >= 65) {
        const costoBiglietto = ((km * tariffaPerKm) - ( (km * tariffaPerKm * 40) / 100)).toFixed(2);
        document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto;
        document.getElementById('messaggio-sconto').innerHTML = sconto40;
    } 
}    
