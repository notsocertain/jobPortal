const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Import your database connection
const db = require('./config/db');

// Import your router
const router = require('./router/gigs');

const PORT = process.env.PORT || 8000;

// Handlebars setup
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/',(req,res)=>{
    res.render('index',{ layout: 'landing'})
});

// Mount the router at the desired path
app.use('/gigs', router);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
