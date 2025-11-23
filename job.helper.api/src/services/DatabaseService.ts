import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config: sql.config = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASS || 'Server@123',
  server: process.env.DB_SERVER || String.raw`PREM-PC\SQL17`,
  database: process.env.DB_NAME || 'JobSeeker',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433,
  options: { 
    encrypt: process.env.DB_ENCRYPT === 'true', 
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true' 
},
  pool: { 
    max: 10, 
    min: 0, 
    idleTimeoutMillis: 30000 
},
connectionTimeout: 30000,
requestTimeout: 30000,
};

class DatabaseService {
  
    private static pool: sql.ConnectionPool | null = null;
    
    static async connect(): Promise<sql.ConnectionPool> {
        if (this.pool && this.pool.connected) {
            return this.pool;
        }
        try{
            this.pool = await sql.connect(config);
            console.log('Database connected successfully');
            return this.pool;
        }        
        catch (error) {
            console.error('Database connection failed', error);
            throw error;
        }
    }   
    
    static async disconnect(): Promise<void> {
        if (this.pool) {
            try{
                await this.pool.close();
                this.pool = null;
                console.log('Database disconnected successfully');
            } catch (error) {
                console.error('Error during database disconnection', error);
                throw error;
            }            
        }   
    }

    static getPool(): sql.ConnectionPool {
        if (!this.pool || !this.pool.connected) {
            throw new Error('Database not connected. Call connect() first.');
        }
        return this.pool;
    }

    static isConnected(): boolean {
        return this.pool !== null && this.pool.connected;
    }   
    
}
export default DatabaseService;