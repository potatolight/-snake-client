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
    conn.write("Name: bsg")
  })

  return conn;
}
module.exports = {connect};