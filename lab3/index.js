const nunjucks = require("nunjucks");
const express = require('express');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

const handler = (req, res) =>
    res.send(nunjucks.render(
        'templates/page1.njk', {name: ' berns', method: req.method, query: JSON.stringify(req.query, null, 2),
            body: JSON.stringify(req.body, null, 2), anotherParam: 1,}));

function handler_post(req, res){
    var bmi = req.body.weight ** 2 / req.body.height;
    if (parseFloat(bmi) < 18.5){
        bmi = "You are underweight";
    }
    else{
        bmi = "You are obese"
    }
    res.send(nunjucks.render(
        'templates/page1.njk', {name: ' berns', method: req.method, query: JSON.stringify(req.query, null, 2),
            body: JSON.stringify(req.body, null, 2), anotherParam: bmi,}))
}


app.get('/', handler
);

app.post('/', handler_post
);


app.listen(port, () => console.log(`App listening on port ${port}!`));

