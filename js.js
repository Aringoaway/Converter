let num = 50;

if (num < 49) {
    console.log('Not correct')
} else if (num > 100) {
    console.log('Many!!!')
} else {
    console.log('Correct')
}

(num = 50) ? console.log('Correct') : console.log('Not correct');

switch (num) {
    case num < 49:
        console.log('Not correct');
        break;
    case num > 100:
        console.log('Many!!!');
        break;
    case num > 80:
        console.log('Many!!');
        break;
    case 50:
        console.log('YEEEEEEE');
        break; 
    default: 
        console.log('we have a problem');
        break;    
}

