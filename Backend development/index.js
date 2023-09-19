import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




const app = express()
//everything inside the app.use() method is a middleware


app.use(express.static(path.join(__dirname, '/public')))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// the createConnection() method configures the mysql user details.
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});
// connect() is a method which connect our backend application to the mysql database
db.connect((err) => {
    if (err) {
        console.log(err + " error connecting to mysql database");
        return;
    }
    console.log('Database connection is successful ' + db.threadId)
})

//get method with '/' route means, it will render the index.ejs file as our homepage at the frontend
// the key-value pairs inside the object can then be accessed in the index.ejs file
app.get('/', (req, res) => {
    res.render('index', {
        name: 'ikeem',
        email: 'abc@gmail.com',
        password: 234235,
    });
});

//this is a get method, which will deliver the registration.ejs file as a the registration page inside the views
app.get('/registration', (req, res) => {
    res.render('registration', { title: 'Registraion - page', heading: 'Welcome to the Login page' })
})

//this is a post method which receives all the data being sent from the frontend application and the data can be accessed through the body object because of the body-parser middleware.
app.post('/register', (req, res) => {

//take all the data from frontend and save it to respective variables;
const {first_name, last_name, age, gender, state, email} = req.body;

//sql query to be used on mysql database;
// 'new_trainee' is the table name inside our 'testing_db' database
// (first_name, last_name, age, gender, state, email) == these are the columns available in our mysql 'new_trainee' table

//VALUES ("${first_name}", "${last_name}", "${age}", "${gender}", "${state}", "${email}") === these are the values to be inserted into the new_trainee table in order
    let sql_query = `
	INSERT INTO new_trainee 
	(first_name, last_name, age, gender, state, email) 
	VALUES ("${first_name}", "${last_name}", "${age}", "${gender}", "${state}", "${email}")
	`;

    //then, query the database with the sql_query and run a callback function after the query, the callback function accepts error parameter which is checked for in our if else condition,
    
    db.query(sql_query, function (error, data) {
//if an error occurs, throw error(error should be generated which will prevent further processes inside the function from getting into the database)
        if (error) {
            throw error;
        }
        //if there is no error, then console.log the data to the node.js console,
        console.log(data)
        //then render the success page in the ejs views folder with a message which include the first name of the registered user
        res.status(201).render('success', { message: `Dear ${req.body.first_name}` })
    })

})



app.listen(8000, function () {
    console.log("Server running on http://localhost:8000")
})

