var orm = require("../config/orm.js");

var burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (response) {
      cb(response);
    });
  },
  create: function (columns, values, cb) {
    orm.insertOne("burgers", columns, values, function (response) {
      cb(response);
    });
  },

  update: function (objColVals, cb) {
    orm.updateOne("burgers", objColVals, function (response) {
      cb(response);
    });
  }
};



module.exports = burgers;