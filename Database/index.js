var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

var selectAll = function(n, u, c, a, ar, q, callback) {
  connection.query(`SELECT * FROM items WHERE name = ? AND queryname = ?;`, [n, q], (err, results) => {
      if(results === undefined || results.length === 0) {
      connection.query(`INSERT INTO items (name, url, cover, album, artist, queryname) values (?, ?, ?, ?, ?, ?);`, [n, u, c, a, ar, q], (err, results) => {
          if(err) {
            callback(err, null);
          }
          // console.log('New results entered');
      })
    } else if(results.length > 0) {
      // console.log('Already entered into database');
    }
    callback(null, results);
    })
};

var retrieve = function(query, callback) {
  connection.query(`SELECT * FROM items WHERE queryname = ? LIMIT 10;`, [query], (err, results, fields) => {
    if(err) {
      console.log('Problems finding entries');
    }
    callback(err, results);
  });
}

module.exports.selectAll = selectAll;
module.exports.retrieve = retrieve;
