/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/TingJuin-DeanList.jpg";

const imageAltText = "Dean List Award image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Vanished Voyage ",
    description:
      "A c++ text-based game project that I worked on using C++ only. The game is about a character who is lost in a mysterious island and needs to find a way to escape.",
    url: "https://github.com/juin03/CPT113-Hackathon-Group35",
  },
  {
    title: "Skor Mantap",
    description:
      "A front end web application that allows users to navigate and search for the best suitable tutors. Created using React and Tailwind CSS.",
    url: "https://github.com/goyaoxiang/SkorMantap/tree/master/skormantap",
  },
  {
    title: "ASTHMAguard",
    description:
      "ASTHMAguard is a ground-breaking solution proposed to revolutionize respiratory health management. Check this video out. You may view the app's prototype in the video's description too. ",
    url: "https://youtu.be/CVFQ9XOi5wo",
  },
  {
    title: "Resume",
    description:
      "Here is my resume, which reflects my most recent achievements and qualifications as of 20/1/2024.",
    url: "https://studentusm-my.sharepoint.com/:b:/g/personal/juin5789_student_usm_my/EaJ9nebCnIBHsZDHgq1DXR0BfVrYo2LT3c5o0YRYAcCETA?e=pTXiQd",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ paddingLeft: "5%", maxWidth: "40%", alignSelf: "center" }}>
        <img
        src={image}
        style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "15px" }}
        alt={imageAltText}
      />

          <p>In the image, I receive the Top 10 award from the school's dean.</p>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
