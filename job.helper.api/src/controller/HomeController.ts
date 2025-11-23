import { Request, Response } from 'express';
import { ICompany } from '../repositories/Home/interface/ICompanies';

export class HomeController {
    constructor(private readonly service: ICompany) {}

    getAllCompanies = async (req: Request, res: Response): Promise<void> => {
        try {
            const companies = await this.service.getAllCompanies();
            res.status(200).json({ companies });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
  };
}