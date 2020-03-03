import User from "../models/User";
import City from "../models/City";
import Flight from "../models/Flight";

class FlightController {

    /**
     * Create Flight into Database
     * @param {Request} req 
     * @param {Response} res 
     */

static async create(req, res){
    let status = 200;
    let body = {};

    try {
        let flights = await Flight.create({
           departureCity: req.body.departureCity,
           arrivalCity: req.body.arrivalCity,
           departureTime: req.body.departureTime,
           arrivalTime: req.body.arrivalTime
        });
        body = {
            flights,
            'message': 'Flight created'
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
            let flights = await Flight.find();

            body = {
                flights,
                'message': 'Flights list'
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
             let flights = await find();

             body = {
                 flights,
                 'message': 'Flights details'
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
            await Flight.remove(req.params.id);

            body = {
                flights,
                'message': 'Flights deleted'
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
        
            let flight = await Flight.findById(req.params.id);

            Object.assign(flight, req.body);
            await flight.save();


            body = {
                flight,
                'message': 'Flights updated'
            };

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);
    }

}

export default FlightController;