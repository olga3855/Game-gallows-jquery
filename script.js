$(function () {

    const img = $('.img');
    const word = $('.word');
    const userLetter = $('.user-letter');
    const userOk = $('.user-ok');
    
    const getRandomWord = () => {
    const secretWords = [
    'neighbour',
    'transpilation',
    'relationship',
    'conversation',
    'database',
    'fireworks',
    'developer',
    'programmer'
    ];
    return secretWords[Math.floor(Math.random() * secretWords.length)];
    }
    
    const secretWord = getRandomWord().split('');
    console.log(secretWord);
    secretWord.forEach(() => word.append($('<span>_</span>')));
    const spans = $('.word > span');
    
    // spans.eq(0);
    // img.attr('src', `./images/${imgNum}.png`)
    
    const checkLetter = (letter) => {
    let wasLetterChanged = false;
    
    secretWord.forEach((arrLetter, index) => {
    if (arrLetter === letter) {
    spans.eq(index).text(letter);
    wasLetterChanged = true;
    }
    })
    
    wasLetterChanged ? win() : loose();
    };
    
    const getChangeImage = (img, imgNum = 1) => () => {
    img.attr('src', `./images/${++imgNum}.png`)
    return imgNum;
    };
    
    const changeImage = getChangeImage(img);
    
    const loose = () => {
    const currentImg = changeImage();
    if (currentImg === 4) {
    $('body').css('background', 'coral');
    userOk.off('click');
    }
    };
    
    const win = () => {
    let isAnyUnderscored = false;
    
    spans.each(function () {
    if ('_' === $(this).text()) {
    isAnyUnderscored = true;
    }
    })
    
    if (!isAnyUnderscored) {
    $('body').css('background', 'lightgreen');
    userOk.off('click');
    }
    };
    
    userOk.on('click', () => {
    if (userLetter.val()) {
    checkLetter(userLetter.val());
    } else {
    alert('please enter a letter');
    }
    });
    
    })