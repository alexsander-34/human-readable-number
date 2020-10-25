module.exports = function toReadable (number) {
    let firstNum = number.toString().slice(0,1);
    let secondNum = number.toString().slice(1,2);
    let thirdNum = number.toString().slice(2,3);
    let numTwoLast = number.toString().slice(1,3);
    let res = '';

    let numOne = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    let numTwo = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    
    if (number == 0){
        return 'zero';
    } else if (number<20) {
        res = numOne[number];
        return res.trim();
    } else if (number>19 && 100>number){
        res = `${numTwo[firstNum]} ${numOne[secondNum]}`
        return res.trim();  
    }
    else if (number>99 && 1000>number){
        if(numTwoLast<10){
            res = `${numOne[firstNum]} hundred ${numOne[thirdNum]}`;
            return res.trim();
        } else if(numTwoLast<20){
            res = `${numOne[firstNum]} hundred ${numOne[numTwoLast]}`;
            return res.trim();
        } else 
        if (numTwoLast>20) {

        }
        res = `${numOne[firstNum]} hundred ${numTwo[secondNum]} ${numOne[thirdNum]}`;
        return res.trim()
    }
}
