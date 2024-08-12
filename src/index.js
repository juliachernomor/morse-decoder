const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let res = [];
    for (let i = 0; i < expr.length; i += 10) {
        res.push(expr.substring(i, i + 10));
    }
    const subres = res.map((el) => {
        return el.replaceAll('10', '.')
                 .replaceAll('11', '-')
                 .replaceAll('**********', ' ')
                 .replaceAll('0', '')});
    return subres.map((el) => {
        if (el!= ' '){
            for (let key in MORSE_TABLE) {
               if (el == key) {
                  return el = MORSE_TABLE[key]
                }
             }
            }
        if (el == ' ') return el
    }).join('')
}

module.exports = {
    decode
}