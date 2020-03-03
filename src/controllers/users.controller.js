import User from "../models/User";
import Jwt from "jsonwebtoken";

class UserController {

    /**
     * Create User into Database
     * @param {Request} req 
     * @param {Response} res 
     */

    static async create(req, res){
        let status = 200;
        let body = {};

        try {
            let user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
            });
            body = {
                user,
                'message': 'Users created'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    static async auth(req, res){
        let status = 200;
        let body = {};
    
        try {

            let user = await User.findOne({email: req.body.email});
            if(user && user.password === req.body.password){
                let token = jwt.sign({sub: user._id}, "monsecret");

                body = {
                    user,
                    token,
                    'message': 'User authenticated'
                }
            } else {
                status = 401;
                body = {
                    'message': 'Error email / password'
                }
            }

            /**
             * if(user && user.password === req.body.password)
             */

            //Générer un JWT


            body = {
                'message': 'Users created'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }
    static async list(req, res){
        let status = 200;
        let body = {};

        try {
            let users = await User.find();

            body = {
                users,
                'message': 'Users list'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

    static async details(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let users = await User.findById(id);

            body = {
                users,
                'message': 'Users details'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

    static async delete(req,res){
        let status = 200;
        let body = {};

        try {
            await User.remove(req.params.id);

            body = {
                users,
                'message': 'Users deleted'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

    static async update(req,res){
        let status = 200;
        let body = {};

        try {
        
            let user = await User.findById(req.params.id);

            Object.assign(user, req.body);
            await user.save();


            body = {
                user,
                'message': 'Users updated'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

}

export default UserController;