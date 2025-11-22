import React, { useRef } from "react";
import "./TopCompaniesHiring.css";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "",
    rating: 4.5,
    reviewCount: "1.2k Reviews",
    description: "Innovating the future of technology.",
    backgroundColor: "#E0F7FA",
    logoColor: "#00796B",
  },
  {
    id: 2,
    name: "HealthPlus",
    logo: "",
    rating: 4.2,
    reviewCount: "980 Reviews",
    description: "Leading healthcare solutions.",
    backgroundColor: "#FFF3E0",
    logoColor: "#F57C00",
  },
  {
    id: 3,
    name: "EcoWorld",
    logo: "",
    rating: 4.8,
    reviewCount: "2.3k Reviews",
    description: "Sustainable living for a better planet.",
    backgroundColor: "#E8F5E9",
    logoColor: "#388E3C",
  },
  {
    id: 4,
    name: "FinServe",
    logo: "",
    rating: 4.3,
    reviewCount: "1.5k Reviews",
    description: "Your trusted financial partner.",
    backgroundColor: "#E3F2FD",
    logoColor: "#1976D2",
  },
];

const TopCompaniesHiring: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="top-companies-hiring">
      <div className="section-header">
        <h2 className="section-title">
          <span className="featured-badge">Feature companies actively hiring</span>
        </h2>
      </div>
      <div className="companies-wrapper">
        <button className="nav-button nav-button-left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="companies-scroll" ref={scrollContainerRef}>
          <div className="companies-row">
            {companies.map((c) => (
              <CompanyCard key={c.id} info={c} />
            ))}
          </div>
        </div>
        <button className="nav-button nav-button-right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};
export default TopCompaniesHiring;
