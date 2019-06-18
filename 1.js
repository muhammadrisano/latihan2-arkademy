


let arrobj = [
    {
        name: "Tatas",
        company: "Arkademy",
        job: "Trainer",
        status: "single",
        city: "Jogja",

    },
    {
        name: "Pratama",
        company: "Emago",
        job: "Trainer",
        status: "single",
        city: "Jakarta",

    }
]

let tatas = {
    status: "Menikah",
    city: "Jakarta"
}
let pratama = {
    company: "Arkademy",
    city: "jogja"
}

let hasil = [
    {
        ...arrobj[0], ...tatas
    },
    {
        ...arrobj[1], ...pratama
    }
]
console.log(hasil);
