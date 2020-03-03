import jsonWebToken from 'jsonwebtoken'
import User from "../models/User";

class Auth {
    static auth(roles){
        return async(req, res, next) => {
            try {
                let token = req.headers.authorization.replace(/Bearer /g, '');
                let decryptToken = jsonWebToken.decode(token, 'monsecret');
                let user = await User.findById(decryptToken.sub);

                if(user && user.user_role == 10){
                    next();
                }else if(user && roles.includes(user.user_role)){
                    next()
                }else {
                    res.status(401).json({'message': 'Unauthorized'})
                }
            } catch (error) {
                res.status(403).json({'message': 'Error'})
            }
        }
    }
}

export default Auth;
