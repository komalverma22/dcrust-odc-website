import { useState } from "react";

const MemberCard = ({ member }: { member: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        borderRadius: "8px",
        overflow: "hidden",
        border: isHovered ? "1px solid #EF5DA8" : "1px solid transparent",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          padding: "24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {member.isTopMember && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "#EF5DA8",
              color: "white",
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "9999px",
              fontWeight: "500",
            }}
          >
            Top Member
          </div>
        )}
        <div
          style={{
            position: "relative",
            width: "128px",
            height: "128px",
            margin: "0 auto 16px auto",
          }}
        >
          {/* <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: isHovered ? "2px solid #EF5DA8" : "2px solid transparent",
              transition: "border-color 0.3s ease",
            }}
          /> */}
        </div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "white",
            marginBottom: "8px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            color: "#B0B0B0",
            fontWeight: "500",
            marginBottom: "12px",
          }}
        >
          {member.role}
        </p>

        {/* About Section */}
        <p
          style={{
            color: "#B0B0B0",
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          {member.about}
        </p>

        {/* Social Media Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#0077B5",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#005885";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0077B5";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "white" }}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#333",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#24292e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#333";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "white" }}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
