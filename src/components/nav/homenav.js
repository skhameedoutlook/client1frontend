import { useState, useEffect } from "react"
import { ThreeBarIcon } from "./threebaricon"
import { HomeNavLogo } from "./homenavlogo"
import { HomeNavLinksHorizontal } from "./homenavlinkshorizontal"
import { HomeNavUsers } from "./homenavusers"
import { SideNav } from "./sidenav"

const HomeNavStyles = {
  height: '45px',
}

export const HomeNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-slate-100">
      { isMobile && isMenuOpen ? <SideNav handleMenuOpen={() => {setIsMenuOpen(current => !current)}} /> : null }
      {
        isMobile ? (
          <div className="flex justify-between items-center" style={HomeNavStyles}>
            <div className="flex items-center">
              <ThreeBarIcon handleMenuOpen={() => {setIsMenuOpen(current => !current)}} />
              <HomeNavLogo />
            </div>
            <HomeNavUsers />
          </div>
        ) : (
          <div className="flex justify-between items-center" style={HomeNavStyles}>
            <HomeNavLogo />
            <HomeNavLinksHorizontal />
            <HomeNavUsers />
          </div>
        )
      }
    </div>
  )
}
