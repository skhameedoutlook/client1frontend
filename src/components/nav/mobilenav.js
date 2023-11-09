import { Link } from "react-router-dom";
import { HomeNavItem } from "./homenavitem";
import { ThreeBarIcon } from "./threebaricon";
import './mobilenavitem.css'
import { HomeNavLogo } from "./homenavlogo";
import './mobilenav.css'

const MobileNavItemStyles = {
  height: '40px',
  borderColor: '#1E293B',
  padding: '10px',
  margin: '0.25rem'
}

const SlideMenuStyle = {
  transition: 'width 0.3s ease-in-out',
}

export const MobileNav = ({ isMobile, isMenuOpen }) => {
    return (
      <div  className={`mobile-nav bg-slate-200 absolute flex flex-col h-screen justify-start items-stretch font-bold w-2/6 bg-orange-600 ${ isMobile && isMenuOpen ? 'open':'' }`}>
        <Link to='Platform' className={`mobile-nav-item ${isMobile && !isMenuOpen ? 'hidden' : 'visible'}`}>Platform</Link> 
        <Link to='Sequencing' className={`mobile-nav-item ${isMobile && !isMenuOpen ? 'hidden' : 'visible'}`}>Sequencing</Link>
        <Link to='Solutions' className={`mobile-nav-item ${isMobile && !isMenuOpen ? 'hidden' : 'visible'}`}>Solutions</Link>
        <Link to='Company' className={`mobile-nav-item ${isMobile && !isMenuOpen ? 'hidden' : 'visible'}`} >Company</Link>
        <Link to='Resources' className={`mobile-nav-item ${isMobile && !isMenuOpen ? 'hidden' : 'visible'}`} >Resources</Link>
      </div>
    );
}
