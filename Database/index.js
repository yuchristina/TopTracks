var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'test'
});

var selectAll = function(n, u, c, a, ar, q, callback) {
  connection.query(`SELECT * FROM items WHERE name = '${n}' AND queryname = '${q}';`, (err, results) => {
      if(results === undefined || results.length === 0) {
      connection.query(`INSERT INTO items (name, url, cover, album, artist, queryname) values ('${n}', '${u}', '${c}', '${a}', '${ar}', '${q}');`, (err, results) => {
          if(err) {
            callback(err, null);
          }
          console.log('New results entered', results);
      })
    } else if(results.length > 0) {
      console.log('Already entered into database');
    }
    callback(null, results);
    })
};

var retrieve = function(query, callback) {
  connection.query(`SELECT * FROM items WHERE queryname = '${query} LIMIT 10;`, (err, results) => {
    if(err) {
      console.log('Problems finding entries');
    }
    callback(err, results);
  });

}

module.exports.selectAll = selectAll;
module.exports.retrieve = retrieve;
