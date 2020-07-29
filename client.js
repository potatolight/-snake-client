const net = require('net');
const stdin = process.stdin;

const connect = function() {
  const conn = net.createConnection({ 
    host: "135.23.222.131",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
 
   conn.on('data', (data) => {
    console.log('Server says: ', data);
   });
 
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write("Name: bsg")
    conn.write("Move: up")
    conn.write("Move: down")
     conn.write("Move: left")
    conn.write("Move: right")
  })

  return conn;
}
module.exports = {connect};