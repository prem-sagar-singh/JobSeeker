import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchSection.css";
import searchIcon from "../../images/search.svg";

const SearchSection: React.FC = () => {
  const [skillsInput, setSkillsInput] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (skillsInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(skillsInput)}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-content">
          <h1 className="search-title">Find your dream job now</h1>
          <p className="search-subtitle">5 lakh+ jobs for you to explore</p>
          <form className="search-form" onSubmit={handleFormSubmit}>
            <div className="search-inputs">
              <div className="search-input-group">
                <div className="search-icon">
                  <img src={searchIcon} alt="Search" className="search-svg" />
                </div>
                <input
                  type="text"
                  placeholder="Enter skills / designations/ companies"
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                  className="search-input main-search"
                />
              </div>
              <div className="search-input-group">
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="search-select"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-7">5-7 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <div className="select-select-arrow"></div>
              </div>
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="search-input"
                />
              </div>

              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SearchSection;
