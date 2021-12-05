
require('colors')

const colors = {GREEN : 0, YELLOW: 1, RED : 2}

let colorCurrent = colors.GREEN;

const n = process.argv[2];

const changeColor = () => {
    colorCurrent++;
    if (colorCurrent > colors.RED)
        colorCurrent = colors.GREEN;
}

const colorPrint = (i) => {

    switch (colorCurrent){
        case colors.RED:
            console.log(`${i}`.red);
            break;
        case colors.GREEN:
            console.log(`${i}`.green);
            break;
        case colors.YELLOW:
            console.log(`${i}`.yellow);
            break;
    }
    changeColor();
}
if( isNaN(n)){
    console.log('ERROR, incorrect  parameters'.red);
    return;
}

    if (n <= 1)
        return console.log(`ERROR, parameters <=1  `.red) ;

    for (let i = 2; i <= n; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0) {
            for (let j = 3; j * j <= i; j = j + 2) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
            }
        } else if (i != 2) flag = 0;
        if (flag == 1) {
            colorPrint(i);

    }}




