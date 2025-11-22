import React from "react";
import Header from "../Header/Header";
import "./HomePage.css";
import SearchSection from "../Search/SearchSection";
import TopCompaniesHiring from "./TopCompaniesHiring";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <SearchSection />
        {/* Additional sections can be added here */}
        <TopCompaniesHiring />
      </main>
    </div>
  );
};

export default HomePage;
