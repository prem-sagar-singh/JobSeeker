import express from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger/swagger';
import homeRoutes from './routes/HomeRouter';
import DatabaseService from './services/DatabaseService';
import cors from 'cors';

const router = express.Router();
const app = express();

router.use((req, res, next) => {  
    res.set({
        'cache-control': 'no-store, no-cache, must-revalidate, private',
        'pragma': 'no-cache',
        'expires': '0'
    });
    next(); 
});


app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your frontend's origin
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/home', homeRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

const PORT = process.env.PORT || 3001;

// intialize database and start server
const startServer = async () => {
    try {
        // You can initialize your database connection here if needed
        await DatabaseService.connect();

        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`API docs available at http://localhost:${PORT}/api-docs`);
        console.log('Database initialized');
        });
        
        //graceful shutdown
        process.on('SIGINT', async () => {
            console.log('Received SIGINT. Shutting down gracefully...');
            // Close database connection here if needed
            await DatabaseService.disconnect();
            process.exit(0);
        });
    }
    catch (error) {
        console.error('Failed to initialize database', error);
        process.exit(1);
    }
};

startServer();
export default app;