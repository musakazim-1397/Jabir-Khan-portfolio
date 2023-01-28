import Link from 'next/link';
import classes from './Footer.module.css';
import {BsArrowRight,BsGithub} from 'react-icons/bs'
import {TbBrandLinkedin} from 'react-icons/tb'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.imageContainer}>
            <img src={'assets/footer.png'}/>
        </div>
        <p className={classes.freelanceWork}>I'm available for freelance work.</p>
        <Link href={'/contact'} className={classes.seeMyWork}>
            <div className={classes.seeMyWorkCircle} />
            <div style={{ marginRight: "6px" }}>SAY HELLO</div>
            <BsArrowRight />
        </Link>
        <div className={classes.links}>
            <span style={{fontSize:'17px'}}>&#169; 2023 Jabir Khan</span>
            <Link href={"https://www.linkedin.com/in/jabir-khan-302717251/"}><TbBrandLinkedin size={25}/></Link>
            <Link href={"https://github.com/musakazim-1397"}><BsGithub color={'white'} size={25}/></Link>
        </div>
        <div className={classes.circles}>
            <div className={classes.circleOne}>
                <div className={classes.circleTwo}></div>
            </div>
        </div>
    </div>
  )
}

export default Footer