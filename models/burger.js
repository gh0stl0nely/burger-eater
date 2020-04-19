// nside burger.js, import orm.js into burger.js
const orm = require('../config/orm.js')

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAllBurgers: function(callback){
        orm.selectAllDB(function(rawResults){
            // Do something here about result maybe make it into 
            const processedResult = rawResults.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    isDevour: item.devoured
                }
            })
            callback(processedResult)
        })
    },

    passToDbForInsert: function(userInput,callback){
        orm.insertValueToDB(userInput, callback)
    },

    passToDbForUpdate: function(burgerID, callback){
        orm.updateDevour(burgerID, callback)
    },

    passToDbForDelete: function(burgerID, callback){
        orm.deleteFromDb(burgerID,callback);
    }
}

// Export at the end of the burger.js file

module.exports = burger;