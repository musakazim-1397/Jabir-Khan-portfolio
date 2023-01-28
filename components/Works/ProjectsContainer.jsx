import classes from './ProjectsContainer.module.css';
import { motion } from 'framer-motion';
import Project from 'components/Home/Project';

const allMyProjects = [
    {
        index: "01",
        name: "AI Image Generator",
        related: "Web App",
        link: "https://dall-e-mid-journey-clone-using-next-js-by-jabir-khan.vercel.app/",
        imagePath: "assets/ai-web-app.png",
      },
    {
      index: "02",
      name: "Youtube Clone Web Application",
      related: "Web App",
      link: "https://youtube-clone-built-using-next-js-rapid-api-by-jabir-khan-01.vercel.app/",
      imagePath: "assets/youtube-clone.png",
    },
    {
      index: "03",
      name: "Realtime UAE's Real Estate Web application",
      related: "Web App",
      link: "https://uae-real-estate-web-app-built-using-next-js-by-jabir-khan-01.vercel.app/",
      imagePath: "assets/realestate.png",
    },
    {
      index: "04",
      name: "Modern UI/UX Web Application",
      related: "Web App",
      link: "https://modern-ui-ux-react-next-js-web-app-01.vercel.app/",
      imagePath: "assets/modern-uiux.png",
    },
    {
      index: "05",
      name: "Parlour landing page",
      related: "Web App",
      link: "https://parlour-web-app-built-using-next-js-by-jabir-khan.vercel.app/",
      imagePath: "assets/parlour.png",
    },
    {
      index: "06",
      name: "Banking web application front-end",
      related: "Web App",
      link: "https://ui-for-banking-web-app-built-using-next-js-by-jabir-khan-01.vercel.app/",
      imagePath: "assets/bank-landing-page.png",
    },
  ];



const ProjectsContainer = () => {
  return (
    <div className={classes.container}>
         {allMyProjects.map((project,index) => (
        <motion.div
          layoutScroll
          key={index}
          style={{marginBottom:'6rem'}}
          initial={{ y: 200, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          viewport={{ once: true, amount:0.4 }}
          transition={{ease:'easeOut', duration:0.7}}>
          <Project project={project} />
        </motion.div> 
  
      ))}
    </div>
  )
}

export default ProjectsContainer