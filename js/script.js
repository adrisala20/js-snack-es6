/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto. */

const listGuest= [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
//console.log(listGuest)

const tableName = 'Tavolo Vip';
//console.log(tableName);

listGuest.forEach((el,i)=> {
    const guest = {
        'nome': el, 
        'tavolo': tableName,
        'posto': i + 1,
    };
   // console.log(guest)  
});

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

let students = [
    {
        id: 213,
        name:'Marco della rovere',
        grade: 78,
    },
    {
        id: 110,
        name:'Paola Cortellessa',
        grade: 96,
    },
    {
        id: 250,
        name:'Andrea Mantegna ',
        grade: 48,
    },
    {
        id: 145,
        name:'Gaia Borromini ',
        grade: 74,
    },
    {
        id: 196,
        name:'Luigi Grimaldello',
        grade: 68,
    },{
        id: 102,
        name:'Piero della Francesca',
        grade: 50,
    },{
        id: 120,
        name:'GFrancesca da Polenta ',
        grade: 84,
    },
];

//console.log(students);

const nameStudents = students.map((el) => {
    return el.name.toUpperCase();
})
//console.log(nameStudents);

//function filter per l'array di voti sopra 70
const gradesStudents= students.filter((el) => {

    return el.grade >= 70;
})
//console.log (gradesStudents);

//function filter per gli studenti con voti superiore a 70 e id superiore a 120
const gradesIdStudents= students.filter((el) => {

    return el.grade >= 70 && el.id >= 120;
})
console.log(gradesIdStudents);