import { Request, Response, NextFunction} from 'express';
import DatabaseService from '../services/DatabaseService';

export const databaseMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // Here you can set up your database connection and attach it to the request object
    // For example:
    // req.db = yourDatabaseConnection;
    try{
        // Simulate database connection setup
        if(!DatabaseService.isConnected()){             
            await DatabaseService.connect().then(() => {
                console.log('Database connection established in middleware');
                next();
            }).catch((error) => {
                console.error('Database connection error in middleware', error);
                res.status(500).json({ message: 'Database connection error' });
            }); 
    }
}
    catch(error){
        console.error('Unexpected error in database middleware', error);
        res.status(500).json({ message: 'Unexpected error' });
    }
};