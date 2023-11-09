import { Link } from "react-router-dom"

const Height45 = {
  height: '45px',
  lineHeight: '45px',
}

export const HomeNavItem = ({ linkName }) => {
  return <Link to={ linkName } style={Height45}>{ linkName }</Link>
}
