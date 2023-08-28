const bcrypt = require('bcryptjs');
let mysql = require('mysql');
const Register = require('../models/users')

const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users',
  debug    :  false
});

class RegisterRepository{

static registerUser(req,res,callback) {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let last_name = req.body.last_name;
    console.log(email, password, name, last_name);
    
    let insertQuery = 'INSERT INTO registro (email,password,name,last_name) VALUES (?,?,?,?)';
let query = mysql.format(insertQuery,[email , password, name, last_name]);
pool.query(query,(err, response) => {
    if(err) {
        console.error(err);
        return;
    }
    callback(query)
    // console.log(response.insertId);
    return res.status(201).send(
      {status: 'register ok'}
    );

});
}

}

module.exports = RegisterRepository
