const express = require('express');
const app = express();
const port = 8000;

//Set port
app.set('port', process.env.PORT || 8000);

//Set view engine
app.set('view engine', 'ejs');
app.set('views', 'public/views');

//Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Canada National Parks'});
})

//Server listening on port 8000
app.listen(app.get('port'), () => {
    console.log("server listening on port", app.get('port'));
})