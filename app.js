const yargs = require('yargs');
const { simpanContact, listContact, detailContact, deleteContact } = require('./contact');

yargs
  .command({
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
  .demandCommand();

yargs
  .command({
    command: 'list',
    describe: 'get all contacts',
    handler() {
        listContact();
    }
  })

yargs
  .command({
    command: 'detail',
    describe: 'get detail contact by name',
    builder: {
        name: {
            describe: 'Full Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        detailContact(argv.name);
    }
  })

yargs
  .command({
    command: 'delete',
    describe: 'detelet contact by name',
    builder: {
        name: {
            describe: 'Full Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        deleteContact(argv.name);
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