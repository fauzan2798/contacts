const { tulisPertanyaan, simpanContact } = require('./contact');

const main = async () => {
    const nama = await tulisPertanyaan('Masukkan nama anda : ');
    const email = await tulisPertanyaan('Masukkan email anda : ');
    const noHp = await tulisPertanyaan('Masukkan no hp anda : ');

    simpanContact(nama, email, noHp);
}

main();