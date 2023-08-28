const RegisterRepository= require('../repositories/registerRepositories')

let getRegister= (req, res)=>{

  RegisterRepository.registerUser(req,res,query => {
    res.status(200).json(query)
  })
}

module.exports={
  getRegister
}