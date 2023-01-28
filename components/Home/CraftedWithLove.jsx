import classes from "./CraftedWithLove.module.css";
import { motion } from "framer-motion";

let arr1= [];
  for (let i = 0; i <27;i++){
    arr1.push(`${i}rem`);
  }
  for (let i = 26; i >-1;i--){
    arr1.push(`${i}rem`);
  }

const CraftedWithLove = () => {
  

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <motion.h1
          className={classes.heading}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ease: "easeOut", duration: 1,delay:0.7 }}
        >
          Crafted with Love
        </motion.h1>
        <motion.div
          className={classes.blackBand}
          initial={{ opacity: 1, height: "5rem", width: "0rem" }}
          layout
          whileInView={{
            width:arr1,
            opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            height: [
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "5rem",
              "0rem",
            ],
    
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ease: "easeOut", duration: 1 }}
        ></motion.div>
        <motion.p
          className={classes.para}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          These are a selection of my recent works.
        </motion.p>
      </div>
      <div className={classes.rightSide} />
    </div>
  );
};

export default CraftedWithLove;
