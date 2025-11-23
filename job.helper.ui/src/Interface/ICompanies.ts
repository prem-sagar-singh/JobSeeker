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

export interface CompanyCardProps {
  info: Company;
}

export  type {  Company };