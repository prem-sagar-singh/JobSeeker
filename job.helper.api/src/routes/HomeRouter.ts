import  express from 'express';
import { HomeController } from '../controller/HomeController';
import HomeRepository from '../repositories/Home/HomeRepository';
import { ICompany } from '../repositories/Home/interface/ICompanies';

const router = express.Router();
const repo: ICompany = new HomeRepository();
const controller = new HomeController(repo);

/**
 * @openapi
 * /api/home/getAllCompanies:
 *   get:
 *     tags:
 *       - Home
 *     summary: Get list of companies
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/getAllCompanies', controller.getAllCompanies);

export default router;