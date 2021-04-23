const {options1}=require('./options/MariaDB');
const knex=require("knex")(options1);
const mensajes=require('./ListadoMensajes');

knex.schema.createTable('mensajes',table=>{
    table.increments('id')
    table.string('timestamp')
    table.string('mensaje')
    table.string('email')
    


})
.then(()=>{
    console.log("Table created")
})
.catch(e=>{
     console.log("Ocurrio un error al crear la BD")
}).finally(async()=>{

    

    knex.destroy();
})