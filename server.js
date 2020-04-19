const express = require('express');
const app = express();
const hbs = require('express-handlebars');

// Configuring parser for incoming client side data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//Set view engine for templating (MAYBE WRONG)
app.set('view engine', 'handlebars');
app.engine("handlebars", hbs({ defaultLayout: "main" }));

// Define routes and port
const routes = require('./controllers/burgers_controller')
app.use(routes);
const port = process.env.PORT || 3000;

// Listening to Port
app.listen(port, () => {
    console.log('Listening!')
})

//Pretty done (!?)