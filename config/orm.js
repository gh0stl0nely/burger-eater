const connection = require('./connection.js');

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAllDB: function(callback){
        //Select all the thing from the database and then cb on the result
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, function(e,rawResults){
            if(e) throw e
            callback(rawResults);
        });
    },

    insertValueToDB: function(userInput, callback){
        //When 
        console.log(userInput);
        const queryString = `INSERT INTO burgers (name) VALUES ("${userInput}")`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    },

    //When press on Devour! Switch boolean to eat (from 0 - 1)
    updateDevour: function(burgerID, callback){
        //When 
        const queryString = `UPDATE burgers SET devoured = TRUE WHERE id = ${burgerID}`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    },

    deleteFromDb: function(burgerID, callback){
        const queryString = `DELETE FROM burgers WHERE id = ${burgerID}`;
        connection.query(queryString, function(e){
            if(e) throw e

            callback();
        });
    }

}
// Export the ORM object
module.exports = orm;