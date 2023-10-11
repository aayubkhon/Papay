const dotenv = require("dotenv")
dotenv.config()

const http = require("http");
const mongodb = require("mongodb");

const connectionString = process.env.MONGO_URL;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDb");
    else {
      console.log("MongoDb connection secceed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3009;
      server.listen(PORT, function () {
        console.log(`The server on port: ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);