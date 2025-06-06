import { useState } from "react";

// Custom FAQ Accordion Item Component
const FaqItem = ({
  faq,
  isOpen,
  toggleOpen,
}: {
  faq: any;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        border: isHovered
          ? "1px solid rgba(239, 93, 168, 0.5)"
          : "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#121212",
        transition: "border-color 0.3s ease",
        marginBottom: "16px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleOpen}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          fontSize: "18px",
          fontWeight: "500",
          color: isHovered ? "#EF5DA8" : "white",
          padding: "16px 24px",
          transition: "color 0.2s ease",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ flex: 1 }}>{faq.question}</span>
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
          style={{
            color: "#EF5DA8",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div style={{ padding: "0 24px 16px 24px" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginBottom: "16px",
            }}
          ></div>
          <p
            style={{
              color: "#B0B0B0",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
