import React, { useEffect, useRef, useState } from "react";
import "./TopCompaniesHiring.css";
import CompanyCard from "./CompanyCard";
import { Company } from "../../Interface/ICompanies";
import axios from "axios";

const TopCompaniesHiring: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/home/getAllCompanies");
      setCompanies(response.data.companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

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
