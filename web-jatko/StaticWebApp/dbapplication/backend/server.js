const sqlite3 = require('sqlite3').verbose();

// Connect to the database (or create it if it doesn't exist)
let db = new sqlite3.Database('my-database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});
db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      )`);
    });
    db.serialize(() => {
      db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Alice', 'alice@example.com'], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
    });
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
            