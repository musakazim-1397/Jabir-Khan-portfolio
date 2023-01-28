import Link from "next/link";
import classes from "./Project.module.css";
import { BsArrowRight } from "react-icons/bs";

const Project = ({ project }) => {
 
  return (
    <div
      className={classes.container}
    >
      <div className={classes.leftSide}>
        <div className={classes.lineAndIndex}>
          <div className={classes.horizontalLine} />
          <span className={classes.projectIndex}>{project.index}</span>
        </div>
        <div className={classes.projectDetail}>
          <h1 className={classes.projectName}>{project.name}</h1>
          <div className={classes.projectPlatform}>
            {project.related.toUpperCase()}
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
        <Link href={project.link} className={classes.seeMyWork}>
          <div className={classes.seeMyWorkCircle} />
          <div style={{ marginRight: "6px" }} className={classes.seeMyWorkText}>
            VIEW PROJECT
          </div>
          <BsArrowRight className={classes.seeMyWorkText} />
        </Link>
        <div className={classes.rightImageContainer}>
          <img className={classes.rightImage} src={project.imagePath} />
        </div>
        <div className={classes.rightBelowImageBackground} />
      </div>
    </div> 
  );
};

export default Project;
