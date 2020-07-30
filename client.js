const net = require('net');
const { IP, PORT } = require('./constants');
const {setupInput} = require('./input')
const stdin = process.stdin;

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    
  });
  // interpret incoming data as text
    conn.setEncoding('utf8'); 
    conn.on('data', (data) => {
    console.log('Server says: ', data);
   });
    conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write("Name: bsg")
    setupInput(conn)
    conn.write('Say: ggg')
  })

  return conn;
}
module.exports = {connect};