const express = require('express');
const router = express.Router();
const burger = require('../models/burger');
// Create routers

//When direct to /, just 
router.get('/', (req,res) => {
    // At this point it should be ready to be rendered...
    burger.selectAllBurgers(function(finalResult){
        res.render('index', {finalResult});
    });
})
//post

router.post('/', (req,res) => {
    const userInput = req.body.burger
    burger.passToDbForInsert(userInput, function(){
        console.log('Successfully insert!');
        res.status(200).redirect('/');
    })
})

//Update

router.put('/', (req,res) => {
    const devouredBurgerID = req.body.id;
    burger.passToDbForUpdate(devouredBurgerID, function(){
        console.log('Update complete!');
        // res.status(200).redirect('/');
        res.json({
            status: 202,
            message: 'Devoured!'
        })
    })
});
//Delete

router.delete('/', (req,res) => {
    const devouredBurgerID = req.body.id;
    burger.passToDbForDelete(devouredBurgerID, function(){
        console.log('Delete complete!');
        // res.status(200).redirect('/');
        res.json({
            status: 202,
            message: 'Toss!'
        })
    })
})

module.exports = router;