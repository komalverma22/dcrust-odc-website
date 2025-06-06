import { useState } from "react";
import contents from "../data/contents";
const faqData = contents.faqData;
import AnimatedDots from "../components/AnimatedDots";
import FaqItem from "../components/FaqItem";
import "../styles/FaqSection.css";

export default function FaQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        <AnimatedDots />
        <div className="faq-wrapper">
          <div className="faq-header">
            <h2 className="faq-title">
              <span className="highlight">FREQUENTLY</span>{" "}
              <span className="normal">ASKED QUESTIONS</span>
            </h2>
            <p className="faq-description">
              Find answers to common questions about our community and how to
              get involved.
            </p>
          </div>

          <div className="faq-items">
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
