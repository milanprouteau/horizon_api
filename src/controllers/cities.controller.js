import City from "../models/City";

class CityController {

    /**
     * Create City into Database
     * @param {Request} req 
     * @param {Response} res 
     */

    static async create(req, res){
        let status = 200;
        let body = {};

        try {
            let cities = await City.create({
            name: req.body.name,
            continent: req.body.continent,
            });
            body = {
                cities,
                'message': 'City created'
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
            let cities = await City.find();

            body = {
                cities,
                'message': 'Cities list'
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
             let cities = await City.findById(id);

             body = {
                 cities,
                 'message': 'Cities details'
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
            await City.remove(req.params.id);

            body = {
                cities,
                'message': 'Cities deleted'
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
        
            let cities = await City.findById(req.params.id);

            Object.assign(cities, req.body);
            await cities.save();

            body = {
                cities,
                'message': 'Users updated'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

}

export default CityController;