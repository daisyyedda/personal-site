import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import { useTheme } from "next-themes";
import Head from "next/head";
import Cursor from "../components/Cursor";
import WorkExperience from "../components/WorkCard/workExperience";
import ResearchExperience from "../components/WorkCard/researchExperience";
import Button from "../components/Button";
import Link from "next/link";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const researchRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const photo = useRef();
  const { theme, setTheme } = useTheme();

  // Handling SPA Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleResearchScroll = () => {
    window.scrollTo({
      top: researchRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current, photo.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);
  
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update the state with the actual window width after mounting
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define the image style
  const imageStyle = {
    float: 'right', 
    marginLeft: '10px', 
    marginRight: (windowWidth >= 768 && windowWidth <= 1023) ? '1%' : '10%',
    width: (windowWidth >= 768 && windowWidth <= 1023) ? '200px' : '300px',
    height: (windowWidth >= 768 && windowWidth <= 1023) ? '200px' : '300px',
    borderRadius: '50%'
  };
  

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleResearchScroll={handleResearchScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
          <img 
            ref={photo}
            src={"/images/Profile Pic.jpg" }
            alt="Daisy Ye Profile Pic" 
            style={imageStyle} 
          />
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>
        

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
          <br/>
        </div>
   
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold ">Work Experience.</h1>
          <WorkExperience />
          <br/>
        </div>  
      
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={researchRef}>
          <h1 className="text-2xl text-bold">Research Experience.</h1>
          <ResearchExperience />
        </div>
        
        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-2xl text-bold">Projects.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description1}
                desc={service.desc}
                onClick={() => window.open(service.url)}
              />
            ))}
          </div>
        </div> */}
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0" ref={contactRef}>
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S MAKE AN 
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              IMPACT TOGETHER
            </h1>
            <Button type="primary" onClick={() => window.open("https://calendly.com/daisyyedda/30min")}>Schedule a meeting</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://www.chun-ye.ca/">
          <a className="underline underline-offset-1">Daisy Ye</a>
        </Link>
      </h1>
    </>
      </div>
    </div>
  );
}
