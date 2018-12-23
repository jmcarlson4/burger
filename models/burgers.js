var ORM = require("../config/orm.js");

var burgers = {
    all: function(cb) {
      orm.all("burgers", function(response) {
        cb(response);
      });
    },
    create: function(columns, values, cb) {
        orm.create("burgers", columns, values, function(response) {
          cb(response);
        });
      },
    
      update: function(objColVals, cb) {
        orm.update("burgers", objColVals, function(response) {
          cb(response);
        });
      }
    };
    


module.exports = burgers;