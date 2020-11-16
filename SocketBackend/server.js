const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")().listen(http);

const port = process.env.PORT || 3000;


io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("message", msg => {
    console.log(msg);
    io.emit("message", msg);
  });
});

http.listen(port, ()=>{
  console.log(`Http listening on port ${port}`);
});