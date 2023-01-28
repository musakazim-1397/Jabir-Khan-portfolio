import classes from './HeroSection.module.css'
import {SlArrowDown} from 'react-icons/sl'

const HeroSection = () => {
  return (
    <div className={classes.container}>
        <div className={classes.headingAndBackgroundContainer}>
        <h1 className={classes.heading}>My Works.</h1>
        </div>
        <div className={classes.arrowDown}>
            <SlArrowDown size={50}/>
        </div>
    </div>
  )
}

export default HeroSection