import React from "react";
import "./TopCompaniesHiring.css";

interface Company {
  id: number;
  name: string;
  logo: string;
  rating: number;
  reviewCount: string;
  description: string;
  backgroundColor: string;
  logoColor: string;
}

interface CompanyCardProps {
  info: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ info }) => {
  const company = info;

  // ...existing code...
  const getInitials = (name: string) => {
    if (!name) return "";
    return name
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0))
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(company.name);

  return (
    <div className="company-card">
      <div className="company-header">
        <div className="company-logo" style={{ backgroundColor: company.backgroundColor, color: company.logoColor }}>
          {company.logo && company.logo.trim() ? (
            <img src={company.logo} alt={`${company.name} logo`} />
          ) : (
            <span className="company-initials">{initials}</span>
          )}
        </div>
        <h3 className="company-name">{company.name}</h3>
      </div>
      <hr className="company-divider" />
      <div className="company-info">
        <div className="company-rating">
          <span className="rating-star">★</span>
          <span className="rating-number">{company.rating}</span>
          <span className="review-count">({company.reviewCount})</span>
        </div>
      </div>
      <p className="company-description">{company.description}</p>
      <hr className="company-divider" />
      <button className="view-jobs-btn">View jobs</button>
    </div>
  );
};
export default CompanyCard;
