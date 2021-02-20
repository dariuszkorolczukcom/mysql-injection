let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'darou',
    password: 'password',
    database: 'database_injection'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    var sql = "SELECT name FROM agents WHERE id="

    sql += process.argv.slice(2) + ";";
  
    console.log('Connected to the MySQL server.');
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: %j",result);
    });
  });