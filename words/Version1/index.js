const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('./data/words_v1.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    const wordData = results.filter(w => w.Position !== '').map(w => {
        w.Position = parseInt(w.Position);

        return w;
    }).sort((a,b)=> a.Position - b.Position);
    buildWordStrings(wordData);
  });


function buildWordStrings(wordData) {
    const engString = [];
    const turkString = [];

    wordData.forEach(word => {
        if(getRandomAssignment()%2 === 0) {
            engString.push(word.English);
            turkString.push(word.Turkish);
        } else {
            engString.push(word.Turkish);
            turkString.push(word.English);
        }
    });

    console.log('ENGLISH QUILT::', engString.join('\n'), '\n');
    console.log('TURKISH QUILT::', turkString.join('\n'));
}

function getRandomAssignment() {
    return Math.floor(Math.random()*13700);
}