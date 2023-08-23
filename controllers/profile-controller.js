let getProfile = (req, res) => {
      return res.status(200).json({ 
                                status: 'Successful authentication', profile: `Ud es un Aprendiz ADSO y su correo es ${email} `
                              });
     
}


module.exports = {
  getProfile
}
