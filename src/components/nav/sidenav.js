import { Link } from "react-router-dom"
import { ThreeBarIcon } from "./threebaricon"
import { HomeNavLogo } from "./homenavlogo"

const HomeNavStyles = {
  height: '45px',
}

export const SideNav = ({handleMenuOpen}) => {
  return <div className="fixed h-screen">
    <div className={`flex flex-col justify-between items-center`} style={HomeNavStyles}>
      <div className="flex items-center">
        <ThreeBarIcon handleMenuOpen={handleMenuOpen} />
        <HomeNavLogo />
      </div>
      <div className="flex flex-col justify-stretch items-center bg-slate-50 h-full">
        <Link to='Platform'>Platform</Link>
        <Link to='Sequencing'>Sequencing</Link>
        <Link to='Solutions'>Solutions</Link>
        <Link to='Company'>Company</Link>
        <Link to='Resources'>Resources</Link>
      </div>
    </div>
  </div>
}
