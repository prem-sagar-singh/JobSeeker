import DatabaseService from "../../services/DatabaseService";
import { Company, ICompany } from "./interface/ICompanies";

class HomeRepository implements ICompany {

  async getAllCompanies(): Promise<Company[]> {
    try{
    const pool = await DatabaseService.getPool();
    const result = await pool.request().query('SELECT * FROM Companies');
    return result.recordset as Company[];
    } catch (error) {
        console.error('Error fetching companies', error);
        throw error;
    }
    
  }
}
export default HomeRepository;