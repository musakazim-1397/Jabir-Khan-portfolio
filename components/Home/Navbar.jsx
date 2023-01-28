import Link from 'next/link';
import classes from './Navbar.module.css';
import { useRouter } from "next/router";
import {RiMenu4Line} from 'react-icons/ri'
import {TfiClose} from 'react-icons/tfi'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter();
  return (
    <div className={classes.navbarContainer}>
        <div className={classes.logoContainer}>
            <Link href={'/home'} style={{cursor:'pointer'}}>
            <img src={'assets/logo.png'} alt={'Logo'}/>
            </Link>
        </div>
            <ul className={classes.navbarLinksContainer}>
                <li className={`${classes.navlink} ${router.pathname=='/home'?classes.active:""}`}>
                    <Link href={'/home'} className={classes.nnLink}>HOME</Link>
                    <div className={`${router.pathname=='/home'?classes.activeDot:""}`}/>
                </li>
                <li className={`${classes.navlink} ${router.pathname=='/about'?classes.active:""}`}>
                    <Link href={'/about'} className={classes.nnLink}>ABOUT</Link>
                    <div className={`${router.pathname=='/about'?classes.activeDot:""}`}/>
                </li>
                <li className={`${classes.navlink} ${router.pathname=='/works'?classes.active:""}`}>
                    <Link href={'/works'} className={classes.nnLink}>WORKS</Link>
                    <div className={`${router.pathname=='/works'?classes.activeDot:""}`}/>
                </li>
                <li className={`${classes.navlink} ${router.pathname=='/contact'?classes.active:""}`}>
                    <Link href={'/contact'} className={classes.nnLink}>CONTACT</Link>
                    <div className={`${router.pathname=='/contact'?classes.activeDot:""}`}/>
                </li>
            </ul>
            <div className={classes.menuContainer}>
                <RiMenu4Line size={30} onClick={()=>setOpenMenu(true)}/>
            </div>
            <AnimatePresence>
            {openMenu && 
                <motion.div className={classes.menu} 
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x:0 }}
                    exit={{ opacity: 0, x:'-100' }}
                    transition={{type:'tween', duration:1.5}}
                >
                <ul className={classes.menuLinksContainer}>
                    <li className={`${classes.menulink} ${router.pathname=='/home'?classes.activeMenu:""}`}>
                        <Link href={'/home'} className={classes.menL}>HOME</Link>
                        <h1 className={classes.hiddenNumber}>1</h1>
                    </li>
                    <li className={`${classes.menulink} ${router.pathname=='/about'?classes.activeMenu:""}`}>
                        <Link href={'/about'} className={classes.menL}>ABOUT</Link>
                        <h1 className={classes.hiddenNumber}>2</h1>
                    </li>
                    <li className={`${classes.menulink} ${router.pathname=='/works'?classes.activeMenu:""}`}>
                        <Link href={'/works'} className={classes.menL}>WORKS</Link>
                        <h1 className={classes.hiddenNumber}>3</h1>
                    </li>
                    <li className={`${classes.menulink} ${router.pathname=='/contact'?classes.activeMenu:""}`}>
                        <Link href={'/contact'} className={classes.menL}>CONTACT</Link>
                        <h1 className={classes.hiddenNumber}>4</h1>
                    </li>
                </ul>
                <div className={classes.menuCloseContainer}>
                    <TfiClose size={30} onClick={()=>setOpenMenu(false)}/>
                </div>  
            </motion.div>}
            </AnimatePresence>
    </div>
  )
}

export default Navbar