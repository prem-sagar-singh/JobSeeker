interface Company {
  id: number;
  Name: string;
  LogoUrl: string;
  Rating: number;
  ReviewCount: string;
  Description: string;
  BackgroundColor: string;
  LogoColor: string;
}

export interface ICompany {
  getAllCompanies(): Promise<Company[]>;
  //getById(id: number): Promise<Company | null>;
  //create(company: Omit<Company, 'id'>): Promise<number>; // returns new id
  //update(id: number, company: Partial<Company>): Promise<void>;
  //delete(id: number): Promise<void>;
}

export {  Company };