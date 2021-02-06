var MongoClient = require("mongodb").MongoClient;
var mdbo, dbo;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  mdbo = db;
  dbo = db.db("eqtribe");
});

function closeConnection() {
  mdbo.close();
}
// fetch all Authors
function fetchauthors(callback) {
  dbo
    .collection("authors")
    .find({})
    .toArray((err, result) => {
      callback(err, result);
    });
}

// fetch all books
function fetchbooks(callback) {
  dbo
    .collection("books")
    .find({})
    .toArray((err, result) => {
      callback(err, result);
    });
}

function closeConnection() {
  mdbo.close();
}

exports.fetchauthors = fetchauthors;

exports.fetchbooks = fetchbooks;

exports.closeConnection = closeConnection;
