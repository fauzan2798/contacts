const yargs = require('yargs');
const { simpanContact } = require('./contact');

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Full Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        phone: {
            describe: 'Mobile Phone',
            demandOption: 'true',
            type: 'string',
        }
    },
    handler(argv) {
        simpanContact(argv.name, argv.email, argv.phone);
    }
})

yargs.parse();

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukkan nama anda : ');
//     const email = await tulisPertanyaan('Masukkan email anda : ');
//     const noHp = await tulisPertanyaan('Masukkan no hp anda : ');

//     simpanContact(nama, email, noHp);
// }

// main();