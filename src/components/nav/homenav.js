import { useState, useEffect } from "react"
import { ThreeBarIcon } from "./threebaricon"
import { HomeNavLogo } from "./homenavlogo"
import { HomeNavLinksHorizontal } from "./homenavlinkshorizontal"
import { HomeNavUsers } from "./homenavusers"

export const HomeNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <div className="bg-slate-100 p-3 h-fit">
      {
        isMobile ? (
          <div className="flex justify-between place-items-center">
            <div className="flex">
              <ThreeBarIcon />
              <HomeNavLogo />
            </div>
            <HomeNavUsers />
          </div>
        ) : (
          <div className="flex justify-between place-items-center">
            <HomeNavLogo />
            <HomeNavLinksHorizontal />
            <HomeNavUsers />
          </div>
        )
      }
    </div>
  )
}
