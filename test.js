var mostWordsFound = function(sentences) {
    let maxArr = sentences[0].match(/ /g);
    let maxWords = 0;
    let wordCount = 0;
    let countArr = [];
    if (maxArr !== null) {
        maxWords = maxArr.length;
    }

    for(let i=1; i < sentences.length; i++) {
        countArr = sentences[i].match(/ /g);
        if (countArr !== null) {
            wordCount = countArr.length;
        }
        if(wordCount > maxWords) {
            maxWords = wordCount;
        }
    }
    return (maxWords+1);
};


