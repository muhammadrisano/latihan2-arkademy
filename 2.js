let huruf = ['a', 'b', 'c', 'd', 'e'];

let printah = ['makan', 'minum', 'cetak', 'menulis', 'berlari'];

function print($cetak) {
    for (let i = 0; i < printah.length; i++) {
        if (printah[i] == $cetak) {
            return huruf[i];
        }
    }

}
console.log(print("minum"));