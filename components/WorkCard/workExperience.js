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
      date: "Sep 2023 – Dec 2023",
      descBullets: [
        "⚙️ Public Markets Technology",
        "Tech Stack: Python, Terraform, AWS (S3, EC2, RDS, EKS, SNS, Athena, ALB), K8s, Docker, Postgres, Apache Airflow."
      ],
      bgColor: "#0170ba"
    },
    {
      role: "Software Engineer",
      company: "Ford Pro",
      companylogo: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2023/07/27/second-quarter-2023-financial-results/jcr:content/image.img.881.495.jpeg/1690480581631.jpeg',
      date: "Jan 2023 - Apr 2023",
      descBullets: [
        "🚘 Tolls & Violation Management",
        "Tech Stack: React.js, Vue.js, JavaScript, Java, Spring Boot, Gradle, JUnit, CI/CD, GCP, Docker, K8s.",
      ],
      bgColor: "#00095c"
   },
    
    {
      role: "Business Analyst",
      company: "Bank of Montreal",
      companylogo: "https://static.wixstatic.com/media/8d4aeb_de259a0bec09405cb391f1962a16368d~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg",
      date: "Jan 2022 – Apr 2022",
      descBullets: [
        "🏦 BMO eTask Portal",
        "Skills: SQL, Tableau, Excel, Regression Testing, JIRA, Confluence.",
      ],
      bgColor: "#0a7abf"
    },
    {
      role: "Associate Consultant",
      company: "RecruitFirst",
      companylogo: "https://media.zenfs.com/en/the_edge_961/f7aeb652f9ba8304378c7258dfcc9178",
      date: "May 2021 – Aug 2021",
      descBullets: [
        "🛍 Fast-moving Consumer Goods",
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
