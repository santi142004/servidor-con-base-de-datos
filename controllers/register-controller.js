const bcrypt = require('bcryptjs');
let mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users',
  debug    :  false
});


let register = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let lastName = req.body.last_name;
    console.log(email, password, name, lastName);
    
    let insertQuery = 'INSERT INTO registro (email,password,name,last_name) VALUES (?,?,?,?)';
let query = mysql.format(insertQuery,[email , password, name, last_name]);
pool.query(query,(err, response) => {
    if(err) {
        console.error(err);
        return;
    }    
    console.log(response.insertId);
    return res.status(201).send(
      {status: 'register ok'}
    );

});
}


module.exports = {
    register
}