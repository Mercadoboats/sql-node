const {options}=require('./options/MariaDB');
const knex=require("knex")(options);
const productos=require('./ListadoProductos');

knex.schema.createTable('productos',table=>{
    table.increments('id')
    table.string('timestamp')
    table.string('nombre')
    table.string('descripcion')
    table.string('codigo')
    table.string('url')
    table.float('price')
    table.integer('stock')


})
.then(()=>{
    console.log("Table created")
})
.catch(e=>{
     console.log("Ocurrio un error al crear la BD")
}).finally(async()=>{

    // insertar el arreglo de Productos
    await knex('productos').insert('productos')
    //Seleccionar todos los productos
    const rows = await knex('productos').select('*');
    for(row of rows)
    { console.log(`${row['id']} - ${row['timestamp']} - ${row['nombre']} - ${row['descripcion']} - ${row['codigo']} - 
    ${row['url']} - ${row['price']} - ${row['stock']}`  )};

    //Actualizar algun productos
    
    await knex('producto').where('id',"=",'1').update({nombre:'Harry Potter'});

    //Borrar un producto en particular
    await knex('producto').where('id',"=",'1').del();


    knex.destroy();
})