const {secretKey_jwt , expiresIn_jwt} = require("../../configs/constsnts")
const jwt = require("jsonwebtoken");
function JWTtokenCreator(payload){

    //get username from argoman(payload)
    const {username} = payload ;
    //token contains username & secretKey & expiresDate
    // we use dotenv for secret key
    //dotenv is put const globaly just by calling 'process.env."NAME" '
    return jwt.sign({username} ,process.env.secretKey_jwt ,{expiresIn : "365 days"});
}




module.exports = {
    JWTtokenCreator,
}