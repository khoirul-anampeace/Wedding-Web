const hadiah = document.getElementById('hadiah');
const kado = document.getElementById('kado');
const kirimHadiah = document.getElementById('kirimHadiah');
const kirimKado = document.getElementById('kirimKado');


hadiah.addEventListener('click', () => {
    console.info('berhasil');
    kirimHadiah.classList.add('active');
    kirimKado.classList.remove('active')
})


kado.addEventListener('click', () => {
    console.info('berhasil');
    kirimKado.classList.add('active');
    kirimHadiah.classList.remove('active')
})

// function cekKode(param1) {
//     if (param1 == "berhasil") {
//         kirimKado.classList.add('active');
//         kirimHadiah.classList.remove('active');
//     } else {
//         kirimKado.classList.remove('active');
//         kirimHadiah.classList.remove('active');
//         console.log("remove")
//     }
// }
// cekKode("berhasil")