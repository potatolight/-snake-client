const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};
// let connection;
const setupInput = function(conn) {
  // connection = conn;
  console.log('setting up keyboard shortcut: ')
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  stdin.on('data', (key) => {
    if(key === 'w') {
      conn.write("Move: up")
    } else if (key === 'a') {
      conn.write("Move: left")   
    } else if (key === 's') {
      conn.write("Move: down")
    } else if (key === 'd') {
      conn.write("Move: right")
    }
  })
  return stdin;
}
module.exports = {  setupInput };


