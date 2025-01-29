import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-left font-semibold text-blue-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-800 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <p className="px-6 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const DigitalMarketingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "WHAT IS DIGITAL MARKETING?",
      answer: "Digital marketing encompasses all aspects and activities of marketing an organization, business, or brand across digital channels on the internet. Digital marketing strategies and tactics are crafted to target specific online audiences across a variety of internet-connected devices. Digital marketing includes optimization across search engines (the likes of Google and Bing), visibility and engagement on social media platforms, email marketing communications, website design and development and integrated applications to connect and engage with prospects and customers."
    },
    {
      question: "WHAT DOES A DIGITAL MARKETER DO?",
      answer: "A digital marketer is responsible for developing, implementing, and managing marketing campaigns that promote a company's products and services. They work across multiple digital channels to drive brand awareness, lead generation, and customer engagement through various strategies including SEO, content marketing, social media management, email marketing, and paid advertising campaigns."
    },
    {
      question: "WOULD MY BUSINESS BENEFIT FROM DIGITAL MARKETING SERVICES?",
      answer: "Most modern businesses can benefit significantly from digital marketing services. Digital marketing helps reach target audiences more effectively, provides measurable results, enables precise audience targeting, and often offers better ROI compared to traditional marketing. It's particularly valuable for businesses looking to expand their online presence, reach new customers, or compete in today's digital marketplace."
    },
    {
      question: "HOW COST-EFFECTIVE IS DIGITAL MARKETING COMPARED WITH TRADITIONAL MARKETING?",
      answer: "Digital marketing typically offers better cost-effectiveness than traditional marketing due to precise targeting capabilities, real-time campaign optimization, and detailed analytics. It allows for more flexible budgeting, better tracking of ROI, and the ability to adjust strategies based on performance data. Companies can start with smaller budgets and scale based on results."
    },
    {
      question: "HOW DO YOU IDENTIFY A SUCCESSFUL DIGITAL MARKETING COMPANY?",
      answer: "A successful digital marketing company demonstrates proven track records, transparent reporting, clear communication, and a deep understanding of current digital trends. Look for companies with strong case studies, positive client testimonials, expertise across multiple digital channels, and a strategic approach tailored to your business goals."
    }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-gray-900 p-6 ml-60">Frequently Asked Questions</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingFAQ;