let huruf = ['a', 'b', 'c', 'd', 'e'];

let printah = [true, true, false, true, false];
let cetak = "";
function print() {
    for (let i = 0; i < printah.length; i++) {
        if (printah[i] == true) {
            cetak += huruf[i];

        }
    }
    return cetak;

}
console.log(print());
