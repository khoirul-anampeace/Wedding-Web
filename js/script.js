/*==================== Animasi Kirim Hadiah &  Kado ====================*/
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

/*==================== Animasi Kirim Hadiah &  Kado ====================*/
