var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};

var orm = {
    selectAll: function (table, cb) {
         var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    insertOne: function (burgers, Burger_name, cb) {
        var insert = "INSERT INTO " + burgers;
        insert += " (";
        insert += cols.toString();
        insert += ") ";
        insert += "VALUES (";
        insert += printQuestionMarks(vals.length);
        insert += ") ";

        console.log(insert);

        connection.query(insert, Burger_name, function(err, results) {
          if (err) {
            throw err;
          }
          cb(results);
        });
      },
      updateOne: function(burgers, objColValues, cb){
        var update = "UPDATE " + burgers;

        update += " SET ";
        update += objToSql(objColValues);
           
        console.log(update);
        connection.query(update, function(err, results) {
          if (err) {
            throw err;
          }
    
          cb(results);
    
      });
    
    }
};

module.exports = orm;