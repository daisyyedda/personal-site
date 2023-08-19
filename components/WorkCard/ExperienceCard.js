import React, {useState, createRef, useEffect } from "react";
import { useTheme } from "next-themes";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i}>
            {item}
            <br/><br/>
          </li>
        ))
      : null;
  };

  return (
    <div className={`experience-card w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
      mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
    } hover:scale-105 link`}>
      <div style={{background: cardInfo.bgColor}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
      <h5 className="experience-text-role">
        {cardInfo.role}
      </h5>
      <h5 className="experience-text-date opacity-40">
        {cardInfo.date}
      </h5>
      <br/>
      <GetDescBullets descBullets={cardInfo.descBullets}/>
      </div>
    </div>
  );
}