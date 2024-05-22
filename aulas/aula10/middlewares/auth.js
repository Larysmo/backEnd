function validarToken (req, res, next){
        if(req.headers.token === '123456789'){
            next()
    }else{
        res.status(401).json({msg: "Acesso Negado"})
    }
}

module.exports = validarToken