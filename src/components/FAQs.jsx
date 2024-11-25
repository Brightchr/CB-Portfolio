import React from "react";
import FAQItem from "./FAQItem";

const FAQs = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      services: [
        {
          icon: "💻",
          title: "Web Development",
          description:
            "Building responsive and modern websites tailored to your needs.",
        },
        {
          icon: "📱",
          title: "App Development",
          description:
            "Creating intuitive and user-friendly mobile applications.",
        },
        {
          icon: "🎨",
          title: "UI/UX Design",
          description:
            "Designing beautiful and functional interfaces for digital products.",
        },
      ],
    },
    {
      question: "How can I contact you for collaborations?",
      answer:
        "You can use the contact form above or reach me directly at my email: brightch@bu.edu.",
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4 text-center text-white">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            services={faq.services} // Pass services if available
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
