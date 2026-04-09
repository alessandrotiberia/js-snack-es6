/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


//creato array 
squadre = [
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    },
]

//generato numeri random
for (let i = 0; i < squadre.length; i++) { 
    //punti random arrotondati a squadra 
    squadre[i].punti = Math.floor(Math.random() * 100);
    //falli subiti random arrotondati a squadra
    squadre[i].falliSubiti = Math.floor(Math.random() * 100);
}
// come creo nuovo array per inserire solo nomi e falli subiti?