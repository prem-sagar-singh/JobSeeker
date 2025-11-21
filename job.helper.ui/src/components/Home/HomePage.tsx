import React from "react";
import Header from "../Header/Header";
import "./HomePage.css";
import SearchSection from "../Search/SearchSection";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <SearchSection />
      </main>
    </div>
  );
};

export default HomePage;
