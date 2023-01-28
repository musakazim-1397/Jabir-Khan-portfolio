import Link from "next/link";
import classes from "./HeroSection.module.css";
import { BsArrowRight } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <motion.div className={classes.leftHeadingOuter}
             initial={{ y: 200, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ ease: 'easeInOut', duration: 1.2,delay:0.5 }}
          >
            <h1 className={classes.leftHeading}>full stack{' '}</h1>
            <h1 className={`${classes.leftHeading} ${classes.shadedBG}`}>
              ReactJS &#38; React-Native
            </h1>
            <h1 className={classes.leftHeading}>{" "}developer and{" "}</h1>
            <h1 className={`${classes.leftHeading} ${classes.shadedBG}`}>
              Machine Learning engineer.
            </h1>
          </motion.div>
          <p className={classes.leftPara}>
            Hi I&#39;m Jabir Khan. A passionate full-stack developer and machine
            learning engineer with over 3 years of experience.
          </p>
          <Link href={"/works"} className={classes.seeMyWork}>
            <div className={classes.seeMyWorkCircle} />
            <div style={{ marginRight: "6px" }}>SEE MY WORKS</div>
            <BsArrowRight />
          </Link>
        </div>
        <div className={classes.rightSection}>
          <motion.div
            className={classes.rightImage}
            animate={{ y: [10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
              type: "tween",
              ease: "easeOut",
            }}
          >
            <img src={"assets/right_image.png"} alt="sculpture image" />
          </motion.div>
        </div>
      </div>
      <div className={classes.rightScrollDown}>
        SCROLL DOWN <p style={{ margin: "0 7px" }} />
        <CgArrowLongRight size={37} color={"#9f9595"} />
      </div>
    </div>
  );
};

export default HeroSection;
