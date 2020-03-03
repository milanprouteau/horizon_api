import expressJwt from 'express-jwt';
import User from './../models/User';

function jwt(){
    const secret = "monsecret";
    return expressJwt({secret, isRevoked}).unless({
        path: [
            '/users',
            '/users/authenticate'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await User.findById(payload.sub);
    if(!user){
        return done(null, true);
    }
    done();
}

export default jwt;