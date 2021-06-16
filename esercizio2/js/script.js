


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.


// GENERARE UN NUMERO RANDOM AL POSTO DELLE PROPRIETA A 0 UTILIZZANDO ARROW FUNCTION (arrow vanno messi sempre in cima a tutto senno non funzionano)

const numeriRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


// CREARE UN ARRAY CON OGGETTI DI SQUADRE CON PROPRIETA: NOME, PUNTI, FALLI

const squadre = [

    {nome: 'Juventus', punti: 0, falli: 0},
    {nome: 'Milan', punti: 0, falli: 0},
    {nome: 'Inter', punti: 0, falli: 0},
    {nome: 'Napoli', punti: 0, falli: 0},
    {nome: 'Fiorentina', punti: 0, falli: 0},
    {nome: 'Pescara', punti: 0, falli: 0}

]

// CREARE UN CICLO CHE MODIFICHI I VALORI: PUNTI, FALLI, DI OGNI OGGETTO E INSERISLI IN UN NUOVO ARRAY CON LA DESTRUTTURAZIONE

const newProperty = [];

for( let i = 0; i < squadre.length; i++) {

    const {nome, punti, falli} = squadre[i];

    newProperty.push({nome, punti:numeriRandom(1,100), falli:numeriRandom(1,100)});
        
}

console.log(newProperty);















