const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = 'db.sqlite'

const db = new sqlite3.Database(DBSOURCE, (error) => {
  if(error) {
    console.log(error.message)
    throw error
  } else {
    console.log('Connected to database')
    db.run(`CREATE TABLE channel (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      display_name text,
      game_id text,
      streamer_id text,
      followers integer
    )`),
    (error) => {
      console.log('Table already exists')
    }
  }
})

module.exports = db