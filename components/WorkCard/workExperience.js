import React, { useContext, useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import { Fade } from "react-reveal";
import StyleContext from "./StyleContext";

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Software Engineer",
      company: "CPP Investments",
      companylogo: 'https://yt3.googleusercontent.com/c7ncWP7FhjeRFwA2DE4UHPDCjFt7I1Ncsz0p2ydjJo-Rbleu7fjZsekPI9GD_KxnJEXdVnt6=s900-c-k-c0x00ffffff-no-rj',
      date: "Sep 2023 – Present",
      descBullets: [
        "Total Fund Management - Financing, Public Markets.",
        "Tech Stack: Angular, Apache Airflow, AWS, Java, Python, Terraform."
      ],
      bgColor: "#0170ba"
    },
    {
      role: "Software Engineer",
      company: "TechNova",
      companylogo: "data:image/png;base64,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",
      date: "Mar 2023 – Sep 2023",
      descBullets: [
        "TechNova Hackathon, University of Waterloo.",
        "Tech Stack: React, Node.js, Sass."
      ],
      bgColor: "#fc6d83"
    },
    {
      role: "Software Engineer",
      company: "Ford Pro",
      companylogo: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2023/07/27/second-quarter-2023-financial-results/jcr:content/image.img.881.495.jpeg/1690480581631.jpeg',
      date: "Jan 2023 - Apr 2023",
      descBullets: [
        "Tolls & Violations; Title Registration Renewals.",
        "Tech Stack: React, Vue, Java, Spring Boot, PostgreSQL, Docker, Kubernetes, Postman, GCP.",
      ],
      bgColor: "#00095c"
   },
    
    {
      role: "Business Analyst",
      company: "Bank of Montreal",
      companylogo: "https://static.wixstatic.com/media/8d4aeb_de259a0bec09405cb391f1962a16368d~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg",
      date: "Jan 2022 – Apr 2022",
      descBullets: [
        "eTask Portal, BMO Client Services.",
        "Skills: SQL, Tableau, Excel, Regression Testing, JIRA, Confluence.",
      ],
      bgColor: "#0a7abf"
    },
    {
      role: "Consultant",
      company: "Laurier Consulting Group",
      companylogo: "https://media.licdn.com/dms/image/C560BAQH6WIeoLqCvyA/company-logo_200_200/0/1585841004004?e=2147483647&v=beta&t=h9YBDDILuSA8jmRgmXv5lCh0Ps5h7qQ47LjI46Bg8q4",
      date: "Sep 2021 – Dec 2021",
      descBullets: [
        "Worked for Guide Analytics (an AI start-up).",
        "Skills: NLP, Google Analytics, Market Research, Customer Segmentation, Website Content Generation.",
      ],
      bgColor: "#3d407a"
    },
    {
      role: "Associate Consultant",
      company: "RecruitFirst",
      companylogo: "https://media.zenfs.com/en/the_edge_961/f7aeb652f9ba8304378c7258dfcc9178",
      date: "May 2021 – Aug 2021",
      descBullets: [
        "Fast-moving Consumer Goods (FMCG).",
        "Skills: Talent Acquisition, Talent Landscaping, Market Research, CRM, Data Analysis.",
      ],
      bgColor: "#7824dc"
    }
  ]
};

export default function WorkExperience() {
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      cardInfo={{
                        company: card.company,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        bgColor: card.bgColor
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
