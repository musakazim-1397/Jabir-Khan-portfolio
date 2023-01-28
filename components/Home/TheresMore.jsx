import classes from './TheresMore.module.css';
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const TheresMore = () => {
  return (
    <div className={classes.container}>
        <div className={classes.leftSide}>
            <p className={classes.para}>THERE&#39;S MORE</p>
            <Link href={'/works'} className={classes.heading}>
                <div style={{marginRight:'10px'}}>view all projects</div>
                <BsArrowRight size={30}/></Link>
        </div>
    </div>
  )
}

export default TheresMore