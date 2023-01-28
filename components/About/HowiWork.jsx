import React from "react";
import classes from "./HowiWork.module.css";

const HowiWork = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <p style={{ color: "black", fontSize: "11px" }}>&#47; 02</p>
        <p style={{ color: "#464646", fontSize: "11px", marginLeft: "16px" }}>
          THE PROCESS
        </p>
      </div>
      <div className={classes.rightSection}>
        <h3 className={classes.heading}>How i work.</h3>
        <p className={classes.para} style={{ margin: "2rem 0" }}>
          When I start working on a project, I try to get all the information
          and data from my client that are relevant to the project such as
          goals, demographics and preferred aesthetics. After this, I start
          doing the research about the industry, competition, trends and other
          factors that are necessary for the development of the project. After I
          have all the data that I need, my next step is to work on the
          wireframe, then in case of web development first I prototype it. After
          the prototype is finished and the wireframes are finalized and
          approved, this is where I start doing the visual designs using various
          Adobe tools for processing images, creating vector graphics, and
          building the actual visual design. After the visual designs are
          approved, I start on coding and transforming the designs into actual
          code, while in case of machine learning task it always comes down to
          using different models, tweaking different hyperparameters to get the
          required mean-squared-error if it is a regression task while
          precision, accuracy, and recall score in the classification-report or
          confusion matrix for classification tasks.
        </p>
      </div>
    </div>
  );
};

export default HowiWork;
