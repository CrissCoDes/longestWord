const LongestWord = str => {
    let Longest = '';
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++){
        let individualWords = words[i];
        if (individualWords.length > Longest.length){
            Longest = individualWords;
        }
    }
    return Longest;
}

console.log(LongestWord('one fiver'))