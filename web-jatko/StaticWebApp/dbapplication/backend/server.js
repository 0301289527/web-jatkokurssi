const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (creates one if it doesn't exist)
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create a table (if it doesn't already exist)
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)`, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table is ready.');
    }
});

// Insert a new record into the database
const name = "John Doe";
const age = 30;

db.run(`INSERT INTO users (name, age) VALUES (?, ?)`, [name, age], function(err) {
    if (err) {
        console.error('Error inserting data:', err.message);
    } else {
        console.log(`New record inserted with ID: ${this.lastID}`);
    }
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing the database:', err.message);
    } else {
        console.log('Database connection closed.');
    }
});
