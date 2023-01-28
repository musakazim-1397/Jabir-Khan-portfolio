const myProjects = [
  {
    index: "01",
    name: "Youtube Clone Web Application",
    related: "Web App",
    link: "https://youtube-clone-built-using-next-js-rapid-api-by-jabir-khan-01.vercel.app/",
    imagePath: "assets/youtube-clone.png",
  },
  {
    index: "02",
    name: "Realtime UAE's Real Estate Web application",
    related: "Web App",
    link: "https://uae-real-estate-web-app-built-using-next-js-by-jabir-khan-01.vercel.app/",
    imagePath: "assets/realestate.png",
  },
  {
    index: "03",
    name: "Modern UI/UX Web Application",
    related: "Web App",
    link: "https://modern-ui-ux-react-next-js-web-app-01.vercel.app/",
    imagePath: "assets/modern-uiux.png",
  },
  {
    index: "04",
    name: "Banking web application front-end",
    related: "Web App",
    link: "https://ui-for-banking-web-app-built-using-next-js-by-jabir-khan-01.vercel.app/",
    imagePath: "assets/bank-landing-page.png",
  },
];

import Project from "./Project";
import classes from "./HomePageProjects.module.css";
import { motion} from "framer-motion";


const HomePageProjects = () => {


  return (
    <div
      className={classes.container}
    >
      {myProjects.map((project,index) => (
        <motion.div
          layoutScroll
          style={{marginBottom: project.index=='04'?0:'6rem'}}
          initial={{ y: 200, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          viewport={{ once: true, amount:0.65 }}
          transition={{ease:'easeOut', duration:0.7}}
          key={index}>
          <Project project={project} />
        </motion.div> 
  
      ))}
    </div>
  );
};

export default HomePageProjects;
