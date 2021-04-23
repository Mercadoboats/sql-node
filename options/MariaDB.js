const options={
    client: "mysql",
    connection:{
        host:"localhost",
        user: "root",
        password: " ",
        database:"test"
    }
}

const options1={
    client: 'sqlite3',
    connection:{
    filename:'./DB/mensajes.sqlite3'
    },
    useNullAsDefault:true,
}

module.exports={options,options1}