const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", //localhost
  user: "yash", //username
  password: "insta_clone", //password
  database: "instagram_clone_db", //db_name
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

const closeConnection = () => {
  connection.end((err) => {
    if (err) throw err;
    console.log("MySQL connection closed");
  });
};

module.exports = { connection, closeConnection };
