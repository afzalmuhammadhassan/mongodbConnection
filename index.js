const express = require('express')
const mongoose = require('mongoose')
const user = require('./user')

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.listen(3000, () => {
    // const dbUrl = 'mongodb://atlas-sql-61fcc702bf9bff46c99a92f5-0n7re.a.query.mongodb.net/DataBase014?ssl=true&authSource=admin';
    const dbUrl = 'mongodb+srv://hassandb:hassandb@cluster014.0n7re.mongodb.net/?retryWrites=true&w=majority';
    const conn = mongoose.connect(dbUrl)
        .then(() => {
            console.log("dataBase connection is succesfull");
        })
        .catch(err => console.log("Error014", err.message));
    console.log("App is listening on port 3000")   
})

app.post('/register', async (req, res) => {
    const {username, passowrd, email} = req.body;
    console.log(username);
    const newUser = await user.create({username, passowrd, email});
    res.send(newUser);
})

app.get('/', async (req, res) => {
    // const {username, passowrd, email} = await user.find();
    const data = await user.find();
    console.log(data)
    res.send(data);
});