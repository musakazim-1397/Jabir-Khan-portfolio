import classes from './InfiniteScroll.module.css';
import Marquee from "react-fast-marquee";

const InfiniteScroll1 = () => {
  return (
    <div className={classes.container}>
        <div className={classes.line1}>
     <Marquee direction='right' gradient={false} speed={120} >
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>NextJS</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>ReactJS</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>NodeJS</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>MERN Stack</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>ExpressJS</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>MongoDB</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>User Interface</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>MySQL</h1>
     </Marquee>
     </div>
     <div className={classes.line2}>
     <Marquee direction='left' gradient={false} speed={100} >
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Machine Learning</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Data Science</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Deep Learning</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Big Data</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>TensorFlow</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Keras</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>PyTorch</h1>
        <h1 style={{fontSize:'3rem', paddingRight:'1rem'}} className={classes.textStyle}>Scikit Learn</h1>
     </Marquee>
     </div>
    </div>
  )
}

export default InfiniteScroll1