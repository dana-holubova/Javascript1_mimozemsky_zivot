const mikulas = dayjs("2023-12-05")
const dnes = dayjs()

if (dnes.isAfter(mikulas)) {
    document.body.innerHTML += "Ano, musíš počkat na příští rok"
}
else {
    document.body.innerHTML += "Ne, můžeš se těšit."
}

