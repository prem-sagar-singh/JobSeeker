import { ICompany } from "../repositories/Home/interface/ICompanies";

export class HomeService {
  constructor(private readonly repo: ICompany) {}
  getAll() { 
    return this.repo.getAllCompanies(); 
  }  
}