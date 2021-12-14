function arraybiasa() {
    let tinggibadan = [176, 156, 148, 178, 165, 155, 154, 169, 170, 175];
    for (let i = 0; i < tinggibadan.length; i++) {
        console.log(tinggibadan[i]);
    }
}

function arrayforof() {
    let tinggibadan2 = [176, 156, 148, 178, 165, 155, 154, 169, 170, 175];
    for (const tinggi of tinggibadan2) {
        console.log(tinggi);
    }
}

arraybiasa()
console.log()
arrayforof()