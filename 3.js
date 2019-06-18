
let nilai = [1, 3, 4, 5, 6, 3];

// mean
function mean(x) {

    var total = 0;
    var jumlah = 0
    x.forEach(function (n) {
        jumlah += n;
    })
    total = jumlah / x.length
    return total;
}
console.log(mean(nilai));




// median

function median(numbers) {

    var median = 0,
        jumlah_arr = numbers.length;
    numbers.sort();
    if (jumlah_arr % 2 === 0) {
        median = (numbers[jumlah_arr / 2 - 1] + numbers[jumlah_arr / 2]) / 2;
    } else {
        median = numbers[(jumlah_arr - 1) / 2];
    }
    return median;
}

console.log(median(nilai));


// modus

function mode(numbers) {

    var modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
}

console.log(mode(nilai));