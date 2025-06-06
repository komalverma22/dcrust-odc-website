import { useState } from "react";

// Hardcoded team members data organized by year
import contents from "../data/contents";
const teamsByYear = contents.teamsByYear;
// Custom Member Card Component
import MemberCard from "../components/MemberCard";
import "../styles/TeamSection.css";

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const currentTeam =
    teamsByYear[selectedYear as keyof typeof teamsByYear] || [];
  const availableYears = Object.keys(teamsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="team-section">
      <section>
        <div className="team-container">
          <div className="team-heading">
            <h2>
              <span className="highlight">COMMUNITY</span>{" "}
              <span className="normal">MEMBERS</span>
            </h2>
            <p>
              Meet our talented community of developers, designers, and
              innovators who drive our projects forward.
            </p>
          </div>

          <div className="year-tabs-container">
            <div className="year-tabs">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`year-button ${
                    selectedYear === year ? "active" : ""
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="team-grid">
            {currentTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
