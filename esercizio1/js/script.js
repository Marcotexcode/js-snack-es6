


// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal



// CREARE UN ARRAI DI OGGETTI DI BICI CON PROPIETA: NOME,PESO.
const bici = [
    
    {nome: 'bmx', peso: 40},
    {nome: 'Mountain bike', peso: 30},
    {nome: 'Bici da corsa', peso: 50},
    {nome: 'Bici da città', peso: 20},
    {nome: 'Bici pieghevole', peso: 10}

]



// TROVARE LA BICI CON PESO MINORE
let pesoMinore = bici[0];

for (let i = 1; i < bici.length; i++) {

    if(bici[i].peso < pesoMinore.peso) {
        pesoMinore = bici[i];
    }

}



// USARE DESTRUCTURING

const {nome,peso} = pesoMinore;
console.log({nome, peso});




// USARE TEMPLATE LITERAL

document.getElementById('contenitore').innerHTML =  
`
La bici  meno pesante e: 
<ul>
    <li>Nome: ${nome}</li>
    <li>Peso: ${peso}</li>
</ul>

`

