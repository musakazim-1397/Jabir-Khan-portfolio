import classes from "./Story.module.css";

const Story = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <p style={{color:'black', fontSize: '11px'}}>&#47; 01</p>
        <p style={{color:'#464646', fontSize: '11px',marginLeft: '16px'}}>STORY</p>
      </div>
      <div className={classes.rightSection}>
        <h3 className={classes.heading}>A story of hardwork and perseverance.</h3>
        <p className={classes.para} style={{marginTop:'2rem'}}>
          Hi&#33; I&#39;m Jabir Khan. I have a strong passion for web development and
          machine learning. I specialize in Full Stack web development both
          frontend &#38; backend and my passion is all about building elegant
          and professional user interfaces and backed by a powerful backend API.
        </p>
        <p className={classes.para} style={{margin:'2rem 0'}}>
          I&#39;m a full-stack &#40;ReactJS & React-Native&#41; developer and
          Data Scientist &#40;Machine Learning engineer&#41; with over 3 years
          of field experience. As a full stack ReactJS developer, I have a
          strong background in developing and deploying web applications using
          ReactJS, NextJS and related technologies. My skills include
          proficiency in ReactJS, NextJS, Redux, Node.js, and Express.js, as
          well as experience with MongoDB and SQL databases.
        </p>
        <p className={classes.para}>
          As a Data scientist and Machine-learning engineer, I have a strong
          background in analyzing data and building predictive models. My skills
          include proficiency in programming languages such as Python and
          javascript, as well as experience with machine learning libraries such
          as scikit-learn, TensorFlow, and Keras. I also have experience with
          big data technologies such as Hadoop and Spark.
        </p>
      </div>
    </div>
  );
};

export default Story;
