// Importo o Pool do postgress-node
const { Pool } = require('pg');

// inicio a minha classe de configuracao do pool de conexao
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommercemesttra',
  password: '123456789',
  port: 5432
});


// const teste = async() => {
//     const result = await pool.query('SELECT * FROM products');
//     console.log(result.rows[0]);
//   }
//   teste();

//exporto a minha contante pool
module.exports = pool;

