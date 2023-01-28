import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.introPara}>
        A passionate full-stack developer and machine learning engineer with
        over 3 years of experience in building full-stack applications using NextJS 
        and MERN Stack.
      </h1>
      <div className={classes.imageSection}>
        <img className={classes.profileImage} src={"assets/profile.jpg"} />
      </div>
    </div>
  );
};

export default Intro;
