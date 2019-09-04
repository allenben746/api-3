const server = require('./api/server.js');


port = 8000;
console.log("Server recognized");
server.listen(port, () => console.log(`API on port ${port}`))