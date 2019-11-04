const fs = require('fs');
const wordsList = require('./words.json')
const imagesFolder = '../images';


var numberOfWords = 0;
var numberOfFiles = 0;

var existingImages = [];
var wordsUsingImagesFromOtherWords = ['credit-card', 'debit-card', 'bedroom', 'bag'];

var myFiles = {}

fs.readdir(imagesFolder, (err, files) => {
    files.forEach(file => {
       myFiles[file.substring(0, file.indexOf('.'))] = file;
    });
});

setTimeout(function() {
    console.log(JSON.stringify(myFiles));
},200)

/*
console.log('')

fs.readdir(imagesFolder, (err, files) => {
    files.forEach(file => {
        numberOfFiles++;
        existingImages.push(file.substring(0, file.indexOf('.')));
        // console.log(file.substring(0, file.indexOf('.')));
    });
});

setTimeout(function () {
    for (let [key, value] of Object.entries(wordsList)) {
        for (var j = 0; j < value.length; j++) {
            numberOfWords++;
            var formattedWord = value[j].split(' ').join('-');
            if (!existingImages.includes(formattedWord) && !wordsUsingImagesFromOtherWords.includes(formattedWord)) {
                console.log(value[j])
            }
        }
    }
}, 200)

setTimeout(function () {
    console.log('')
    console.log('Coverage rate = ' + Math.round(100 * (numberOfFiles + wordsUsingImagesFromOtherWords.length) / numberOfWords) + '%')
    console.log('Number of words left = ' + (numberOfWords - wordsUsingImagesFromOtherWords.length - numberOfFiles));
    console.log('')
}, 400)
*/