//raminrezazadeh687@gmail.com
const secretKey_jwt = "2ae5f07abb45fd088910563c2a2db327" ;


//expires in 1000ms+ 60s +60min +24h +7d  => 7days
const expiresIn_jwt = Date.now() + (1000*60*60*24*7);


module.exports ={
    secretKey_jwt,
    expiresIn_jwt
}