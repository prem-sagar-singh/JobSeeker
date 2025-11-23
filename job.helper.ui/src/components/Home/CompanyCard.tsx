import React from "react";
import "./TopCompaniesHiring.css";
import { CompanyCardProps } from "../../Interface/ICompanies";

const CompanyCard: React.FC<CompanyCardProps> = ({ info }) => {
  const company = info;
  // ...existing code...
  console.log("Company info:", company);
  const getInitials = (name: string) => {
    if (!name) return "";
    return name
      .split(" ")
      .filter(Boolean)
      .map((w) => w.charAt(0))
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(company.Name);

  return (
    <div className="company-card">
      <div className="company-header">
        <div className="company-logo" style={{ backgroundColor: company.BackgroundColor, color: company.LogoColor }}>
          {company.LogoUrl && company.LogoUrl.trim() ? (
            <img src={company.LogoUrl} alt={`${company.Name} logo`} />
          ) : (
            <span className="company-initials">{initials}</span>
          )}
        </div>
        <h3 className="company-name">{company.Name}</h3>
      </div>
      <hr className="company-divider" />
      <div className="company-info">
        <div className="company-rating">
          <span className="rating-star">★</span>
          <span className="rating-number">{company.Rating}</span>
          <span className="review-count">({company.ReviewCount})</span>
        </div>
      </div>
      <p className="company-description">{company.Description}</p>
      <hr className="company-divider" />
      <button className="view-jobs-btn">View jobs</button>
    </div>
  );
};
export default CompanyCard;
