import { useState } from "react";

// Hardcoded team members data organized by year
import contents from "../data/contents";
const teamsByYear = contents.teamsByYear;
// Custom Member Card Component
import MemberCard from "../components/MemberCard";

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const currentTeam =
    teamsByYear[selectedYear as keyof typeof teamsByYear] || [];
  const availableYears = Object.keys(teamsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div style={{ width: "100%", backgroundColor: "#0B0B0B", color: "white" }}>
      {/* Team Members Section */}
      <section style={{ padding: "64px 16px", position: "relative" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#EF5DA8" }}>COMMUNITY</span>{" "}
              <span style={{ color: "white" }}>MEMBERS</span>
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#B0B0B0",
                maxWidth: "512px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Meet our talented community of developers, designers, and
              innovators who drive our projects forward.
            </p>
          </div>

          {/* Year Navigation Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#121212",
                borderRadius: "8px",
                padding: "4px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    backgroundColor:
                      selectedYear === year ? "#EF5DA8" : "transparent",
                    color: selectedYear === year ? "white" : "#B0B0B0",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.color = "#B0B0B0";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {currentTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
