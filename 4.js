var pustaka = [
    {
        judul: "Coba-coba javascipt",
        pengarang: "Dedi",
        status: "tersedia"
    },
    {
        judul: "belajar tuntas js",
        pengarang: "deka",
        status: "tersedia"
    },
    {
        judul: "Tutorial javascipt",
        pengarang: "gilang pemadi",
        status: "Kosong"
    }
];

function menampikanStatus($judul) {
    var statusbuku = ""
    pustaka.forEach(element => {
        if (element.judul == $judul) {
            statusbuku = element.status;

        }

    });
    if (statusbuku) {
        return statusbuku;
    } else {
        return "buku tidak tersedia";
    }


}
//  Menampikan status dari judul buku
let ketersediaan = menampikanStatus("belajar tuntas js");
console.log("Ketersedia Buku =");
console.log(ketersediaan);


// Menampikan status buku yang tersedia

function listbuku() {
    let buku = [];
    var index = 0;
    pustaka.forEach(element => {
        if (element.status == "tersedia") {
            buku[index] = element.judul;
            index = index + 1;
        }
    });
    return buku;

}
console.table(listbuku());