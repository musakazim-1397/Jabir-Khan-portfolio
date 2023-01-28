import classes from "./WhatiUse.module.css";

const WhatiUse = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <p style={{ color: "black", fontSize: "11px" }}>&#47; 03</p>
        <p style={{ color: "#464646", fontSize: "11px", marginLeft: "16px" }}>
          THE TOOLS
        </p>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.moveHeadingParaToRight}>
          <h3 className={classes.heading}>What i use.</h3>
          <p className={classes.para} style={{ margin: "2rem 0" }}>
            I use a number of tools that make design and development much
            easier. I prefer to use NextJS over MERN Stack because of alot of
            convenience offered by NextJS than using plain ReactJs and NodeJS
            but still I use them interchangeably for doing all the process. For
            wireframing alone, any graphic design tool can make the job done
            either it is low fidelity or high fidelity wireframe. For machine
            learning, I use different tools specific to the development of the
            application. Listed below are the tools and technologies that I use
            and I&#39;m knowledgeable with.
          </p>
        </div>
        <div className={classes.gridContainer}>
          <p className={classes.heading1}>Creative Design</p>
          <p className={classes.heading2}>Web Development</p>
          <p className={classes.heading3}>
            Machine Learning &#8226; Data Science
          </p>

          <p className={classes.design1} style={{ color: "#474747" }}>
            Figma
          </p>
          <p className={classes.design2} style={{ color: "#474747" }}>
            Adobe Photoshop
          </p>
          <p className={classes.design3} style={{ color: "#474747" }}>
            Adobe Illustrator
          </p>
          <p className={classes.design4} style={{ color: "#474747" }}>
            Adobe InDesign
          </p>
          <p className={classes.design5} style={{ color: "#474747" }}>
            Adobe After Effects
          </p>
          <p className={classes.design6} style={{ color: "#474747" }}>
            Adobe XD
          </p>

          <p className={classes.web1} style={{ color: "#474747" }}>
            HTML5
          </p>
          <p className={classes.web2} style={{ color: "#474747" }}>
            CSS3
          </p>
          <p className={classes.web3} style={{ color: "#474747" }}>
            JavaScript
          </p>
          <p className={classes.web4} style={{ color: "#474747" }}>
            TypeScript
          </p>
          <p className={classes.web5} style={{ color: "#474747" }}>
            React JS
          </p>
          <p className={classes.web6} style={{ color: "#474747" }}>
            Node JS
          </p>

          <p className={classes.web21} style={{ color: "#474747" }}>
            Express JS
          </p>
          <p className={classes.web22} style={{ color: "#474747" }}>
            React Native
          </p>
          <p className={classes.web23} style={{ color: "#474747" }}>
            Redux
          </p>
          <p className={classes.web24} style={{ color: "#474747" }}>
            Firebase
          </p>
          <p className={classes.web25} style={{ color: "#474747" }}>
            GraphQL
          </p>
          <p className={classes.web26} style={{ color: "#474747" }}>
            MongoDB
          </p>

          <p className={classes.web31} style={{ color: "#474747" }}>
            Git
          </p>
          <p className={classes.web32} style={{ color: "#474747" }}>
            npm
          </p>
          <p className={classes.web33} style={{ color: "#474747" }}>
            yarn
          </p>
          <p className={classes.web34} style={{ color: "#474747" }}>
            Gulp
          </p>
          <p className={classes.web35} style={{ color: "#474747" }}>
            Framer motion
          </p>
          <p className={classes.web36} style={{ color: "#474747" }}>
            Web pack
          </p>

          <p className={classes.ml1} style={{ color: "#474747" }}>
            Machine Learning
          </p>
          <p className={classes.ml2} style={{ color: "#474747" }}>
            Deep Learning
          </p>
          <p className={classes.ml3} style={{ color: "#474747" }}>
            Data Science
          </p>
          <p className={classes.ml4} style={{ color: "#474747" }}>
            Big Data
          </p>
          <p className={classes.ml5} style={{ color: "#474747" }}>
            TensorFlow
          </p>
          <p className={classes.ml6} style={{ color: "#474747" }}>
            Keras
          </p>

          <p className={classes.ml21} style={{ color: "#474747" }}>
            PyTorch
          </p>
          <p className={classes.ml22} style={{ color: "#474747" }}>
            PySpark
          </p>
          <p className={classes.ml23} style={{ color: "#474747" }}>
            Scikit-Learn
          </p>
          <p className={classes.ml24} style={{ color: "#474747" }}>
            Pandas
          </p>
          <p className={classes.ml25} style={{ color: "#474747" }}>
            Numpy
          </p>
          <p className={classes.ml26} style={{ color: "#474747" }}>
            Matplotlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatiUse;
