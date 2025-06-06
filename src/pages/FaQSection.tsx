import { useState } from "react";
import contents from "../data/contents";
const faqData = contents.faqData;
import AnimatedDots from "../components/AnimatedDots";
import FaqItem from "../components/FaqItem";

export default function FaQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}

      <section style={{ padding: "64px 16px", position: "relative" }}>
        <AnimatedDots />
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#EF5DA8" }}>FREQUENTLY</span>{" "}
              <span style={{ color: "white" }}>ASKED QUESTIONS</span>
            </h2>
            <p
              style={{ fontSize: "18px", color: "#B0B0B0", lineHeight: "1.6" }}
            >
              Find answers to common questions about our community and how to
              get involved.
            </p>
          </div>

          <div style={{ width: "100%" }}>
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openFaqIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
