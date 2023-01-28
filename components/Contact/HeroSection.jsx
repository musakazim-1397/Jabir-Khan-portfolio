import Link from "next/link";
import classes from "./HeroSection.module.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.social}>
        <h1>Social.</h1>
        <div className={classes.links} style={{position:'relative'}}>
          <svg style={{ color: "black", 
                position: "absolute",
                top: '-374%',
                left: '-31%'
        }}>
            <motion.rect
              x="0"
              y="0"
              height={"50"}
            //   width={"20"}
              fill="black"
              initial={{ opacity: 0 , width:0}}
              animate={{width:[0,120,0], opacity:1}}
              transition={{duration:1, repeatType:'reverse'}}

            />
          </svg>
          <Link
            href={"https://www.linkedin.com/in/jabir-khan-302717251/"}
            target="_blank"
            className={classes.link}
          >
            LinkedIn{"      "}&#47;
          </Link>
          <Link
            href={"https://github.com/musakazim-1397"}
            target="_blank"
            className={classes.link}
            style={{ marginLeft: "8px" }}
          >
            Github
          </Link>
        </div>
      </div>
      <div className={classes.email} style={{position:'relative'}}>
        <h1>Email.</h1>

        <svg style={{ color: "black", 
                position: "absolute",
                top: '0%',
                left: '-1%'
        }}>
            <motion.rect
              x="0"
              y="0"
              height={"50"}
            //   width={"20"}
              fill="black"
              initial={{ opacity: 0 , width:0}}
              animate={{width:[0,120,0], opacity:1}}
              transition={{duration:1, repeatType:'reverse'}}

            />
          </svg>

        <Link
          href={"mailto:khanjabir909@gmail.com"}
          className={classes.myEmail}
        >
          khanjabir909@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
