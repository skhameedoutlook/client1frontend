import { Link } from "react-router-dom"
import { ThreeBarIcon } from "./threebaricon"
import { HomeNavLogo } from "./homenavlogo"

const HomeNavStyles = {
  height: '45px',
  lineHeight: '45px',
}

export const SideNav = ({handleMenuOpen}) => {
  return <div className="fixed h-screen bg-slate-100">
    <div className={`flex flex-col justify-between items-center`} style={HomeNavStyles}>
      <div className="flex items-center">
        <ThreeBarIcon handleMenuOpen={handleMenuOpen} />
        <HomeNavLogo />
      </div>
      <div className="flex flex-col w-full justify-stretch items-stretch bg-slate-50 h-full">
        <Link to='Platform' className="bg-slate-100 hover:bg-slate-200">Platform</Link>
        <Link to='Sequencing' className="bg-slate-100 hover:bg-slate-200">Sequencing</Link>
        <Link to='Solutions' className="bg-slate-100 hover:bg-slate-200">Solutions</Link>
        <Link to='Company' className="bg-slate-100 hover:bg-slate-200">Company</Link>
        <Link to='Resources' className="bg-slate-100 hover:bg-slate-200">Resources</Link>
      </div>
    </div>
  </div>
}
