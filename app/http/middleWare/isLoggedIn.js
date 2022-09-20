const userModel = require("../../models/user");
const { JWTverify } = require("../../modules/jwt");

async function checkLogin(req,res,next){
try {
    req.user = null ;
    req.isLggedIn = false ;
    const header = req?.headers ;
    const token = header?.authorization?.substring(7);
    if(!token) throw {status : 401 , success : false , message :"please login to your accoant"}
    const payload = await JWTverify(token);
    // console.log(payload);
    //the username exist in token
    const user =await userModel.findOne({username : payload.username}, {password : 0});
    if(!user) throw {status : 401 , success : false , message :"please login to your accoant again"};
    req.user = user ;
    req.isLggedIn = true ;
    next();
} catch (error) {
    next(error)
}
}

module.exports ={
    checkLogin
}