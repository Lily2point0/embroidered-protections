//V2
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

let EngBalance, TurkBalance = 0;

fs.createReadStream('./data/words.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    const wordData = results.filter(w => w.Position !== '');

    EngBalance = Math.ceil(wordData.length/2);
    TurkBalance = wordData.length - EngBalance;
    buildWordStrings(wordData);
  });


function buildWordStrings(wordData) {
    const engString = [];
    wordData.forEach(word => {
        if(getRandomAssignment()%2 === 0) {
            if(EngBalance > 0) {
                engString.push(word.English);
            } else {
                engString.push(word.Turkish);
            }

            --EngBalance;
        } else {
            if(TurkBalance > 0) {
                engString.push(word.Turkish);
            } else {
                engString.push(word.English);
            }
            --TurkBalance;
        }
    });

    engString.sort(() => Math.random() - 0.5);
    console.log('ENGLISH QUILT::', engString.join('\n'), '\n');

    const turkString = buildTurkishString(wordData,engString);
    console.log('TURKISH QUILT::', turkString.join('\n'));
}

function getRandomAssignment() {
    return Math.floor(Math.random()*137);
}

function buildTurkishString(wordData, engString) {
    const output = [];
    engString.forEach(word => {
        const translation = wordData.find(w => w.English === word);

        if(translation !== undefined) {
            output.push(translation.Turkish);
        } else {
            const original = wordData.find(w => w.Turkish === word);
            output.push(original.English);
        }
    });

    return output;
}