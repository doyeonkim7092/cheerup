const io = require("socket.io")();
const sequelize = require("socket.io-sequelize");

io.use(sequelize("db", path.resolve(__dirname, "./models/index")));

var notifications = io.of("/ws-notifications").on("connection", (socket) => {
  //connects each user to a room specific to them to listen for notifications
  var room = socket.handshake.query.user;
  socket.join(room);

  socket.on("send-notification", (user) => {
    socket.to(user).emit("new-notification");
  });
});
