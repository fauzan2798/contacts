const fs = require('fs');
const validator = require('validator');

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    const duplicate = contacts.find((contact) => contact.nama === nama)
    if (duplicate) {
        console.log('Contact sudah terdaftar, gunakan nama lain!');
        return false;
    }

    if (email) {
        if (!validator.isEmail(email)) {
            console.log('Email tidak valid..');
            return false;
        }
    }

    if (!validator.isMobilePhone(noHp, 'id-ID')) {
        console.log('Nomor Hp tidak valid, tolong perbaiki...');
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(`Terimakasih sudah memasukkan data`);
}

module.exports = { simpanContact };