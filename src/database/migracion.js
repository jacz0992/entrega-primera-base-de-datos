const knex = require('../database/knex');

knex.schema.createTable('mensajes', table => {
    table.increments('id');
    table.string('mensaje');
    table.string('email');
    table.timestamp('fecha', { useTz: true }).notNullable().defaultTo(knex.fn.now());
}).then(() => {
    console.log('La tabla ha sido creada :D!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('Se esta cerrando la conexión...');
    process.exit(0);
});
